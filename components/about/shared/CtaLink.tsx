import Link from "next/link";
import type { ReactNode } from "react";
import { AboutIcon } from "./AboutIcon";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-light" | "ghost-dark";
  arrow?: boolean;
}

/**
 * Button-styled internal link. Real <a> elements (not <button>) because every CTA
 * navigates – keeps middle-click, prefetching and screen-reader semantics right.
 */
export function CtaLink({ href, children, variant = "primary", arrow = true }: CtaLinkProps) {
  return (
    <Link href={href} className={`ab-btn ab-btn--${variant}`}>
      <span>{children}</span>
      {arrow ? <AboutIcon name="arrow" className="ab-btn__arrow" /> : null}
    </Link>
  );
}
