import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

type FlatComment = {
  id: string;
  timecodeMs: number;
  body: string;
  author: string | null;
  createdAt: Date;
  parentId: string | null;
  role: "OWNER" | "CLIENT";
};

function buildThread(rows: FlatComment[]) {
  const byId = new Map<string, any>();
  const roots: any[] = [];

  for (const r of rows) {
    byId.set(r.id, { ...r, createdAt: r.createdAt.toISOString(), replies: [] });
  }

  for (const r of rows) {
    const node = byId.get(r.id);
    if (r.parentId) {
      const parent = byId.get(r.parentId);
      if (parent) parent.replies.push(node);
      else roots.push(node); // safety fallback
    } else {
      roots.push(node);
    }
  }

  // keep replies in chronological order
  const sortTree = (list: any[]) => {
    list.sort((a, b) => {
      if (a.timecodeMs !== b.timecodeMs) return a.timecodeMs - b.timecodeMs;
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
    list.forEach((n) => sortTree(n.replies));
  };

  sortTree(roots);
  return roots;
}

export async function POST(req: Request) {
  try {
    const { videoId } = await req.json();
    if (!videoId) {
      return NextResponse.json({ error: "Missing videoId" }, { status: 400 });
    }

    const rows = await prisma.comment.findMany({
      where: { videoId },
      orderBy: [{ timecodeMs: "asc" }, { createdAt: "asc" }],
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

    const comments = buildThread(rows as any);
    return NextResponse.json({ comments });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}