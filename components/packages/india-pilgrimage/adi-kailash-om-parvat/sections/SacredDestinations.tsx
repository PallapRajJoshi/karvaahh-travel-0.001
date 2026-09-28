import { destinations } from "@/data/india-pilgrimage/adi-kailash-om-parvat/destinations";
import { headings } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { DestinationCard } from "../ui/DestinationCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./sacred-destinations.css";

/** Section 4 — Sacred destinations grid. */
export function SacredDestinations() {
  const items = destinations.filter((d) => d.enabled !== false);
  return (
    <section id="sacred-sites" className="akop-section akop-section--alt akop-sites" aria-labelledby="sites-title">
      <div className="akop-container">
        <SectionHeading id="sites-title" {...headings.sacredSites} />
        <ul className="akop-sites__grid" role="list">
          {items.map((destination, i) => (
            <Reveal as="li" key={destination.id} index={i % 4} className="akop-sites__item">
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
