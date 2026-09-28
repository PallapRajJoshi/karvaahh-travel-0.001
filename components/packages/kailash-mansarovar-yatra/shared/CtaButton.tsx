import Link from "next/link";
import type { CtaLink } from "../types";
import Icon from "./Icon";

interface CtaButtonProps {
  cta: CtaLink;
  /** Use light styling on dark / photographic backgrounds. */
  onDark?: boolean;
  className?: string;
  /** Extra context for screen readers when several buttons share a label. */
  srContext?: string;
}

export default function CtaButton({ cta, onDark, className, srContext }: CtaButtonProps) {
  const cls = [
    "km-btn",
    `km-btn--${cta.variant}`,
    onDark ? "km-btn--on-dark" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span>{cta.label}</span>
      {srContext ? <span className="km-sr-only"> — {srContext}</span> : null}
      <Icon name={cta.href.startsWith("#") ? "arrow-down" : "arrow-right"} size={18} className="km-btn__icon" />
    </>
  );

  if (cta.external) {
    return (
      <a href={cta.href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={cls}>
      {inner}
    </Link>
  );
}
