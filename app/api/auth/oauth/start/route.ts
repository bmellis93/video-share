// app/api/auth/oauth/start/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

const MARKETPLACE_AUTH_URL = "https://marketplace.gohighlevel.com/oauth/authorize";

export async function GET(req: NextRequest) {
  const clientId = mustEnv("GHL_CLIENT_ID");
  const redirectUri = mustEnv("GHL_REDIRECT_URI");
  const scopes = process.env.GHL_SCOPES || "locations.read";

  const url = new URL(req.url);

  // ✅ fix double-encoding problems by reading param once and decoding defensively
  const nextRaw = url.searchParams.get("next");
  const nextDecoded = nextRaw ? decodeURIComponent(nextRaw) : null;
  const safeNext =
    nextDecoded && nextDecoded.startsWith("/") ? nextDecoded : "/owner/galleries";

  // CSRF nonce in state + cookie
  const nonce = crypto.randomBytes(16).toString("hex");
  const state = JSON.stringify({ next: safeNext, nonce });

  // ✅ build via URLSearchParams (no double-encoding)
  const auth = new URL(MARKETPLACE_AUTH_URL);
  auth.searchParams.set("client_id", clientId);
  auth.searchParams.set("redirect_uri", redirectUri);
  auth.searchParams.set("response_type", "code");
  auth.searchParams.set("scope", scopes);
  auth.searchParams.set("state", state);

  const res = NextResponse.redirect(auth.toString());

  res.cookies.set("rm_oauth_nonce", nonce, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10,
  });

  return res;
}