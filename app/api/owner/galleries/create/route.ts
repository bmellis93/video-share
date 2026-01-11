import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireOwnerContext } from "@/lib/auth/ownerSession";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const owner = await requireOwnerContext();
    const body = await req.json().catch(() => ({}));

    const name = String(body?.name || "").trim();
    const description = String(body?.description || "").trim();

    if (!name) {
      return NextResponse.json({ ok: false, error: "Missing name" }, { status: 400 });
    }

    const gallery = await prisma.gallery.create({
      data: {
        orgId: owner.orgId,
        title: name,
        stacksJson: "{}", // keep predictable
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // return EXACT shape OwnerGalleriesClient expects
    return NextResponse.json({
      ok: true,
      gallery: {
        id: gallery.id,
        name: gallery.title ?? "Untitled gallery",
        description: description || "",
        createdAt: gallery.createdAt.toISOString(),
        updatedAt: gallery.updatedAt.toISOString(),
        lastClientCommentedAt: null,
        thumbs: [],
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Create failed" },
      { status: 500 }
    );
  }
}