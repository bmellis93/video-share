import GalleryDetailScreen from "@/components/owner/GalleryDetailScreen";

type Props = {
  params: { id: string };
};

export default function OwnerGalleryDetailPage({ params }: Props) {
  return <GalleryDetailScreen galleryId={params.id} />;
}