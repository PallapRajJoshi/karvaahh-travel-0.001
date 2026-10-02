import { khaptadItineraries, khaptadItineraryDisclaimer } from "@/data/destinations/khaptad/khaptad-itineraries";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function ItineraryCard({ itinerary }: { itinerary: (typeof khaptadItineraries)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-itinerary-card">
      <div className="khaptad-itinerary-card__header">
        <h3 className="khaptad-itinerary-card__title">{itinerary.title}</h3>
        <span className="khaptad-itinerary-card__duration">{itinerary.duration}</span>
      </div>
      <ol className="khaptad-itinerary-card__timeline">
        {itinerary.days.map((day) => (
          <li key={day.day} className="khaptad-itinerary-card__day">
            <span className="khaptad-itinerary-card__day-number">Day {day.day}</span>
            <p>{day.summary}</p>
          </li>
        ))}
      </ol>
      <span className="khaptad-itinerary-card__tag">Customizable Concept</span>
    </div>
  );
}

export default function KhaptadItineraries() {
  return (
    <section className="khaptad-itineraries" aria-labelledby="khaptad-itineraries-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Sample Itineraries"
          title="Suggested Khaptad Itineraries"
          description="Three starting points for planning your journey — each customizable to your pace and interests."
        />
        <div className="khaptad-itineraries__grid">
          {khaptadItineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
        <p className="khaptad-itineraries__disclaimer">{khaptadItineraryDisclaimer}</p>
      </div>
    </section>
  );
}
