"use client";

import type { MouseEvent, ReactNode } from "react";
import type { InquiryPrefill } from "./data/types";
import { INQUIRY_ANCHOR } from "./data/site";

export const PREFILL_EVENT = "rt:inquiry-prefill";

interface PlanLinkProps {
  href?: string;
  prefill?: InquiryPrefill;
  className?: string;
  children: ReactNode;
}

/**
 * Anchor that works without JavaScript (plain in-page link). With JS it also
 * tells the inquiry form which destination / adventure type the visitor picked,
 * so "Customize This Journey" lands on a form that already knows the journey.
 */
export default function PlanLink({
  href = INQUIRY_ANCHOR,
  prefill,
  className,
  children,
}: PlanLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (prefill && href === INQUIRY_ANCHOR) {
      window.dispatchEvent(new CustomEvent<InquiryPrefill>(PREFILL_EVENT, { detail: prefill }));
    }
    const id = href.startsWith("#") ? href.slice(1) : "";
    const target = id ? document.getElementById(id) : null;
    if (target) {
      event.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", href);
      if (id === INQUIRY_ANCHOR.slice(1)) {
        // Move focus to the first field so keyboard users land in the form.
        window.setTimeout(() => {
          target.querySelector<HTMLElement>("input, select, textarea")?.focus({
            preventScroll: true,
          });
        }, reduce ? 0 : 450);
      }
    }
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
