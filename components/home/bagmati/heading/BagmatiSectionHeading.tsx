import React from "react";
import "./bagmati-section-heading.css";

interface BagmatiSectionHeadingProps {
  eyebrow: string;
  heading: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function BagmatiSectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
}: BagmatiSectionHeadingProps) {
  return (
    <div
      className={`bagmati-heading bagmati-heading--${align} ${
        light ? "bagmati-heading--light" : ""
      }`}
    >
      <span className="bagmati-heading__eyebrow">
        <span className="bagmati-heading__eyebrow-line" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="bagmati-heading__title">{heading}</h2>
      {description && (
        <p className="bagmati-heading__description">{description}</p>
      )}
    </div>
  );
}
