import { itinerary, itineraryDisclaimer } from "../data/itinerary";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import RouteExplorer from "./RouteExplorer";
import "../styles/itinerary.css";

export default function RouteTimeline() {
  return (
    <section id="itinerary" className="ebc-section ebc-itinerary" aria-labelledby="ebc-itinerary-title">
      <div className="ebc-container">
        <SectionHeading
          id="ebc-itinerary-title"
          eyebrow="Route & Itinerary"
          title="Follow the Legendary Everest Base Camp Trail"
          subtitle="Journey through the Khumbu Valley, traditional Sherpa villages, and dramatic Himalayan landscapes to the foot of Mount Everest."
        />
        <p className="ebc-itinerary__disclaimer" data-reveal="">
          <Icon name="info" />
          <span>
            <strong>Sample itinerary.</strong> {itineraryDisclaimer}
          </span>
        </p>
        <RouteExplorer stages={itinerary} />
      </div>
    </section>
  );
}
