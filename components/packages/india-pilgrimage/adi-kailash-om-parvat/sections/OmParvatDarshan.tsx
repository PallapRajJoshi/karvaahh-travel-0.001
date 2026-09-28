import { omParvat } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { Icon } from "../ui/Icon";
import { KImage } from "../ui/KImage";
import { Reveal } from "../ui/Reveal";
import "./om-parvat.css";

/** Section 6 — Om Parvat darshan (cinematic, dark). */
export function OmParvatDarshan() {
  return (
    <section id="om-parvat" className="akop-om" aria-labelledby="om-title">
      <div className="akop-om__media">
        <KImage image={omParvat.image} sizes="100vw" className="akop-om__img" />
        <div className="akop-om__overlay" aria-hidden="true" />
      </div>

      <span className="akop-om__glyph" aria-hidden="true">
        ॐ
      </span>

      <div className="akop-container akop-om__inner">
        <Reveal className="akop-om__head">
          <p className="akop-eyebrow akop-eyebrow--on-dark">{omParvat.eyebrow}</p>
          <h2 id="om-title" className="akop-heading__title akop-om__title">
            {omParvat.heading}
          </h2>
          <p className="akop-om__intro">{omParvat.intro}</p>
        </Reveal>

        <ul className="akop-om__list" role="list">
          {omParvat.highlights.map((h, i) => (
            <Reveal as="li" key={h.id} index={i} className="akop-om__item">
              <h3 className="akop-om__item-title">{h.title}</h3>
              <p className="akop-om__item-text">{h.description}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal as="aside" className="akop-om__note" variant="fade">
          <Icon name="cloud" size={22} />
          <p>
            <strong>Please note: </strong>
            {omParvat.visibilityNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
