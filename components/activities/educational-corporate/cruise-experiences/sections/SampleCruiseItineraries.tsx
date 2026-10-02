import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import PrefillLink from "../shared/PrefillLink";
import { ArrowRight } from "../shared/Icons";
import { ITINERARIES } from "../data/planning";
import "./SampleCruiseItineraries.css";

export default function SampleCruiseItineraries() {
  return (
    <section
      id="cruise-itineraries"
      className="cr-section cr-section--dark cr-iti"
      aria-labelledby="cr-iti-title"
    >
      <div className="cr-container">
        <SectionHeading
          id="cr-iti-title"
          tone="dark"
          eyebrow="Sample journeys"
          title="Sample Cruise Itineraries"
          lead="Illustrative concepts only — not confirmed packages or operator schedules. Real timings depend on the operator you choose."
        />
        <ul className="cr-iti__grid">
          {ITINERARIES.map((it, i) => (
            <Reveal as="li" key={it.id} delay={(i % 2) * 90} className="cr-iti__card">
              <p className="cr-iti__dur">{it.duration}</p>
              <h3>{it.title}</h3>
              <ol className="cr-iti__steps">
                {it.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <PrefillLink prefill={{ destination: it.formValue }} className="cr-iti__cta">
                Ask about this journey <ArrowRight />
              </PrefillLink>
            </Reveal>
          ))}
        </ul>
        <div className="cr-iti__foot">
          <PrefillLink className="cr-btn cr-btn--gold">
            Customize Your Cruise Itinerary <ArrowRight />
          </PrefillLink>
        </div>
      </div>
    </section>
  );
}
