import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  intro?: ReactNode;
  kicker?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
  level?: 2 | 3;
}

export function SectionHeading({
  id,
  title,
  intro,
  kicker,
  align = "start",
  tone = "light",
  level = 2,
}: SectionHeadingProps) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <header className={`pmy-heading pmy-heading--${align} pmy-heading--${tone}`} data-reveal>
      {kicker ? <p className="pmy-heading__kicker">{kicker}</p> : null}
      <Tag id={id} className={`pmy-heading__title pmy-heading__title--h${level}`}>
        {title}
      </Tag>
      {intro ? <div className="pmy-heading__intro">{intro}</div> : null}
    </header>
  );
}
