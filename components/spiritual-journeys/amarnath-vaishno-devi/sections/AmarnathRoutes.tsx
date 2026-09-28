import Image from "next/image";
import { IMAGES } from "../data/images";
import { AMARNATH_ROUTES, ROUTE_COMPARISON } from "../data/routes";
import { OfficialNotice } from "../OfficialNotice";
import { SectionHeading } from "../SectionHeading";
import "./AmarnathRoutes.css";

export function AmarnathRoutes() {
  return (
    <section id="amarnath-routes" className="avd-section avd-section--dark avd-routes" aria-labelledby="avd-routes-title">
      <div className="avd-routes__backdrop" aria-hidden="true">
        <Image src={IMAGES.routeTrail.src} alt="" fill sizes="100vw" className="avd-routes__backdrop-img" />
      </div>

      <div className="avd-wrap">
        <SectionHeading
          id="avd-routes-title"
          tone="dark"
          title="Choose your Amarnath pilgrimage route"
          lede="Two traditional routes lead to the cave. Neither is simply better — they suit different paces, plans and preferences. Both are physically demanding."
        />

        <div className="avd-routes__cards">
          {AMARNATH_ROUTES.map((r) => (
            <article key={r.id} className="avd-route" aria-labelledby={`avd-route-${r.id}`}>
              <h3 id={`avd-route-${r.id}`} className="avd-route__name">
                {r.name}
              </h3>
              <p className="avd-route__character">{r.character}</p>

              <ol className="avd-route__path" aria-label={`Traditional waypoints on the ${r.name}`}>
                {r.waypoints.map((w, i) => (
                  <li key={w} className={i === r.waypoints.length - 1 ? "is-end" : undefined}>
                    {w}
                  </li>
                ))}
              </ol>

              <p className="avd-route__summary">{r.summary}</p>
              <ul className="avd-route__points">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="avd-table-scroll avd-routes__table" tabIndex={0} role="region" aria-labelledby="avd-route-table-cap">
          <table className="avd-table">
            <caption id="avd-route-table-cap">
              Pahalgam and Baltal routes compared. Route availability is decided under official arrangements each season.
            </caption>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col" className="avd-table__col--route">Pahalgam route</th>
                <th scope="col" className="avd-table__col--route">Baltal route</th>
              </tr>
            </thead>
            <tbody>
              {ROUTE_COMPARISON.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>{row.a}</td>
                  <td>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <OfficialNotice>
          Waypoints are shown in traditional order only. Distances, walking times, camp locations and which routes are
          open are set by official arrangements each season — check the current notification before choosing a route.
        </OfficialNotice>
      </div>
    </section>
  );
}
