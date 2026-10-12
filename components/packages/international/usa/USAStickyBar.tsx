"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { USA_ENQUIRY, contact } from "@/lib/usa/config";
import StickyBookingBar, { type BarAction } from "../asia/StickyBookingBar";

// Defined client-side: icon components cannot be passed from a server component.
// Mobile shows WhatsApp | Call | Enquire; usa.css turns the same bar into a
// floating Enquire Now | WhatsApp | Call cluster on desktop.
const ACTIONS: BarAction[] = [
  { label: "WhatsApp", href: USA_ENQUIRY, icon: MessageCircle, external: true },
  { label: "Call", href: contact.nepalPhoneHref, icon: Phone },
  { label: "Enquire", href: "#plan-trip", icon: Send, primary: true },
];

export default function USAStickyBar() {
  return <StickyBookingBar watchIds={["us-hero", "plan-trip", "asia-final"]} pillLabel="Enquire Now" actions={ACTIONS} />;
}
