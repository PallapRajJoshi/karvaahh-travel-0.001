import { Fragment } from "react";
import { hero } from "@/lib/about/copy";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { ROUTES, planHref } from "@/lib/about/routes";
import { CtaLink } from "../shared/CtaLink";
import { Pic } from "../shared/Pic";
import "./about-hero.css";

export function AboutHero() {
  const image = resolveImage("hero");

  return (
    <section className="ab-hero ab-on-dark" aria-labelledby="about-hero-title">
      <div className="ab-hero__parallax">
        <div className="ab-hero__media ab-frame">
          <Pic image={image} art={artFor("hero")} sizes="100vw" preload decorative />
        </div>
      </div>
      <div className="ab-hero__veil" aria-hidden="true" />

      <div className="ab-container ab-hero__content">
        <p className="ab-eyebrow ab-hero__eyebrow">{hero.eyebrow}</p>

        <h1 id="about-hero-title" className="ab-hero__title">
          {hero.headingWords.map((word, i) => (
            <Fragment key={word}>
              <span className="ab-hero__mask">
                <span
                  className={`ab-hero__word${word === hero.accentWord ? " ab-hero__word--accent" : ""}`}
                  style={{ ["--i" as string]: i }}
                >
                  {word}
                </span>
              </span>
              {/* real space character, outside the clipping mask, so the heading reads "Travel Beyond Destinations" */}
              {i < hero.headingWords.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h1>

        <p className="ab-hero__lead">{hero.lead}</p>
        <p className="ab-hero__text">{hero.description}</p>

        <div className="ab-btn-row ab-hero__cta">
          <CtaLink href={ROUTES.packages}>{hero.primaryCta}</CtaLink>
          <CtaLink href={planHref("plan-your-trip")} variant="ghost-light" arrow={false}>
            {hero.secondaryCta}
          </CtaLink>
        </div>
      </div>

      <a href="#who-we-are" className="ab-hero__cue">
        <span className="ab-hero__cue-label">Scroll</span>
        <span className="ab-hero__cue-line" aria-hidden="true" />
        <span className="sr-only-ab">to read our story</span>
      </a>
    </section>
  );
}
