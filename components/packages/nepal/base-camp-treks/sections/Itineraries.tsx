import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import {
  itinerary as ebcItinerary,
  itineraryDisclaimer as ebcDisclaimer,
  stageKindLabel,
} from "@/components/adventure/everest-base-camp-trek/data/itinerary";
import { anchors, enquiryHref } from "../config";
import { routeConcepts } from "../data/content";
import { SectionHeading } from "./SectionHeading";

/**
 * The Everest timeline reuses the EBC page's own itinerary framework, so the
 * two pages can never disagree. The other routes are waypoint concepts only.
 */
export function Itineraries() {
  return (
    <section id={anchors.itinerary} className="nbc-section nbc-section--dark" aria-labelledby="nbc-itin-title">
      <div className="nbc-container">
        <SectionHeading
          id="nbc-itin-title"
          tone="inverse"
          eyebrow="Route Planning"
          title="Plan Your Journey to the Himalayas"
          subtitle="See how a classic base camp trek unfolds day by day, and how other routes take shape."
        />

        <div className="nbc-itin">
          <article className="nbc-itin__ebc" data-reveal="" aria-labelledby="nbc-itin-ebc">
            <p className="nbc-itin__label">Everest Base Camp · route framework</p>
            <h3 id="nbc-itin-ebc">From Kathmandu to the foot of Everest</h3>
            <ol className="nbc-timeline">
              {ebcItinerary.map((stage) => (
                <li key={stage.id} className={`nbc-timeline__stop nbc-timeline__stop--${stage.kind}`}>
                  <span className="nbc-timeline__day">{stage.day}</span>
                  <div>
                    <p className="nbc-timeline__title">
                      {stage.title}
                      <span className="nbc-timeline__kind">{stageKindLabel[stage.kind]}</span>
                    </p>
                    <p className="nbc-timeline__elev">{stage.endElevation}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="nbc-itin__disclaimer">{ebcDisclaimer}</p>
            <Link href="/adventure/everest-base-camp-trek#itinerary" className="nbc-btn nbc-btn--light nbc-btn--sm">
              Full Everest itinerary
              <ArrowRight aria-hidden="true" size={16} className="nbc-btn__arrow" />
            </Link>
          </article>

          <div className="nbc-itin__concepts">
            {routeConcepts.map((r, i) => (
              <article
                key={r.id}
                className="nbc-concept"
                data-reveal=""
                style={{ "--nbc-i": i } as CSSProperties}
                aria-labelledby={`nbc-concept-${r.id}`}
              >
                <p className="nbc-itin__label">Route concept · not a bookable itinerary</p>
                <h3 id={`nbc-concept-${r.id}`}>{r.title}</h3>
                <p className="nbc-concept__style">{r.style}</p>
                <ol className="nbc-route" aria-label={`Main waypoints, ${r.title}`}>
                  {r.waypoints.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ol>
                <Link href={enquiryHref(`${r.title} trek`)} className="nbc-text-link nbc-text-link--light">
                  Ask for a day-by-day plan
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
