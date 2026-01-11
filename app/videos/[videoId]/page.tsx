import VideoReviewClient from "@/components/review/VideoReviewScreen";

export default function VideoPage({
  params,
}: {
  params: { videoId: string };
}) {
  return <VideoReviewClient videoId={params.videoId} />;
}