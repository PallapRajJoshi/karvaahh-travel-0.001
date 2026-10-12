import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
}

/** Eyebrow + h2 (+ optional sub line). `id` goes on the h2 for aria-labelledby. */
export function SectionHeading({ id, eyebrow, title, sub, tone = "light", align = "start" }: SectionHeadingProps) {
  return (
    <header className={`ab-head ab-head--${tone} ab-head--${align}`} data-reveal="">
      <p className="ab-eyebrow">{eyebrow}</p>
      <h2 id={id} className="ab-head__title">
        {title}
      </h2>
      {sub ? <p className="ab-head__sub">{sub}</p> : null}
    </header>
  );
}
