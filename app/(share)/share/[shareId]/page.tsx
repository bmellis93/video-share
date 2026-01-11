import ClientGalleryScreen from "@/components/share/ClientGalleryScreen";
import { fetchShare } from "@/lib/share/fetchShare";
import { notFound } from "next/navigation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Props = {
  params: { shareId: string };
};

export default async function ShareGalleryPage({ params }: Props) {
  const share = await fetchShare(params.shareId);
  if (!share) notFound();

  return (
    <ClientGalleryScreen
      shareId={share.shareId}
      title={share.title}
      videos={share.videos}
      stacks={share.stacks}
      permissions={share.permissions}
    />
  );
}