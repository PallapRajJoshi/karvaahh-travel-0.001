import Image from "next/image";
import { anchors, experience } from "../data/config";
import { highlights } from "../data/experiences";
import { staggerStyle } from "../shared/stagger";
import "./experience.css";

export default function Experience() {
  return (
    <section
      id={anchors.experience.id}
      className="mc-section mc-section--dark mc-exp"
      aria-labelledby="mc-exp-title"
    >
      <div className="mc-container mc-exp__grid">
        <div className="mc-exp__media" data-reveal>
          <div className="mc-exp__main mc-frame">
            <Image
              src={experience.imageMain.src}
              alt={experience.imageMain.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
            />
          </div>
          <div className="mc-exp__secondary mc-frame">
            <Image
              src={experience.imageSecondary.src}
              alt={experience.imageSecondary.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
            />
          </div>
        </div>

        <div className="mc-exp__copy">
          <header className="mc-heading" data-reveal>
            <p className="mc-heading__eyebrow">{experience.eyebrow}</p>
            <h2 id="mc-exp-title" className="mc-heading__title">
              {experience.title}
            </h2>
            <p className="mc-heading__subtitle">{experience.intro}</p>
          </header>

          <ol className="mc-exp__list">
            {highlights.map((h, i) => (
              <li key={h.id} className="mc-exp__item" data-reveal style={staggerStyle(i)}>
                <span className="mc-exp__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mc-exp__title">{h.title}</h3>
                  <p className="mc-exp__text">{h.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
