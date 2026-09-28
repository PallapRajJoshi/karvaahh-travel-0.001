import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { ITINERARY, ITINERARY_DISCLAIMER, ITINERARY_LABEL } from "./data/itinerary";
import "./journey-itinerary.css";

export default function JourneyItinerary() {
  return (
    <section
      id={SECTION.itinerary}
      className="hry-section hry-section--dark hry-itin"
      aria-labelledby="hry-itin-title"
    >
      <div className="hry-container hry-itin__layout">
        <div className="hry-itin__aside">
          <SectionHeading
          id="hry-itin-title"
          tone="dark"
          title="Suggested Haridwar & Rishikesh Yatra itinerary"
          intro={
            <>
              <span className="hry-itin__label">{ITINERARY_LABEL}.</span> A sample plan to show how
              the days flow — your own itinerary is built around your dates, pace and starting
              point.
            </>
          }
        />
        <div className="hry-itin__foot">
          <p className="hry-itin__disclaimer">
            <Icon name="info" size={18} />
            <span>{ITINERARY_DISCLAIMER}</span>
          </p>
          <a href={`#${SECTION.enquire}`} className="hry-btn hry-btn--primary">
            Customize your spiritual yatra
          </a>
        </div>
        </div>

        <ol className="hry-itin__days">
          {ITINERARY.map((day) => (
            <li key={day.day} className="hry-itin__day">
              <div className="hry-itin__marker" aria-hidden="true">
                <span className="hry-itin__num">{day.day}</span>
              </div>
              <article className="hry-itin__card" aria-labelledby={`hry-day-${day.day}`}>
                <p className="hry-itin__daylabel">Day {day.day}</p>
                <h3 id={`hry-day-${day.day}`} className="hry-itin__title">
                  {day.title}
                </h3>
                <p className="hry-itin__route">{day.route}</p>

                <ul className="hry-itin__acts">
                  {day.activities.map((a) => (
                    <li
                      key={a.text}
                      className={`hry-itin__act${a.optional ? " hry-itin__act--optional" : ""}`}
                    >
                      <span>{a.text}</span>
                      {a.optional ? <span className="hry-tag hry-tag--optional">Optional</span> : null}
                    </li>
                  ))}
                </ul>

                <dl className="hry-itin__meta">
                  <div>
                    <dt>
                      <Icon name="plate" size={16} />
                      Meals
                    </dt>
                    <dd>{day.meals}</dd>
                  </div>
                  <div>
                    <dt>
                      <Icon name="moon" size={16} />
                      Overnight
                    </dt>
                    <dd>{day.overnight ?? "Departure day"}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
