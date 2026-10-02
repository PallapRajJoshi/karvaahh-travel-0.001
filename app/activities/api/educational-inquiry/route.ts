import { NextResponse } from "next/server";
import { cleanInquiry, validateInquiry } from "@/lib/educationalInquiry";

export const runtime = "nodejs";

/**
 * Educational tour inquiry endpoint.
 *
 * Delivery is intentionally explicit: set INQUIRY_WEBHOOK_URL to a service that receives
 * the JSON (email relay, CRM, Zapier/Make, etc.). If it is not configured the endpoint
 * answers 503 so the form shows its "contact us directly" fallback — it never pretends
 * a request was delivered when it wasn't.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, deliver nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const values = cleanInquiry(body);
  const errors = validateInquiry(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "Inquiry delivery is not configured." }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "educational-tours",
        receivedAt: new Date().toISOString(),
        ...values,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch {
    return NextResponse.json({ ok: false, error: "Could not deliver the inquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
