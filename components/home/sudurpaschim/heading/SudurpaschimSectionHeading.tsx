import "./sudurpaschim-section-heading.css";

interface SudurpaschimSectionHeadingProps {
  /** Rendered on the h2 so the section's aria-labelledby resolves. */
  id?: string;
  index: string;
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SudurpaschimSectionHeading({
  id,
  index,
  eyebrow,
  heading,
  description,
  align = "left",
  theme = "light",
}: SudurpaschimSectionHeadingProps) {
  return (
    <div
      className={`sp-heading sp-heading--${align} sp-heading--${theme}`}
      data-reveal
    >
      <span className="sp-heading__index" aria-hidden="true">
        {index}
      </span>
      <p className="sp-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="sp-heading__title">
        {heading}
      </h2>
      {description && <p className="sp-heading__desc">{description}</p>}
      <span className="sp-heading__rule" aria-hidden="true" />
    </div>
  );
}
