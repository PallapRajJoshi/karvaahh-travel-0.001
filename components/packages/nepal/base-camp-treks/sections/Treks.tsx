import { anchors } from "../config";
import { TrekExplorer } from "../client/TrekExplorer";
import { SectionHeading } from "./SectionHeading";

export function Treks() {
  return (
    <section id={anchors.treks} className="nbc-section" aria-labelledby="nbc-treks-title">
      <div className="nbc-container">
        <SectionHeading
          id="nbc-treks-title"
          eyebrow="Choose Your Mountain"
          title="Explore Nepal’s Legendary Base Camp Treks"
          subtitle="From short ridge walks to month-long expeditions, each trail leads to the foot of a Himalayan giant. Filter by style to find the right fit."
        />
        <TrekExplorer />
        <p className="nbc-note" data-reveal="">
          Durations and altitudes are typical figures and vary with the itinerary you choose, your pace and conditions on
          the trail. Treks without their own Karvaahh page are arranged privately on request.
        </p>
      </div>
    </section>
  );
}
