import { hero, quickFacts } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { CtaLink } from "../ui/CtaLink";
import { Icon } from "../ui/Icon";
import { KImage } from "../ui/KImage";
import type { CSSProperties } from "react";
import "./hero.css";

const delay = (step: number) => ({ "--akop-d": step }) as CSSProperties;

/**
 * Section 1 — Cinematic hero.
 * Entrance animation and parallax are pure CSS (no JS on the critical path):
 * keyframes on load, and a scroll-driven animation where supported.
 */
export function Hero() {
  return (
    <section className="akop-hero" aria-labelledby="akop-hero-title">
      <div className="akop-hero__media">
        <div className="akop-hero__parallax">
          <KImage image={hero.image} sizes="100vw" preload className="akop-hero__img" />
        </div>
        <div className="akop-hero__overlay" aria-hidden="true" />
      </div>

      <div className="akop-container akop-hero__inner">
        <div className="akop-hero__content">
          <p className="akop-hero__eyebrow akop-hero__anim" style={delay(0)}>
            <span className="akop-hero__om" aria-hidden="true">
              ॐ
            </span>
            {hero.eyebrow}
          </p>
          <h1 id="akop-hero-title" className="akop-hero__title akop-hero__anim" style={delay(1)}>
            {hero.title}
          </h1>
          <p className="akop-hero__subtitle akop-hero__anim" style={delay(2)}>
            {hero.subtitle}
          </p>
          <p className="akop-hero__text akop-hero__anim" style={delay(3)}>
            {hero.text}
          </p>
          <div className="akop-hero__ctas akop-hero__anim" style={delay(4)}>
            {hero.ctas.map((cta) => (
              <CtaLink key={cta.label} cta={cta} />
            ))}
          </div>
        </div>

        <a href={hero.scrollCueTarget} className="akop-hero__cue">
          <span className="akop-sr-only">{hero.scrollCueLabel}</span>
          <span className="akop-hero__cue-line" aria-hidden="true" />
          <Icon name="arrow-down" size={18} />
        </a>
      </div>

      <div className="akop-hero__facts-wrap">
        <div className="akop-container">
          <dl className="akop-hero__facts">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="akop-hero__fact">
                <dt>{fact.label}</dt>
                <dd>
                  {fact.value}
                  {fact.needsConfirmation ? (
                    <span className="akop-hero__fact-flag" title="Confirmed for each booking">
                      <span className="akop-sr-only"> (confirmed for each booking)</span>
                      <span aria-hidden="true">*</span>
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
          <p className="akop-hero__facts-note">
            <span aria-hidden="true">* </span>Confirmed for each booking — rules and dates change by season.
          </p>
        </div>
      </div>
    </section>
  );
}
