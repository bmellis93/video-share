"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export type GalleryDraft = {
  name: string;
  description: string;
};

export default function GalleryCreateModal({
  open,
  onClose,
  onCreate,
  onCreateAndOpen,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (draft: GalleryDraft) => void;
  onCreateAndOpen: (draft: GalleryDraft) => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!open) return;
    setName("");
    setDescription("");
  }, [open]);

  if (!open) return null;

  const canSubmit = name.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl transition will-change-transform hover:-translate-y-0.5 hover:border-neutral-700 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] focus-within:border-neutral-700">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <div className="text-sm font-semibold text-white">Create gallery</div>
            <div className="text-xs text-neutral-400">Add a name and optional description.</div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-neutral-300 transition hover:bg-neutral-900 hover:text-white active:scale-[0.98]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 pb-5 space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-neutral-300">Gallery name</label>
            <input
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
              placeholder="e.g. Chrissy + Stephen"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-neutral-300">Description</label>
            <textarea
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
              placeholder="Optional…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => onCreate({ name: name.trim(), description: description.trim() })}
              disabled={!canSubmit}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-neutral-200 transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-neutral-900"
            >
              Create
            </button>

            <button
              type="button"
              onClick={() => onCreateAndOpen({ name: name.trim(), description: description.trim() })}
              disabled={!canSubmit}
              className="rounded-2xl bg-white px-4 py-2.5 text-xs font-semibold text-neutral-900 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
            >
              Create &amp; open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}