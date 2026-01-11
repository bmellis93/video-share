// lib/stacks/normalizeStacks.ts
export type StackMap = Record<string, string[]>;

export function safeParseStacks(stacksJson: string | null | undefined): StackMap {
  if (!stacksJson) return {};
  try {
    const obj = JSON.parse(stacksJson);
    if (!obj || typeof obj !== "object") return {};
    return obj as StackMap;
  } catch {
    return {};
  }
}

/**
 * Normalize/prune stacks so they only reference allowed ids.
 * - Remove parents not allowed
 * - Remove children not allowed
 * - De-dupe children
 * - Remove empty stacks
 * - Ensure a child only belongs to one parent
 */
export function normalizeStacks(stacks: StackMap, allowedIds: Set<string>): StackMap {
  const next: StackMap = {};
  const claimedChildren = new Set<string>();

  for (const [rawParent, rawChildren] of Object.entries(stacks ?? {})) {
    const parentId = String(rawParent || "").trim();
    if (!parentId) continue;
    if (!allowedIds.has(parentId)) continue;

    const children = Array.isArray(rawChildren) ? rawChildren : [];
    const cleaned: string[] = [];

    for (const rawChild of children) {
      const childId = String(rawChild || "").trim();
      if (!childId) continue;
      if (childId === parentId) continue;
      if (!allowedIds.has(childId)) continue;
      if (claimedChildren.has(childId)) continue;

      claimedChildren.add(childId);
      cleaned.push(childId);
    }

    // Only keep if it still has versions
    if (cleaned.length > 0) next[parentId] = cleaned;
  }

  return next;
}