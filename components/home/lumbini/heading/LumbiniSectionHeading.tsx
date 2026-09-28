import "./lumbini-section-heading.css";

interface LumbiniSectionHeadingProps {
  index: string;
  eyebrow: string;
  heading: string;
  emphasis?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

/**
 * Shared editorial section heading used across every Lumbini province section.
 * Mirrors the heading convention used in Koshi / Madhesh / Bagmati / Gandaki.
 */
export default function LumbiniSectionHeading({
  index,
  eyebrow,
  heading,
  emphasis,
  description,
  align = "left",
  theme = "light",
}: LumbiniSectionHeadingProps) {
  return (
    <header
      className={`lumbini-heading lumbini-heading--${align} lumbini-heading--${theme}`}
    >
      <span className="lumbini-heading__index" aria-hidden="true">
        {index}
      </span>

      <div className="lumbini-heading__content">
        <p className="lumbini-heading__eyebrow">{eyebrow}</p>

        <h2 className="lumbini-heading__title">
          {heading}
          {emphasis ? (
            <span className="lumbini-heading__emphasis"> {emphasis}</span>
          ) : null}
        </h2>

        {description ? (
          <p className="lumbini-heading__description">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
