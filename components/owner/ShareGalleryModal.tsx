"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  galleryId: string;
};

export default function ShareGalleryModal({ open, onClose, galleryId }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    // Focus close button on open (nice for keyboard users)
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="share-gallery-title">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="absolute inset-x-0 top-12 mx-auto w-full max-w-lg px-4">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-900 p-4">
            <div id="share-gallery-title" className="text-sm font-semibold">
              Share Gallery
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-neutral-300 hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <div className="text-sm text-neutral-300">This is a placeholder. Next step is:</div>

            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1">
              <li>Search/select GHL contacts</li>
              <li>Pick delivery method</li>
              <li>Write message with share-link token placeholder</li>
              <li>Create + send + remember recipients</li>
            </ul>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-3 text-xs text-neutral-400">
              Gallery ID: <span className="text-neutral-200">{galleryId}</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-neutral-900 p-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}