import { dhams, route } from "../data/charDhamData";

/**
 * Stylised route (deliberately not a geographic map — no verified dataset).
 * Horizontal on desktop, vertical on mobile.
 */
export default function JourneyRoute() {
  const numeral = (slug?: string) => dhams.find((d) => d.slug === slug)?.numeral;
  return (
    <section id="journey-route" className="cd-section cd-route" aria-labelledby="route-title">
      <div className="cd-container">
        <header className="cd-route__head" data-reveal>
          <h2 id="route-title" className="cd-heading__title">
            {route.heading}
          </h2>
          <p className="cd-route__note">{route.note}</p>
        </header>
        <ol className="cd-route__line" data-reveal>
          {route.stops.map((stop, i) => (
            <li
              key={stop.name}
              className={`cd-route__stop cd-route__stop--${stop.kind}`}
              data-dham={stop.dham}
              style={{ ["--i" as string]: i }}
            >
              <span className="cd-route__marker" aria-hidden="true">
                {stop.kind === "dham" ? numeral(stop.dham) : null}
              </span>
              <span className="cd-route__name">
                {stop.dham ? <a href={`#${stop.dham}`}>{stop.name}</a> : stop.name}
              </span>
              <span className="cd-route__kind">
                {stop.kind === "dham" ? "Dham" : stop.kind === "gateway" ? "Common start" : stop.kind === "return" ? "End of Yatra" : "Route base"}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
