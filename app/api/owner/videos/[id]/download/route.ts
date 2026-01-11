import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signR2GetUrl } from "@/lib/r2Signed";
import { requireOwnerContext } from "@/lib/auth/ownerSession";
import { getShareContextFromRequest } from "@/lib/auth/shareContext"; // token helper

export const runtime = "nodejs";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // ✅ Owner auth (Phase 4+ can add token access too)
  const owner = await requireOwnerContext();

  // -----------------------------
  // 1) Fetch video + originalKey
  // -----------------------------
  const video = await prisma.video.findFirst({
    where: { id: id, orgId: owner.orgId },
    select: {
      id: true,
      orgId: true,
      originalKey: true,
    },
  });

  if (!video || !video.originalKey) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  // -----------------------------
  // 2) Permission check
  // -----------------------------
  let allowed = false;

  // Owner access
  try {
    const owner = await requireOwnerContext();
    if (owner.orgId === video.orgId) {
      allowed = true;
    }
  } catch {
    // not owner, fall through
  }

  // Token access (only if not owner)
  if (!allowed) {
    const share = await getShareContextFromRequest(req);
    if (share && share.orgId === video.orgId && share.videoIds.includes(id)) {
      allowed = true;
    }
  }

  if (!allowed) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // -----------------------------
  // 3) Signed R2 GET + redirect
  // -----------------------------
  const signedUrl = await signR2GetUrl(
    video.originalKey,
    60 // seconds (short-lived)
  );

  return NextResponse.redirect(signedUrl);
}