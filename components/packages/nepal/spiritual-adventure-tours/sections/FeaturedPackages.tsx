import { enquiryHref, headings } from "../config/page.config";
import { tourPackages } from "../data/packages";
import { SectionHeading } from "../ui/SectionHeading";
import { PackageCard } from "../ui/cards/PackageCard";
import { CtaLink } from "../ui/CtaLink";
import { Icon } from "../ui/Icon";
import "./cards.css";

export function FeaturedPackages({ anchor }: { anchor: string }) {
  const h = headings.packages;
  return (
    <section id={anchor} className="nsa-section nsa-section--muted nsa-packages" aria-labelledby="nsa-packages-title">
      <div className="nsa-container">
        <SectionHeading id="nsa-packages-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
        <div className="nsa-grid nsa-grid--3">
          {tourPackages.map((p, i) => (
            <PackageCard key={p.id} item={p} index={i} />
          ))}
        </div>
        <div className="nsa-packages__assist" data-reveal="">
          <p>
            <Icon name="route" size={20} />
            <span>{h.note}</span>
          </p>
          <CtaLink href={enquiryHref({ intent: "custom" })} variant="primary" arrow>
            Get a Tailored Itinerary
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
