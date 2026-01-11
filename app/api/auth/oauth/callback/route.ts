// app/api/auth/ghl/callback/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const stateRaw = url.searchParams.get("state");

  if (!code) return NextResponse.redirect(new URL("/login?err=missing_code", url.origin));

  let next = "/owner/galleries";
  try {
    if (stateRaw) {
      const parsed = JSON.parse(decodeURIComponent(stateRaw));
      if (parsed?.next) next = parsed.next;
    }
  } catch {}

  const clientId = process.env.GHL_OAUTH_CLIENT_ID!;
  const clientSecret = process.env.GHL_OAUTH_CLIENT_SECRET!;
  const redirectUri = process.env.GHL_OAUTH_REDIRECT_URI!;

  // Exchange code -> tokens
  const tokenRes = await fetch("https://services.leadconnectorhq.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code,
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.redirect(new URL("/login?err=token_exchange_failed", url.origin));
  }

  const tokenJson = await tokenRes.json();

  // ✅ You now have an access token. Next you must determine the correct locationId.
  // Common pattern: call HL “locations” endpoint (or “me” + locations) then:
  // - if 1 location -> choose it
  // - else -> redirect to a "Pick location" screen

  // For now, placeholder:
  const locationId = tokenJson?.locationId ?? null;

  if (!locationId) {
    return NextResponse.redirect(new URL("/login?err=no_location", url.origin));
  }

  // Create *your* session cookie (your app’s JWT)
  // This should mint a JWT that includes { locationId, accessToken, refreshToken, expiresAt, ... }
  const appJwt = await mintYourAppJwt({
    locationId,
    accessToken: tokenJson.access_token,
    refreshToken: tokenJson.refresh_token,
    expiresIn: tokenJson.expires_in,
  });

  const c = await cookies();
  c.set("renowned_owner", appJwt, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return NextResponse.redirect(new URL(next, url.origin));
}

// implement this in your codebase
async function mintYourAppJwt(_: any) {
  return "TODO";
}