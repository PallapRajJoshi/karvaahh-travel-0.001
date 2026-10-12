"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { SA_ENQUIRY, contact } from "@/lib/south-africa/config";
import StickyBookingBar, { type BarAction } from "../asia/StickyBookingBar";

// Mobile: WhatsApp | Call | Enquire. south-africa.css turns the same bar into a
// floating Enquire Now | WhatsApp | Call cluster on desktop.
const ACTIONS: BarAction[] = [
  { label: "WhatsApp", href: SA_ENQUIRY, icon: MessageCircle, external: true },
  { label: "Call", href: contact.nepalPhoneHref, icon: Phone },
  { label: "Enquire", href: "#plan-trip", icon: Send, primary: true },
];

export default function SouthAfricaStickyBar() {
  return <StickyBookingBar watchIds={["za-hero", "plan-trip", "za-final"]} pillLabel="Enquire Now" actions={ACTIONS} />;
}
