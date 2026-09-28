import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  /** id for aria-labelledby on the parent <section>. */
  id: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/** Eyebrow + H2 + subtitle, used by every content section. */
export function SectionHeading({ eyebrow, heading, subtitle, id, align = "left", tone = "light" }: SectionHeadingProps) {
  const classes = [
    "akop-heading",
    `akop-heading--${align}`,
    tone === "dark" ? "akop-heading--on-dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Reveal as="header" className={classes}>
      {eyebrow ? <p className="akop-eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="akop-heading__title">
        {heading}
      </h2>
      {subtitle ? <p className="akop-heading__subtitle">{subtitle}</p> : null}
    </Reveal>
  );
}
