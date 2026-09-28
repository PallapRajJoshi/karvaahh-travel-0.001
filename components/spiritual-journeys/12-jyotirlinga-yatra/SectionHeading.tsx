import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
}

export default function SectionHeading({ id, title, lead, align = "left", as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className={`jyl-heading${align === "center" ? " jyl-heading--center" : ""}`}>
      <hr className="jyl-heading__rule" aria-hidden="true" />
      <Tag id={id} className="jyl-heading__title">
        {title}
      </Tag>
      {lead ? <p className="jyl-heading__lead">{lead}</p> : null}
    </div>
  );
}
