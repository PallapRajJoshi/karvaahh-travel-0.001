import { hero, anchorFor } from "../config/page.config";
import { nsaTheme } from "../config/theme";
import { HeroParallax } from "../client/HeroParallax";
import { SmartImage } from "../client/SmartImage";
import { CtaLink } from "../ui/CtaLink";
import { Icon } from "../ui/Icon";
import "./hero.css";

/**
 * Hero. The only <h1> on the page. Text animates in with pure CSS
 * keyframes on first paint (no JS needed, so no invisible-hero risk), and
 * the background image is the page's LCP element, so it's preloaded.
 */
export function HeroSection() {
  return (
    <section className="nsa-hero" aria-labelledby="nsa-hero-title">
      <HeroParallax className="nsa-hero__media" strength={nsaTheme.motion.heroParallax}>
        <SmartImage image={hero.image} sizes="100vw" preload className="nsa-hero__img" />
      </HeroParallax>
      <div className="nsa-hero__overlay" aria-hidden="true" />

      <div className="nsa-container nsa-hero__inner">
        <p className="nsa-hero__eyebrow nsa-hero__anim" style={{ animationDelay: "80ms" }}>
          <span className="nsa-hero__eyebrow-rule" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 id="nsa-hero-title" className="nsa-hero__title nsa-hero__anim" style={{ animationDelay: "180ms" }}>
          {hero.title}
        </h1>
        <p className="nsa-hero__subtitle nsa-hero__anim" style={{ animationDelay: "300ms" }}>
          {hero.subtitle}
        </p>

        <div className="nsa-hero__actions nsa-hero__anim" style={{ animationDelay: "420ms" }}>
          <CtaLink href={hero.primaryCta.href} variant="primary" arrow>
            {hero.primaryCta.label}
          </CtaLink>
          <CtaLink href={hero.secondaryCta.href} variant="ghost-inverse">
            {hero.secondaryCta.label}
          </CtaLink>
        </div>

        <ul className="nsa-hero__facts nsa-hero__anim" style={{ animationDelay: "540ms" }} aria-label="Tour highlights">
          {hero.facts.map((f) => (
            <li key={f}>
              <Icon name="sparkle" size={12} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <a href={`#${anchorFor.overview}`} className="nsa-hero__scroll" aria-label={hero.scrollLabel}>
        <span className="nsa-hero__scroll-track" aria-hidden="true">
          <span className="nsa-hero__scroll-dot" />
        </span>
        <span className="nsa-hero__scroll-label" aria-hidden="true">
          Scroll
        </span>
      </a>
    </section>
  );
}
