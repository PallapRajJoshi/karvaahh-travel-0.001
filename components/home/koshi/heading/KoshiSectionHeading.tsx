import type { ReactNode } from "react";
import "./koshi-section-heading.css";

type KoshiSectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  /** Lets the parent section reference the heading via aria-labelledby. */
  titleId?: string;
};

export default function KoshiSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  titleId,
}: KoshiSectionHeadingProps) {
  return (
    <header
      className={[
        "koshi-section-heading",
        `koshi-section-heading--${align}`,
        light ? "koshi-section-heading--light" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Eyebrow */}

      <div className="koshi-section-heading__eyebrow">
        <span className="koshi-section-heading__eyebrow-line" />

        <span className="koshi-section-heading__eyebrow-text">
          {eyebrow}
        </span>
      </div>

      {/* Title */}

      <h2 id={titleId} className="koshi-section-heading__title">
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p className="koshi-section-heading__description">
          {description}
        </p>
      )}
    </header>
  );
}