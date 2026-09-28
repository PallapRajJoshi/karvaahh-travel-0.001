import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  intro?: ReactNode;
  label?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
  level?: 2 | 3;
}

export default function SectionHeading({ id, title, intro, label, align = "start", tone = "light", level = 2 }: SectionHeadingProps) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <header className={`cd-heading cd-heading--${align} cd-heading--${tone}`} data-reveal>
      {label ? <p className="cd-heading__label">{label}</p> : null}
      <Tag id={id} className="cd-heading__title">
        {title}
      </Tag>
      {intro ? <div className="cd-heading__intro">{intro}</div> : null}
    </header>
  );
}
