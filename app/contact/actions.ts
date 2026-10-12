"use server";

import { headers } from "next/headers";
import { deliverEnquiry } from "@/lib/contact/deliver";
import { hasErrors, normalizeValues, validateEnquiry, type SubmitResult } from "@/lib/contact/validate";

/**
 * Enquiry submission (server action).
 *
 * Defences, in order: honeypot → minimum fill time → per-IP rate limit →
 * full server-side validation → delivery. Bots that trip the first two get a
 * silent "success" so they learn nothing.
 *
 * NOTE on the rate limiter: it is in-memory, so on serverless hosting each
 * instance counts separately. It stops casual abuse; put a WAF / edge rate
 * limit in front of /contact for real protection.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 1200;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  // Opportunistic cleanup so the map can't grow without bound.
  if (hits.size > 2000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

export async function submitEnquiry(input: Record<string, string>): Promise<SubmitResult> {
  // Honeypot: real visitors never see or fill this field.
  if (typeof input.company_website === "string" && input.company_website.trim() !== "") {
    return { ok: true };
  }

  const startedAt = Number(input._t);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS) {
    return { ok: true };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return { ok: false, kind: "failed" };

  const values = normalizeValues(input);
  const fieldErrors = validateEnquiry(values);
  if (hasErrors(fieldErrors)) return { ok: false, kind: "validation", fieldErrors };

  try {
    await deliverEnquiry(values);
    return { ok: true };
  } catch (error) {
    // Details stay in the server log; the visitor only gets the generic state.
    console.error("[contact] enquiry delivery failed:", error);
    return { ok: false, kind: "failed" };
  }
}
