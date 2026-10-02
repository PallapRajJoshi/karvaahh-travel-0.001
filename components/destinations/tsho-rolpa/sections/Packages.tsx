"use client";

import { packages } from "@/data/tsho-rolpa/packages";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Packages.css";

/**
 * Section 15 — Tour Packages. Each card links to placeholder package and
 * inquiry routes (flagged in README for verification) rather than
 * fabricated destinations.
 */
export default function Packages() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="tsho-packages" className="tsho-packages tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Plan Your Trip"
          title="Tsho Rolpa Tour Packages"
          description="Customizable itineraries across the Rolwaling region — from short cultural treks to the technical Tashi Lapcha Pass expedition."
        />

        <div className="tsho-packages__grid">
          {packages.map((pkg) => (
            <article key={pkg.id} className="tsho-packages__card tsho-reveal">
              {pkg.technical ? (
                <span className="tsho-packages__technical-badge">Technical / Advanced</span>
              ) : null}
              <span className="tsho-packages__duration">{pkg.duration}</span>
              <h3 className="tsho-packages__title">{pkg.title}</h3>
              <p className="tsho-packages__description">{pkg.description}</p>

              <ul className="tsho-packages__experiences">
                {pkg.experiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>

              <p className="tsho-packages__profile">
                <strong>Best for:</strong> {pkg.travelerProfile}
              </p>

              <div className="tsho-packages__actions">
                <a
                  href={`/packages/${pkg.id}`}
                  className="tsho-btn tsho-btn--outline tsho-packages__btn"
                >
                  View Details
                </a>
                <a
                  href="/contact?package=tsho-rolpa"
                  className="tsho-btn tsho-btn--primary tsho-packages__btn"
                >
                  Customize Your Trip
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
