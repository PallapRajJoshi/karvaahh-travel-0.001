import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import SectionHeading from "../shared/SectionHeading";
import { ITINERARIES, ITINERARIES_DISCLAIMER, ITINERARIES_HEADING, ITINERARIES_LEDE } from "../data/itineraries";
import { IDS } from "../data/page";
import "./CulturalItineraries.css";

export default function CulturalItineraries() {
  return (
    <section id={IDS.journeys} className="culture-journeys" aria-labelledby="culture-journeys-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading id="culture-journeys-title" title={ITINERARIES_HEADING} lede={ITINERARIES_LEDE} align="center" tone="dark" />
        </Reveal>

        <div className="culture-journeys__grid">
          {ITINERARIES.map((j, i) => (
            <Reveal as="article" key={j.id} delay={i * 110} className="journey-card">
              <div className="journey-card__media">
                <CultureImage id={j.media} sizes="(max-width: 900px) 100vw, 33vw" />
                <span className="journey-card__badge">Sample itinerary</span>
              </div>
              <div className="journey-card__body">
                <p className="journey-card__duration">{j.duration}</p>
                <h3 className="journey-card__title">{j.title}</h3>
                <p className="journey-card__overview">{j.overview}</p>
                <ul className="journey-card__list">
                  {j.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <CtaLink variant="gold" prefill={j.prefill} ariaLabel={`Customize this journey: ${j.title}`}>
                  Customize This Journey
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="culture-journeys__note">{ITINERARIES_DISCLAIMER}</p>
      </div>
    </section>
  );
}
