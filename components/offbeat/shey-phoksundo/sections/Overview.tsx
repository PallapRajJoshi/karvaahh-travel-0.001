"use client";

import Image from "next/image";
import { OVERVIEW, DESTINATION_HIGHLIGHT, DESTINATION_FACTS } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Overview.css";

export default function Overview() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-overview" ref={ref}>
      <div className="phoksundo-page__container phoksundo-overview__grid">
        <div className="phoksundo-overview__media" data-reveal>
          <Image
            src={OVERVIEW.image}
            alt={OVERVIEW.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="phoksundo-overview__image"
          />
        </div>

        <div className="phoksundo-overview__copy" data-reveal>
          <h2 className="phoksundo-overview__heading">{OVERVIEW.heading}</h2>
          <p className="phoksundo-overview__text">{DESTINATION_HIGHLIGHT}</p>

          <dl className="phoksundo-overview__facts">
            {DESTINATION_FACTS.map((fact) => (
              <div key={fact.label} className="phoksundo-overview__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
