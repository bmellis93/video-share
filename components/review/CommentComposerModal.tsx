"use client";

import { Send, X } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;

  stampLabel: string; // formatted time like "01:23"

  body: string;
  onBodyChange: (next: string) => void;

  onSubmit: () => void;
  isPosting: boolean;

  error?: string | null;
  initials?: string; // "BE" for now
};

export default function CommentComposerModal({
  open,
  onClose,
  stampLabel,
  body,
  onBodyChange,
  onSubmit,
  isPosting,
  error,
  initials = "BE",
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => textareaRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  // ESC closes, Cmd/Ctrl+Enter sends (Enter alone = newline)
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") onSubmit();
    }
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, onSubmit]);

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-40">
      {/* Backdrop (ONLY over the video area container) */}
      <button
        type="button"
        className="absolute inset-0 bg-black/35"
        onClick={onClose}
        aria-label="Close comment modal"
      />

      {/* Composer (sits above controls) */}
      <div className="absolute inset-x-0 bottom-24 flex justify-center px-4">
        <div className="relative w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
          {/* Small X (no stroke, not overlapping content) */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-200"
            aria-label="Close"
            title="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {error && (
            <div className="mx-4 mt-4 rounded-xl border border-red-900/40 bg-red-950/30 p-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="flex gap-3 p-4 pt-5">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                {initials}
              </div>
            </div>

            {/* Composer */}
            <div className="min-w-0 flex-1">
              <textarea
                ref={textareaRef}
                className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                placeholder="Enter your comment"
                rows={3}
                value={body}
                onChange={(e) => onBodyChange(e.target.value)}
                disabled={isPosting}
              />

              {/* Bottom row: time + tip (left) + send icon (right) */}
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="rounded-full bg-red-950/60 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-900/50">
                    {stampLabel}
                  </div>

                  <div className="truncate text-xs text-neutral-500">
                    Tip: Press{" "}
                    <span className="text-neutral-300">Ctrl/⌘ + Enter</span> to send.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={isPosting || body.trim().length === 0}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-100 text-neutral-900 hover:bg-white disabled:opacity-50"
                  title="Send (Ctrl/⌘ + Enter)"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}