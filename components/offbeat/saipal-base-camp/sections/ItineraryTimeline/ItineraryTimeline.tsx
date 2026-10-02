import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { itinerary } from "@/data/itinerary";
import "./ItineraryTimeline.css";

export default function ItineraryTimeline() {
  return (
    <section className="saipal-page__section saipal-itinerary">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Sample Expedition Itinerary" title="Your Journey to Saipal Base Camp" align="center" />

        <div className="saipal-itinerary__disclaimer" role="note">
          <strong>Planning framework only — not a confirmed route.</strong> Actual expedition duration,
          trailhead, camping locations, walking hours, acclimatization days, transport arrangements, and
          access conditions must be verified by an experienced local operator before booking or publication.
        </div>

        <ol className="saipal-itinerary__timeline">
          {itinerary.map((day, index) => (
            <Reveal
              key={day.day}
              as="li"
              delay={(index % 5) * 70}
              direction={index % 2 === 0 ? "left" : "right"}
              className="saipal-itinerary__step"
            >
              <span className="saipal-itinerary__marker">
                <span className="saipal-itinerary__day">Day {day.day}</span>
              </span>
              <div className="saipal-itinerary__card">
                <h3 className="saipal-itinerary__title">{day.title}</h3>
                <p className="saipal-itinerary__desc">{day.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
