"use client";

import { Compass, MessageCircle, Send } from "lucide-react";
import { RUSSIA_ENQUIRY } from "@/lib/russia/config";
import StickyBookingBar, { type BarAction } from "../asia/StickyBookingBar";

// Defined client-side: icon components cannot be passed from a server component.
const ACTIONS: BarAction[] = [
  { label: "Explore Russia", href: "#explore", icon: Compass },
  { label: "WhatsApp", href: RUSSIA_ENQUIRY, icon: MessageCircle, external: true },
  { label: "Enquire Now", href: "#plan-trip", icon: Send, primary: true },
];

export default function RussiaStickyBar() {
  return <StickyBookingBar watchIds={["ru-hero", "plan-trip", "asia-final"]} pillLabel="Plan Your Russia Trip" actions={ACTIONS} />;
}
