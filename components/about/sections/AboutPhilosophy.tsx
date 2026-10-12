import { philosophy, pillars } from "@/lib/about/copy";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { Pic } from "../shared/Pic";
import "./about-philosophy.css";

export function AboutPhilosophy() {
  return (
    <section className="ab-section ab-philosophy ab-on-dark" aria-labelledby="about-philosophy-title">
      <div className="ab-philosophy__bg" aria-hidden="true">
        <div className="ab-philosophy__bg-inner ab-frame">
          <Pic image={resolveImage("philosophy")} art={artFor("philosophy")} sizes="100vw" decorative />
        </div>
      </div>
      <div className="ab-philosophy__veil" aria-hidden="true" />

      <div className="ab-container ab-philosophy__inner">
        <header className="ab-philosophy__head" data-reveal="">
          <p className="ab-eyebrow">{philosophy.eyebrow}</p>
          <h2 id="about-philosophy-title" className="ab-philosophy__title">
            {philosophy.title}
          </h2>
        </header>

        <blockquote className="ab-philosophy__statement">
          {philosophy.statementLines.map((line, i) => (
            <span className="ab-philosophy__line" key={line} data-reveal="" style={{ ["--d" as string]: i + 1 }}>
              {line}
            </span>
          ))}
        </blockquote>

        <p className="ab-philosophy__text" data-reveal="" style={{ ["--d" as string]: 3 }}>
          {philosophy.text}
        </p>

        <ol className="ab-pillars">
          {pillars.map((pillar, i) => (
            <li className="ab-pillars__item" key={pillar.id} data-reveal="" style={{ ["--d" as string]: i + 1 }}>
              <span className="ab-pillars__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="ab-pillars__title">{pillar.title}</h3>
              <p className="ab-pillars__text">{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
