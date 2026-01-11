// app/api/auth/ghl/start/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const next = url.searchParams.get("next") ?? "/owner/galleries";

  const clientId = process.env.GHL_OAUTH_CLIENT_ID!;
  const redirectUri = process.env.GHL_OAUTH_REDIRECT_URI!; // e.g. http://localhost:3000/api/auth/ghl/callback

  // You may need scopes formatted per HL docs. Example placeholder:
  const scope = encodeURIComponent("locations.read contacts.read"); // adjust
  const state = encodeURIComponent(
    JSON.stringify({ next })
  );

  const authorize = new URL("https://services.leadconnectorhq.com/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", redirectUri);
  authorize.searchParams.set("response_type", "code");
  authorize.searchParams.set("scope", scope);
  authorize.searchParams.set("state", state);

  return NextResponse.redirect(authorize.toString());
}