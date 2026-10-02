import { DESTINATIONS } from "@/data/activities/wildlife-nature/destinations";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import "./DestinationComparison.css";

const COLUMNS = ["Ecosystem", "Main nature highlights", "Signature experiences", "Ideal traveler", "General travel style"];

export function DestinationComparison() {
  return (
    <section id="compare" className="wn-section wn-section--white" aria-labelledby="wn-cmp-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-cmp-title"
          eyebrow="Compare destinations"
          title="National Park & Nature Destination Comparison"
          lead="A descriptive guide, not a ranking. Each place suits a different kind of journey."
        />

        <Reveal>
          <div className="wn-cmp__scroll">
            <table className="wn-cmp">
              <caption className="wn-visually-hidden">
                Comparison of Nepal&apos;s national parks and wildlife reserves by ecosystem, highlights, experiences,
                ideal traveler and travel style
              </caption>
              <thead>
                <tr>
                  <th scope="col">Destination</th>
                  {COLUMNS.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DESTINATIONS.map((d) => (
                  <tr key={d.id}>
                    <th scope="row" data-label="Destination">
                      <span className="wn-cmp__name">{d.name}</span>
                      <span className="wn-cmp__region">{d.region}</span>
                    </th>
                    <td data-label={COLUMNS[0]}>{d.comparison.ecosystem}</td>
                    <td data-label={COLUMNS[1]}>{d.comparison.highlights}</td>
                    <td data-label={COLUMNS[2]}>{d.comparison.signature}</td>
                    <td data-label={COLUMNS[3]}>{d.comparison.idealTraveler}</td>
                    <td data-label={COLUMNS[4]}>{d.comparison.travelStyle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="wn-cmp__foot">
          Entry fees, travel times, seasons and activity availability vary and are confirmed when your journey is planned.
        </p>
      </div>
    </section>
  );
}
