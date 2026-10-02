import type { InquiryPrefill } from "../types";

export const PREFILL_EVENT = "culture:prefill";
export const PLAN_ID = "plan";

/**
 * Card CTAs that have no dedicated destination page yet open the inquiry
 * form, pre-filled with what the visitor was looking at. This keeps every
 * CTA useful (no dead links) and gives sales a warmer lead.
 */
export function requestInquiry(detail: InquiryPrefill): void {
  window.dispatchEvent(new CustomEvent<InquiryPrefill>(PREFILL_EVENT, { detail }));
  const target = document.getElementById(PLAN_ID);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
