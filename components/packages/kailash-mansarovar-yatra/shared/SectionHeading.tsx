interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/** h2 + eyebrow + intro. `id` is used for the section's aria-labelledby. */
export default function SectionHeading({
  id,
  eyebrow,
  heading,
  intro,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <header className={`km-heading km-heading--${align} km-heading--${tone}`}>
      {eyebrow ? <p className="km-eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="km-heading__title">
        {heading}
      </h2>
      {intro ? <p className="km-heading__intro">{intro}</p> : null}
    </header>
  );
}
