import { hero } from "../data/charDhamData";
import SmartImage from "../shared/SmartImage";
import { IconArrowDown } from "../shared/icons";

export default function CharDhamHero() {
  return (
    <section className="cd-hero" aria-labelledby="cd-hero-title">
      <div className="cd-hero__media">
        <SmartImage image={hero.image} sizes="100vw" priority className="cd-hero__img" tone="hero" />
      </div>
      <div className="cd-hero__scrim" aria-hidden="true" />
      <div className="cd-container cd-hero__content">
        <p className="cd-hero__eyebrow">{hero.eyebrow}</p>
        <h1 id="cd-hero-title" className="cd-hero__title">
          {hero.title}
        </h1>
        <p className="cd-hero__dhams">
          {hero.dhamLine.map((name, i) => (
            <span key={name} className="cd-hero__dham" style={{ ["--i" as string]: i }}>
              {name}
            </span>
          ))}
        </p>
        <p className="cd-hero__copy">{hero.copy}</p>
        <div className="cd-hero__actions">
          <a href={hero.primaryCta.href} className="cd-btn cd-btn--primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="cd-btn cd-btn--on-dark">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
      <a href="#four-dhams" className="cd-hero__scroll" aria-label="Scroll to the four Dhams">
        <IconArrowDown />
      </a>
    </section>
  );
}
