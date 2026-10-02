import { ENCOUNTERS, OBSERVATION_MESSAGE } from "@/data/activities/wildlife-nature/wildlife";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import "./WildlifeEncounterSection.css";

export function WildlifeEncounterSection() {
  return (
    <section id="wildlife" className="wn-section wn-section--dark" aria-labelledby="wn-wl-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-wl-title"
          eyebrow="Wildlife encounters"
          title="Discover Nepal's Biodiversity"
          lead="Iconic animals and birdlife of the Terai, the hills and the high Himalaya — and the habitats that sustain them."
        />

        <ul className="wn-wl__grid">
          {ENCOUNTERS.map((e, i) => (
            <li key={e.id}>
              <Reveal delay={(i % 3) * 90} className="wn-wl__reveal">
                <article className="wn-wl__card">
                  <div className="wn-media wn-wl__media">
                    <WildImage name={e.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
                    <div className="wn-wl__shade" aria-hidden="true" />
                    <div className="wn-wl__caption">
                      <span className="wn-wl__habitat">
                        <Icon name="tree" size={14} /> {e.habitat}
                      </span>
                      <h3 className="wn-wl__name">{e.name}</h3>
                      <p className="wn-wl__desc">{e.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="wn-wl__note">
          <p className="wn-note">
            <Icon name="info" size={18} />
            <span>{OBSERVATION_MESSAGE}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
