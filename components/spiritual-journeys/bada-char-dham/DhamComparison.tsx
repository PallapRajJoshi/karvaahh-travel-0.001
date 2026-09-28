import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./DhamComparison.css";

/** Comparison table on desktop; each row becomes a card on mobile (CSS only). */
export default function DhamComparison() {
  const { comparison } = d;
  return (
    <section className="bcd-section bcd-section--sand" aria-labelledby="bcd-compare-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-compare-title" title={comparison.heading} />
        <div className="bcd-compare">
          <table className="bcd-compare__table">
            <caption className="bcd-sr-only">Comparison of the four Dhams by state, deity or tradition, direction and setting</caption>
            <thead>
              <tr>
                <th scope="col">Dham</th>
                <th scope="col">State</th>
                <th scope="col">Major deity / tradition</th>
                <th scope="col">Direction</th>
                <th scope="col">Setting</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr key={r.dhamId} className={`bcd-dir--${r.direction.toLowerCase()}`}>
                  <th scope="row" data-label="Dham">
                    <a href={`#${r.dhamId}`}>{r.dham}</a>
                  </th>
                  <td data-label="State">{r.state}</td>
                  <td data-label="Deity / tradition">{r.tradition}</td>
                  <td data-label="Direction">
                    <span className="bcd-compare__dir">{r.direction}</span>
                  </td>
                  <td data-label="Setting">{r.setting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
