import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/**
 * Fallback shared heading component. If the live project already has an
 * equivalent (province pages use one per README convention), swap the
 * import in each section for the existing component and delete this file.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={`tsho-heading tsho-heading--${align} tsho-heading--${tone} tsho-reveal`}
    >
      {eyebrow ? <p className="tsho-heading__eyebrow tsho-eyebrow">{eyebrow}</p> : null}
      <h2 className="tsho-heading__title">{title}</h2>
      {description ? <p className="tsho-heading__description">{description}</p> : null}
    </div>
  );
}
