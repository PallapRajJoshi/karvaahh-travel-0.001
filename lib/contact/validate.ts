import {
  BUDGET_VALUES,
  CONTACT_METHOD_VALUES,
  TRAVELER_COUNT_VALUES,
  TRAVEL_TYPE_VALUES,
} from "./options";

/**
 * One validator, used by the browser (instant feedback) AND by the server
 * action (the only check that matters — never trust the client).
 */

export type EnquiryValues = {
  name: string;
  email: string;
  phone: string;
  country: string;
  destination: string;
  travelDate: string;
  travelers: string;
  travelType: string;
  budget: string;
  contactMethod: string;
  message: string;
};

export type FieldName = keyof EnquiryValues;
export type FieldErrors = Partial<Record<FieldName, string>>;

/** Order used to focus the first invalid field. */
export const FIELD_ORDER: readonly FieldName[] = [
  "name",
  "email",
  "phone",
  "country",
  "destination",
  "travelDate",
  "travelers",
  "travelType",
  "budget",
  "contactMethod",
  "message",
];

export const EMPTY_VALUES: EnquiryValues = {
  name: "",
  email: "",
  phone: "",
  country: "",
  destination: "",
  travelDate: "",
  travelers: "",
  travelType: "",
  budget: "",
  contactMethod: "",
  message: "",
};

export const LIMITS = {
  name: 80,
  email: 120,
  phone: 24,
  country: 60,
  destination: 100,
  message: 2000,
} as const;

export type SubmitResult =
  | { ok: true }
  | { ok: false; kind: "validation"; fieldErrors: FieldErrors }
  | { ok: false; kind: "failed" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^[+\d\s().-]+$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Collapse control characters and trim; keeps newlines in the message field. */
export function clean(value: unknown, max: number, keepNewlines = false): string {
  if (typeof value !== "string") return "";
  const stripped = value.replace(keepNewlines ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, " ");
  return stripped.trim().slice(0, max);
}

export function normalizeValues(raw: Record<string, unknown>): EnquiryValues {
  return {
    name: clean(raw.name, LIMITS.name),
    email: clean(raw.email, LIMITS.email),
    phone: clean(raw.phone, LIMITS.phone),
    country: clean(raw.country, LIMITS.country),
    destination: clean(raw.destination, LIMITS.destination),
    travelDate: clean(raw.travelDate, 10),
    travelers: clean(raw.travelers, 8),
    travelType: clean(raw.travelType, 40),
    budget: clean(raw.budget, 20),
    contactMethod: clean(raw.contactMethod, 12),
    message: clean(raw.message, LIMITS.message, true),
  };
}

/** Yesterday (UTC) as YYYY-MM-DD — one day of slack covers every time zone. */
function earliestAllowedDate(): string {
  return new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function isRealDate(iso: string): boolean {
  if (!ISO_DATE_RE.test(iso)) return false;
  const d = new Date(`${iso}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === iso;
}

export function validateEnquiry(v: EnquiryValues): FieldErrors {
  const errors: FieldErrors = {};

  if (v.name.length < 2) errors.name = "Please enter your full name.";

  if (!v.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email)) errors.email = "That email address doesn’t look right.";

  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone) errors.phone = "Please enter a phone or WhatsApp number.";
  else if (!PHONE_CHARS_RE.test(v.phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Enter a valid number, including the country code if outside Nepal.";

  if (v.country.length < 2) errors.country = "Please tell us which country you’re in.";

  if (v.destination.length < 2)
    errors.destination = "Tell us where you’d like to go — “Not sure yet” is fine.";

  if (v.travelDate) {
    if (!isRealDate(v.travelDate)) errors.travelDate = "Please choose a valid date.";
    else if (v.travelDate < earliestAllowedDate()) errors.travelDate = "Travel date can’t be in the past.";
  }

  if (v.travelers && !TRAVELER_COUNT_VALUES.includes(v.travelers))
    errors.travelers = "Please choose from the list.";
  if (v.travelType && !TRAVEL_TYPE_VALUES.includes(v.travelType))
    errors.travelType = "Please choose from the list.";
  if (v.budget && !BUDGET_VALUES.includes(v.budget)) errors.budget = "Please choose from the list.";
  if (v.contactMethod && !CONTACT_METHOD_VALUES.includes(v.contactMethod))
    errors.contactMethod = "Please choose from the list.";

  if (v.message.length < 10)
    errors.message = "Please add a few details so our team can help (at least 10 characters).";

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
