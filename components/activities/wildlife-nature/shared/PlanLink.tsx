"use client";

import type { ReactNode } from "react";
import type { PrefillPayload } from "@/data/activities/wildlife-nature/types";
import { PLAN_ANCHOR, PREFILL_EVENT } from "./prefill";

interface PlanLinkProps {
  prefill?: PrefillPayload;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

/**
 * Anchor to the inquiry form that also pre-fills it. Works as a plain #plan link without JS;
 * with JS it broadcasts the selection to NatureInquiryForm before the browser scrolls.
 */
export function PlanLink({ prefill, className, children, "aria-label": ariaLabel }: PlanLinkProps) {
  return (
    <a
      href={PLAN_ANCHOR}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (prefill) {
          window.dispatchEvent(new CustomEvent<PrefillPayload>(PREFILL_EVENT, { detail: prefill }));
        }
      }}
    >
      {children}
    </a>
  );
}
