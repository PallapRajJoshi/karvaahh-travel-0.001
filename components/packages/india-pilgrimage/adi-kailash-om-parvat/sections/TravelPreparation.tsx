import { headings, safetyNote } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { travelInformation } from "@/data/india-pilgrimage/adi-kailash-om-parvat/travel-information";
import { Accordion, type AccordionItem } from "../ui/Accordion";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./travel-preparation.css";

/** Section 12 — Travel preparation & essential information. */
export function TravelPreparation() {
  const items: AccordionItem[] = travelInformation.map((info) => ({
    id: info.id,
    title: info.title,
    icon: info.icon,
    badge: info.needsConfirmation ? "Confirm before travel" : undefined,
    content: (
      <>
        <p className="akop-prep__summary">{info.summary}</p>
        <ul className="akop-prep__points">
          {info.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {info.confirmWith ? (
          <p className="akop-prep__confirm">
            <Icon name="info" size={16} />
            <span>{info.confirmWith}</span>
          </p>
        ) : null}
      </>
    ),
  }));

  return (
    <section id="prepare" className="akop-section akop-section--alt akop-prep" aria-labelledby="prep-title">
      <div className="akop-container akop-prep__grid">
        <div className="akop-prep__intro">
          <SectionHeading id="prep-title" {...headings.prepare} />
          {/* Safety note is placed first so it is seen before any detail. */}
          <Reveal as="aside" className="akop-callout akop-callout--safety" variant="fade">
            <Icon name="alert" size={24} />
            <div>
              <p className="akop-callout__title">{safetyNote.title}</p>
              <p className="akop-callout__text">{safetyNote.text}</p>
            </div>
          </Reveal>
        </div>
        <Reveal className="akop-prep__list" variant="fade">
          <Accordion items={items} idPrefix="prepare" defaultOpen={1} />
        </Reveal>
      </div>
    </section>
  );
}
