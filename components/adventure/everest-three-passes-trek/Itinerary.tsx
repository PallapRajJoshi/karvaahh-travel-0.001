import SectionHeading from "./SectionHeading";
import ElevationProfile from "./ElevationProfile";
import ItineraryControls from "./ItineraryControls";
import Icon from "./Icon";
import { itinerary, itineraryNotes } from "@/data/adventure/everest-three-passes-trek/itinerary";
import { elev } from "@/data/adventure/everest-three-passes-trek/format";
import { LINKS } from "@/data/adventure/everest-three-passes-trek/config";
import type { DayKind } from "@/data/adventure/everest-three-passes-trek/types";
import "./Itinerary.css";

const KIND_LABEL: Record<DayKind, string> = {
  arrival: "Arrival",
  flight: "Flight day",
  trek: "Trek",
  acclimatisation: "Acclimatisation",
  pass: "High pass",
  summit: "Base Camp & viewpoint",
};

/**
 * Native <details> accordion: accessible, keyboard-operable and fully
 * functional without JavaScript. ItineraryControls only adds expand/collapse-all.
 */
export default function Itinerary() {
  return (
    <section className="etp-section etp-section--sand etp-route" id="route" aria-labelledby="etp-route-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-route-title"
          eyebrow="Route & itinerary"
          title="Your Journey Across the Three Passes"
          intro="A sample anticlockwise route: acclimatise through Namche and Dingboche, cross Kongma La to Everest Base Camp and Kala Patthar, traverse Cho La to Gokyo, and return over Renjo La through the quiet Thame valley."
        />

        <ElevationProfile />

        <div className="etp-route__bar" data-reveal>
          <span className="etp-pill etp-pill--gold">{itineraryNotes.label}</span>
          <ItineraryControls targetId="etp-itinerary" />
        </div>

        <ol className="etp-days" id="etp-itinerary">
          {itinerary.map((d) => {
            const hasMeta = d.overnightM || d.highPointM || d.walkingHours || d.distanceKm;
            return (
              <li key={d.day} className={`etp-day etp-day--${d.kind}`}>
                <details className="etp-day__details" open={d.day === 1 || undefined}>
                  <summary className="etp-day__summary">
                    <span className="etp-day__num" aria-hidden="true">
                      <small>Day</small>
                      {d.day}
                    </span>
                    <span className="etp-day__head">
                      <span className="etp-day__kind">{KIND_LABEL[d.kind]}</span>
                      <span className="etp-day__title">
                        <span className="etp-sr-only">Day {d.day}: </span>
                        {d.title}
                      </span>
                      <span className="etp-day__route">
                        {d.from === d.to ? d.to : `${d.from} → ${d.to}`}
                      </span>
                    </span>
                    {d.highPointM && d.kind === "pass" ? (
                      <span className="etp-day__peak">{elev(d.highPointM)}</span>
                    ) : d.overnightM ? (
                      <span className="etp-day__alt">{elev(d.overnightM)}</span>
                    ) : null}
                    <Icon name="chevron" className="etp-day__chev" />
                  </summary>

                  <div className="etp-day__body">
                    <p className="etp-day__summary-text">{d.summary}</p>
                    {d.details.length > 0 && (
                      <ul className="etp-day__list">
                        {d.details.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    )}
                    {hasMeta && (
                      <dl className="etp-day__meta">
                        {d.highPointM && (
                          <div>
                            <dt>High point</dt>
                            <dd>
                              {d.highPointName} · {elev(d.highPointM)}
                            </dd>
                          </div>
                        )}
                        {d.overnightM && (
                          <div>
                            <dt>Overnight</dt>
                            <dd>
                              {d.to} · {elev(d.overnightM)}
                            </dd>
                          </div>
                        )}
                        {d.walkingHours && (
                          <div>
                            <dt>Walking</dt>
                            <dd>{d.walkingHours}</dd>
                          </div>
                        )}
                        {d.distanceKm && (
                          <div>
                            <dt>Distance</dt>
                            <dd>{d.distanceKm}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                  </div>
                </details>
              </li>
            );
          })}
        </ol>

        <aside className="etp-route__disclaimer" data-reveal>
          <Icon name="mountain" />
          <div>
            <p>{itineraryNotes.disclaimer}</p>
            <a href={LINKS.customize} className="etp-route__link">
              Ask us to tailor this route <Icon name="arrow" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
