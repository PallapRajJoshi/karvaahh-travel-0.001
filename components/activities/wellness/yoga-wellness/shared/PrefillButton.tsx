"use client";

import type { ReactNode } from "react";
import { useInquiryPrefill } from "./InquiryPrefill";
import { SECTION_IDS } from "../data/config";
import "./Buttons.css";

type Props = {
  children: ReactNode;
  destination?: string;
  experience?: string;
  purpose?: string;
  variant?: "primary" | "ghost" | "light" | "outline";
  className?: string;
};

/** A CTA that prefills the inquiry form, then scrolls to it. */
export default function PrefillButton({
  children,
  destination,
  experience,
  purpose,
  variant = "outline",
  className = "",
}: Props) {
  const { requestPrefill } = useInquiryPrefill();

  function onClick() {
    requestPrefill({ destination, experience, purpose });
    const el = document.getElementById(SECTION_IDS.inquiry);
    if (el) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${SECTION_IDS.inquiry}`);
    }
  }

  return (
    <button type="button" onClick={onClick} className={`ykw-btn ykw-btn--${variant} ${className}`}>
      {children}
    </button>
  );
}
