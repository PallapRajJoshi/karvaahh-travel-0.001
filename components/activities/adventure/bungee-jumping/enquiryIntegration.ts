/* ===========================================================================
 * ENQUIRY INTEGRATION PLACEHOLDER
 * ---------------------------------------------------------------------------
 * No backend is built for this page. Wire the site's enquiry system here
 * (API route, form service, CRM, WhatsApp hand-off, etc.).
 *
 * Option A: set NEXT_PUBLIC_ENQUIRY_ENDPOINT to an endpoint that accepts a
 *           JSON POST and returns 2xx on success.
 * Option B: replace the body of submitBungeeEnquiry with the site's existing
 *           enquiry helper once contact details are consolidated (site audit).
 *
 * Until one of these is done the form reports that online enquiries are not
 * connected — it never shows a fake confirmation.
 * ========================================================================= */

export interface BungeeEnquiry {
  destination: string;
  activity: string;
  travelDate: string;
  groupSize: string;
  mediaPackage: string;
  transport: string;
  name: string;
  contact: string;
  message: string;
  page: string;
}

export type EnquiryResult =
  | { status: "sent" }
  | { status: "not-connected" }
  | { status: "error"; message: string };

export async function submitBungeeEnquiry(payload: BungeeEnquiry): Promise<EnquiryResult> {
  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
  if (!endpoint) return { status: "not-connected" };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { status: "error", message: `The enquiry service returned ${res.status}.` };
    return { status: "sent" };
  } catch {
    return { status: "error", message: "The enquiry could not reach our server. Check your connection and try again." };
  }
}
