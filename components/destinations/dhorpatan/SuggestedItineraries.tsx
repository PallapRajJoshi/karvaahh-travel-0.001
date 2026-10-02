import { itineraries, itineraryDisclaimer } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import ItineraryTimeline from "@/components/shared/ItineraryTimeline";
import Reveal from "@/components/shared/Reveal";
import "./SuggestedItineraries.css";

export default function SuggestedItineraries() {
  return (
    <section className="itineraries-section" id="itineraries">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Plan Your Trip"
          heading="Suggested Dhorpatan Itineraries"
          subheading="Three starting concepts — every journey is customized to your pace and access route."
        />

        <div className="itineraries-section__grid">
          {itineraries.map((itinerary, i) => (
            <Reveal key={itinerary.id} delay={i * 100}>
              <ItineraryTimeline itinerary={itinerary} />
            </Reveal>
          ))}
        </div>

        <p className="itineraries-section__disclaimer">{itineraryDisclaimer}</p>
      </div>
    </section>
  );
}
