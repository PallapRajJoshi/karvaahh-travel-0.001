import { INQUIRY_ENDPOINT } from "@/content/corporate-retreats";

export interface CorporateInquiryPayload {
  company: string;
  organizationType: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  participants: string;
  destination: string;
  retreatType: string;
  dates: string;
  duration: string;
  budget: string;
  accommodation: string;
  transportation: string;
  activities: string[];
  specialRequirements: string;
  message: string;
  /** extra selections from the customization section */
  extras: { mealPlan: string; accessibility: string; dietary: string };
  /** honeypot: must stay empty */
  website: string;
}

/**
 * Adapter to the EXISTING Karvaahh form system.
 * Default: POST JSON to INQUIRY_ENDPOINT. Replace the body of this function if your
 * system expects a different shape (server action, form-encoded, third-party service).
 * Throws on any non-2xx response so the UI never shows a false success message.
 */
export async function submitCorporateInquiry(payload: CorporateInquiryPayload): Promise<void> {
  if (payload.website) return; // bot: pretend success without sending
  const res = await fetch(INQUIRY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "corporate-tours-retreats", ...payload }),
  });
  if (!res.ok) throw new Error(`Inquiry failed with status ${res.status}`);
}
