"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { ANTARCTICA_ENQUIRY, contact } from "@/lib/antarctica/config";
import StickyBookingBar, { type BarAction } from "../asia/StickyBookingBar";

// Mobile: WhatsApp | Call | Enquire. antarctica.css turns the same bar into a
// floating Enquire Now | WhatsApp | Call cluster on desktop.
const ACTIONS: BarAction[] = [
  { label: "WhatsApp", href: ANTARCTICA_ENQUIRY, icon: MessageCircle, external: true },
  { label: "Call", href: contact.nepalPhoneHref, icon: Phone },
  { label: "Enquire", href: "#plan-trip", icon: Send, primary: true },
];

export default function AntarcticaStickyBar() {
  return <StickyBookingBar watchIds={["an-hero", "plan-trip", "an-final"]} pillLabel="Enquire Now" actions={ACTIONS} />;
}
