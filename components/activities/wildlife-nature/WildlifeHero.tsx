import { WildImage } from "./shared/WildImage";
import { PlanLink } from "./shared/PlanLink";
import { Icon } from "./shared/Icon";
import "./WildlifeHero.css";

export function WildlifeHero() {
  return (
    <section className="wn-hero" aria-labelledby="wn-hero-title">
      <div className="wn-hero__media wn-media">
        <WildImage name="hero" priority sizes="100vw" className="wn-hero__img" />
      </div>
      <div className="wn-hero__veil" aria-hidden="true" />

      <div className="wn-container wn-hero__inner">
        <p className="wn-eyebrow wn-hero__eyebrow wn-hero__rise" style={{ ["--d" as string]: "0.1s" }}>
          Wildlife • Nature • Conservation
        </p>

        <h1 id="wn-hero-title" className="wn-hero__title">
          <span className="wn-hero__name wn-hero__rise" style={{ ["--d" as string]: "0.25s" }}>
            Wildlife &amp; Nature
          </span>
          <span className="wn-visually-hidden"> – </span>
          <span className="wn-hero__sub wn-hero__rise" style={{ ["--d" as string]: "0.45s" }}>
            Discover the Wild Beauty of Nepal
          </span>
        </h1>

        <p className="wn-hero__text wn-hero__rise" style={{ ["--d" as string]: "0.65s" }}>
          From tropical jungles and tranquil wetlands to pristine lakes and Himalayan wilderness, discover the
          incredible biodiversity and natural landscapes of Nepal through unforgettable nature and wildlife
          experiences.
        </p>

        <div className="wn-hero__actions wn-hero__rise" style={{ ["--d" as string]: "0.85s" }}>
          <a href="#destinations" className="wn-btn wn-btn--gold">
            Explore Wildlife Destinations
            <Icon name="arrow-right" size={18} />
          </a>
          <PlanLink className="wn-btn wn-btn--ghost">Plan Your Nature Journey</PlanLink>
        </div>
      </div>

      <a href="#intro" className="wn-hero__scroll" aria-label="Scroll to introduction">
        <span className="wn-hero__scroll-line" aria-hidden="true" />
        <span className="wn-hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
}
