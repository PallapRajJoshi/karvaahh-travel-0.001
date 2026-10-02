import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost" | "outline" | "text";
  arrow?: boolean;
  className?: string;
};

/** Hash links render a plain <a>; site routes use next/link. */
export function CtaLink({ href, children, variant = "primary", arrow = true, className = "" }: CtaLinkProps) {
  const cls = `et-btn et-btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {arrow && variant !== "text" ? <Icon name="arrow" size={18} /> : null}
    </>
  );
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
