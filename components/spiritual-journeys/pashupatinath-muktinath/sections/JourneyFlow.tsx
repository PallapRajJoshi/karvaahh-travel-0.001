import { itinerary } from "../data/pashupatinathMuktinathData";
import { SectionHeading } from "../ui/SectionHeading";
import "./getting-there.css";

export function JourneyFlow() {
  return (
    <section className="pmy-section pmy-flow" aria-labelledby="pmy-flow-title">
      <div className="pmy-container pmy-flow__grid">
        <div className="pmy-flow__head">
          <SectionHeading id="pmy-flow-title" title={itinerary.heading} intro={<p>{itinerary.intro}</p>} />
          <p className="pmy-note">{itinerary.disclaimer}</p>
        </div>
        <ol className="pmy-flow__stages">
          {itinerary.stages.map((stage, i) => (
            <li key={stage.title} className="pmy-flow__stage" data-reveal>
              <span className="pmy-flow__label">Stage {i + 1}</span>
              <h3 className="pmy-flow__title">{stage.title}</h3>
              <p>{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
