import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  title: string;
  /** Optional short line above the title — only when it carries information. */
  kicker?: ReactNode;
  intro?: ReactNode;
  align?: "start" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
}

export default function SectionHeading({ id, title, kicker, intro, align = "start", tone = "light", as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <header className={`bcd-heading bcd-heading--${align} bcd-heading--${tone}`}>
      {kicker && <p className="bcd-heading__kicker">{kicker}</p>}
      <Tag id={id} className="bcd-heading__title">
        {title}
      </Tag>
      {intro && <p className="bcd-heading__intro">{intro}</p>}
    </header>
  );
}
