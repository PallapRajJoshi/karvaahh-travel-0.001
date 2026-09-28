import Image from "next/image";
import { hero } from "../../data/content";
import CtaButton from "../../shared/CtaButton";
import Icon from "../../shared/Icon";
import HeroParallax from "./HeroParallax";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="km-hero" aria-labelledby="km-hero-title">
      <HeroParallax className="km-hero__media">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="km-hero__img"
          style={{ objectPosition: hero.image.position }}
        />
      </HeroParallax>
      <div className="km-hero__scrim" aria-hidden="true" />

      <div className="km-container km-hero__inner">
        <p className="km-hero__eyebrow km-hero__anim" style={{ "--i": 0 } as React.CSSProperties}>
          {hero.eyebrow}
        </p>
        <h1 id="km-hero-title" className="km-hero__title km-hero__anim" style={{ "--i": 1 } as React.CSSProperties}>
          {hero.title}
        </h1>
        <p className="km-hero__subtitle km-hero__anim" style={{ "--i": 2 } as React.CSSProperties}>
          {hero.subtitle}
        </p>
        <p className="km-hero__supporting km-hero__anim" style={{ "--i": 3 } as React.CSSProperties}>
          {hero.supporting}
        </p>
        <div className="km-hero__actions km-hero__anim" style={{ "--i": 4 } as React.CSSProperties}>
          <CtaButton cta={hero.primaryCta} onDark />
          <CtaButton cta={{ ...hero.secondaryCta, variant: "secondary" }} onDark />
        </div>

        <dl className="km-hero__facts km-hero__anim" style={{ "--i": 5 } as React.CSSProperties}>
          {hero.facts.map((f) => (
            <div key={f.label} className="km-hero__fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#overview" className="km-hero__scroll">
        <span className="km-hero__scroll-line" aria-hidden="true" />
        <span className="km-hero__scroll-label">Scroll</span>
        <Icon name="arrow-down" size={16} />
        <span className="km-sr-only"> to the yatra overview</span>
      </a>
    </section>
  );
}
