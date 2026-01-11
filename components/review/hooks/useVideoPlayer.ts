"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SyntheticEvent } from "react";

type UseVideoPlayerOptions = {
  snapToZeroThreshold?: number; // default 0.02
  fsHintMs?: number; // default 2500
};

type UseVideoPlayerReturn = {
  // refs
  videoRef: React.RefObject<HTMLVideoElement | null>;
  viewerRef: React.RefObject<HTMLDivElement | null>;

  // state
  durationMs: number;
  currentMs: number;
  isPlaying: boolean;

  volume: number;
  muted: boolean;

  loop: boolean;
  playbackRate: number;

  isFullscreen: boolean;
  showFsHint: boolean;

  // setters
  setLoop: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;

  // controls/helpers
  syncDuration: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  toggleFullscreen: () => Promise<void>;
  seekToMs: (ms: number) => void;
  formatTime: (ms: number) => string;
  getCurrentTimeMs: () => number;
  setVolumeSafe: (next: number) => void;
  pause: () => void;

  // handlers
  onPlay: () => void;
  onPause: () => void;
  onTimeUpdate: (e: SyntheticEvent<HTMLVideoElement>) => void;
  onLoadedMetadata: () => void;
  onDurationChange: () => void;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function useVideoPlayer(opts: UseVideoPlayerOptions = {}): UseVideoPlayerReturn {
  const snapToZeroThreshold = opts.snapToZeroThreshold ?? 0.02;
  const fsHintMs = opts.fsHintMs ?? 2500;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const viewerRef = useRef<HTMLDivElement | null>(null);

  const [durationMs, setDurationMs] = useState(0);
  const [currentMs, setCurrentMs] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const lastVolumeRef = useRef(1);

  const [loop, setLoop] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFsHint, setShowFsHint] = useState(false);

  const formatTime = useCallback((ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, []);

  const getCurrentTimeMs = useCallback(() => {
    const v = videoRef.current;
    if (!v) return 0;
    const ms = v.currentTime * 1000;
    if (!Number.isFinite(ms)) return 0;
    return Math.max(0, Math.floor(ms));
  }, []);

  const syncDuration = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;

    const d = v.duration; // seconds
    // HLS can temporarily report Infinity/NaN
    if (!Number.isFinite(d) || d <= 0) return;

    const next = Math.floor(d * 1000);
    setDurationMs(next);
  }, []);

  const seekToMs = useCallback(
    (ms: number) => {
      const v = videoRef.current;
      if (!v) return;

      let next = Number(ms);
      if (!Number.isFinite(next)) next = 0;
      next = Math.max(0, Math.floor(next));

      // clamp to duration if known
      if (durationMs > 0) next = clamp(next, 0, durationMs);

      v.currentTime = next / 1000;
      setCurrentMs(next);
    },
    [durationMs]
  );

  const pause = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;

    syncDuration();

    if (v.paused) {
      v.play()
        .then(() => {
          // onPlay handler will also set this, but keep it snappy
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay / gesture restrictions etc.
          setIsPlaying(false);
        });
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, [syncDuration]);

  const setVolumeSafe = useCallback(
    (next: number) => {
      let v = Number(next);
      if (!Number.isFinite(v)) v = 0;
      v = clamp(v, 0, 1);

      if (v <= snapToZeroThreshold) v = 0;

      if (v > 0) lastVolumeRef.current = v;

      setVolume(v);
      setMuted(v === 0);
    },
    [snapToZeroThreshold]
  );

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const nextMuted = !m;

      if (nextMuted) {
        if (volume > 0) lastVolumeRef.current = volume;
        setVolume(0);
      } else {
        const restore = lastVolumeRef.current > 0 ? lastVolumeRef.current : 1;
        setVolume(restore);
      }

      return nextMuted;
    });
  }, [volume]);

  const toggleFullscreen = useCallback(async () => {
    try {
      const el = viewerRef.current;
      if (!el) return;

      if (!document.fullscreenElement) {
        await el.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (err) {
      console.error("Fullscreen failed:", err);
    }
  }, []);

  // fullscreen listener + hint
  useEffect(() => {
    function onFs() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;

    setShowFsHint(true);
    const t = window.setTimeout(() => setShowFsHint(false), fsHintMs);
    return () => window.clearTimeout(t);
  }, [isFullscreen, fsHintMs]);

  // sync settings into <video>
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = clamp(volume, 0, 1);
    v.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.loop = loop;
  }, [loop]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = playbackRate;
  }, [playbackRate]);

  // handlers
  const onPlay = useCallback(() => setIsPlaying(true), []);
  const onPause = useCallback(() => setIsPlaying(false), []);

  const onLoadedMetadata = useCallback(() => {
    syncDuration();
    setCurrentMs(getCurrentTimeMs());
  }, [syncDuration, getCurrentTimeMs]);

  const onDurationChange = useCallback(() => {
    // duration can update after loadedmetadata (stream variants, etc.)
    syncDuration();
  }, [syncDuration]);

  const onTimeUpdate = useCallback((e: SyntheticEvent<HTMLVideoElement>) => {
    const ms = e.currentTarget.currentTime * 1000;
    if (!Number.isFinite(ms)) return;
    setCurrentMs(Math.max(0, Math.floor(ms)));
  }, []);

  return {
    videoRef,
    viewerRef,

    durationMs,
    currentMs,
    isPlaying,

    volume,
    muted,

    loop,
    playbackRate,

    isFullscreen,
    showFsHint,

    setLoop,
    setPlaybackRate,

    syncDuration,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    seekToMs,
    formatTime,
    getCurrentTimeMs,
    setVolumeSafe,
    pause,

    onPlay,
    onPause,
    onTimeUpdate,
    onLoadedMetadata,
    onDurationChange,
  };
}