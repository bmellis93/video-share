import "server-only";
import type { SharePayload } from "./types";

const STORE = new Map<string, SharePayload>();

export function saveShare(payload: SharePayload) {
  STORE.set(payload.shareId, payload);
  return payload;
}

export function getShare(shareId: string) {
  return STORE.get(shareId) ?? null;
}