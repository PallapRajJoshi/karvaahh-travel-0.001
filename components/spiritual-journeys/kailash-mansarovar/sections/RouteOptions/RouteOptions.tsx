import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import Icon from "../../shared/Icon";
import { ROUTES, ROUTE_COMPARISON } from "../../data/routes";
import "./RouteOptions.css";

export default function RouteOptions() {
  return (
    <section id="routes" className="km-section km-section--snow" aria-labelledby="routes-title">
      <div className="km-container">
        <SectionHeading
          id="routes-title"
          marker="Two ways in from Nepal"
          title="Kailash Mansarovar Yatra Routes from Nepal"
          intro="Both routes begin in Kathmandu and meet on the Tibetan side before Lake Mansarovar. The right choice depends on time, comfort with road travel and flights, and current operating conditions."
        />

        <div className="km-routes">
          {ROUTES.map((route) => (
            <article key={route.id} className="km-route" aria-labelledby={`route-${route.id}-title`}>
              <div className="km-route__top">
                <Icon name={route.icon} className="km-route__icon" />
                <p className="km-route__label">{route.label}</p>
              </div>
              <h3 id={`route-${route.id}-title`} className="km-route__name">
                {route.name}
              </h3>

              <ol className="km-route__path" aria-label={`${route.name}: route sequence`}>
                {route.path.map((stop, i) => (
                  <li key={`${stop}-${i}`}>{stop}</li>
                ))}
              </ol>

              <p className="km-route__summary">{route.summary}</p>
              <ul className="km-route__points">
                {route.points.map((p) => (
                  <li key={p}>
                    <span className="km-route__marker" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <Notice className="km-route__notice">
                <p>{route.notice}</p>
              </Notice>
            </article>
          ))}
        </div>

        <div className="km-compare">
          {/* Explicit roles keep table semantics when small screens restyle rows as blocks. */}
          <table className="km-compare__table" role="table">
            <caption className="km-compare__caption">How the two routes compare</caption>
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">
                  <span className="km-sr-only">Aspect</span>
                </th>
                <th scope="col" role="columnheader">Overland</th>
                <th scope="col" role="columnheader">Helicopter-assisted</th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              {ROUTE_COMPARISON.map((row) => (
                <tr key={row.aspect} role="row">
                  <th scope="row" role="rowheader">{row.aspect}</th>
                  <td role="cell" data-label="Overland">{row.overland}</td>
                  <td role="cell" data-label="Helicopter-assisted">{row.helicopter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
