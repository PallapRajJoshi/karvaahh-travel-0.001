import "./madhesh-section-heading.css";

interface MadheshSectionHeadingProps {
  eyebrow: string;
  heading: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  titleId?: string;
}

export default function MadheshSectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  theme = "light",
  titleId,
}: MadheshSectionHeadingProps) {
  return (
    <div
      className={`madhesh-section-heading madhesh-section-heading--${align} madhesh-section-heading--${theme}`}
    >
      <span className="madhesh-eyebrow">{eyebrow}</span>
      <h2 id={titleId} className="madhesh-section-heading__title">
        {heading}
      </h2>
      {description && (
        <p className="madhesh-section-heading__desc">{description}</p>
      )}
    </div>
  );
}
