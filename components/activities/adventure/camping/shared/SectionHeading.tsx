import type { ReactNode } from "react";
import { IconCompass } from "./Icons";

type Props = {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
  as?: "h2" | "h3";
};

export default function SectionHeading({ kicker, title, lead, align = "left", tone = "dark", id, as: Tag = "h2" }: Props) {
  return (
    <header className={`cmp-heading cmp-heading--${align} cmp-heading--${tone}`} data-reveal>
      {kicker && (
        <p className="cmp-heading__kicker">
          <IconCompass size={15} /> <span>{kicker}</span>
        </p>
      )}
      <Tag className="cmp-heading__title" id={id}>{title}</Tag>
      {lead && <p className="cmp-heading__lead">{lead}</p>}
    </header>
  );
}
