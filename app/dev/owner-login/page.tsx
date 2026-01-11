"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DevOwnerLoginPage() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function login() {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/dev/owner/login", { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Login failed");
      setMsg(`Logged in as ${data.role} for org ${data.orgId}`);
      router.push("/owner/galleries");
      router.refresh();
    } catch (e: any) {
      setMsg(e?.message || "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-neutral-100 grid place-items-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
        <div className="text-lg font-semibold">Dev Owner Login</div>
        <div className="mt-1 text-sm text-neutral-400">
          Sets a dev-only owner session cookie.
        </div>

        <button
          type="button"
          onClick={login}
          disabled={busy}
          className="mt-4 w-full rounded-xl bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200 disabled:opacity-60"
        >
          {busy ? "Logging in…" : "Login as Dev Owner"}
        </button>

        {msg ? <div className="mt-3 text-xs text-neutral-300">{msg}</div> : null}
        <div className="mt-3 text-xs text-neutral-500">
          Make sure DEV_OWNER_ORG_ID + APP_JWT_SECRET are set in .env.local.
        </div>
      </div>
    </div>
  );
}