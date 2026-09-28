import { headings, links } from "../config/page.config";
import { sacredDestinations } from "../data/destinations";
import { SectionHeading } from "../ui/SectionHeading";
import { DestinationCard } from "../ui/cards/DestinationCard";
import { CtaLink } from "../ui/CtaLink";
import "./cards.css";

export function SpiritualDestinations({ anchor }: { anchor: string }) {
  const h = headings.sacred;
  return (
    <section id={anchor} className="nsa-section nsa-sacred" aria-labelledby="nsa-sacred-title">
      <div className="nsa-container">
        <SectionHeading id="nsa-sacred-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
        <div className="nsa-grid nsa-grid--4">
          {sacredDestinations.map((d, i) => (
            <DestinationCard key={d.id} item={d} index={i} />
          ))}
        </div>
        <div className="nsa-section__footer" data-reveal="">
          <CtaLink href={links.spiritualJourneys} variant="text" arrow>
            Browse all spiritual journeys
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
