import { NextRequest, NextResponse } from "next/server";
import { requireValidShareToken } from "@/app/lib/share-auth";
import { prisma } from "@/app/lib/prisma";

type ThreadedComment = {
  id: string;
  timecodeMs: number;
  body: string;
  author: string | null;
  createdAt: string; // ISO for client
  parentId: string | null;
  replies: ThreadedComment[];
};

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const res = await requireValidShareToken(String(token || ""));
    if (!res.ok) {
      return NextResponse.json({ error: res.error }, { status: res.status });
    }

    const share = res.share;

    const rows = await prisma.comment.findMany({
      where: {
        token: share.token,
        videoId: share.videoId,
      },
      orderBy: [
        { timecodeMs: "asc" },
        { createdAt: "asc" }
      ],
      select: {
        id: true,
        timecodeMs: true,
        body: true,
        author: true,
        createdAt: true,
        parentId: true,
        role: true,
      },
    });

    const byId = new Map<string, ThreadedComment>();
    for (const r of rows) {
      byId.set(r.id, {
        id: r.id,
        timecodeMs: r.timecodeMs,
        body: r.body,
        author: r.author,
        createdAt: r.createdAt.toISOString(),
        parentId: r.parentId,
        replies: [],
      });
    }

    const roots: ThreadedComment[] = [];
    for (const r of rows) {
      const node = byId.get(r.id)!;

      if (r.parentId) {
        const parent = byId.get(r.parentId);
        if (parent) parent.replies.push(node);
        else roots.push(node); // orphan fallback
      } else {
        roots.push(node);
      }
    }

    return NextResponse.json({ ok: true, comments: roots });
  } catch (err: any) {
    console.error("LIST COMMENTS ERROR:", err);
    return NextResponse.json(
      {
        error: "Server error",
        detail: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}