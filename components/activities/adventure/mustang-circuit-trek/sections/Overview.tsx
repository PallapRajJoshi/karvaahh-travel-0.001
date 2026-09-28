import Image from "next/image";
import { anchors, overview } from "../data/config";
import CtaButton from "../shared/CtaButton";
import "./overview.css";

export default function Overview() {
  return (
    <section id={anchors.overview.id} className="mc-section mc-overview" aria-labelledby="mc-overview-title">
      <div className="mc-container mc-overview__grid">
        <div className="mc-overview__copy">
          <header className="mc-heading" data-reveal>
            <p className="mc-heading__eyebrow">{overview.eyebrow}</p>
            <h2 id="mc-overview-title" className="mc-heading__title">
              {overview.title}
            </h2>
          </header>

          <p className="mc-overview__lead" data-reveal>
            {overview.paragraph}
          </p>

          <dl className="mc-overview__glance" data-reveal>
            {overview.glance.map((g) => (
              <div key={g.label} className="mc-overview__fact">
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal>
            <CtaButton {...overview.cta} />
          </div>
        </div>

        <div className="mc-overview__media" data-reveal>
          <div className="mc-overview__main mc-frame">
            <Image
              src={overview.imageMain.src}
              alt={overview.imageMain.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
            />
          </div>
          <figure className="mc-overview__inset">
            <div className="mc-frame mc-overview__inset-img">
              <Image
                src={overview.imageInset.src}
                alt={overview.imageInset.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
              />
            </div>
            <figcaption>Lo Manthang</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
