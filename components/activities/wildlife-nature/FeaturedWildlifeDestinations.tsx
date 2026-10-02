import Link from "next/link";
import { DESTINATIONS } from "@/data/activities/wildlife-nature/destinations";
import type { Destination } from "@/data/activities/wildlife-nature/types";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./FeaturedWildlifeDestinations.css";

function FeatureCard({ d, flip }: { d: Destination; flip: boolean }) {
  return (
    <Reveal>
      <article className={`wn-dest wn-dest--feature ${flip ? "wn-dest--flip" : ""}`}>
        <div className="wn-media wn-dest__media">
          <WildImage name={d.image} sizes="(max-width: 900px) 100vw, 55vw" />
          <span className="wn-dest__region">
            <Icon name="pin" size={14} /> {d.region}
          </span>
        </div>
        <div className="wn-dest__body">
          <p className="wn-dest__kicker">{d.name}</p>
          <h3 className="wn-dest__heading">{d.heading}</h3>
          <p className="wn-dest__desc">{d.description}</p>

          <div className="wn-dest__cols">
            <div>
              <h4 className="wn-dest__label">Natural features</h4>
              <ul className="wn-dest__list">
                {d.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="wn-dest__label">Signature experiences</h4>
              <ul className="wn-dest__list">
                {d.experiences.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="wn-dest__ideal">
            <strong>Ideal for:</strong> {d.idealFor}
          </p>
          <div className="wn-dest__actions">
            <Link href={d.href} className="wn-btn wn-btn--outline">
              Explore Destination <Icon name="arrow-right" size={16} />
            </Link>
            <PlanLink className="wn-link" prefill={{ destination: d.id }}>
              Plan a trip here
            </PlanLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CompactCard({ d }: { d: Destination }) {
  return (
    <article className="wn-dest wn-dest--compact">
      <div className="wn-media wn-dest__media">
        <WildImage name={d.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
        <span className="wn-dest__region">
          <Icon name="pin" size={14} /> {d.region}
        </span>
      </div>
      <div className="wn-dest__body">
        <p className="wn-dest__kicker">{d.name}</p>
        <h3 className="wn-dest__heading">{d.heading}</h3>
        <p className="wn-dest__desc">{d.description}</p>
        <ul className="wn-dest__tags" aria-label="Main natural features">
          {d.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <ul className="wn-dest__list wn-dest__list--tight" aria-label="Signature experiences">
          {d.experiences.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="wn-dest__ideal">
          <strong>Ideal for:</strong> {d.idealFor}
        </p>
        <div className="wn-dest__actions">
          <Link href={d.href} className="wn-link">
            Explore Destination <Icon name="arrow-right" size={16} />
          </Link>
          <PlanLink className="wn-link" prefill={{ destination: d.id }}>
            Plan a trip here
          </PlanLink>
        </div>
      </div>
    </article>
  );
}

export function FeaturedWildlifeDestinations() {
  const features = DESTINATIONS.filter((d) => d.size === "feature");
  const compact = DESTINATIONS.filter((d) => d.size === "compact");

  return (
    <section id="destinations" className="wn-section wn-section--ivory" aria-labelledby="wn-dest-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-dest-title"
          eyebrow="Featured destinations"
          title="Wildlife Destinations of Nepal"
          lead="Seven national parks and reserves — from Terai jungle and wetland to alpine lake and Himalayan valley. Sightings, seasons and activities vary by place and are confirmed for each journey."
        />

        <div className="wn-dest__features">
          {features.map((d, i) => (
            <FeatureCard key={d.id} d={d} flip={i % 2 === 1} />
          ))}
        </div>

        <ul className="wn-dest__grid">
          {compact.map((d, i) => (
            <li key={d.id}>
              <Reveal delay={(i % 2) * 90} className="wn-dest__reveal">
                <CompactCard d={d} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
