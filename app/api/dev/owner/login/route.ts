import { NextResponse } from "next/server";
import { setOwnerSession } from "@/lib/auth/ownerSession";

export const runtime = "nodejs";

export async function POST() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ ok: false, error: "Not available" }, { status: 404 });
  }

  const orgId = process.env.DEV_OWNER_ORG_ID;
  const userId = process.env.DEV_OWNER_USER_ID || "dev-user";
  const role = (process.env.DEV_OWNER_ROLE as "ADMIN" | "USER") || "ADMIN";

  if (!orgId) {
    return NextResponse.json(
      { ok: false, error: "Missing DEV_OWNER_ORG_ID" },
      { status: 500 }
    );
  }

  await setOwnerSession({ orgId, userId, role });

  return NextResponse.json({ ok: true, orgId, userId, role });
}