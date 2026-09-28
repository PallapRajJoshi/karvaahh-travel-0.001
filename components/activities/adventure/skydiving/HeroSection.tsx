import Image from "next/image";
import AltitudeGauge from "./AltitudeGauge";
import Breadcrumbs from "./Breadcrumbs";
import Icon from "./Icons";
import NotifyLink from "./NotifyLink";
import ParallaxLayer from "./ParallaxLayer";
import { hero } from "./data/skydivingData";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="sky-hero" aria-labelledby="sky-hero-title">
      <ParallaxLayer className="sky-hero__media">
        <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="sky-hero__img" />
      </ParallaxLayer>
      <div className="sky-hero__scrim" aria-hidden="true" />

      <div className="sky-container sky-hero__inner">
        <div className="sky-hero__content">
          <Breadcrumbs />
          <p className="sky-hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="sky-hero-title" className="sky-hero__title">
            {hero.title}
          </h1>
          <p className="sky-hero__headline">{hero.headline}</p>
          <p className="sky-hero__subtitle">{hero.subtitle}</p>
          <p className="sky-hero__support">{hero.support}</p>

          <div className="sky-hero__ctas">
            <a href="#upcoming-dates" className="sky-btn sky-btn--gold">
              {hero.primaryCta}
            </a>
            <NotifyLink interest="Everest Skydive" className="sky-btn sky-btn--ghost">
              {hero.secondaryCta}
            </NotifyLink>
          </div>

          <ul className="sky-hero__badges" aria-label="Key facts">
            {hero.badges.map((b) => (
              <li key={b} className="sky-hero__badge">
                {b}
              </li>
            ))}
          </ul>
          <p className="sky-hero__location">
            <Icon name="pin" size={18} />
            {hero.location}
          </p>
        </div>

        <AltitudeGauge />
      </div>
    </section>
  );
}
