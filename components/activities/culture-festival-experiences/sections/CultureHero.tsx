import { Fragment } from "react";
import CultureImage from "../shared/CultureImage";
import CtaLink from "../shared/CtaLink";
import ParallaxLayer from "../shared/ParallaxLayer";
import { BREADCRUMBS, HERO, IDS } from "../data/page";
import "./CultureHero.css";

export default function CultureHero() {
  return (
    <section className="culture-hero" aria-labelledby="culture-hero-title">
      <div className="culture-hero__media" aria-hidden="true">
        <ParallaxLayer>
          <CultureImage id="hero" sizes="100vw" priority decorative />
        </ParallaxLayer>
        <div className="culture-hero__scrim" />
      </div>

      <div className="cx-container culture-hero__inner">
        <nav className="culture-hero__crumbs" aria-label="Breadcrumb">
          <ol>
            {BREADCRUMBS.map((c, i) => {
              const last = i === BREADCRUMBS.length - 1;
              return (
                <li key={c.href}>
                  {last ? (
                    <span aria-current="page">{c.name}</span>
                  ) : (
                    <a href={c.href}>{c.name}</a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="culture-hero__content">
          <p className="culture-hero__eyebrow">{HERO.eyebrow}</p>
          <h1 id="culture-hero-title" className="culture-hero__title">
            {HERO.headingWords.map((w, i) => (
              <Fragment key={`${w}-${i}`}>
                <span className="culture-hero__word">
                  <span style={{ animationDelay: `${300 + i * 90}ms` }}>{w}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="culture-hero__text">{HERO.text}</p>
          <div className="culture-hero__actions">
            <CtaLink anchor={`#${IDS.festivals}`} variant="gold">
              {HERO.primaryCta}
            </CtaLink>
            <CtaLink prefill={{ interest: "custom" }} variant="ghost-light">
              {HERO.secondaryCta}
            </CtaLink>
          </div>
        </div>

        <a className="culture-hero__scroll" href={`#${IDS.highlight}`} aria-label="Scroll to the introduction">
          <span className="culture-hero__scroll-text">Scroll</span>
          <span className="culture-hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
