import type { StackMap } from "@/components/domain/stacks";

export function parseAllowedIds(share: any): string[] {
  if (share.allowedVideoIdsJson) {
    try {
      const arr = JSON.parse(share.allowedVideoIdsJson);
      return Array.isArray(arr) ? arr.map(String) : [];
    } catch {
      return [];
    }
  }
  // backward compat: single-video shares
  return share.videoId ? [String(share.videoId)] : [];
}

export function parseStacksForShare(
  share: any,
  allowedVideoIds: string[]
): StackMap {
  if (!share.stacksJson) return {};

  try {
    const obj = JSON.parse(share.stacksJson);
    if (!obj || typeof obj !== "object") return {};

    const allowed = new Set(allowedVideoIds);

    return Object.fromEntries(
      Object.entries(obj as StackMap).filter(([parentId]) => allowed.has(parentId))
    );
  } catch {
    return {};
  }
}

/**
 * ✅ Backwards-compatible alias for older imports
 * (Some pages still import `parseStacks`.)
 */
export function parseStacks(share: any, allowedVideoIds: string[]): StackMap {
  return parseStacksForShare(share, allowedVideoIds);
}