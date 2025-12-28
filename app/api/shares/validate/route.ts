import { NextRequest, NextResponse } from "next/server";
import { requireValidShareToken } from "@/app/lib/share-auth";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const res = await requireValidShareToken(String(token || ""));
    if (!res.ok) {
      return NextResponse.json({ error: res.error }, { status: res.status });
    }

    const { share } = res;

    return NextResponse.json({
      videoId: share.videoId,
      allowComments: share.allowComments,
      allowDownload: share.allowDownload,
      expiresAt: share.expiresAt,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}