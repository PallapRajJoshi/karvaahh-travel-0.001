import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "sand" | "dark";
  actions?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Shared section frame: consistent spacing, heading hierarchy (h2) and landmark labelling. */
export function Section({ id, eyebrow, title, lede, tone = "light", actions, className = "", children }: SectionProps) {
  const toneClass = tone === "light" ? "" : ` dh-section--${tone}`;
  return (
    <section id={id} className={`dh-section${toneClass} ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className="dh-container">
        <header className="dh-section__head dh-reveal">
          <div className="dh-section__titles">
            {eyebrow ? <p className="dh-eyebrow">{eyebrow}</p> : null}
            <h2 className="dh-title" id={`${id}-title`}>
              {title}
            </h2>
            {lede ? <p className="dh-lede">{lede}</p> : null}
          </div>
          {actions}
        </header>
        {children}
      </div>
    </section>
  );
}
