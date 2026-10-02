"use client";

import Link from "next/link";
import type { InquiryPrefill } from "../types";
import { requestInquiry, PLAN_ID } from "../lib/prefill";
import { ArrowIcon } from "./Icons";

interface CtaLinkProps {
  children: React.ReactNode;
  variant?: "gold" | "ghost" | "ghost-light" | "text";
  /** Real destination page, when one exists. */
  href?: string;
  /** Otherwise: open the inquiry form pre-filled with this. */
  prefill?: InquiryPrefill;
  /** Plain in-page anchor, e.g. "#festivals". */
  anchor?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * One CTA primitive for the whole page:
 *  - `href`    → normal Next link
 *  - `anchor`  → in-page jump
 *  - `prefill` → opens the inquiry form (works without JS as a #plan jump)
 */
export default function CtaLink({ children, variant = "gold", href, prefill, anchor, className, ariaLabel }: CtaLinkProps) {
  const cls = ["cx-cta", `cx-cta--${variant}`, className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span>{children}</span>
      <ArrowIcon className="cx-cta__arrow" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  if (anchor) {
    return (
      <a href={anchor} className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <a
      href={`#${PLAN_ID}`}
      className={cls}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        requestInquiry(prefill ?? {});
      }}
    >
      {inner}
    </a>
  );
}
