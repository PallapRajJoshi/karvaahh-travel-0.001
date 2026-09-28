import "./sudurpaschim-section-heading.css";

interface SudurpaschimSectionHeadingProps {
  index: string;
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SudurpaschimSectionHeading({
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
    >
      <span className="sp-heading__index" aria-hidden="true">
        {index}
      </span>
      <p className="sp-heading__eyebrow">{eyebrow}</p>
      <h2 className="sp-heading__title">{heading}</h2>
      {description && <p className="sp-heading__desc">{description}</p>}
      <span className="sp-heading__rule" aria-hidden="true" />
    </div>
  );
}
