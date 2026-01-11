import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getLatestIdForVideo, getStackIdsForVideo } from "@/lib/share/stackView";
import VideoCompareScreen from "@/components/review/VideoCompareScreen";
import { requireOwnerContext } from "@/lib/auth/ownerSession";

export const runtime = "nodejs";

type Props = {
  params: { id: string; videoId: string };
};

function safeParseStacks(stacksJson: string | null | undefined): Record<string, string[]> {
  if (!stacksJson) return {};
  try {
    const obj = JSON.parse(stacksJson);
    return obj && typeof obj === "object" ? (obj as Record<string, string[]>) : {};
  } catch {
    return {};
  }
}

export default async function OwnerComparePage({ params }: Props) {
  const owner = await requireOwnerContext();
  const galleryId = String(params.id || "").trim();
  const videoId = String(params.videoId || "").trim();
  if (!galleryId || !videoId) notFound();

  const gallery = await prisma.gallery.findFirst({
    where: { id: galleryId, orgId: owner.orgId },
    select: {
      id: true,
      title: true,
      stacksJson: true,
      videos: {
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        select: { video: { select: { id: true, playbackUrl: true, sourceUrl: true } } }
      },
    },
  });

  if (!gallery) notFound();

  const stacks = safeParseStacks(gallery.stacksJson);
  const all = gallery.videos.map((gv) => gv.video);
  const allowed = new Set(all.map((v) => v.id));

  if (!allowed.has(videoId)) notFound();

  const latestId = getLatestIdForVideo(videoId, stacks);
  if (latestId !== videoId) {
    redirect(`/owner/galleries/${galleryId}/compare/${latestId}`);
  }

  const versionIds = getStackIdsForVideo(videoId, stacks);
  const stackIds = versionIds.length ? versionIds : [videoId];
  const idsToUse = stackIds.filter((id) => allowed.has(id));

  const viewSrcById = new Map(
    all.map((v) => [v.id, v.playbackUrl ?? v.sourceUrl])
  );

  const versions = idsToUse.map((id) => ({
    id,
    label: `v${stackIds.indexOf(id) + 1}`,
    viewSrc: viewSrcById.get(id) ?? "",
  }));

  // Left = previous, Right = newest
  const newest = versions[versions.length - 1]?.id || videoId;
  const previous = versions[versions.length - 2]?.id || newest;

  const leftDefault = previous;
  const rightDefault = newest;

  return (
    <VideoCompareScreen
      baseVideoId={videoId}
      versions={versions}
      defaultLeftId={leftDefault}
      defaultRightId={rightDefault}
    />
  );
}