// components/share/ClientGalleryScreen.tsx
"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Film } from "lucide-react";

import {
  buildChildToParent,
  latestIdForCard,
  type StackMap as ShareStackMap,
} from "@/components/domain/stacks";

export type ShareGalleryVideo = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  thumbnailUrl: string | null;
};

export type SharePermissions = {
  view: "VIEW_ONLY" | "REVIEW_DOWNLOAD";
  allowComments: boolean;
  allowDownload: boolean;
};

type Props = {
  shareId: string;
  title: string;
  videos: ShareGalleryVideo[];
  permissions: SharePermissions;
  stacks?: ShareStackMap;

  token?: string;

  // ✅ optional: let parent control open behavior
  onOpenVideo?: (cardId: string) => void;
};

export default function ClientGalleryScreen({
  shareId,
  title,
  videos,
  stacks = {},
  permissions,
  token,
  onOpenVideo,
}: Props) {
  const router = useRouter();

  const childToParent = useMemo(() => buildChildToParent(stacks), [stacks]);

  const visibleVideos = useMemo(() => {
    const hidden = new Set(childToParent.keys());
    return videos.filter((v) => !hidden.has(v.id));
  }, [videos, childToParent]);

  function openVideo(cardId: string) {
    // ✅ if parent provided an open handler, use it (keeps “latest” centralized there)
    if (onOpenVideo) {
      onOpenVideo(cardId);
      return;
    }

    const openId = latestIdForCard(cardId, stacks, childToParent);

    if (token) {
      router.push(`/r/${token}/videos/${openId}`);
      return;
    }

    router.push(`/share/${shareId}/videos/${openId}`);
  }

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-neutral-100">
      <div className="sticky top-0 z-10 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-4 py-4">
          <div className="min-w-0">
            <div className="truncate text-base font-semibold text-white">{title}</div>
            <div className="mt-1 text-sm text-neutral-400">
              {permissions.view === "VIEW_ONLY" ? "View only" : "Review & download"}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-6">
        {visibleVideos.length === 0 ? (
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 ring-1 ring-neutral-800">
                <Film className="h-5 w-5 text-neutral-200" />
              </div>
              <div>
                <div className="text-sm font-semibold">No videos available</div>
                <div className="text-sm text-neutral-400">
                  This link may not have any videos yet.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVideos.map((v) => {
              const isStackParent = Boolean(stacks[v.id]?.length && stacks[v.id].length > 1);
              const stackCount = stacks[v.id]?.length ?? 1;

              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => openVideo(v.id)}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-900/20 transition text-left"
                >
                  {isStackParent && (
                    <div className="absolute left-3 top-3 z-10 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-200">
                      Latest of {stackCount}
                    </div>
                  )}

                  <div className="aspect-video w-full bg-neutral-950">
                    {v.thumbnailUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={v.thumbnailUrl}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-xs text-neutral-400">
                        No thumbnail
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="truncate text-sm font-semibold text-white">{v.name}</div>
                    <div className="mt-1 truncate text-sm text-neutral-400">
                      {v.description || "—"}
                    </div>
                    <div className="mt-3 text-xs text-neutral-500">
                      Created {new Date(v.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}