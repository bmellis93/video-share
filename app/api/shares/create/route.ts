import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs"; // Prisma needs Node runtime (not Edge)

function makeToken(bytes = 24) {
  return crypto.randomBytes(bytes).toString("base64url");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const videoId = String(body.videoId || "");
    const allowComments = body.allowComments !== false;
    const allowDownload = body.allowDownload === true;
    const expiresInDays =
      body.expiresInDays !== undefined ? Number(body.expiresInDays) : null;

    if (!videoId) {
      return NextResponse.json({ error: "videoId is required" }, { status: 400 });
    }

    const token = makeToken();

    const expiresAt =
      expiresInDays && !Number.isNaN(expiresInDays)
        ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000)
        : null;

    const share = await prisma.shareLink.create({
      data: {
        token,
        videoId,
        expiresAt,
        allowComments,
        allowDownload,
        contactId: body.contactId ? String(body.contactId) : null,
        conversationId: body.conversationId ? String(body.conversationId) : null,
      },
    });

    return NextResponse.json({
      token: share.token,
      reviewPath: `/r/${share.token}`,
    });
  } catch (err: any) {
    console.error("Create share error:", err?.message || err);
    return NextResponse.json(
      { error: "Server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}