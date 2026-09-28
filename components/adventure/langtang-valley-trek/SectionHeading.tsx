interface Props {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({ id, eyebrow, title, intro, align = "left", tone = "light" }: Props) {
  return (
    <header className={`lt-heading lt-heading--${align} lt-heading--${tone}`} data-reveal>
      <p className="lt-heading__eyebrow">{eyebrow}</p>
      <h2 className="lt-heading__title" id={id}>{title}</h2>
      {intro ? <p className="lt-heading__intro">{intro}</p> : null}
    </header>
  );
}
