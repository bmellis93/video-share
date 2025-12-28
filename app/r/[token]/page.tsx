import { prisma } from "@/app/lib/prisma";
import TokenReviewClient from "./review-client";

export default async function ReviewByTokenPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const share = await prisma.shareLink.findUnique({
    where: { token },
  });

  if (!share) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Link not found</h1>
        <p>This review link is invalid or was removed.</p>
      </div>
    );
  }

  if (share.expiresAt && share.expiresAt.getTime() < Date.now()) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Link expired</h1>
        <p>This review link has expired.</p>
      </div>
    );
  }

  return (
    <TokenReviewClient
      token={token}
      videoId={share.videoId}
      allowComments={share.allowComments}
      allowDownload={share.allowDownload}
    />
  );
}