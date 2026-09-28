import Link from "next/link";
import type { Cta } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import { Icon } from "./Icon";

/**
 * One button/link component for every CTA on the page.
 * In-page anchors (#…) render a plain <a> so smooth scrolling and focus work
 * natively; everything else uses next/link.
 */
export function CtaLink({ cta, className }: { cta: Cta; className?: string }) {
  const variant = cta.variant ?? "primary";
  const isTextLink = variant === "ghost" || variant === "light-ghost";
  const classes = ["akop-btn", `akop-btn--${variant}`, className].filter(Boolean).join(" ");

  const content = (
    <>
      <span>{cta.label}</span>
      {isTextLink ? <Icon name="arrow-right" size={18} className="akop-btn__arrow" /> : null}
    </>
  );

  if (cta.href.startsWith("#")) {
    return (
      <a href={cta.href} className={classes} aria-label={cta.ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={classes} aria-label={cta.ariaLabel}>
      {content}
    </Link>
  );
}
