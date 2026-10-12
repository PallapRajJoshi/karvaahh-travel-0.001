import { ANCHORS } from "../data/config";
import { heroRegions, heroStyles } from "../data/destinations";
import Arrow from "../shared/Arrow";
import WeddingImage from "../shared/WeddingImage";
import { cssVars } from "../shared/cssVars";
import HeroMotion from "./HeroMotion";
import "./WeddingHero.css";

export default function WeddingHero() {
  return (
    <section className="dw-hero dw-dark" aria-labelledby="dw-hero-title">
      <HeroMotion>
        <WeddingImage
          image={{
            file: "hero.jpg",
            alt: "Bride and groom beneath a floral mandap on a terrace facing the snow-capped Himalaya at golden hour",
          }}
          sizes="100vw"
          priority
          className="dw-hero__img"
          compact
        />
      </HeroMotion>
      <div className="dw-hero__veil" aria-hidden="true" />

      <div className="dw-container dw-hero__inner">
        <div className="dw-hero__content">
          <p className="dw-eyebrow dw-hero__stagger" style={cssVars({ "--dw-d": 0 })}>
            Destination Weddings
          </p>
          <h1
            id="dw-hero-title"
            className="dw-display dw-hero__title dw-hero__stagger"
            style={cssVars({ "--dw-d": 1 })}
          >
            Where your <em>forever</em> begins
          </h1>
          <p className="dw-hero__sub dw-hero__stagger" style={cssVars({ "--dw-d": 2 })}>
            You bring the love. We bring the destination.
          </p>
          <p className="dw-hero__copy dw-hero__stagger" style={cssVars({ "--dw-d": 3 })}>
            Celebrate your love in extraordinary surroundings. From sacred Himalayan temples and heritage
            cities to lakeside resorts, royal palaces, tropical beaches and international escapes, Karvaahh
            creates destination wedding journeys designed around your story.
          </p>
          <div className="dw-cta-row dw-hero__ctas">
            <a
              href={`#${ANCHORS.plan}`}
              className="dw-btn dw-btn--light dw-hero__stagger"
              style={cssVars({ "--dw-d": 4 })}
            >
              Plan My Destination Wedding <Arrow />
            </a>
            <a
              href={`#${ANCHORS.collections}`}
              className="dw-btn dw-btn--outline-light dw-hero__stagger"
              style={cssVars({ "--dw-d": 5 })}
            >
              Request Wedding Proposal
            </a>
          </div>
        </div>
      </div>

      <div className="dw-hero__strip">
        <div className="dw-container dw-hero__strip-inner">
          <ul className="dw-hero__regions" aria-label="Wedding regions">
            {heroRegions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="dw-hero__styles">
            <span className="dw-sr-only">{heroStyles.join(", ")}</span>
            <span className="dw-hero__styles-track" aria-hidden="true">
              {heroStyles.map((s, i) => (
                <span key={s} style={cssVars({ "--dw-n": i })}>
                  {s}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
