import Link from "next/link";
import { formatMetres, TRIP } from "../data/content";
import { itinerary } from "../data/itinerary";
import type { ItineraryDay } from "../data/types";
import { IconArrowRight, IconBed, IconChevron, IconClock, IconMeal, IconMountain } from "../icons";
import SectionHeading from "../SectionHeading";
import "./itinerary.css";

const FLAG_LABEL: Record<NonNullable<ItineraryDay["flag"]>, string> = {
  acclimatise: "Rest & acclimatise",
  lake: "Tilicho Lake",
  pass: "Pass day",
};

const MODE_LABEL: Record<ItineraryDay["mode"], string> = {
  trek: "Trek",
  drive: "Drive",
  flight: "Drive + flight",
  rest: "Acclimatisation",
  arrival: "Arrival",
  departure: "Departure",
};

/*
 * Native <details>/<summary> accordion: keyboard and screen-reader support
 * with no client JS. Each day has an id so the altitude chart and shared
 * links (#day-13) can deep-link to it.
 */
export default function Itinerary() {
  return (
    <section id="itinerary" className="mc-section mc-section--paper mc-itin" aria-labelledby="mc-itin-title">
      <div className="mc-container">
        <SectionHeading
          id="mc-itin-title"
          eyebrow="Day by day"
          title={`${itinerary.length}-day itinerary`}
          intro="Tap any day for the route, walking time and where you'll sleep. The pace is set by the altitude, not the calendar."
        />

        <div className="mc-itin__layout">
          <ol className="mc-itin__list">
            {itinerary.map((d) => (
              <li key={d.day} className={`mc-itin__item${d.flag ? ` mc-itin__item--${d.flag}` : ""}`}>
                <details id={`day-${d.day}`} className="mc-itin__day" open={d.day === 1 || undefined}>
                  <summary className="mc-itin__summary">
                    <span className="mc-itin__num" aria-hidden="true">
                      <small>Day</small>
                      {String(d.day).padStart(2, "0")}
                    </span>
                    <span className="mc-itin__head">
                      <span className="mc-itin__title">
                        <span className="mc-sr-only">Day {d.day}: </span>
                        {d.title}
                      </span>
                      <span className="mc-itin__meta">
                        <span>{MODE_LABEL[d.mode]}</span>
                        <span>{d.duration}</span>
                        {d.sleepAltitude && d.overnight !== "—" ? <span>{formatMetres(d.sleepAltitude)}</span> : null}
                        {d.flag ? <span className="mc-itin__flag">{FLAG_LABEL[d.flag]}</span> : null}
                      </span>
                    </span>
                    <IconChevron className="mc-itin__chev" />
                  </summary>

                  <div className="mc-itin__body">
                    <p>{d.summary}</p>
                    <ul className="mc-itin__details">
                      <li>
                        <IconClock />
                        <span>
                          <strong>Time</strong> {d.duration}
                        </span>
                      </li>
                      <li>
                        <IconMountain />
                        <span>
                          <strong>Altitude</strong>{" "}
                          {d.overnight === "—" ? "—" : `Sleep ${formatMetres(d.sleepAltitude)}`}
                          {d.maxAltitude ? ` · high point ${formatMetres(d.maxAltitude)} (${d.maxAltitudeLabel})` : ""}
                        </span>
                      </li>
                      <li>
                        <IconBed />
                        <span>
                          <strong>Stay</strong> {d.stay}
                          {d.overnight !== "—" ? `, ${d.overnight}` : ""}
                        </span>
                      </li>
                      <li>
                        <IconMeal />
                        <span>
                          <strong>Meals</strong> {d.meals}
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
            ))}
          </ol>

          <aside className="mc-itin__aside" aria-labelledby="mc-plan-title">
            <div className="mc-plan">
              <p className="mc-plan__eyebrow">Private & small-group departures</p>
              <h3 id="mc-plan-title" className="mc-plan__title">
                Plan your Manang Circuit
              </h3>
              <dl className="mc-plan__list">
                <div>
                  <dt>Duration</dt>
                  <dd>{itinerary.length} days</dd>
                </div>
                <div>
                  <dt>Grade</dt>
                  <dd>Challenging</dd>
                </div>
                <div>
                  <dt>Start</dt>
                  <dd>Kathmandu</dd>
                </div>
                <div>
                  <dt>Price</dt>
                  <dd>Tailored quote</dd>
                </div>
              </dl>
              <p className="mc-plan__note">
                Tell us your dates, group size and comfort level. We&apos;ll send a costed itinerary, and we can shorten
                it by skipping Tilicho or add days for extra acclimatisation.
              </p>
              <Link href={TRIP.enquiryHref} className="mc-btn mc-btn--primary mc-btn--block">
                Get a quote
                <IconArrowRight />
              </Link>
              <p className="mc-plan__fine">No payment needed to enquire.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
