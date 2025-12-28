import { notFound, redirect } from "next/navigation";
import VideoReviewScreen from "@/components/review/VideoReviewScreen";
import { fetchShare } from "@/lib/share/fetchShare";
import { buildChildToParent, latestIdForCard } from "@/components/domain/stacks";

type Props = {
  params: { shareId: string; videoId: string };
};

export default async function ClientVideoPage({ params }: Props) {
  const share = await fetchShare(params.shareId);
  if (!share) notFound();

  // ✅ hard block: video not allowed for this share link
  if (!share.allowedVideoIds.includes(params.videoId)) {
    notFound();
  }

  // ✅ redirect parent/child → latest version
  const childToParent = buildChildToParent(share.stacks);
  const latestId = latestIdForCard(params.videoId, share.stacks, childToParent);

  if (latestId !== params.videoId) {
    redirect(`/share/${params.shareId}/videos/${latestId}`);
  }

  return (
    <VideoReviewScreen
      mode="client"
      videoId={params.videoId}
      permissions={{
        allowComments: share.permissions.allowComments,
        allowDownload: share.permissions.allowDownload,
      }}
    />
  );
}