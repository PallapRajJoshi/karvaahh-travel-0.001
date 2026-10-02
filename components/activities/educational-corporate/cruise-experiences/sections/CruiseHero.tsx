import Media from "../shared/Media";
import { ChevronDown } from "../shared/Icons";
import { CATEGORIES_ANCHOR, INQUIRY_ANCHOR } from "../config";
import { HERO_IMAGE } from "../data/content";
import "./CruiseHero.css";

export default function CruiseHero() {
  return (
    <section className="cr-hero" aria-labelledby="cr-hero-title">
      <div className="cr-hero__bg" aria-hidden={false}>
        <Media image={HERO_IMAGE} sizes="100vw" priority className="cr-hero__img" />
      </div>
      <div className="cr-hero__overlay" aria-hidden="true" />
      <div className="cr-hero__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 60c120 40 240 40 360 0s240-40 360 0 240 40 360 0 240-40 360 0v60H0Z" />
        </svg>
      </div>

      <div className="cr-container cr-hero__inner">
        <p className="cr-hero__eyebrow">Explore the world by water</p>
        <h1 id="cr-hero-title" className="cr-hero__title">
          Cruise Experiences
          <span className="cr-sr-only"> – Discover the World by Water</span>
        </h1>
        <p className="cr-hero__sub">From Ocean Horizons to Peaceful River Journeys</p>
        <p className="cr-hero__text">
          Discover unforgettable journeys across oceans, rivers, lakes, and
          scenic coastlines. Experience luxury, relaxation, adventure, and
          cultural discovery with cruise journeys designed around the way you
          love to travel.
        </p>
        <div className="cr-hero__cta">
          <a href={`#${CATEGORIES_ANCHOR}`} className="cr-btn cr-btn--gold">
            Explore Cruise Experiences
          </a>
          <a href={`#${INQUIRY_ANCHOR}`} className="cr-btn cr-btn--ghost">
            Plan Your Cruise Journey
          </a>
        </div>
      </div>

      <a href="#cruise-intro" className="cr-hero__scroll" aria-label="Scroll to introduction">
        <ChevronDown />
      </a>
    </section>
  );
}
