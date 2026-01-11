// lib/auth/ownerSession.ts
import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";

const COOKIE_NAME = "rm_owner_session";

const JWT_SECRET = process.env.APP_JWT_SECRET;
if (!JWT_SECRET) throw new Error("Missing APP_JWT_SECRET");

const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);

export type OwnerContext = {
  orgId: string;
  userId: string;
  role: "ADMIN" | "USER";
};

function assertOwnerContext(payload: any): asserts payload is OwnerContext {
  if (!payload || typeof payload !== "object") throw new Error("Invalid session");

  const { orgId, userId, role } = payload as Partial<OwnerContext>;

  if (!orgId || !userId || (role !== "ADMIN" && role !== "USER")) {
    throw new Error("Invalid session");
  }
}

/**
 * NOTE:
 * - cookies().set only works in Route Handlers / Server Actions.
 * - In Next 15, cookies() is async, so we must await it.
 */
export async function setOwnerSession(ctx: OwnerContext) {
  const token = await new SignJWT(ctx as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET_KEY);

  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearOwnerSession() {
  const c = await cookies();
  c.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function requireOwnerContext(): Promise<OwnerContext> {
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  if (!token) {
    redirect(`/login?next=${encodeURIComponent("/owner/galleries")}`);
  }
  const { payload } = await jwtVerify(token, SECRET_KEY);

  // jose payload is JWTPayload; we stored plain object fields.
  const decoded = payload as unknown as OwnerContext;
  assertOwnerContext(decoded);

  return decoded;
}

export function requireAdmin(ctx: OwnerContext) {
  if (ctx.role !== "ADMIN") throw new Error("Admin required");
}