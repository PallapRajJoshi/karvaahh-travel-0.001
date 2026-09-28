import Image from "next/image";
import { CONTENT_STATUS, HERO, TRIP_FACTS } from "@/data/destinations/tsum-valley/content";
import { ArrowDown, ArrowRight, Clock, Gauge, Mountain, Pin } from "./shared/Icons";
import "./TsumValleyHero.css";

const FACT_ICONS = [Clock, Gauge, Mountain, Pin];

export default function TsumValleyHero() {
  return (
    <section className="tsum-hero" aria-labelledby="tsum-hero-title">
      <div className="tsum-hero__media">
        <Image
          src={HERO.image.src}
          alt={HERO.image.alt}
          fill
          priority
          sizes="100vw"
          className="tsum-hero__img"
        />
        <div className="tsum-hero__scrim" aria-hidden="true" />
      </div>

      <div className="tsum-container tsum-hero__inner">
        <div className="tsum-hero__content">
          <p className="tsum-hero__eyebrow">
            {HERO.eyebrow.map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="tsum-hero__dot" aria-hidden="true">•</span>}
                {part}
              </span>
            ))}
          </p>
          <h1 className="tsum-hero__title" id="tsum-hero-title">{HERO.title}</h1>
          <p className="tsum-hero__subtitle">{HERO.subtitle}</p>
          <p className="tsum-hero__text">{HERO.text}</p>

          <div className="tsum-hero__ctas">
            <a className="tsum-btn tsum-btn--primary" href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
              <ArrowRight />
            </a>
            <a className="tsum-btn tsum-btn--ghost tsum-btn--light-ghost" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>

        <dl className="tsum-hero__facts">
          {TRIP_FACTS.map((fact, i) => {
            const Icon = FACT_ICONS[i % FACT_ICONS.length];
            return (
              <div className="tsum-hero__fact" key={fact.label}>
                <Icon className="tsum-hero__fact-icon" />
                <div>
                  <dt>{fact.label}</dt>
                  <dd>
                    {fact.value}
                    {fact.approximate && !CONTENT_STATUS.figuresVerified && (
                      <span className="tsum-approx" title="Indicative — confirmed when you book">approx.</span>
                    )}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>

      <a className="tsum-hero__scroll" href={HERO.secondaryCta.href} aria-label="Scroll to overview">
        <span className="tsum-hero__scroll-line" aria-hidden="true" />
        <ArrowDown />
      </a>
    </section>
  );
}
