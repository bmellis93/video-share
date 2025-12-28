import VideoReviewScreen from "@/components/review/VideoReviewScreen";

type Props = {
  params: { id: string; videoId: string };
};

export default function OwnerVideoReviewPage({ params }: Props) {
  return (
    <VideoReviewScreen
      mode="owner"
      videoId={params.videoId}
    />
  );
}