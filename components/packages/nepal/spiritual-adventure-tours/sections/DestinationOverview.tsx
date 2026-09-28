import { overview } from "../config/page.config";
import { SmartImage } from "../client/SmartImage";
import { CtaLink } from "../ui/CtaLink";
import { staggerStyle } from "../lib/format";
import "./overview.css";

export function DestinationOverview({ anchor }: { anchor: string }) {
  return (
    <section id={anchor} className="nsa-section nsa-overview" aria-labelledby="nsa-overview-title">
      <div className="nsa-container nsa-overview__grid">
        <div className="nsa-overview__copy" data-reveal="">
          <p className="nsa-heading__eyebrow">{overview.eyebrow}</p>
          <h2 id="nsa-overview-title" className="nsa-overview__title">
            {overview.title}
          </h2>
          <p className="nsa-overview__body">{overview.body}</p>

          <ul className="nsa-overview__pillars">
            {overview.pillars.map((p) => (
              <li key={p.label}>
                <span className="nsa-overview__pillar-label">{p.label}</span>
                <span className="nsa-overview__pillar-text">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="nsa-overview__actions">
            <CtaLink href={overview.cta.href} variant="secondary" arrow>
              {overview.cta.label}
            </CtaLink>
            <CtaLink href={overview.secondaryCta.href} variant="text" arrow>
              {overview.secondaryCta.label}
            </CtaLink>
          </div>
        </div>

        <div className="nsa-overview__visual">
          <figure className="nsa-overview__main" data-reveal="" data-reveal-kind="image">
            <SmartImage image={overview.imageMain} sizes="(min-width: 1024px) 46vw, 92vw" className="nsa-overview__img" />
          </figure>
          <figure className="nsa-overview__inset" data-reveal="" style={staggerStyle(3)}>
            <div className="nsa-overview__inset-media">
              <SmartImage image={overview.imageInset} sizes="(min-width: 1024px) 18vw, 40vw" className="nsa-overview__img" />
            </div>
            <figcaption>{overview.insetCaption}</figcaption>
          </figure>
          <span className="nsa-overview__ornament" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
