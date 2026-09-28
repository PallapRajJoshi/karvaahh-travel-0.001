import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, intro, id, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={`an-heading${align === "center" ? " an-heading--center" : ""}`}>
      <p className="an-heading__eyebrow">{eyebrow}</p>
      <h2 className="an-heading__title" id={id}>
        {title}
      </h2>
      {intro ? <p className="an-heading__intro">{intro}</p> : null}
    </Reveal>
  );
}
