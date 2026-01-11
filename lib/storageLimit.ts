// lib/storageLimit.ts
export const STORAGE_LIMIT_BYTES =
  BigInt(100) * BigInt(1024) * BigInt(1024) * BigInt(1024); // 100GB

export function clampNonNegativeBigInt(x: bigint) {
  return x < BigInt(0) ? BigInt(0) : x;
}