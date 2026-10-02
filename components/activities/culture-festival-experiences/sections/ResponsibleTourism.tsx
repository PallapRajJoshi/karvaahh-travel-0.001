import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { GUIDELINES, RESPECT_HEADING, RESPECT_LEDE } from "../data/values-gallery-respect";
import { IDS } from "../data/page";
import "./ResponsibleTourism.css";

export default function ResponsibleTourism() {
  return (
    <section id={IDS.respect} className="culture-respect" aria-labelledby="culture-respect-title">
      <div className="cx-container culture-respect__grid">
        <Reveal className="culture-respect__media">
          <div className="culture-respect__frame">
            <CultureImage id="responsible" sizes="(max-width: 900px) 100vw, 38vw" />
          </div>
        </Reveal>

        <div className="culture-respect__copy">
          <Reveal>
            <SectionHeading id="culture-respect-title" eyebrow="Responsible cultural tourism" title={RESPECT_HEADING} lede={RESPECT_LEDE} />
          </Reveal>
          <ol className="culture-respect__list">
            {GUIDELINES.map((g, i) => (
              <Reveal as="li" key={g.id} delay={(i % 4) * 70} className="respect-item">
                <span className="respect-item__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="respect-item__title">{g.title}</h3>
                  <p className="respect-item__body">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
