import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  title: string;
  /** Short contextual line (a place or an elevation), shown above the title. */
  marker?: string;
  intro?: ReactNode;
  tone?: "default" | "light";
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  marker,
  intro,
  tone = "default",
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`km-heading ${tone === "light" ? "km-heading--light" : ""} ${className}`.trim()}>
      {marker && <p className="km-heading__marker">{marker}</p>}
      <h2 id={id} className="km-heading__title">
        {title}
      </h2>
      {intro && <div className="km-heading__intro">{intro}</div>}
    </header>
  );
}
