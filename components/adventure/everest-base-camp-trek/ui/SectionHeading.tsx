interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** id used by the section's aria-labelledby. */
  id: string;
  /** Render as h1 only for the hero; everything else is h2. */
  level?: 2 | 3;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", id, level = 2 }: Props) {
  const H = level === 2 ? "h2" : "h3";
  return (
    <header className={`ebc-heading${align === "center" ? " ebc-heading--center" : ""}`} data-reveal="">
      {eyebrow && <p className="ebc-heading__eyebrow">{eyebrow}</p>}
      <H id={id} className="ebc-heading__title">
        {title}
      </H>
      {subtitle && <p className="ebc-heading__subtitle">{subtitle}</p>}
    </header>
  );
}
