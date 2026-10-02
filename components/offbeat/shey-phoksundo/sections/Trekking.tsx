"use client";

import SectionHeading from "../shared/SectionHeading";
import { TREKKING_TIERS } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Trekking.css";

export default function Trekking() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-trekking" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading
          eyebrow="On Foot"
          title="Trekking & Hiking in Dolpo"
          description="From short lakeside walks to extended high-altitude expeditions, Dolpo's trails are organized here by commitment level."
        />

        <div className="phoksundo-trekking__tiers">
          {TREKKING_TIERS.map((tier, index) => (
            <article className="phoksundo-trekking__tier" key={tier.id} data-reveal>
              <span className="phoksundo-trekking__index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="phoksundo-trekking__title">{tier.title}</h3>
                <p className="phoksundo-trekking__tagline">{tier.tagline}</p>
                <p className="phoksundo-trekking__description">{tier.description}</p>
                <ul className="phoksundo-trekking__points">
                  {tier.routePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {tier.note ? <p className="phoksundo-trekking__note">{tier.note}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <p className="phoksundo-trekking__disclaimer">
          Trail distances, elevation gains, durations, and difficulty ratings vary by route and
          should be confirmed with your trekking guide before departure.
        </p>
      </div>
    </section>
  );
}
