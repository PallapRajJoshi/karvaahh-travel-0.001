import "./SectionHeading.css";

interface SectionHeadingProps {
  title: string;
  lead?: string;
  id?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
}

export default function SectionHeading({
  title,
  lead,
  id,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <header
      className={`act-heading act-heading--${align}`}
      data-align={align}
    >
      <Tag className="act-heading__title" id={id}>
        {title}
      </Tag>
      {lead ? <p className="act-heading__lead">{lead}</p> : null}
    </header>
  );
}
