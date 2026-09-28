import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "ghost-inverse" | "text";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  ariaLabel?: string;
  /** Adds a trailing arrow that nudges on hover. */
  arrow?: boolean;
  className?: string;
}

/**
 * One button/link style for the whole page. In-page anchors ("#packages")
 * render as a plain <a> so the browser handles smooth scrolling natively;
 * routes use next/link for prefetching.
 */
export function CtaLink({ href, children, variant = "primary", ariaLabel, arrow = false, className }: CtaLinkProps) {
  const cls = ["nsa-btn", `nsa-btn--${variant}`, className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <Icon name="arrow-right" size={18} className="nsa-btn__arrow" /> : null}
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
