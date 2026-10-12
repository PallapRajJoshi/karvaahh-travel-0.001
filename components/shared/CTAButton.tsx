import Link from "next/link";
import type { ReactNode } from "react";
import "./shared-cards.css";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

/** Pill call-to-action. In-page anchors and external links render as <a>; internal routes use next/link. */
export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const cls = `cta-button cta-button--${variant} ${className}`.trim();
  if (href.startsWith("#") || /^(https?:|mailto:|tel:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
