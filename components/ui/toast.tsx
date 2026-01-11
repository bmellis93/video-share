"use client";

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

type ToastKind = "info" | "success" | "error";

export type Toast = {
  id: string;
  kind: ToastKind;
  title?: string;
  message: string;
  ttlMs?: number;
};

type ToastContextValue = {
  toast: (t: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timers = timersRef.current;
    const timer = timers.get(id);
    if (timer) clearTimeout(timer);
    timers.delete(id);
  }, []);

  const toast = useCallback((t: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    const ttlMs = typeof t.ttlMs === "number" ? t.ttlMs : 3500;

    setToasts((prev) => [...prev, { ...t, id, ttlMs }]);

    const timer = setTimeout(() => remove(id), ttlMs);
    timersRef.current.set(id, timer);
  }, [remove]);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Toast stack */}
      <div className="fixed right-4 top-4 z-[100] flex w-[360px] max-w-[calc(100vw-2rem)] flex-col gap-2">
        {toasts.map((t) => {
          const cls =
            t.kind === "error"
              ? "border-red-500/30 bg-red-500/10 text-red-100"
              : t.kind === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
              : "border-neutral-700 bg-neutral-950 text-neutral-100";

          return (
            <div
              key={t.id}
              className={`rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur ${cls}`}
              role="status"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  {t.title ? <div className="text-sm font-semibold">{t.title}</div> : null}
                  <div className="text-sm text-neutral-200/90">{t.message}</div>
                </div>

                <button
                  type="button"
                  onClick={() => remove(t.id)}
                  className="shrink-0 rounded-lg px-2 py-1 text-xs text-neutral-200 hover:bg-white/10"
                  aria-label="Dismiss"
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}