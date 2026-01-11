// app/(share)/r/[token]/compare/[videoId]/page.tsx
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireValidShareToken } from "@/lib/share-auth";
import { parseAllowedIds, parseStacks } from "@/lib/share/shareLinkUtils";
import { getLatestIdForVideo, getStackIdsForVideo } from "@/lib/share/stackView";
import VideoCompareScreen from "@/components/review/VideoCompareScreen";

export const runtime = "nodejs";

type Props = {
  params: Promise<{ token: string; videoId: string }>;
};

function safeId(x: any) {
  return String(x || "").trim();
}

export default async function TokenVideoPage({ params }: Props) {
  const { token: rawToken, videoId: rawVideoId } = await params;

  const token = String(rawToken || "").trim();
  const videoId = String(rawVideoId || "").trim();
  if (!token || !videoId) notFound();

  const res = await requireValidShareToken(token);
  if (!res.ok) notFound();

  const share = res.share;

  const allowed = parseAllowedIds(share);
  const stacks = parseStacks(share, allowed);

  if (!allowed.includes(videoId)) notFound();

  // redirect to latest in stack (same behavior as single view)
  const latestId = getLatestIdForVideo(videoId, stacks);
  if (latestId !== videoId) {
    redirect(`/r/${token}/compare/${latestId}`);
  }

  const versionIds = getStackIdsForVideo(videoId, stacks);
  const stackIds = versionIds.length ? versionIds : [videoId];

  // Only fetch ids in this stack, AND still within allowed set
  const idsToFetch = stackIds.filter((id) => allowed.includes(id));

  const rows = await prisma.video.findMany({
    where: { id: { in: idsToFetch } },
    select: {
      id: true,
      playbackUrl: true,
      sourceUrl: true,
    },
  });

  // Prefer HLS playbackUrl; fallback to sourceUrl
  const viewSrcById = new Map(
    rows.map((r) => [r.id, r.playbackUrl ?? r.sourceUrl] as const)
  );

  // labels: v1/v2/v3… by stack order
  const versions = idsToFetch.map((id, idx) => ({
    id,
    label: `v${idx + 1}`,
    viewSrc: viewSrcById.get(id) ?? "",
  }));

  // default right = previous version if exists
  const leftDefault = versions[versions.length - 1]?.id || videoId;
  const rightDefault = versions[versions.length - 2]?.id || leftDefault;

  return (
    <VideoCompareScreen
      baseVideoId={videoId}
      versions={versions}
      defaultLeftId={leftDefault}
      defaultRightId={rightDefault}
    />
  );
}