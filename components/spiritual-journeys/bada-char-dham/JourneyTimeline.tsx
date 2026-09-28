import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import { InfoIcon } from "./shared/icons";
import "./JourneyPlanning.css";

/** Illustrative stage-by-stage flow. No days or durations are implied. */
export default function JourneyTimeline() {
  const it = d.itinerary;
  const dirById = Object.fromEntries(d.dhams.map((x) => [x.id, x.direction]));

  return (
    <section className="bcd-section bcd-section--paper" aria-labelledby="bcd-flow-title">
      <div className="bcd-container bcd-container--narrow">
        <SectionHeading id="bcd-flow-title" title={it.heading} />
        <p className="bcd-note bcd-flow__label">
          <InfoIcon size={18} />
          <span>{it.label}</span>
        </p>
        <ol className="bcd-flow">
          {it.stages.map((s, i) => (
            <li
              key={s.title}
              className={`bcd-flow__stage ${s.dhamId ? `is-dham bcd-dir--${dirById[s.dhamId]}` : ""}`}
            >
              <span className="bcd-flow__marker" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="bcd-flow__title">
                  <span className="bcd-sr-only">Stage {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="bcd-flow__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
