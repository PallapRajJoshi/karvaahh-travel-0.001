import { INQUIRY_ENDPOINT } from "./inquiry-config";

export interface InquiryValues {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  travelers: string;
  destination: string;
  interests: string[];
  duration: string;
  budget: string;
  notes: string;
}

export type FieldName = keyof InquiryValues;
export type InquiryErrors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,24}$/;

export function validateField(name: FieldName, values: InquiryValues): string | undefined {
  const v = values[name];
  switch (name) {
    case "fullName":
      return String(v).trim().length < 2 ? "Please enter your full name." : undefined;
    case "email":
      if (!String(v).trim()) return "Please enter your email address.";
      return EMAIL_RE.test(String(v).trim()) ? undefined : "Enter a valid email address, like name@example.com.";
    case "phone":
      if (!String(v).trim()) return undefined;
      return PHONE_RE.test(String(v).trim()) ? undefined : "Enter a valid phone or WhatsApp number, including the country code.";
    case "country":
      return String(v).trim().length < 2 ? "Please enter your country of residence." : undefined;
    case "travelers": {
      const n = Number(v);
      if (!String(v).trim()) return "Please enter the number of travelers.";
      return Number.isInteger(n) && n >= 1 && n <= 99 ? undefined : "Enter a whole number between 1 and 99.";
    }
    case "interests":
      return (v as string[]).length === 0 ? "Choose at least one interest." : undefined;
    case "notes":
      return String(v).length > 1500 ? "Please keep this under 1,500 characters." : undefined;
    default:
      return undefined;
  }
}

const REQUIRED_ORDER: FieldName[] = ["fullName", "email", "phone", "country", "travelers", "interests", "notes"];

export function validateAll(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};
  for (const name of REQUIRED_ORDER) {
    const msg = validateField(name, values);
    if (msg) errors[name] = msg;
  }
  return errors;
}

export type SubmitResult =
  | { kind: "sent" }
  | { kind: "not-configured" }
  | { kind: "failed"; reason: string };

/**
 * Only returns "sent" when a configured endpoint answered with a 2xx.
 * Never fabricates success.
 */
export async function submitInquiry(values: InquiryValues): Promise<SubmitResult> {
  if (!INQUIRY_ENDPOINT) return { kind: "not-configured" };

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "culture-festival-experiences", submittedAt: new Date().toISOString(), ...values }),
      signal: controller.signal,
    });
    if (!res.ok) return { kind: "failed", reason: `The server responded with status ${res.status}.` };
    return { kind: "sent" };
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === "AbortError";
    return { kind: "failed", reason: aborted ? "The request timed out." : "We couldn’t reach the server." };
  } finally {
    window.clearTimeout(timer);
  }
}

export function summarise(values: InquiryValues, interestLabels: string[], destinationLabel: string, durationLabel: string): string {
  const optional = (label: string, value: string) => (value.trim() ? [`${label}: ${value.trim()}`] : []);
  return [
    "Culture & Festival Experiences inquiry",
    "",
    `Name: ${values.fullName.trim()}`,
    `Email: ${values.email.trim()}`,
    ...optional("Phone / WhatsApp", values.phone),
    `Country: ${values.country.trim()}`,
    ...optional("Preferred travel dates", values.travelDates),
    `Travelers: ${values.travelers}`,
    ...optional("Preferred destination", destinationLabel),
    `Cultural interests: ${interestLabels.join(", ")}`,
    ...optional("Preferred duration", durationLabel),
    ...optional("Budget", values.budget),
    ...optional("Additional requirements", values.notes),
  ].join("\n");
}
