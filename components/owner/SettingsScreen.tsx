"use client";

import ThemeToggle from "@/components/ThemeToggle"; // or wherever you put it
import { useEffect, useState } from "react";

type Props = { orgId: string };

export default function SettingsScreen({ orgId }: Props) {
  const [syncing, setSyncing] = useState(false);
  const [team, setTeam] = useState<any[]>([]);

  async function loadTeam() {
    const res = await fetch("/api/owner/team", { cache: "no-store" });
    const json = await res.json().catch(() => null);
    if (json?.ok) setTeam(json.team ?? []);
  }

  useEffect(() => {
    void loadTeam();
  }, []);

  async function syncFromGhl() {
    setSyncing(true);
    try {
      const res = await fetch("/api/owner/team/sync", { method: "POST" });
      await res.json().catch(() => null);
      await loadTeam();
    } finally {
      setSyncing(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-xl font-semibold text-white">Settings</h1>
      <p className="mt-1 text-sm text-neutral-400">Org: {orgId}</p>

      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4">
        <div className="text-sm font-semibold text-white">Appearance</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-neutral-300">Theme</div>
          <ThemeToggle />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Team & Permissions</div>
            <div className="mt-1 text-xs text-neutral-400">
              Pulled from GoHighLevel team members.
            </div>
          </div>

          <button
            type="button"
            onClick={syncFromGhl}
            disabled={syncing}
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800 disabled:opacity-60"
          >
            {syncing ? "Syncing…" : "Sync from GHL"}
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {team.length === 0 ? (
            <div className="text-sm text-neutral-400">No team members loaded yet.</div>
          ) : (
            team.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 px-3 py-2"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm text-white">{m.name ?? m.email ?? m.ghlUserId}</div>
                  <div className="truncate text-xs text-neutral-400">{m.email ?? "—"}</div>
                </div>
                <div className="shrink-0 text-xs font-semibold text-neutral-200">
                  {m.role ?? "MEMBER"}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}