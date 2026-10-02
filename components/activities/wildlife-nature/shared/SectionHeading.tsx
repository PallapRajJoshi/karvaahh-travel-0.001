import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import "./SectionHeading.css";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Shared section header. `id` is applied to the <h2> so sections can use aria-labelledby. */
export function SectionHeading({ id, eyebrow, title, lead, align = "left", className = "" }: SectionHeadingProps) {
  return (
    <Reveal className={`wn-heading wn-heading--${align} ${className}`}>
      <span className="wn-eyebrow">{eyebrow}</span>
      <h2 id={id} className="wn-heading__title">
        {title}
      </h2>
      {lead ? <p className="wn-heading__lead">{lead}</p> : null}
    </Reveal>
  );
}
