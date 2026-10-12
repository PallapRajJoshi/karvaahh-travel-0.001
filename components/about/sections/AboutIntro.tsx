import { intro } from "@/lib/about/copy";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { Pic } from "../shared/Pic";
import "./about-intro.css";

export function AboutIntro() {
  return (
    <section id="who-we-are" className="ab-section ab-intro" aria-labelledby="about-intro-title">
      <div className="ab-container ab-intro__grid">
        {/* Collage */}
        <div className="ab-intro__collage" data-reveal="">
          <div className="ab-intro__main ab-frame">
            <Pic image={resolveImage("intro-main")} art={artFor("intro-main")} sizes="(min-width: 1024px) 34vw, 80vw" />
          </div>
          <div className="ab-intro__detail ab-frame">
            <Pic image={resolveImage("intro-detail")} art={artFor("intro-detail")} sizes="(min-width: 1024px) 18vw, 40vw" />
          </div>
          <div className="ab-intro__accent ab-frame">
            <Pic image={resolveImage("intro-accent")} art={artFor("intro-accent")} sizes="(min-width: 1024px) 20vw, 44vw" />
          </div>
          <span className="ab-intro__rule" aria-hidden="true" />
        </div>

        {/* Copy */}
        <div className="ab-intro__copy">
          <p className="ab-eyebrow" data-reveal="">
            {intro.eyebrow}
          </p>
          <h2 id="about-intro-title" className="ab-intro__title" data-reveal="" style={{ ["--d" as string]: 1 }}>
            {intro.title}
          </h2>
          {intro.paragraphs.map((text, i) => (
            <p className="ab-intro__p" key={text} data-reveal="" style={{ ["--d" as string]: i + 2 }}>
              {text}
            </p>
          ))}
          <p className="ab-intro__statement" data-reveal="" style={{ ["--d" as string]: 5 }}>
            {intro.statement}
          </p>
        </div>
      </div>
    </section>
  );
}
