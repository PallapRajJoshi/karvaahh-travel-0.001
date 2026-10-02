"use client";

import { attractions } from "@/data/tsho-rolpa/attractions";
import MediaFrame from "../shared/MediaFrame";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./TopAttractions.css";

/**
 * Section 5 — Top Attractions. Cards flagged with `requiresExtendedTrek`
 * carry a distinct badge so on-route and separate-access attractions are
 * never presented as equivalent, per brief instruction.
 */
export default function TopAttractions() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-attractions tsho-section" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Explore The Region"
          title="Top Attractions Around Tsho Rolpa"
          description="From the lake itself to the wider Rolwaling region — attractions directly on the trekking route, and nearby highlights that call for separate access or technical trekking."
        />

        <div className="tsho-attractions__grid">
          {attractions.map((attraction) => (
            <article key={attraction.id} className="tsho-attractions__card tsho-reveal">
              <MediaFrame
                src={attraction.image}
                alt={attraction.name}
                ratio="landscape"
                className="tsho-attractions__media"
              />
              <div className="tsho-attractions__body">
                <div className="tsho-attractions__badges">
                  <span
                    className={`tsho-attractions__badge ${
                      attraction.onRouteToLake
                        ? "tsho-attractions__badge--route"
                        : "tsho-attractions__badge--separate"
                    }`}
                  >
                    {attraction.onRouteToLake ? "On the main route" : "Separate route / access"}
                  </span>
                  {attraction.requiresExtendedTrek ? (
                    <span className="tsho-attractions__badge tsho-attractions__badge--technical">
                      Technical / extended
                    </span>
                  ) : null}
                </div>
                <h3 className="tsho-attractions__name">{attraction.name}</h3>
                <p className="tsho-attractions__location">{attraction.locationContext}</p>
                <p className="tsho-attractions__description">{attraction.description}</p>
                <ul className="tsho-attractions__activities">
                  {attraction.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
