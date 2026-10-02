import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`phoksundo-heading phoksundo-heading--${align}`} data-reveal>
      {eyebrow ? <span className="phoksundo-heading__eyebrow">{eyebrow}</span> : null}
      <h2 className="phoksundo-heading__title">{title}</h2>
      {description ? <p className="phoksundo-heading__description">{description}</p> : null}
    </div>
  );
}
