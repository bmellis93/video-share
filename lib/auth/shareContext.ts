// lib/auth/shareContext.ts
import "server-only";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export type ShareContext =
  | {
      kind: "share";
      token: string;
      orgId: string;
      videoIds: string[];
      galleryId?: string | null;
      allowDownload?: boolean;
      allowComments?: boolean;
      view?: "VIEW_ONLY" | "REVIEW_DOWNLOAD";
    }
  | null;

/**
 * Look for a share token in:
 * - ?token=...
 * - x-share-token header
 * - rm_share_token cookie (optional)
 */
function getTokenFromRequest(req: NextRequest) {
  const fromQuery = req.nextUrl.searchParams.get("token");
  if (fromQuery) return fromQuery;

  const fromHeader = req.headers.get("x-share-token");
  if (fromHeader) return fromHeader;

  const fromCookie = req.cookies.get("rm_share_token")?.value;
  if (fromCookie) return fromCookie;

  return null;
}

function parseAllowedVideoIds(link: {
  videoId: string | null;
  allowedVideoIdsJson: string | null;
}) {
  // 1) legacy single-video token
  if (link.videoId) return [link.videoId];

  // 2) gallery / multi-video token
  if (!link.allowedVideoIdsJson) return [];

  try {
    const arr = JSON.parse(link.allowedVideoIdsJson);
    if (!Array.isArray(arr)) return [];
    return arr.filter((x) => typeof x === "string" && x.trim().length > 0);
  } catch {
    return [];
  }
}

export async function getShareContextFromRequest(req: NextRequest): Promise<ShareContext> {
  const token = getTokenFromRequest(req);
  if (!token) return null;

  const link = await prisma.shareLink.findFirst({
    where: { token },
    select: {
      token: true,
      orgId: true,
      videoId: true,
      galleryId: true,
      allowedVideoIdsJson: true,
      allowDownload: true,
      allowComments: true,
      view: true,
    },
  });

  if (!link) return null;

  const videoIds = parseAllowedVideoIds(link);
  if (videoIds.length === 0) return null;

  return {
    kind: "share",
    token: link.token,
    orgId: link.orgId,
    videoIds,
    galleryId: link.galleryId ?? null,
    allowDownload: Boolean(link.allowDownload),
    allowComments: Boolean(link.allowComments),
    view: link.view === "VIEW_ONLY" ? "VIEW_ONLY" : "REVIEW_DOWNLOAD",
  };
}