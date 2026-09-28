import Link from "next/link";
import type { CtaLink } from "../data/types";
import { Icon } from "./Icon";

interface CtaButtonProps extends CtaLink {
  className?: string;
  /** Show the trailing arrow (default: primary only). */
  arrow?: boolean;
}

/** Renders a hash link as <a> (same-page scroll) and everything else via next/link. */
export default function CtaButton({ label, href, variant, className, arrow }: CtaButtonProps) {
  const cls = `mc-btn mc-btn--${variant}${className ? ` ${className}` : ""}`;
  const showArrow = arrow ?? variant === "primary";
  const content = (
    <>
      <span>{label}</span>
      {showArrow ? <Icon name="arrow" /> : null}
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
