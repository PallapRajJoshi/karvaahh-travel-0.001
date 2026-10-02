import Link from "next/link";
import Reveal from "./shared/Reveal";
import WellnessImage from "./shared/WellnessImage";
import SectionHeading from "./shared/SectionHeading";
import PrefillButton from "./shared/PrefillButton";
import { destinations } from "./data/destinations";
import { SECTION_IDS } from "./data/config";
import "./FeaturedWellnessDestinations.css";

export default function FeaturedWellnessDestinations() {
  const featured = destinations.filter((d) => d.featured);
  const others = destinations.filter((d) => !d.featured);

  return (
    <section
      id={SECTION_IDS.destinations}
      className="ykw-section"
      aria-labelledby="ykw-dest-title"
    >
      <div className="ykw-container">
        <SectionHeading
          id="ykw-dest-title"
          eyebrow="Featured wellness destinations"
          title="Where the Calm Is"
          intro="Seven settings across Nepal and India. Availability of sessions, instructors, and facilities is confirmed when we plan your journey."
        />

        <div className="ykw-dest__featured">
          {featured.map((d, i) => (
            <Reveal
              as="article"
              key={d.id}
              delay={i * 80}
              className={`ykw-dest__big ${i % 2 === 1 ? "is-flip" : ""}`}
            >
              <div className="ykw-dest__big-img">
                <WellnessImage image={d.image} sizes="(max-width: 900px) 100vw, 55vw" />
                <span className="ykw-dest__tag">
                  {d.region}, {d.country}
                </span>
              </div>
              <div className="ykw-dest__big-body">
                <p className="ykw-dest__name">{d.name}</p>
                <h3>{d.heading}</h3>
                <p>{d.description}</p>
                <ul className="ykw-dest__chips" aria-label={`Signature experiences in ${d.name}`}>
                  {d.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="ykw-dest__ideal">
                  <strong>Ideal for:</strong> {d.idealFor}
                </p>
                <div className="ykw-dest__actions">
                  <Link href={d.href} className="ykw-btn ykw-btn--outline">
                    Explore Destination
                  </Link>
                  <PrefillButton destination={d.inquiryValue} variant="primary">
                    Plan here
                  </PrefillButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="ykw-dest__small-grid">
          {others.map((d, i) => (
            <Reveal as="li" key={d.id} delay={(i % 4) * 80} className="ykw-dest__small">
              <div className="ykw-dest__small-img">
                <WellnessImage image={d.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              </div>
              <div className="ykw-dest__small-body">
                <p className="ykw-dest__tag-inline">
                  {d.region}, {d.country}
                </p>
                <h3>{d.name}</h3>
                <p className="ykw-dest__small-heading">{d.heading}</p>
                <p className="ykw-dest__small-desc">{d.description}</p>
                <ul className="ykw-dest__mini">
                  {d.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="ykw-dest__ideal">
                  <strong>Ideal for:</strong> {d.idealFor}
                </p>
                <Link href={d.href} className="ykw-dest__link">
                  Explore Destination →
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
