interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
}

export default function SectionHeading({ id, title, intro, tone = "light" }: SectionHeadingProps) {
  return (
    <header className={`sky-heading sky-heading--${tone}`}>
      <h2 id={id} className="sky-heading__title">
        {title}
      </h2>
      {intro && <p className="sky-heading__intro">{intro}</p>}
    </header>
  );
}
