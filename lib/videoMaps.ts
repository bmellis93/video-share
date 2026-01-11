// lib/videoMaps.ts
export type StacksMap = Record<string, string[]>;

export type VideoMeta = {
  name: string;
  description?: string;
  createdAt?: string;
  thumbnailUrl?: string | null;
};

export type VideoSources = {
  viewSrc: string;
  originalSrc: string;
};

export function safeParseStacks(stacksJson: string | null | undefined): StacksMap {
  if (!stacksJson) return {};
  try {
    const obj = JSON.parse(stacksJson);
    return obj && typeof obj === "object" ? (obj as StacksMap) : {};
  } catch {
    return {};
  }
}

type VideoRow = {
  id: string;
  title: string;
  description?: string | null;
  createdAt: Date;
  thumbnailUrl?: string | null;
  sourceUrl: string;
  playbackUrl?: string | null;
};

export function buildVideoMaps(videoRows: VideoRow[]) {
  const videoMetaById: Record<string, VideoMeta> = {};
  const sourcesById: Record<string, VideoSources> = {};

  for (const v of videoRows) {
    videoMetaById[v.id] = {
      name: v.title,
      description: v.description ?? "",
      createdAt: v.createdAt.toISOString(),
      thumbnailUrl: v.thumbnailUrl ?? null,
    };

    // For now: view == original. Later: viewSrc becomes transcoded, originalSrc stays original upload.
    sourcesById[v.id] = {
      viewSrc: v.playbackUrl ?? v.sourceUrl,
      originalSrc: v.sourceUrl,
    };
  }

  return {
    videoMetaById: Object.freeze(videoMetaById),
    sourcesById: Object.freeze(sourcesById),
  };
}