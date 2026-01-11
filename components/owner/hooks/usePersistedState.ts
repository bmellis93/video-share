"use client";

import { useEffect, useState } from "react";

function safeGet(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function usePersistedState<T>(
  key: string,
  initialValue: T,
  version = 1
) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = safeGet(key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed?.v === version) {
          setValue(parsed.value);
        }
      } catch {}
    }
    setHydrated(true);
  }, [key, version]);

  useEffect(() => {
    if (!hydrated) return;
    safeSet(key, JSON.stringify({ v: version, value }));
  }, [key, value, hydrated, version]);

  return { value, setValue, hydrated } as const;
}