import Reveal from "./Reveal";
import "./section-heading.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Alias of `title` (used by some destination pages). */
  heading?: string;
  /** Alias of `description`. */
  subheading?: string;
  align?: "left" | "center";
  /** Heading level — keep H2 for all in-page section titles (H1 lives only in the hero) */
  level?: 2 | 3;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title: titleProp,
  description: descriptionProp,
  heading,
  subheading,
  align = "center",
  level = 2,
  className = "",
}: SectionHeadingProps) {
  const Heading = level === 2 ? "h2" : "h3";
  const title = titleProp ?? heading;
  const description = descriptionProp ?? subheading;

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
