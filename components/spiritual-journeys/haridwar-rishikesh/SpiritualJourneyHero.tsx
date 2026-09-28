import Image from "next/image";
import Icon, { type IconName } from "./Icon";
import { HERO_IMAGE, SECTION } from "./data/config";
import { ROUTE_GROUPS } from "./data/destinations";
import "./spiritual-journey-hero.css";

const FEATURES: { label: string; icon: IconName }[] = [
  { label: "Sacred Ganga Aarti", icon: "diya" },
  { label: "Ancient temples", icon: "temple" },
  { label: "Spiritual ashrams", icon: "lotus" },
  { label: "Himalayan foothills", icon: "river" },
  { label: "Family pilgrimage", icon: "family" },
];

export default function SpiritualJourneyHero() {
  return (
    <section className="hry-hero" id="top" aria-labelledby="hry-hero-title">
      <div className="hry-hero__media">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="hry-hero__img"
        />
      </div>

      <div className="hry-hero__inner hry-container">
        <div className="hry-hero__content">
          <p className="hry-hero__eyebrow">Spiritual Journeys | Uttarakhand</p>
          <h1 id="hry-hero-title" className="hry-hero__title">
            Haridwar &amp; Rishikesh Spiritual Yatra
          </h1>
          <p className="hry-hero__subtitle">A sacred journey along the holy Ganga</p>
          <p className="hry-hero__desc">
            Experience the divine atmosphere of Haridwar and Rishikesh, two of India&rsquo;s most
            revered spiritual destinations. From the sacred Ganga Aarti at Har Ki Pauri to the
            peaceful ashrams and ancient temples of Rishikesh, embark on a journey of devotion,
            reflection and spiritual discovery in the foothills of the Himalayas.
          </p>

          <ul className="hry-hero__features" aria-label="Journey highlights">
            {FEATURES.map((f) => (
              <li key={f.label} className="hry-hero__feature">
                <Icon name={f.icon} size={16} />
                {f.label}
              </li>
            ))}
          </ul>

          <div className="hry-hero__ctas">
            <a href={`#${SECTION.enquire}`} className="hry-btn hry-btn--primary">
              Enquire now
            </a>
            <a href={`#${SECTION.destinations}`} className="hry-btn hry-btn--outline-light">
              Explore destinations
            </a>
            <a href={`#${SECTION.itinerary}`} className="hry-btn hry-btn--text">
              View tour itinerary
            </a>
          </div>
        </div>
      </div>

      {/* Signature element: the route upstream. Solid = core yatra, dashed = optional. */}
      <nav className="hry-route" aria-label="The route upstream">
        <ol className="hry-route__list hry-container">
          {ROUTE_GROUPS.map((g) => (
            <li
              key={g.id}
              className={`hry-route__stop${g.optional ? " hry-route__stop--optional" : ""}`}
            >
              <a href={`#route-${g.id}`} className="hry-route__link">
                <span className="hry-route__dot" aria-hidden="true" />
                <span className="hry-route__name">{g.title}</span>
                {g.optional ? <span className="hry-route__meta">If time allows</span> : null}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
