// app/api/comments/create-owner/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
// import { requireOwner } from "@/app/lib/auth"; // your auth

export async function POST(req: NextRequest) {
  try {
    // await requireOwner(req);

    const { videoId, body, timecodeMs, parentId } = await req.json();
    if (!String(videoId || "")) {
      return NextResponse.json({ error: "videoId required" }, { status: 400 });
    }
    if (!String(body || "").trim()) {
      return NextResponse.json({ error: "Comment body required" }, { status: 400 });
    }

    let parent: { id: string; videoId: string; token: string } | null = null;

    if (parentId) {
      parent = await prisma.comment.findUnique({
        where: { id: String(parentId) },
        select: { id: true, videoId: true, token: true },
      });

      if (!parent) {
        return NextResponse.json({ error: "Parent comment not found" }, { status: 404 });
      }

      // owner replies must stay on same video
      if (parent.videoId !== String(videoId)) {
        return NextResponse.json({ error: "Invalid parent for this video" }, { status: 403 });
      }
    }

    // Owner comments still need a token value for indexing/threading with client view.
    // Easiest: look up the ShareLink for this video and reuse its token, OR store a separate ownerToken concept.
    const share = await prisma.shareLink.findFirst({
      where: { videoId: String(videoId) },
      orderBy: { createdAt: "desc" },
      select: { token: true },
    });

    if (!share) {
      return NextResponse.json({ error: "No share token exists for this video yet" }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        token: share.token,
        videoId: String(videoId),
        timecodeMs: Number(timecodeMs || 0),
        body: String(body || "").trim(),
        author: "Owner",
        role: "OWNER",
        parentId: parent ? parent.id : null,
      },
    });

    return NextResponse.json({ ok: true, comment });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}