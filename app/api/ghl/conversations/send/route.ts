import { NextRequest, NextResponse } from "next/server";

const GHL_BASE_URL = process.env.GHL_BASE_URL!;
const GHL_PRIVATE_TOKEN = process.env.GHL_PRIVATE_TOKEN!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;

type Channel = "SMS" | "Email";

function ghHeaders() {
  return {
    Authorization: `Bearer ${GHL_PRIVATE_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    Version: "2021-07-28",
  };
}

async function sendMessageToGhl(args: {
  contactId: string;
  type: Channel;
  message: string;
  subject?: string;
  html?: string;
}) {
  const body: any = {
    contactId: args.contactId,
    type: args.type,
    message: args.message,
  };

  // Email extras (optional, but nice)
  if (args.type === "Email") {
    if (args.subject) body.subject = args.subject;
    if (args.html) body.html = args.html;
  }

  const res = await fetch(`${GHL_BASE_URL}/conversations/messages`, {
    method: "POST",
    headers: ghHeaders(),
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Failed to send ${args.type} (${res.status}): ${text}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

async function findConversationId(contactId: string) {
  const url = new URL(`${GHL_BASE_URL}/conversations/search`);
  url.searchParams.set("locationId", GHL_LOCATION_ID);
  url.searchParams.set("contactId", contactId);
  url.searchParams.set("limit", "1");
  url.searchParams.set("sort", "desc");

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: ghHeaders(),
  });

  if (!res.ok) return null;

  const data = await res.json();
  const first = data?.conversations?.[0];
  return first?.id ?? null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const contactId = String(body.contactId || "");
    const message = String(body.message || "").trim();

    const subject = body.subject
      ? String(body.subject)
      : "Your video is ready";

    const html = body.html ? String(body.html) : undefined;

    if (!contactId) {
      return NextResponse.json(
        { error: "contactId is required" },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "message is required" },
        { status: 400 }
      );
    }

    // Option A:
    // - If channels provided → try those
    // - If not → try SMS first, then Email, stop after first success
    let finalChannels: Channel[] =
      Array.isArray(body.channels) && body.channels.length
        ? body.channels
        : ["SMS", "Email"];

    const results: any[] = [];

    for (const ch of finalChannels) {
      try {
        const r = await sendMessageToGhl({
          contactId,
          type: ch,
          message,
          subject,
          html,
        });

        results.push({ channel: ch, result: r });

        // Stop after first success if channels weren't explicitly chosen
        if (!body.channels) break;
      } catch (e: any) {
        results.push({
          channel: ch,
          error: e?.message || String(e),
        });
      }
    }

    const sent = results
      .filter((r) => r.result)
      .map((r) => r.channel);

    if (!sent.length) {
      return NextResponse.json(
        { error: "Failed to send via any channel", results },
        { status: 422 }
      );
    }

    // Optional: get conversation ID for linking/logging
    const conversationId = await findConversationId(contactId);

    return NextResponse.json({
      sent,
      conversationId,
      results,
    });
  } catch (err: any) {
    console.error(
      "Send conversation message error:",
      err?.message || err
    );

    return NextResponse.json(
      { error: "Server error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}