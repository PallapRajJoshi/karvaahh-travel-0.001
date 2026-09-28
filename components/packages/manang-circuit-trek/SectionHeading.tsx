interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

/** Heading block used by every section. `id` is referenced by aria-labelledby. */
export default function SectionHeading({ id, eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <header className={`mc-heading${align === "center" ? " mc-heading--center" : ""}`}>
      <p className="mc-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="mc-heading__title">
        {title}
      </h2>
      {intro ? <p className="mc-heading__intro">{intro}</p> : null}
    </header>
  );
}
