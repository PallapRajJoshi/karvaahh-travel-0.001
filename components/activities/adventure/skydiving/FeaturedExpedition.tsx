import Image from "next/image";
import NotifyLink from "./NotifyLink";
import SectionHeading from "./SectionHeading";
import { STATUS_EVENT_BASED, featured } from "./data/skydivingData";
import "./FeaturedExpedition.css";

export default function FeaturedExpedition() {
  return (
    <section id="everest-skydive" className="sky-section sky-featured" aria-labelledby="sky-featured-title">
      <div className="sky-container sky-featured__grid">
        <div className="sky-featured__media">
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            className="sky-featured__img"
          />
        </div>

        <div className="sky-featured__body">
          <SectionHeading id="sky-featured-title" title={featured.heading} intro={featured.subheading} />

          <dl className="sky-featured__stats">
            {featured.stats.map((s) => (
              <div key={s.label} className="sky-featured__stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <dl className="sky-featured__facts">
            {featured.facts.map((f) => (
              <div key={f.label} className="sky-featured__fact">
                <dt>{f.label}</dt>
                <dd>{f.value === STATUS_EVENT_BASED ? <span className="sky-status">{f.value}</span> : f.value}</dd>
              </div>
            ))}
          </dl>

          <NotifyLink interest="Everest Skydive" className="sky-btn sky-btn--dark">
            {featured.cta}
          </NotifyLink>
        </div>
      </div>
    </section>
  );
}
