import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

export async function GET(req: NextRequest) {
  const clientId = mustEnv("GHL_CLIENT_ID");
  const redirectUri = mustEnv("GHL_REDIRECT_URI");
  const scopes = process.env.GHL_SCOPES || "locations.read";

  const url = new URL(req.url);
  const next = url.searchParams.get("next");
  const safeNext = next && next.startsWith("/") ? next : "/owner/galleries";

  // CSRF nonce in state + cookie
  const nonce = crypto.randomBytes(16).toString("hex");
  const state = encodeURIComponent(JSON.stringify({ next: safeNext, nonce }));

  // ✅ Authorize endpoint (NOT services.leadconnectorhq.com)
  const AUTH_URL = "https://marketplace.gohighlevel.com/oauth/authorize";

  const authUrl =
    `${AUTH_URL}` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent(scopes)}` +
    `&state=${state}`;

  const res = NextResponse.redirect(authUrl);

  res.cookies.set("rm_oauth_nonce", nonce, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10,
  });

  return res;
}