// app/video-review/layout.tsx
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {children}
    </div>
  );
}