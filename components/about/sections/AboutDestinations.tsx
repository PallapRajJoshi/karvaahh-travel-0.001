import { destinationsCopy, regions } from "@/lib/about/regions";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { SectionHeading } from "../shared/SectionHeading";
import { DestinationTabs, type TabRegion } from "./DestinationTabs";
import "./about-destinations.css";

export function AboutDestinations() {
  // Resolve photos on the server (fs check), hand plain data to the client tabs.
  const tabRegions: TabRegion[] = regions.map((region) => ({
    id: region.id,
    label: region.label,
    tagline: region.tagline,
    places: region.places,
    andMore: region.andMore,
    ctaLabel: region.ctaLabel,
    ctaHref: region.ctaHref,
    image: resolveImage(region.imageKey),
    art: artFor(region.imageKey),
  }));

  return (
    <section className="ab-section ab-dest ab-on-dark" aria-labelledby="about-dest-title">
      <div className="ab-container">
        <SectionHeading
          id="about-dest-title"
          eyebrow={destinationsCopy.eyebrow}
          title={destinationsCopy.title}
          sub={destinationsCopy.sub}
          tone="dark"
        />
        <DestinationTabs regions={tabRegions} />
      </div>
    </section>
  );
}
