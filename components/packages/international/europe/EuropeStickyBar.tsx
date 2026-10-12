"use client";

import { Compass, MessageCircle, Send } from "lucide-react";
import { GENERAL_ENQUIRY } from "@/lib/europe/config";
import StickyBookingBar, { type BarAction } from "../asia/StickyBookingBar";

const ACTIONS: BarAction[] = [
  { label: "Explore Europe", href: "#packages", icon: Compass },
  { label: "Enquire Now", href: "#plan-trip", icon: Send, primary: true },
  { label: "WhatsApp", href: GENERAL_ENQUIRY, icon: MessageCircle, external: true },
];

/** Europe configuration of the shared sticky CTA (icons are components, so this lives client-side). */
export default function EuropeStickyBar() {
  return (
    <StickyBookingBar
      watchIds={["europe-hero", "plan-trip", "europe-final"]}
      pillLabel="Plan Your Europe Trip"
      pillHref="#plan-trip"
      actions={ACTIONS}
    />
  );
}
