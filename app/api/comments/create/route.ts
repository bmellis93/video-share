import { NextRequest, NextResponse } from "next/server";
import { requireValidShareToken } from "@/app/lib/share-auth";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { token, videoId, body, timecodeMs, parentId } = await req.json();

    const res = await requireValidShareToken(String(token || ""));
    if (!res.ok) {
      return NextResponse.json({ error: res.error }, { status: res.status });
    }

    const share = res.share;

    // Token must match the video
    if (share.videoId !== String(videoId || "")) {
      return NextResponse.json({ error: "Token/video mismatch" }, { status: 403 });
    }

    // Permission check
    if (!share.allowComments) {
      return NextResponse.json(
        { error: "Comments disabled for this link" },
        { status: 403 }
      );
    }

    const trimmed = String(body || "").trim();
    if (!trimmed) {
      return NextResponse.json({ error: "Comment body required" }, { status: 400 });
    }

    // ✅ Reply validation (ONLY if parentId provided)
    let parent: { id: string; token: string; videoId: string } | null = null;

    if (parentId) {
      parent = await prisma.comment.findUnique({
        where: { id: String(parentId) },
        select: { id: true, token: true, videoId: true },
      });

      if (!parent) {
        return NextResponse.json({ error: "Parent comment not found" }, { status: 404 });
      }

      // Prevent cross-linking across videos/tokens
      if (parent.token !== share.token || parent.videoId !== share.videoId) {
        return NextResponse.json({ error: "Invalid parent for this link" }, { status: 403 });
      }
    }

    const comment = await prisma.comment.create({
      data: {
        token: share.token,
        videoId: share.videoId,
        timecodeMs: Number(timecodeMs || 0),
        body: String(body || "").trim(),
        author: null,
        role: "CLIENT",
        parentId: parent ? parent.id : null, // null = top-level comment
      },
    });

    return NextResponse.json({ ok: true, comment });
  } catch (err: any) {
    console.error("Create comment error:", err);
    return NextResponse.json(
      { error: "Server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}