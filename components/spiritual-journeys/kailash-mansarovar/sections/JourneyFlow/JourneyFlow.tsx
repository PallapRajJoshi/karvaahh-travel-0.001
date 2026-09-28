import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import { JOURNEY_STAGES } from "../../data/journey";
import "./JourneyFlow.css";

export default function JourneyFlow() {
  return (
    <section id="journey" className="km-section km-journey" aria-labelledby="journey-title">
      <div className="km-container km-journey__grid">
        <div className="km-journey__aside">
          <SectionHeading
            id="journey-title"
            marker="Stage by stage, overland"
            title="Typical Journey Flow"
            intro="How an overland Kailash Mansarovar Yatra from Nepal usually unfolds. Helicopter-assisted journeys take a different approach through far-western Nepal and join this flow on the Tibetan side."
          />
          <Notice>
            <p>
              Actual itinerary, overnight locations, road movement and acclimatization schedule may change according
              to permits, weather, border conditions, government regulations and operational circumstances.
            </p>
          </Notice>
        </div>

        <ol className="km-journey__list">
          {JOURNEY_STAGES.map((stage, i) => (
            <li key={stage.title} className="km-journey__stage">
              <span className="km-journey__num">
                <span className="km-sr-only">Stage </span>
                {i + 1}
              </span>
              <div>
                <h3 className="km-journey__title">{stage.title}</h3>
                <p className="km-journey__place">{stage.place}</p>
                <p className="km-journey__text">{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
