import SectionHeading from "./SectionHeading";
import { anchorFor, jyotirlingas } from "./data/jyotirlingaData";
import "./ComparisonTable.css";

const columns = ["#", "Jyotirlinga", "Location", "State", "Region", "Key travel context"] as const;

export default function ComparisonTable() {
  return (
    <section className="jyl-section jyl-compare" aria-labelledby="jyl-compare-title">
      <div className="jyl-container">
        <SectionHeading
          id="jyl-compare-title"
          title="The 12 Jyotirlingas Compared"
          lead="Locations, states and the travel context that shapes planning for each temple."
        />
        <div className="jyl-compare__scroll">
          <table className="jyl-compare__table" role="table">
            <caption className="jyl-sr-only">The twelve Jyotirlingas with location, state, region and travel context</caption>
            <thead role="rowgroup">
              <tr role="row">
                {columns.map((c) => (
                  <th key={c} scope="col" role="columnheader">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup">
              {jyotirlingas.map((j) => (
                <tr key={j.slug} role="row">
                  <td role="cell" data-label="#" className="jyl-compare__num">
                    {j.id}
                  </td>
                  <th scope="row" role="rowheader" data-label="Jyotirlinga" className="jyl-compare__name">
                    <a href={`#${anchorFor(j.slug)}`}>{j.name}</a>
                  </th>
                  <td role="cell" data-label="Location">{j.location}</td>
                  <td role="cell" data-label="State">{j.state}</td>
                  <td role="cell" data-label="Region">{j.region}</td>
                  <td role="cell" data-label="Travel context">{j.tableContext}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
