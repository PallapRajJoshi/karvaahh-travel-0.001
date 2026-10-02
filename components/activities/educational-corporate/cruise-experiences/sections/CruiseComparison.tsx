import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { COMPARISON } from "../data/planning";
import "./CruiseComparison.css";

const COLS = [
  ["setting", "Typical setting"],
  ["experience", "Main experience"],
  ["ideal", "Ideal traveler"],
  ["activities", "Possible activities"],
  ["style", "Journey style"],
] as const;

export default function CruiseComparison() {
  return (
    <section className="cr-section cr-cmp" aria-labelledby="cr-cmp-title">
      <div className="cr-container">
        <SectionHeading
          id="cr-cmp-title"
          eyebrow="Compare"
          title="Cruise Journey Comparison"
          lead="A descriptive guide to how the main water experiences differ."
        />
        <Reveal>
          {/* Desktop: real table */}
          <div className="cr-cmp__scroll">
            <table className="cr-cmp__table">
              <caption className="cr-sr-only">Comparison of cruise types</caption>
              <thead>
                <tr>
                  <th scope="col">Cruise type</th>
                  {COLS.map(([, label]) => (
                    <th key={label} scope="col">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.type}>
                    <th scope="row">{r.type}</th>
                    {COLS.map(([k]) => (
                      <td key={k}>{r[k]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: cards */}
          <ul className="cr-cmp__cards">
            {COMPARISON.map((r) => (
              <li key={r.type} className="cr-cmp__card">
                <h3>{r.type}</h3>
                <dl>
                  {COLS.map(([k, label]) => (
                    <div key={k}>
                      <dt>{label}</dt>
                      <dd>{r[k]}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
