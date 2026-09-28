import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({ id, eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <header className={`etp-heading${align === "center" ? " etp-heading--center" : ""}`} data-reveal>
      {eyebrow && <p className="etp-heading__eyebrow">{eyebrow}</p>}
      <h2 className="etp-heading__title" id={id}>
        {title}
      </h2>
      {intro && <p className="etp-heading__intro">{intro}</p>}
    </header>
  );
}
