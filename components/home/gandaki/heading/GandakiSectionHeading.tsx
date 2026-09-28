import "./gandaki-section-heading.css";

interface GandakiSectionHeadingProps {
  eyebrow: string;
  heading: string;
  emphasis?: string;
  description?: string;
  index?: string;
  align?: "left" | "center";
}

export default function GandakiSectionHeading({
  eyebrow,
  heading,
  emphasis,
  description,
  index,
  align = "left",
}: GandakiSectionHeadingProps) {
  return (
    <div className={`gandaki-heading gandaki-heading--${align}`}>
      {index && <span className="gandaki-heading__index">{index}</span>}
      <p className="gandaki-heading__eyebrow">{eyebrow}</p>
      <h2 className="gandaki-heading__title">
        {heading}
        {emphasis && <em className="gandaki-heading__emphasis"> {emphasis}</em>}
      </h2>
      {description && <p className="gandaki-heading__description">{description}</p>}
    </div>
  );
}
