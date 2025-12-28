"use client";

import { useMemo } from "react";
import VideoReviewClient from "@/components/review/VideoReviewScreen";

type Props = {
  token: string;
  videoId: string;
  allowComments: boolean;
  allowDownload: boolean;
};

export default function TokenReviewClient({
  token,
  videoId,
  allowComments,
  allowDownload,
}: Props) {
  // “Token mode” props we’ll use to lock the UI down
  const permissions = useMemo(
    () => ({ allowComments, allowDownload }),
    [allowComments, allowDownload]
  );

  return (
    <VideoReviewClient
      videoId={videoId}
      mode="token"
      token={token}
      permissions={permissions}
    />
  );
}