import "./gandaki-section-heading.css";

interface GandakiSectionHeadingProps {
  eyebrow: string;
  heading: string;
  emphasis?: string;
  description?: string;
  index?: string;
  align?: "left" | "center";
  /** id for the <h2>, so the section can use aria-labelledby */
  titleId?: string;
}

export default function GandakiSectionHeading({
  eyebrow,
  heading,
  emphasis,
  description,
  index,
  align = "left",
  titleId,
}: GandakiSectionHeadingProps) {
  return (
    <div className={`gandaki-heading gandaki-heading--${align} gandaki-reveal`}>
      {index && (
        <span className="gandaki-heading__index" aria-hidden="true">
          {index}
        </span>
      )}
      <p className="gandaki-heading__eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="gandaki-heading__title">
        {heading}
        {emphasis && <em className="gandaki-heading__emphasis"> {emphasis}</em>}
      </h2>
      {description && <p className="gandaki-heading__description">{description}</p>}
    </div>
  );
}
