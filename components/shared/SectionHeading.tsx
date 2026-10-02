import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading level — keep H2 for all in-page section titles (H1 lives only in the hero) */
  level?: 2 | 3;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = 2,
  className = "",
}: SectionHeadingProps) {
  const Heading = level === 2 ? "h2" : "h3";

  return (
    <Reveal
      className={`pp-section-heading pp-section-heading--${align} ${className}`.trim()}
    >
      {eyebrow ? <p className="pp-eyebrow">{eyebrow}</p> : null}
      <Heading className="pp-section-heading__title">{title}</Heading>
      {description ? (
        <p className="pp-section-heading__description">{description}</p>
      ) : null}
    </Reveal>
  );
}
