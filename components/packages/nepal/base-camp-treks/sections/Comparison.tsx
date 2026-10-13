import { anchors } from "../config";
import { treks } from "../data/treks";
import { SectionHeading } from "./SectionHeading";

/**
 * A real <table> on wide screens; under 900px the CSS turns each row into a
 * compact card using the `data-label` on each cell.
 */
export function Comparison() {
  return (
    <section id={anchors.compare} className="nbc-section" aria-labelledby="nbc-compare-title">
      <div className="nbc-container">
        <SectionHeading
          id="nbc-compare-title"
          eyebrow="Side by Side"
          title="Compare Base Camp Trek Options"
          subtitle="A quick way to match a trek to your time, experience and appetite for altitude."
        />

        <div className="nbc-compare" data-reveal="">
          <table>
            <caption className="nbc-sr-only">Comparison of Nepal base camp treks</caption>
            <thead>
              <tr>
                <th scope="col">Trek</th>
                <th scope="col">Typical duration</th>
                <th scope="col">Max altitude</th>
                <th scope="col">Difficulty</th>
                <th scope="col">Region</th>
                <th scope="col">Experience</th>
                <th scope="col">Ideal for</th>
              </tr>
            </thead>
            <tbody>
              {treks.map((t) => (
                <tr key={t.id}>
                  <th scope="row">{t.name}</th>
                  <td data-label="Duration">{t.duration}</td>
                  <td data-label="Max altitude">
                    {t.maxAltitude}
                    {t.altitudeNote ? <small>{t.altitudeNote}</small> : null}
                  </td>
                  <td data-label="Difficulty">
                    <span className={`nbc-level nbc-level--${levelOf(t.difficulty)}`}>{t.difficulty}</span>
                  </td>
                  <td data-label="Region">{t.region}</td>
                  <td data-label="Experience">{t.experience}</td>
                  <td data-label="Ideal for">{t.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="nbc-note" data-reveal="">
          Figures are approximate and for comparison only. Actual duration, altitude and difficulty depend on the
          itinerary you choose, acclimatisation days, weather and trail conditions.
        </p>
      </div>
    </section>
  );
}

function levelOf(difficulty: string) {
  if (difficulty.startsWith("Moderate–")) return "mid";
  if (difficulty.startsWith("Moderate")) return "low";
  return "high";
}
