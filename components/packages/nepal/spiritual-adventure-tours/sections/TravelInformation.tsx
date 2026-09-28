import { enquiryHref, headings } from "../config/page.config";
import { travelInformation, travelInfoMeta } from "../data/travel-information";
import { Accordion } from "../client/Accordion";
import { CtaLink } from "../ui/CtaLink";
import { Icon } from "../ui/Icon";
import { formatDate } from "../lib/format";
import "./info.css";

/**
 * Two-column planning block: a sticky intro card on the left and the
 * practical-information accordion on the right.
 */
export function TravelInformation({ anchor }: { anchor: string }) {
  const h = headings.plan;
  return (
    <section id={anchor} className="nsa-section nsa-plan" aria-labelledby="nsa-plan-title">
      <div className="nsa-container nsa-plan__grid">
        <div className="nsa-plan__intro" data-reveal="">
          <p className="nsa-heading__eyebrow">{h.eyebrow}</p>
          <h2 id="nsa-plan-title" className="nsa-plan__title">
            {h.title}
          </h2>
          <p className="nsa-plan__subtitle">{h.subtitle}</p>

          <div className="nsa-plan__card">
            <Icon name="document" size={22} />
            <p>{travelInfoMeta.disclaimer}</p>
            <p className="nsa-plan__reviewed">Last reviewed {formatDate(travelInfoMeta.lastReviewed)}</p>
          </div>

          <CtaLink href={enquiryHref({ intent: "general" })} variant="secondary" arrow>
            Ask a Travel Expert
          </CtaLink>
        </div>

        <div className="nsa-plan__accordion" data-reveal="">
          <Accordion
            items={travelInformation}
            idPrefix="nsa-plan"
            defaultOpen={[travelInformation[0]?.id].filter(Boolean) as string[]}
            showIcons
          />
        </div>
      </div>
    </section>
  );
}
