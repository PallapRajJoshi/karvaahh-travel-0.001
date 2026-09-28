interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/** Shared h2 block. `id` is used by the parent section's aria-labelledby. */
export default function SectionHeading({ id, eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <header className={`mc-heading${align === "center" ? " mc-heading--center" : ""}`} data-reveal>
      {eyebrow ? <p className="mc-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="mc-heading__title">
        {title}
      </h2>
      {subtitle ? <p className="mc-heading__subtitle">{subtitle}</p> : null}
    </header>
  );
}
