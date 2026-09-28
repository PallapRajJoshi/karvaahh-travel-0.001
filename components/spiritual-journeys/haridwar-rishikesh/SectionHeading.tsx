import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
  level?: 2 | 3;
}

/** Shared heading for every section; `id` is referenced by aria-labelledby on the section. */
export default function SectionHeading({
  id,
  title,
  intro,
  tone = "light",
  align = "start",
  level = 2,
}: SectionHeadingProps) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <header className={`hry-heading hry-heading--${tone} hry-heading--${align}`}>
      <Tag id={id} className="hry-heading__title">
        {title}
      </Tag>
      {intro ? <p className="hry-heading__intro">{intro}</p> : null}
    </header>
  );
}
