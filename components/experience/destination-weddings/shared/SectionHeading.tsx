import type { ReactNode } from "react";
import "./shared.css";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "start" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, intro, id, align = "start", className }: Props) {
  return (
    <header
      className={["dw-heading", `dw-heading--${align}`, className].filter(Boolean).join(" ")}
      data-reveal=""
    >
      <p className="dw-eyebrow">{eyebrow}</p>
      <h2 className="dw-h2" id={id}>
        {title}
      </h2>
      {intro && <div className="dw-lede dw-heading__intro">{intro}</div>}
    </header>
  );
}
