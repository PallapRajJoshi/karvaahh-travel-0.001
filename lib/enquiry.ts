/* ============================================================
   ENQUIRY HANDLER — PLACEHOLDER
   ------------------------------------------------------------
   No backend is connected yet. `submitEnquiry` does NOT send
   anything. Replace the body with the real handler (API route,
   form service, WhatsApp deep link, CRM) when it exists.

   Until then, forms show an honest "not sent yet — contact us"
   message rather than a fake confirmation.
   ============================================================ */

export type EnquiryKind = "availability" | "notify";

export interface EnquiryPayload {
  kind: EnquiryKind;
  activity: string;
  fields: Record<string, string>;
}

export type EnquiryResult =
  | { status: "sent" }
  | { status: "not-connected" }
  | { status: "error"; message: string };

/** Set to a real endpoint (e.g. "/api/enquiry") once it exists. */
export const ENQUIRY_ENDPOINT: string | null = null;

/** Where users go while no handler is connected. Verify this route exists. */
export const CONTACT_FALLBACK_HREF = "/contact";

export async function submitEnquiry(
  payload: EnquiryPayload
): Promise<EnquiryResult> {
  if (!ENQUIRY_ENDPOINT) {
    // TODO(enquiry): connect the real enquiry / WhatsApp / contact system.
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry placeholder] not sent:", payload);
    }
    return { status: "not-connected" };
  }
  try {
    const res = await fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { status: "error", message: `Request failed (${res.status})` };
    return { status: "sent" };
  } catch {
    return { status: "error", message: "Network error. Check your connection and try again." };
  }
}
