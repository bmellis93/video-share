// app/api/dev/owner-session/route.ts
import { NextResponse } from "next/server";
import { setOwnerSession } from "@/lib/auth/ownerSession";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  const body = await req.json().catch(() => ({}));

  const orgId = String(body.orgId || process.env.DEV_ORG_ID || "").trim();
  const userId = String(body.userId || "dev-user").trim();
  const role = (body.role === "ADMIN" || body.role === "USER") ? body.role : "ADMIN";

  if (!orgId) {
    return NextResponse.json(
      { ok: false, error: "Missing orgId (send in body or set DEV_ORG_ID)" },
      { status: 400 }
    );
  }

  await setOwnerSession({ orgId, userId, role });
  return NextResponse.json({ ok: true, orgId, userId, role });
}