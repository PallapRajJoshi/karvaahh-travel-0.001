import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, lead, align = "left", id }: SectionHeadingProps) {
  return (
    <Reveal className={`et-heading ${align === "center" ? "et-heading--center" : ""}`.trim()}>
      {eyebrow ? <p className="et-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="et-heading__title" id={id}>
        {title}
      </h2>
      {lead ? <p className="et-heading__lead">{lead}</p> : null}
    </Reveal>
  );
}
