interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "inverse";
}

/** `id` is wired to the section's `aria-labelledby`, so every section is a named region. */
export function SectionHeading({ id, eyebrow, title, subtitle, tone = "default" }: SectionHeadingProps) {
  return (
    <header className={`nbc-heading nbc-heading--${tone}`} data-reveal="">
      <p className="nbc-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="nbc-heading__title">
        {title}
      </h2>
      {subtitle ? <p className="nbc-heading__subtitle">{subtitle}</p> : null}
    </header>
  );
}
