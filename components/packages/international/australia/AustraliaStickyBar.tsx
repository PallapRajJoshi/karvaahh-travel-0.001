"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { AU_ENQUIRY, contact } from "@/lib/australia/config";
import StickyBookingBar, { type BarAction } from "../asia/StickyBookingBar";

// Defined client-side: icon components cannot be passed from a server component.
// Mobile shows WhatsApp | Call | Enquire; australia.css turns the same bar into
// a floating Enquire Now | WhatsApp | Call cluster on desktop.
const ACTIONS: BarAction[] = [
  { label: "WhatsApp", href: AU_ENQUIRY, icon: MessageCircle, external: true },
  { label: "Call", href: contact.nepalPhoneHref, icon: Phone },
  { label: "Enquire", href: "#plan-trip", icon: Send, primary: true },
];

export default function AustraliaStickyBar() {
  return <StickyBookingBar watchIds={["au-hero", "plan-trip", "asia-final"]} pillLabel="Enquire Now" actions={ACTIONS} />;
}
