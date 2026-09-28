import Image from "next/image";
import { IMAGES } from "../data/images";
import { HERO_BADGES } from "../data/content";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import "./Hero.css";

export function Hero({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <section className="avd-hero" aria-labelledby="avd-hero-title">
      <Image
        src={IMAGES.hero.src}
        alt={IMAGES.hero.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="avd-hero__image"
      />
      <div className="avd-hero__scrim" aria-hidden="true" />

      <div className="avd-wrap avd-hero__inner">
        <Breadcrumbs items={crumbs} />

        <div className="avd-hero__content">
          <p className="avd-hero__eyebrow">Spiritual Journeys | Jammu &amp; Kashmir</p>
          <h1 id="avd-hero-title" className="avd-hero__title">
            Amarnath &amp; Vaishno Devi Yatra
          </h1>
          <p className="avd-hero__tagline">A sacred journey through the Himalayas</p>
          <p className="avd-hero__desc">
            A pilgrimage to two of the most revered Hindu shrines in Jammu and Kashmir — the Amarnath Cave high in the
            Himalayas and Mata Vaishno Devi in the Trikuta Hills — planned around official registration, route conditions
            and your pace.
          </p>

          <div className="avd-hero__actions">
            <a href="#explore-sacred-destinations" className="avd-btn avd-btn--primary">
              Explore the Yatra
            </a>
            <a href="#enquiry" className="avd-btn avd-btn--ghost">
              Plan My Yatra
            </a>
          </div>

          <ul className="avd-hero__badges" aria-label="Yatra highlights">
            {HERO_BADGES.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
