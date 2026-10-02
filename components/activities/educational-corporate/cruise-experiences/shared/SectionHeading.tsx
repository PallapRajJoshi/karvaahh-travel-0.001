import "./SectionHeading.css";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  level?: 1 | 2;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  tone = "light",
  align = "center",
  level = 2,
}: Props) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <Reveal className={`cr-heading cr-heading--${tone} cr-heading--${align}`}>
      {eyebrow && <p className="cr-heading__eyebrow">{eyebrow}</p>}
      <Tag id={id} className="cr-heading__title">
        {title}
      </Tag>
      {lead && <p className="cr-heading__lead">{lead}</p>}
    </Reveal>
  );
}
