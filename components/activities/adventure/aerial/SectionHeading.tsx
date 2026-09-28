import "./section-heading.css";

interface Props {
  id: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
}

export default function SectionHeading({ id, title, lead, tone = "light", align = "start" }: Props) {
  return (
    <header className={`ae-heading ae-heading--${tone} ae-heading--${align}`}>
      <h2 id={id} className="ae-heading__title">
        {title}
      </h2>
      {lead ? <p className="ae-heading__lead">{lead}</p> : null}
    </header>
  );
}
