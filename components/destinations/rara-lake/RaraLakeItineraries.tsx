import SectionHeading from "@/components/shared/SectionHeading";
import { itineraries, itinerariesNote } from "@/data/destinations/rara-lake/itineraries";
import "./RaraLakeItineraries.css";

export default function RaraLakeItineraries() {
  return (
    <section className="rara-itineraries" aria-labelledby="rara-itineraries-heading">
      <SectionHeading
        eyebrow="Sample Plans"
        title="Suggested Rara Lake Itineraries"
        description="Illustrative starting points — every trip can be customized to your pace and interests."
      />
      <div className="rara-itineraries__grid">
        {itineraries.map((itinerary) => (
          <article key={itinerary.id} className="rara-itineraries__card">
            <div className="rara-itineraries__header">
              <span className="rara-itineraries__option">Option {itinerary.code}</span>
              <h3 className="rara-itineraries__title">{itinerary.title}</h3>
              <span className="rara-itineraries__duration">{itinerary.duration}</span>
            </div>
            <p className="rara-itineraries__tagline">{itinerary.tagline}</p>
            <ol className="rara-itineraries__days">
              {itinerary.days.map((day) => (
                <li key={day.day} className="rara-itineraries__day">
                  <span className="rara-itineraries__day-label">Day {day.day}</span>
                  <span className="rara-itineraries__day-summary">{day.summary}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <p className="rara-itineraries__note">{itinerariesNote}</p>
    </section>
  );
}
