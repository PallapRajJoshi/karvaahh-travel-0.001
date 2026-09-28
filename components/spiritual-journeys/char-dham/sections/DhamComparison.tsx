import { dhams } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

export default function DhamComparison() {
  return (
    <section id="dham-comparison" className="cd-section cd-compare" aria-labelledby="compare-title">
      <div className="cd-container">
        <SectionHeading id="compare-title" title="The Four Dhams Compared" intro={<p>Each Dham has its own deity, valley and character. Here is how they differ at a glance.</p>} />
        <div className="cd-compare__wrap" data-reveal>
          <table className="cd-compare__table">
            <caption className="sr-only">Comparison of Yamunotri, Gangotri, Kedarnath and Badrinath</caption>
            <thead>
              <tr>
                <th scope="col">Dham</th>
                <th scope="col">Deity / tradition</th>
                <th scope="col">Region</th>
                <th scope="col">River</th>
                <th scope="col">Key experience</th>
              </tr>
            </thead>
            <tbody>
              {dhams.map((d) => (
                <tr key={d.slug} data-dham={d.slug}>
                  <th scope="row">
                    <span className="cd-compare__numeral" aria-hidden="true">{d.numeral}</span>
                    <a href={`#${d.slug}`}>{d.name}</a>
                  </th>
                  <td data-label="Deity / tradition">{d.comparison.tradition}</td>
                  <td data-label="Region">{d.comparison.region}</td>
                  <td data-label="River">{d.river}</td>
                  <td data-label="Key experience">{d.comparison.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
