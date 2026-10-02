import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
}

/** Shared section header. `id` is the h2 id, referenced by aria-labelledby. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      as="header"
      className={`rt-heading${align === "center" ? " rt-heading--center" : ""}`}
    >
      <p className="rt-eyebrow">{eyebrow}</p>
      <h2 id={id} className="rt-h2">
        {title}
      </h2>
      {intro ? <p className="rt-lede">{intro}</p> : null}
    </Reveal>
  );
}
