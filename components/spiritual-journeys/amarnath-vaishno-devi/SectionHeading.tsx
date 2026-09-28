interface SectionHeadingProps {
  id: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/** Shared H2 block. `id` goes on the heading so sections can be aria-labelledby it. */
export function SectionHeading({ id, title, lede, align = "left", tone = "light" }: SectionHeadingProps) {
  return (
    <header className={`avd-heading avd-heading--${align} avd-heading--${tone}`}>
      <h2 id={id} className="avd-heading__title">
        {title}
      </h2>
      {lede ? <p className="avd-heading__lede">{lede}</p> : null}
    </header>
  );
}
