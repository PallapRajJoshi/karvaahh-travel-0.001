import WellnessImage from "./shared/WellnessImage";
import { ButtonLink } from "./shared/ButtonLink";
import { SECTION_IDS } from "./data/config";
import "./WellnessHero.css";

export default function WellnessHero() {
  return (
    <section className="ykw-hero" aria-labelledby="ykw-h1">
      <div className="ykw-hero__media" aria-hidden="false">
        <div className="ykw-hero__zoom">
          <WellnessImage
            priority
            sizes="100vw"
            image={{
              src: "/images/activities/wellness/yoga-wellness/hero-sunrise-yoga.webp",
              alt: "A person practicing yoga at sunrise with misty Himalayan hills behind",
              label: "Hero: yoga at sunrise, misty Himalayan hills",
            }}
          />
        </div>
        <div className="ykw-hero__overlay" />
      </div>

      <div className="ykw-container ykw-hero__inner">
        <p className="ykw-hero__eyebrow">Wellness Journeys • Yoga • Mindfulness</p>
        <h1 id="ykw-h1" className="ykw-hero__title">
          Yoga &amp; Wellness
          <span className="ykw-sr-only"> – Find Your Balance in the Heart of Nature</span>
        </h1>
        <p className="ykw-hero__sub" aria-hidden="true">
          Find Your Balance in the Heart of Nature
        </p>
        <p className="ykw-hero__text">
          Reconnect with yourself through peaceful Himalayan retreats, mindful yoga sessions,
          meditation, and rejuvenating wellness experiences surrounded by nature.
        </p>
        <div className="ykw-hero__cta">
          <ButtonLink href={`#${SECTION_IDS.experiences}`} variant="primary">
            Explore Wellness Retreats
          </ButtonLink>
          <ButtonLink href={`#${SECTION_IDS.inquiry}`} variant="ghost">
            Plan Your Wellness Journey
          </ButtonLink>
        </div>
      </div>

      <a href={`#${SECTION_IDS.experiences}`} className="ykw-hero__scroll" aria-label="Scroll to wellness experiences">
        <span className="ykw-hero__scroll-line" />
      </a>
    </section>
  );
}
