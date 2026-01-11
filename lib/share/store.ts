import "server-only";
import type { SharePayload } from "./types";

type Entry = {
  payload: SharePayload;
  expiresAt: number;
};

const STORE = new Map<string, Entry>();

const TTL_MS = 60_000; // 1 minute

export function saveShare(payload: SharePayload) {
  STORE.set(payload.shareId, {
    payload,
    expiresAt: Date.now() + TTL_MS,
  });
  return payload;
}

export function getShare(shareId: string) {
  const entry = STORE.get(shareId);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    STORE.delete(shareId);
    return null;
  }
  return entry.payload;
}