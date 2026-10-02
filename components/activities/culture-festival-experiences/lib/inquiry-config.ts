/**
 * Inquiry delivery configuration.
 *
 * No inquiry/booking backend is known for this project, so nothing here is
 * hard-coded. Point these at the site's single source of truth for contact
 * details (the audit found conflicting numbers) or set env vars:
 *
 *   NEXT_PUBLIC_INQUIRY_ENDPOINT   POST endpoint that accepts JSON
 *   NEXT_PUBLIC_CONTACT_EMAIL      inbox for the email fallback
 *   NEXT_PUBLIC_WHATSAPP_NUMBER    digits only, with country code, e.g. 97798XXXXXXXX
 *
 * With none set, the form never claims a submission was sent. It validates,
 * then hands the visitor a ready-to-send summary instead.
 */
export const INQUIRY_ENDPOINT = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT ?? "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
/** Fallback page if neither email nor WhatsApp is configured. Verify this route exists. */
export const CONTACT_PAGE = "/contact";
