import type { NotifyInterest, NotifySeason } from "./data/skydivingData";

export interface SkydiveNotificationPayload {
  interest: NotifyInterest;
  season: NotifySeason;
  year: string;
  groupSize: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  page: string;
}

export type SubmitResult = "sent" | "not-connected" | "error";

/**
 * PLACEHOLDER SUBMIT HANDLER — there is no backend yet.
 *
 * To connect: set NEXT_PUBLIC_SKYDIVE_NOTIFY_ENDPOINT to a URL that accepts a
 * JSON POST (Formspree, a Next.js route handler, a CRM webhook, etc.).
 * Until then the form never pretends to succeed; it returns "not-connected".
 */
const ENDPOINT = process.env.NEXT_PUBLIC_SKYDIVE_NOTIFY_ENDPOINT;

export async function submitSkydiveNotification(payload: SkydiveNotificationPayload): Promise<SubmitResult> {
  if (!ENDPOINT) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[skydiving] Notification form not connected. Payload that would be sent:", payload);
    }
    return "not-connected";
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok ? "sent" : "error";
  } catch {
    return "error";
  }
}
