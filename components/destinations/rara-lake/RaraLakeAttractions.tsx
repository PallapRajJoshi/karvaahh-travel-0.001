import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { attractions } from "@/data/destinations/rara-lake/attractions";
import type { AttractionZone } from "@/data/destinations/rara-lake/types";
import "./RaraLakeAttractions.css";

const zoneLabel: Record<AttractionZone, string> = {
  lakeside: "Around the lake",
  "day-trip": "Separate day journey",
  "regional-gateway": "Regional gateway",
};

export default function RaraLakeAttractions() {
  return (
    <section className="rara-attractions" aria-labelledby="rara-attractions-heading">
      <SectionHeading
        eyebrow="Explore The Region"
        title="Top Attractions Around Rara Lake"
        description="Some sights sit directly on the lakeshore; others require a separate onward journey — each card is labeled accordingly."
      />
      <div className="rara-attractions__grid">
        {attractions.map((attraction) => (
          <article key={attraction.id} className="rara-attractions__card">
            <div className="rara-attractions__media">
              <Image
                src={attraction.image.src}
                alt={attraction.image.alt}
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
                className="rara-attractions__image"
              />
              <span
                className={`rara-attractions__badge rara-attractions__badge--${attraction.zone}`}
              >
                {zoneLabel[attraction.zone]}
              </span>
            </div>
            <div className="rara-attractions__body">
              <h3 className="rara-attractions__title">{attraction.name}</h3>
              <p className="rara-attractions__description">{attraction.description}</p>
              <p className="rara-attractions__activity">
                <strong>Suggested:</strong> {attraction.suggestedActivity}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
