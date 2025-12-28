import { NextRequest, NextResponse } from "next/server";

const GHL_BASE_URL = process.env.GHL_BASE_URL!;
const GHL_PRIVATE_TOKEN = process.env.GHL_PRIVATE_TOKEN!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query } = body;

    if (!query || query.length < 2) {
      return NextResponse.json(
        { error: "Query must be at least 2 characters" },
        { status: 400 }
      );
    }

    const res = await fetch(`${GHL_BASE_URL}/contacts/search`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_PRIVATE_TOKEN}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        query,
        pageLimit: 20,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("GHL Error:", text);
      return NextResponse.json(
        { error: "Failed to search contacts" },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Normalize for your UI
    const contacts = (data.contacts || []).map((c: any) => {
      const name = `${c.firstName ?? ""} ${c.lastName ?? ""}`.trim();
      
      return {
        id: c.id,
        name: name || "Unnamed Contact",
        email: c.email || null,
        phone: c.phone || null,
        canEmail: Boolean(c.email),
        canSms: Boolean(c.phone),
      };
    });

    return NextResponse.json({ contacts });
  } catch (err) {
    console.error("Contact search error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}