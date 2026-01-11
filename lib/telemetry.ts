export function logUploadFailure(payload: { where: string; videoId?: string; reason?: string | null }) {
  console.warn("[upload_failure]", {
    where: payload?.where ?? "UNKNOWN",
    videoId: payload?.videoId ?? "unknown",
    reason: payload?.reason ?? null,
  });
}