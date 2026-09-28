import "./SectionHeading.css";

interface Props {
  id: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({ id, title, lede, align = "left", tone = "light" }: Props) {
  return (
    <header className={`hab-heading hab-heading--${align} hab-heading--${tone}`}>
      <h2 id={id} className="hab-heading__title">{title}</h2>
      {lede && <p className="hab-heading__lede">{lede}</p>}
    </header>
  );
}
