interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
}

/** Shared section header: eyebrow, editorial title, gold rule, optional lede. */
export default function SectionHeading({ id, eyebrow, title, lede, align = "left", tone = "light", as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <header className={`cx-heading cx-heading--${align} cx-heading--${tone}`}>
      {eyebrow ? <p className="cx-heading__eyebrow">{eyebrow}</p> : null}
      <Tag id={id} className="cx-heading__title">
        {title}
      </Tag>
      <GoldDivider />
      {lede ? <p className="cx-heading__lede">{lede}</p> : null}
    </header>
  );
}

/** Understated ornament inspired by Newar lattice windows: a diamond between two rules. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <span className={["cx-divider", className].filter(Boolean).join(" ")} aria-hidden="true">
      <span className="cx-divider__line" />
      <svg viewBox="0 0 16 16" width="14" height="14" focusable="false">
        <path d="M8 1l7 7-7 7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="8" cy="8" r="1.6" fill="currentColor" />
      </svg>
      <span className="cx-divider__line" />
    </span>
  );
}
