import "./shared-cards.css";

type Itinerary = { id: string; title: string; duration: string; days: { day: number; summary: string }[] };

/** Itinerary card with a vertical day-by-day timeline. */
export default function ItineraryTimeline({ itinerary }: { itinerary: Itinerary }) {
  return (
    <article className="itinerary-card" aria-labelledby={`itinerary-${itinerary.id}`}>
      <header className="itinerary-card__header">
        <h3 id={`itinerary-${itinerary.id}`} className="itinerary-card__title">
          {itinerary.title}
        </h3>
        <span className="itinerary-card__duration">{itinerary.duration}</span>
      </header>
      <ol className="itinerary-card__days">
        {itinerary.days.map((d) => (
          <li key={d.day} className="itinerary-card__day">
            <span className="itinerary-card__dot" aria-hidden="true" />
            <span className="itinerary-card__label">Day {d.day}</span>
            <span className="itinerary-card__summary">{d.summary}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
