import "./karnali-section-heading.css";

interface KarnaliSectionHeadingProps {
  eyebrow: string;
  heading: string;
  goldWord?: string;
  description?: string;
  align?: "left" | "center";
  sectionNumber?: string;
  light?: boolean;
}

export default function KarnaliSectionHeading({
  eyebrow,
  heading,
  goldWord,
  description,
  align = "left",
  sectionNumber,
  light = false,
}: KarnaliSectionHeadingProps) {
  return (
    <div
      className={`karnali-section-heading karnali-align-${align} ${
        light ? "karnali-heading-light" : ""
      }`}
    >
      {sectionNumber && (
        <span className="karnali-section-number" aria-hidden="true">
          {sectionNumber}
        </span>
      )}
      <p className="karnali-eyebrow">{eyebrow}</p>
      <h2 className="karnali-heading-title">
        {heading}
        {goldWord && <em className="karnali-heading-gold"> {goldWord}</em>}
      </h2>
      {description && <p className="karnali-heading-description">{description}</p>}
    </div>
  );
}
