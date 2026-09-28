import { adiKailashExperience as content } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { CtaLink } from "../ui/CtaLink";
import { KImage } from "../ui/KImage";
import { Reveal } from "../ui/Reveal";
import "./adi-kailash-experience.css";

/** Section 5 — Adi Kailash spiritual experience (split layout). */
export function AdiKailashExperience() {
  return (
    <section id="adi-kailash" className="akop-section akop-adi" aria-labelledby="adi-title">
      <div className="akop-container akop-adi__grid">
        <Reveal className="akop-adi__visual" variant="fade">
          <figure className="akop-adi__main">
            <KImage image={content.image} sizes="(min-width: 1024px) 600px, 100vw" className="akop-adi__img" />
          </figure>
          <figure className="akop-adi__detail">
            <KImage image={content.detailImage} sizes="(min-width: 1024px) 220px, 40vw" className="akop-adi__img" />
          </figure>
        </Reveal>

        <div className="akop-adi__copy">
          <Reveal>
            <p className="akop-eyebrow">{content.eyebrow}</p>
            <h2 id="adi-title" className="akop-heading__title">
              {content.heading}
            </h2>
            <p className="akop-adi__intro">{content.intro}</p>
          </Reveal>

          <ol className="akop-adi__list">
            {content.highlights.map((h, i) => (
              <Reveal as="li" key={h.id} index={i} className="akop-adi__item">
                <span className="akop-adi__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="akop-adi__item-title">{h.title}</h3>
                  <p className="akop-adi__item-text">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <CtaLink cta={content.cta} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
