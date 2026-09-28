import { bungeeSites } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";

const MAX = Math.max(...bungeeSites.map((s) => s.heightMetres));

export default function SiteComparison() {
  return (
    <section className="bj-section bj-compare" aria-labelledby="bj-compare-title">
      <div className="bj-wrap">
        <SectionHeading
          id="bj-compare-title"
          title="Compare Nepal's Main Bungee Sites"
          intro="A factual side-by-side of the three established sites. Listed by height, not ranked."
        />

        {/* Drop gauge: cord lengths drawn to scale from the supplied heights */}
        <figure className="bj-gauge" data-reveal>
          <div className="bj-gauge__rail" role="img" aria-label="Jump heights to scale: Kushma about 228 metres, The Last Resort 160 metres, Hemja / Pokhara 70 to 80 metres">
            {bungeeSites.map((s) => (
              <div key={s.id} className="bj-gauge__col">
                <span className="bj-gauge__track">
                  <span className="bj-gauge__cord" style={{ height: `${(s.heightMetres / MAX) * 100}%` }}>
                    <span className="bj-gauge__weight" />
                  </span>
                </span>
                <span className="bj-gauge__value">{s.height}</span>
                <span className="bj-gauge__name">{s.name}</span>
              </div>
            ))}
          </div>
          <figcaption>Cord lengths drawn to scale from each site&apos;s stated height.</figcaption>
        </figure>

        <div className="bj-table-scroll" tabIndex={0} role="region" aria-labelledby="bj-compare-title">
          <table className="bj-table">
            <thead>
              <tr>
                <th scope="col">Site</th>
                <th scope="col">Province / District</th>
                <th scope="col" className="bj-num">Height</th>
                <th scope="col">Setting</th>
                <th scope="col">What&apos;s distinctive</th>
                <th scope="col">Indicative price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {bungeeSites.map((s) => (
                <tr key={s.id} className={s.primary ? "is-primary" : undefined}>
                  <th scope="row">{s.name}</th>
                  <td>{s.region}</td>
                  <td className="bj-num">{s.height}</td>
                  <td>{s.setting}</td>
                  <td>{s.comparisonDistinctive}</td>
                  <td>{s.price}</td>
                  <td><span className="bj-status bj-status--inline">{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
