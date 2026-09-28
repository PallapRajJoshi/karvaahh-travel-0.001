import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
}

export default function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", id }: SectionHeadingProps) {
  return (
    <header className={`tsum-heading tsum-heading--${align} tsum-heading--${tone}`}>
      {eyebrow && (
        <p className="tsum-heading__eyebrow">
          <span className="tsum-flagline" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </span>
          {eyebrow}
        </p>
      )}
      <h2 className="tsum-heading__title" id={id}>{title}</h2>
      {intro && <p className="tsum-heading__intro">{intro}</p>}
    </header>
  );
}
