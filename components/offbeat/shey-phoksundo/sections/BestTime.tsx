"use client";

import SectionHeading from "../shared/SectionHeading";
import { SEASONS, SEASONS_NOTE } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./BestTime.css";

export default function BestTime() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-seasons" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="When To Go" title="Best Time to Visit Shey Phoksundo" />

        <div className="phoksundo-seasons__grid">
          {SEASONS.map((season) => (
            <article className="phoksundo-seasons__card" key={season.id} data-reveal>
              <h3 className="phoksundo-seasons__season">{season.season}</h3>
              <p className="phoksundo-seasons__months">{season.months}</p>
              <ul className="phoksundo-seasons__points">
                {season.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="phoksundo-seasons__note">{SEASONS_NOTE}</p>
      </div>
    </section>
  );
}
