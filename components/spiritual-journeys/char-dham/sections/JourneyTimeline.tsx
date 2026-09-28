import { dhams, itinerary } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

export default function JourneyTimeline() {
  return (
    <section id="journey-timeline" className="cd-section cd-timeline" aria-labelledby="timeline-title">
      <div className="cd-container cd-timeline__grid">
        <div className="cd-timeline__aside">
          <SectionHeading
            id="timeline-title"
            title={itinerary.heading}
            intro={
              <>
                <p className="cd-flag">{itinerary.label}</p>
                <p>{itinerary.note}</p>
              </>
            }
          />
        </div>
        <ol className="cd-timeline__list">
          {itinerary.stages.map((s) => {
            const dham = dhams.find((d) => d.slug === s.dham);
            return (
              <li key={s.stage} className={`cd-timeline__stage${dham ? " cd-timeline__stage--dham" : ""}`} data-dham={s.dham} data-reveal>
                <span className="cd-timeline__num" aria-hidden="true">
                  {dham ? dham.numeral : s.stage}
                </span>
                <div>
                  <p className="cd-timeline__label">Stage {s.stage}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
