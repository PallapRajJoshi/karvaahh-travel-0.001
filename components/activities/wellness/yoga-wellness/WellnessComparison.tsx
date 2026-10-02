import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { comparison } from "./data/journeys";
import "./WellnessComparison.css";

const COLS = [
  { key: "type", label: "Retreat Type" },
  { key: "setting", label: "Typical Setting" },
  { key: "activities", label: "Main Activities" },
  { key: "idealTraveler", label: "Ideal Traveler" },
  { key: "style", label: "Journey Style" },
  { key: "customization", label: "Customization Options" },
] as const;

export default function WellnessComparison() {
  return (
    <section className="ykw-section" aria-labelledby="ykw-cmp-title">
      <div className="ykw-container">
        <SectionHeading
          id="ykw-cmp-title"
          eyebrow="Compare"
          title="Wellness Retreat Comparison"
          intro="A plain-language guide to how these retreat styles differ. Descriptive only: specifics depend on the destination and confirmed services."
        />
        <Reveal className="ykw-cmp__wrap">
          <table className="ykw-cmp__table">
            <caption className="ykw-sr-only">Comparison of wellness retreat types</caption>
            <thead>
              <tr>
                {COLS.map((c) => (
                  <th key={c.key} scope="col">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.type}>
                  {COLS.map((c) =>
                    c.key === "type" ? (
                      <th key={c.key} scope="row" data-label={c.label}>
                        {row[c.key]}
                      </th>
                    ) : (
                      <td key={c.key} data-label={c.label}>
                        {row[c.key]}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
