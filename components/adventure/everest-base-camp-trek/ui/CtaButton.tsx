import Link from "next/link";
import type { CtaLink } from "../types";
import Icon from "./Icon";

type Variant = CtaLink["variant"] | "dark" | "outline";

interface Props {
  href: string;
  label: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  /** Extra context for screen readers when the visible label repeats across cards. */
  srContext?: string;
}

/** In-page anchors render as <a>; routes use next/link for prefetching. */
export default function CtaButton({ href, label, variant = "primary", arrow = true, className = "", srContext }: Props) {
  const cls = `ebc-btn${variant !== "primary" ? ` ebc-btn--${variant}` : ""} ${className}`.trim();
  const content = (
    <>
      <span>
        {label}
        {srContext && <span className="ebc-sr-only"> — {srContext}</span>}
      </span>
      {arrow && <Icon name="arrow-right" />}
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
