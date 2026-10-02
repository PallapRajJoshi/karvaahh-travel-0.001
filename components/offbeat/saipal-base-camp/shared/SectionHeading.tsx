import Reveal from "./Reveal";
import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      as="div"
      className={`saipal-heading saipal-heading--${align} ${dark ? "saipal-heading--dark" : ""}`}
    >
      {eyebrow ? <span className="saipal-eyebrow">{eyebrow}</span> : null}
      <h2 className="saipal-heading__title">{title}</h2>
      {description ? <p className="saipal-heading__desc">{description}</p> : null}
    </Reveal>
  );
}
