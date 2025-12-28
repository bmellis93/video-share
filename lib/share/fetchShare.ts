import type { StackMap } from "@/components/domain/stacks";
import type {
  ShareGalleryVideo,
  SharePermissions,
} from "@/components/share/ClientGalleryScreen";

export type SharePayload = {
  shareId: string;
  title: string;
  permissions: SharePermissions;
  allowedVideoIds: string[];
  videos: ShareGalleryVideo[];
  stacks: StackMap;
};

export async function fetchShare(shareId: string): Promise<SharePayload | null> {
  const videos: ShareGalleryVideo[] = [
    { id: "v1", name: "Trailer v1", description: "First pass.", createdAt: new Date().toISOString(), thumbnailUrl: null },
    { id: "v2", name: "Trailer v2", description: "Revisions.", createdAt: new Date().toISOString(), thumbnailUrl: null },
    { id: "v3", name: "Ceremony",  description: "Full edit.",  createdAt: new Date().toISOString(), thumbnailUrl: null },
  ];

  const stacks: StackMap = { v1: ["v1", "v2"] };

  const permissions: SharePermissions = {
    view: "REVIEW_DOWNLOAD",
    allowComments: true,
    allowDownload: true,
  };

  const allowedVideoIds = videos.map((v) => v.id);

  return { shareId, title: "Chrissy + Stephen (Client Gallery)", permissions, allowedVideoIds, videos, stacks };
}