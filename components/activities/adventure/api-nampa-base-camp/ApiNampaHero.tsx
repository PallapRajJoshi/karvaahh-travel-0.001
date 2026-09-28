import Image from "next/image";
import { HERO, HERO_BADGES } from "./data/content";
import { ArrowRight, ChevronDown } from "./shared/icons";
import "./ApiNampaHero.css";

export default function ApiNampaHero() {
  return (
    <section className="an-hero" aria-labelledby="an-hero-title">
      <div className="an-hero__media">
        <Image
          src={HERO.image.src}
          alt={HERO.image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="an-hero__image"
        />
        <div className="an-hero__scrim" aria-hidden="true" />
      </div>

      <div className="an-hero__inner an-container">
        <div className="an-hero__content">
          <p className="an-hero__eyebrow">
            {HERO.eyebrow.map((part, i) => (
              <span key={part}>
                {i > 0 ? <span className="an-hero__dot" aria-hidden="true">•</span> : null}
                {part}
              </span>
            ))}
          </p>

          <h1 className="an-hero__title" id="an-hero-title">
            {HERO.title}
          </h1>
          <p className="an-hero__subtitle">{HERO.subtitle}</p>
          <p className="an-hero__text">{HERO.text}</p>

          <div className="an-hero__actions">
            <a className="an-btn an-btn--gold" href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
              <ArrowRight />
            </a>
            <a className="an-btn an-btn--ghost" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>

        <dl className="an-hero__badges">
          {HERO_BADGES.map((b) => (
            <div className="an-hero__badge" key={b.label}>
              <dt>{b.label}</dt>
              <dd>
                <span className="an-hero__badge-value">{b.value}</span>
                {b.note ? <span className="an-hero__badge-note">{b.note}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="an-hero__coords" aria-hidden="true">
        Mount Api · {HERO.coordinates}
      </p>

      <a className="an-hero__scroll" href="#overview">
        <span className="an-sr-only">Scroll to overview</span>
        <span className="an-hero__scroll-line" aria-hidden="true" />
        <ChevronDown />
      </a>
    </section>
  );
}
