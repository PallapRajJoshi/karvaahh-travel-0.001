import Image from "next/image";
import { mansarovar } from "../../data/mansarovar";
import Icon from "../../shared/Icon";
import Notice from "../../shared/Notice";
import Reveal from "../../shared/Reveal";
import "./Mansarovar.css";

export default function Mansarovar() {
  return (
    <section id="mansarovar" className="km-section km-mansarovar" aria-labelledby="km-mansarovar-title">
      <div className="km-container km-mansarovar__grid">
        <Reveal className="km-mansarovar__media">
          <figure className="km-frame km-mansarovar__main">
            <Image src={mansarovar.image.src} alt={mansarovar.image.alt} fill sizes="(min-width: 1024px) 600px, 92vw" />
          </figure>
          <figure className="km-frame km-mansarovar__inset">
            <Image
              src={mansarovar.insetImage.src}
              alt={mansarovar.insetImage.alt}
              fill
              sizes="(min-width: 1024px) 240px, 40vw"
            />
          </figure>
        </Reveal>

        <div className="km-mansarovar__content">
          <Reveal>
            <p className="km-eyebrow">{mansarovar.eyebrow}</p>
            <h2 id="km-mansarovar-title" className="km-mansarovar__title">
              {mansarovar.heading}
            </h2>
            <p className="km-mansarovar__lead">{mansarovar.lead}</p>
          </Reveal>

          <ul className="km-mansarovar__moments">
            {mansarovar.moments.map((m, i) => (
              <Reveal as="li" key={m.title} index={i} className="km-moment">
                <span className="km-moment__icon">
                  <Icon name={m.icon} size={22} />
                </span>
                <h3 className="km-moment__title">{m.title}</h3>
                <p className="km-moment__body">{m.body}</p>
              </Reveal>
            ))}
          </ul>

          <Notice tone="info" icon="water" title="Rituals at the lake">
            <p>{mansarovar.ritualNote}</p>
          </Notice>
        </div>
      </div>
    </section>
  );
}
