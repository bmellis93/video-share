"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Folder } from "lucide-react";
import GalleryCreateModal from "@/components/owner/GalleryCreateModal";
import GallerySortMenu, { GallerySort } from "@/components/owner/GallerySortMenu";
import { usePersistedState } from "@/components/owner/hooks/usePersistedState";

type Gallery = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  lastClientCommentedAt?: string | null;
};

// temp mock data (swap for DB later)
const MOCK: Gallery[] = [
  {
    id: "g1",
    name: "Chrissy + Stephen",
    description: "Trailer + ceremony + speeches",
    createdAt: "2025-12-10T18:10:00.000Z",
    updatedAt: "2025-12-20T15:22:00.000Z",
    lastClientCommentedAt: "2025-12-21T01:10:00.000Z",
  },
  {
    id: "g2",
    name: "The Lofton",
    description: "Venue promo draft versions",
    createdAt: "2025-11-02T12:00:00.000Z",
    updatedAt: "2025-12-05T16:30:00.000Z",
    lastClientCommentedAt: null,
  },
];

const SORT_KEY = "owner:galleriesSort";

export default function OwnerGalleriesPage() {
  const [createOpen, setCreateOpen] = useState(false);
  const [galleries, setGalleries] = useState<Gallery[]>(MOCK);

  const { value: sort, setValue: setSort } = usePersistedState<GallerySort>(SORT_KEY, {
    field: "UPDATED_AT",
    dir: "DESC",
  });

  const sorted = useMemo(() => {
    const dir = sort.dir === "ASC" ? 1 : -1;

    const byDate = (a?: string | null, b?: string | null) => {
      const ta = a ? new Date(a).getTime() : 0;
      const tb = b ? new Date(b).getTime() : 0;
      return (ta - tb) * dir;
    };

    const next = [...galleries];

    next.sort((a, b) => {
      if (sort.field === "CREATED_AT") return byDate(a.createdAt, b.createdAt);
      if (sort.field === "UPDATED_AT") return byDate(a.updatedAt, b.updatedAt);
      if (sort.field === "LAST_CLIENT_COMMENT")
        return byDate(a.lastClientCommentedAt, b.lastClientCommentedAt);
      // ALPHA
      const na = a.name.toLowerCase();
      const nb = b.name.toLowerCase();
      return na === nb ? 0 : na > nb ? 1 * dir : -1 * dir;
    });

    return next;
  }, [galleries, sort]);

  function createGallery(draft: { name: string; description: string }, openAfter: boolean) {
    const now = new Date().toISOString();
    const newGallery: Gallery = {
      id: `g_${Math.random().toString(16).slice(2)}`,
      name: draft.name,
      description: draft.description || "",
      createdAt: now,
      updatedAt: now,
      lastClientCommentedAt: null,
    };

    setGalleries((prev) => [newGallery, ...prev]);
    setCreateOpen(false);

    if (openAfter) {
      // for now just a link target you’ll build next
      window.location.href = `/owner/galleries/${newGallery.id}`;
    }
  }

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-neutral-100">
      <div className="mx-auto w-full max-w-6xl p-5">
        {/* Header row */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Galleries</div>
            <div className="text-sm text-neutral-400">
              Create galleries, upload videos, and send review links.
            </div>
          </div>

          <div className="flex items-center gap-2">
            <GallerySortMenu value={sort} onChange={setSort} />

            <button
              type="button"
              onClick={() => setCreateOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-200"
            >
              <Plus className="h-4 w-4" />
              Gallery
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((g) => (
            <Link
              key={g.id}
              href={`/owner/galleries/${g.id}`}
              className="group rounded-3xl border border-neutral-800 bg-neutral-950/40 p-4 hover:bg-neutral-900/40 hover:border-neutral-700 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
                  <Folder className="h-5 w-5 text-neutral-200" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-sm font-semibold text-white group-hover:text-white">
                  {g.name}
                </div>
                {g.description ? (
                  <div className="mt-1 line-clamp-2 text-xs text-neutral-400">
                    {g.description}
                  </div>
                ) : (
                  <div className="mt-1 text-xs text-neutral-500">No description</div>
                )}
              </div>

              <div className="mt-4 text-[11px] text-neutral-500">
                Created {new Date(g.createdAt).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <GalleryCreateModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={(draft) => createGallery(draft, false)}
        onCreateAndOpen={(draft) => createGallery(draft, true)}
      />
    </div>
  );
}