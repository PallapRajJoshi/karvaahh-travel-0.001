import SectionHeading from "./SectionHeading";
import { comparison } from "./data/skydivingData";

export default function SkydivingComparison() {
  return (
    <section className="sky-section sky-section--cream" aria-labelledby="sky-compare-title">
      <div className="sky-container">
        <SectionHeading id="sky-compare-title" title={comparison.heading} />
        <p className="sky-table-hint" aria-hidden="true">
          Swipe to see all columns
        </p>
        <div className="sky-table-wrap" role="region" aria-labelledby="sky-compare-title" tabIndex={0}>
          <table className="sky-table">
            <caption className="sky-sr-only">{comparison.heading}. {comparison.note}</caption>
            <thead>
              <tr>
                {comparison.columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map(([site, ...cells]) => (
                <tr key={site}>
                  <th scope="row">{site}</th>
                  {cells.map((cell, i) => (
                    <td key={i} className={i === 2 || i === 4 ? "sky-table__nowrap" : undefined}>
                      {i === cells.length - 1 ? <span className="sky-status">{cell}</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="sky-note">{comparison.note}</p>
      </div>
    </section>
  );
}
