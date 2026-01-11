// app/(owner)/owner/galleries/page.tsx
import OwnerGalleriesClient, {
  type OwnerGalleryListItem,
} from "@/components/owner/OwnerGalleriesClient";
import { prisma } from "@/lib/prisma";
import { requireOwnerContext } from "@/lib/auth/ownerSession";

export const runtime = "nodejs";

function muxThumbUrl(playbackId: string, timeSeconds: number) {
  // You said #1 is done; this is the standard shape.
  return `https://images.mux.com/${playbackId}/thumbnail.jpg?time=${timeSeconds}`;
}

export default async function OwnerGalleriesPage() {
  const owner = await requireOwnerContext();
  
  const galleries = await prisma.gallery.findMany({
    where: { 
      orgId: owner.orgId,
      deletedAt: null,
     },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      videos: {
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        take: 4,
        select: {
          video: {
            select: {
              id: true,
              title: true,
              thumbnailUrl: true,
              muxPlaybackId: true,
              playbackUrl: true,
            },
          },
        },
      },
    },
  });

  const initialGalleries: OwnerGalleryListItem[] = galleries.map((g) => {
    const thumbs = g.videos
      .map(({ video }) => {
        // Prefer an explicit thumbnailUrl if you have one
        if (video.thumbnailUrl) return { url: video.thumbnailUrl, alt: video.title };

        // Otherwise fall back to Mux Image API if playbackId exists
        if (video.muxPlaybackId) return { url: muxThumbUrl(video.muxPlaybackId, 5), alt: video.title };

        return null;
      })
      .filter(Boolean)
      .slice(0, 4) as { url: string; alt?: string }[];

    return {
      id: g.id,
      name: g.title ?? "Untitled gallery",
      description: null,
      createdAt: g.createdAt.toISOString(),
      updatedAt: g.updatedAt.toISOString(),
      lastClientCommentedAt: null,
      thumbs,
    };
  });

  return <OwnerGalleriesClient initialGalleries={initialGalleries} />;
}