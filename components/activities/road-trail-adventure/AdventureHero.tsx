import AdventureImage from "./AdventureImage";
import Breadcrumb from "./Breadcrumb";
import Icon from "./Icon";
import Parallax from "./Parallax";
import PlanLink from "./PlanLink";
import { HERO } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureHero.css";

/**
 * Cinematic hero. The headline reveal is pure CSS (no JS needed, disabled for
 * reduced motion). The photo is the LCP element, so it is loaded with priority.
 */
export default function AdventureHero() {
  const words = HERO.heading.split(" ");

  return (
    <section className="rt-hero" aria-labelledby="rt-hero-title">
      <div className="rt-hero__media" aria-hidden={false}>
        <Parallax strength={48}>
          <AdventureImage image={HERO.image} sizes="100vw" priority />
        </Parallax>
        <div className="rt-hero__shade" aria-hidden="true" />
      </div>

      <div className="rt-container rt-hero__inner">
        <Breadcrumb tone="light" />

        <div className="rt-hero__content">
          <p className="rt-eyebrow rt-eyebrow--light rt-hero__eyebrow">{HERO.eyebrow}</p>

          <h1 id="rt-hero-title" className="rt-hero__title">
            {words.map((word, i) => (
              <span key={`${word}-${i}`}>
                <span className="rt-hero__mask">
                  <span
                    className="rt-hero__word"
                    style={{ animationDelay: `${180 + i * 90}ms` }}
                  >
                    {word}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <p className="rt-hero__text">{HERO.text}</p>

          <div className="rt-hero__actions">
            <PlanLink href={`#${ANCHORS.categories}`} className="rt-btn">
              {HERO.primaryCta}
              <Icon name="arrow" />
            </PlanLink>
            <PlanLink className="rt-btn rt-btn--ghost">{HERO.secondaryCta}</PlanLink>
          </div>
        </div>

        <a href={`#${ANCHORS.highlight}`} className="rt-hero__scroll">
          <span className="rt-sr-only">Scroll to the overview</span>
          <span className="rt-hero__scroll-label" aria-hidden="true">
            Scroll
          </span>
          <span className="rt-hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
