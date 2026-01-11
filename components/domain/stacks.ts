// /components/domain/stacks.ts
export type StackMap = Record<string, string[]>;

// ✅ shared typed alias so owner + share use the same Map type
export type ChildToParentMap = Map<string, string>;

export function buildChildToParent(stacks: StackMap): ChildToParentMap {
  const map: ChildToParentMap = new Map();
  for (const [parentId, ids] of Object.entries(stacks)) {
    for (const id of ids) {
      if (id !== parentId) map.set(id, parentId);
    }
  }
  return map;
}

export function latestIdForCard(
  cardId: string,
  stacks: StackMap,
  childToParent: ChildToParentMap
) {
  const parentId = childToParent.get(cardId) ?? cardId;
  const ids = stacks[parentId] ?? [parentId];
  return ids[ids.length - 1] ?? parentId;
}

/**
 * Ultra-safe: accepts unknown JSON and returns a clean StackMap.
 * - Keeps only string[] values
 * - Dedupes IDs
 * - Ensures the key (parent) is first in its list
 */
export function sanitizeStacks(input: unknown): StackMap {
  if (!input || typeof input !== "object") return {};

  const obj = input as Record<string, unknown>;
  const out: StackMap = {};

  for (const [parentId, rawIds] of Object.entries(obj)) {
    if (typeof parentId !== "string" || !parentId) continue;
    if (!Array.isArray(rawIds)) continue;

    const ids = Array.from(
      new Set(
        rawIds
          .map((v) => (typeof v === "string" ? v : v == null ? "" : String(v)))
          .map((s) => s.trim())
          .filter(Boolean)
      )
    );

    if (ids.length === 0) continue;

    // ensure parent is first (v1)
    const withoutParent = ids.filter((id) => id !== parentId);
    out[parentId] = [parentId, ...withoutParent];
  }

  return out;
}