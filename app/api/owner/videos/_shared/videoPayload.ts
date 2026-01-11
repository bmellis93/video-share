// app/api/owner/videos/_shared/videoPayload.ts
export type VideoStatus = "UPLOADED" | "PROCESSING" | "READY" | "FAILED";

export function normalizeStatus(s: unknown): VideoStatus {
  if (s === "READY") return "READY";
  if (s === "FAILED") return "FAILED";
  if (s === "UPLOADED") return "UPLOADED";
  if (s === "PROCESSING") return "PROCESSING";
  // fall back to PROCESSING so UI keeps polling instead of breaking
  return "PROCESSING";
}

export function normalizeString(x: unknown): string | null {
  if (typeof x === "string") return x;
  return null;
}

export function normalizeIsoDate(d: unknown): string | null {
  if (!d) return null;
  if (d instanceof Date) return d.toISOString();
  return null;
}

export function normalizeBytesToString(n: unknown): string {
  // Prisma returns number for Int, bigint for BigInt, or null
  if (typeof n === "bigint") return n.toString();
  if (typeof n === "number" && Number.isFinite(n) && n >= 0) return Math.trunc(n).toString();
  return "0";
}

export function normalizeBytesToNumber(x: unknown): number | null {
  if (x == null) return null;

  if (typeof x === "number") {
    return Number.isFinite(x) ? x : null;
  }

  if (typeof x === "bigint") {
    // JS numbers are safe up to ~9 petabytes
    return Number(x);
  }

  if (typeof x === "string") {
    const n = Number(x);
    return Number.isFinite(n) ? n : null;
  }

  return null;
}