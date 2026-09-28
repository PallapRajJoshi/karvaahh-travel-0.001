import Link from "next/link";
import type { ReactNode } from "react";
import type { Cta } from "./data/bungeeJumpingData";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({ id, eyebrow, title, intro, align = "left", tone = "light" }: SectionHeadingProps) {
  return (
    <header className={`bj-heading bj-heading--${align} bj-heading--${tone}`} data-reveal>
      {eyebrow && <p className="bj-heading__eyebrow">{eyebrow}</p>}
      <h2 id={id} className="bj-heading__title">{title}</h2>
      {intro && <p className="bj-heading__intro">{intro}</p>}
    </header>
  );
}

interface CtaLinkProps {
  cta: Cta;
  variant?: "primary" | "ghost" | "text";
  className?: string;
}

/** Anchor CTA. Enquiry presets are exposed as data-attributes and picked up by EnquiryForm. */
export function CtaLink({ cta, variant = "primary", className = "" }: CtaLinkProps) {
  const cls = `bj-btn bj-btn--${variant} ${className}`.trim();
  const data = {
    "data-enquiry-destination": cta.preset?.destination,
    "data-enquiry-activity": cta.preset?.activity,
  };
  if (cta.href.startsWith("#")) {
    return <a href={cta.href} className={cls} {...data}>{cta.label}</a>;
  }
  return <Link href={cta.href} className={cls} {...data}>{cta.label}</Link>;
}

export function PinIcon() {
  return (
    <svg className="bj-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
