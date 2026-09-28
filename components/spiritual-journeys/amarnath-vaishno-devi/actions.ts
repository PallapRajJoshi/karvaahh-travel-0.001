"use server";

/**
 * Yatra enquiry — server action.
 *
 * INTEGRATION POINT: no enquiry API was confirmed in the project. This action validates on the
 * server, then forwards to ENQUIRY_WEBHOOK_URL (CRM / email service / existing /api route) if set.
 * Without it, it returns an honest "not configured" error — it never pretends to succeed.
 * If the site already has an enquiry handler, call it from `forwardEnquiry` instead.
 */

export interface EnquiryState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<EnquiryField, string>>;
}

type EnquiryField =
  | "fullName"
  | "phone"
  | "email"
  | "travellers"
  | "travelDate"
  | "days"
  | "startCity"
  | "route"
  | "vaishnoDevi"
  | "kashmirExtension"
  | "accommodation"
  | "specialRequirements"
  | "message";

const ROUTES = ["pahalgam", "baltal", "guidance"] as const;
const VAISHNO = ["include", "amarnath-only", "guidance"] as const;
const EXTENSION = ["yes", "no"] as const;
const STAY = ["standard", "comfort", "premium", "guidance"] as const;

const str = (fd: FormData, key: string, max = 200) => String(fd.get(key) ?? "").trim().slice(0, max);
const oneOf = <T extends readonly string[]>(v: string, list: T): v is T[number] => (list as readonly string[]).includes(v);

export async function submitYatraEnquiry(_prev: EnquiryState, fd: FormData): Promise<EnquiryState> {
  // Honeypot: real users never fill this.
  if (str(fd, "company")) return { status: "success", message: "Thank you." };

  const data = {
    fullName: str(fd, "fullName", 120),
    phone: str(fd, "phone", 20),
    email: str(fd, "email", 160),
    travellers: str(fd, "travellers", 3),
    travelDate: str(fd, "travelDate", 10),
    days: str(fd, "days", 3),
    startCity: str(fd, "startCity", 80),
    route: str(fd, "route", 20),
    vaishnoDevi: str(fd, "vaishnoDevi", 20),
    kashmirExtension: str(fd, "kashmirExtension", 5),
    accommodation: str(fd, "accommodation", 20),
    specialRequirements: str(fd, "specialRequirements", 500),
    message: str(fd, "message", 2000),
  };

  const errors: EnquiryState["fieldErrors"] = {};
  if (data.fullName.length < 2) errors.fullName = "Enter your full name.";
  if (!/^\+?[0-9\s-]{7,16}$/.test(data.phone)) errors.phone = "Enter a mobile number with 7–15 digits.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  const travellers = Number(data.travellers);
  if (!Number.isInteger(travellers) || travellers < 1 || travellers > 99) errors.travellers = "Enter between 1 and 99 travellers.";
  if (data.days && (!Number.isInteger(Number(data.days)) || Number(data.days) < 1 || Number(data.days) > 60))
    errors.days = "Enter between 1 and 60 days.";
  if (data.route && !oneOf(data.route, ROUTES)) errors.route = "Choose a route option.";
  if (data.vaishnoDevi && !oneOf(data.vaishnoDevi, VAISHNO)) errors.vaishnoDevi = "Choose an option.";
  if (data.kashmirExtension && !oneOf(data.kashmirExtension, EXTENSION)) errors.kashmirExtension = "Choose yes or no.";
  if (data.accommodation && !oneOf(data.accommodation, STAY)) errors.accommodation = "Choose an option.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Check the highlighted fields and try again.", fieldErrors: errors };
  }

  try {
    const ok = await forwardEnquiry({ ...data, source: "amarnath-vaishno-devi-yatra" });
    if (!ok) {
      return {
        status: "error",
        message:
          "We couldn't send your enquiry online right now. Please contact us directly and we'll help you plan your Yatra.",
      };
    }
    return {
      status: "success",
      message: "Enquiry sent. Our team will contact you to discuss your Yatra. This is not a booking confirmation.",
    };
  } catch {
    return { status: "error", message: "Something went wrong while sending. Please try again or contact us directly." };
  }
}

async function forwardEnquiry(payload: Record<string, string>): Promise<boolean> {
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) {
    console.warn("[avd-enquiry] ENQUIRY_WEBHOOK_URL is not set — enquiry not delivered.");
    return false;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  return res.ok;
}
