import Reveal from "./Reveal";
import "./SectionHeading.css";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "center",
  tone = "light",
}: Props) {
  return (
    <Reveal className={`ykw-head ykw-head--${align} ykw-head--${tone}`}>
      <p className="ykw-head__eyebrow">{eyebrow}</p>
      <h2 id={id} className="ykw-head__title">
        {title}
      </h2>
      <span className="ykw-head__rule" aria-hidden="true" />
      {intro ? <p className="ykw-head__intro">{intro}</p> : null}
    </Reveal>
  );
}
