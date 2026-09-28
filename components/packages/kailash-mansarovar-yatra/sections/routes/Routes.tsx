import Image from "next/image";
import Link from "next/link";
import { routes } from "../../data/routes";
import Icon from "../../shared/Icon";
import Reveal from "../../shared/Reveal";
import SectionHeading from "../../shared/SectionHeading";
import "./Routes.css";

export default function Routes() {
  return (
    <section id="routes" className="km-section km-section--tint" aria-labelledby="km-routes-title">
      <div className="km-container">
        <SectionHeading
          id="km-routes-title"
          eyebrow="Journey Options"
          heading="Choose Your Route to Kailash Mansarovar"
          intro="Every route crosses into Tibet on a group permit. What differs is how you get there, how long it takes, and how your body acclimatises."
        />
        <ul className="km-routes__grid">
          {routes.map((r, i) => (
            <Reveal as="li" key={r.id} index={i}>
              <article className="km-route" aria-labelledby={`route-${r.id}-title`}>
                <div className="km-frame km-route__media">
                  <Image src={r.image.src} alt={r.image.alt} fill sizes="(min-width: 1024px) 400px, 92vw" />
                  <span className="km-badge km-badge--glass km-route__mode">{r.mode}</span>
                </div>
                <div className="km-route__body">
                  <h3 id={`route-${r.id}-title`} className="km-route__title">
                    {r.title}
                  </h3>
                  <p className="km-route__overview">{r.overview}</p>

                  <p className="km-route__label">Main transit points</p>
                  <ol className="km-route__stops">
                    {r.transitPoints.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ol>

                  <dl className="km-route__meta">
                    <div>
                      <dt>
                        <Icon name="clock" size={15} /> Approx. duration
                      </dt>
                      <dd>{r.duration ?? "Planned around you"}</dd>
                    </div>
                    <div>
                      <dt>
                        <Icon name="alert" size={15} /> Availability
                      </dt>
                      <dd>{r.availability}</dd>
                    </div>
                  </dl>

                  <Link href={r.href} className="km-link km-route__cta">
                    Explore Route<span className="km-sr-only">: {r.title}</span>
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
