interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  /** Light text for dark/image backgrounds. */
  tone?: "default" | "inverse";
}

/**
 * Shared section heading. `id` is wired to the section's `aria-labelledby`
 * so every <section> is a named landmark region.
 */
export function SectionHeading({ id, eyebrow, title, subtitle, align = "center", tone = "default" }: SectionHeadingProps) {
  return (
    <header
      className={`nsa-heading nsa-heading--${align} nsa-heading--${tone}`}
      data-reveal=""
    >
      {eyebrow ? <p className="nsa-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="nsa-heading__title">
        {title}
      </h2>
      {subtitle ? <p className="nsa-heading__subtitle">{subtitle}</p> : null}
    </header>
  );
}
