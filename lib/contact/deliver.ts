import "server-only";

import { BRAND_NAME } from "./channels";
import { BUDGETS, CONTACT_METHODS, TRAVELER_COUNTS, travelTypeLabel } from "./options";
import type { EnquiryValues } from "./validate";

/**
 * Delivery adapter for enquiries. Server-only: nothing here (or in the env
 * vars it reads) ever reaches the browser.
 *
 * Configure ONE OR BOTH of:
 *
 *   CONTACT_WEBHOOK_URL   POST JSON to any endpoint (Zapier, Make, Google Apps
 *                         Script, your CRM, a Slack/Discord relay …)
 *
 *   RESEND_API_KEY + CONTACT_TO_EMAIL + CONTACT_FROM_EMAIL
 *                         Sends an e-mail through Resend's HTTP API (no SDK).
 *                         CONTACT_FROM_EMAIL must be a verified sender/domain.
 *
 * If NEITHER is configured:
 *   - development: the enquiry is logged to the server console (so you can
 *     test the whole flow), and the form reports success;
 *   - production: delivery fails and the visitor sees an honest "couldn't send,
 *     please WhatsApp/call us" message. We never pretend an enquiry was received
 *     when it was thrown away.
 */

export type Delivery = "sent" | "logged";

const TIMEOUT_MS = 8000;

function label(list: readonly { value: string; label: string }[], value: string): string {
  return list.find((o) => o.value === value)?.label ?? (value || "—");
}

function lines(e: EnquiryValues): [string, string][] {
  return [
    ["Name", e.name],
    ["Email", e.email],
    ["Phone / WhatsApp", e.phone],
    ["Country", e.country],
    ["Destination", e.destination],
    ["Travel date", e.travelDate || "—"],
    ["Travelers", label(TRAVELER_COUNTS, e.travelers)],
    ["Travel type", e.travelType ? travelTypeLabel(e.travelType) : "—"],
    ["Budget", label(BUDGETS, e.budget)],
    ["Preferred contact", label(CONTACT_METHODS, e.contactMethod)],
    ["Message", e.message],
  ];
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function viaWebhook(url: string, e: EnquiryValues): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "karvaahh.in/contact",
      submittedAt: new Date().toISOString(),
      enquiry: e,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

async function viaResend(apiKey: string, to: string, from: string, e: EnquiryValues): Promise<void> {
  const rows = lines(e);
  // Subject is built from a value that already had control characters stripped.
  const subject = `New enquiry — ${e.name} → ${e.destination}`.slice(0, 150);
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2>New website enquiry</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top;color:#555"><strong>${escapeHtml(k)}</strong></td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: `${BRAND_NAME} Website <${from}>`,
      to: [to],
      reply_to: e.email,
      subject,
      text,
      html,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

export async function deliverEnquiry(e: EnquiryValues): Promise<Delivery> {
  const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const emailConfigured = Boolean(apiKey && to && from);

  if (!webhook && !emailConfigured) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] No delivery configured — enquiry logged only (dev):\n", lines(e).map(([k, v]) => `  ${k}: ${v}`).join("\n"));
      return "logged";
    }
    throw new Error("No enquiry delivery configured (set CONTACT_WEBHOOK_URL or RESEND_* env vars).");
  }

  const attempts: Promise<void>[] = [];
  if (webhook) attempts.push(viaWebhook(webhook, e));
  if (emailConfigured && apiKey && to && from) attempts.push(viaResend(apiKey, to, from, e));

  const results = await Promise.allSettled(attempts);
  const delivered = results.some((r) => r.status === "fulfilled");
  if (!delivered) {
    const reasons = results.map((r) => (r.status === "rejected" ? String(r.reason) : "")).filter(Boolean);
    throw new Error(`All enquiry deliveries failed: ${reasons.join(" | ")}`);
  }
  return "sent";
}
