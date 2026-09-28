import Image from "next/image";
import { CONSERVATION } from "./data/content";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Leaf } from "./shared/icons";
import "./ApiNampaLandPeople.css";

export default function ApiNampaConservation() {
  return (
    <section className="an-section an-lp" id="conservation" aria-labelledby="an-cons-title">
      <div className="an-container an-lp__grid">
        <Reveal className="an-lp__visual">
          <div className="an-lp__frame">
            <Image
              src={CONSERVATION.image.src}
              alt={CONSERVATION.image.alt}
              fill
              sizes="(max-width: 960px) 100vw, 45vw"
              className="an-lp__image"
            />
          </div>
          <dl className="an-lp__stats">
            {CONSERVATION.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="an-lp__content">
          <SectionHeading
            id="an-cons-title"
            eyebrow="Conservation & biodiversity"
            title={CONSERVATION.title}
            intro={CONSERVATION.intro}
          />
          <ul className="an-lp__points">
            {CONSERVATION.points.map((p, i) => (
              <Reveal as="li" key={p.id} className="an-lp__point" delay={(i % 2) * 80}>
                <Leaf className="an-lp__icon" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
