import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import { ArrowRightIcon, InfoIcon } from "./shared/icons";
import "./JourneyPlanning.css";

/** Travel route options — no sequence is presented as mandatory. */
export default function JourneyRoute() {
  const r = d.routeOptions;
  return (
    <section id="route-options" className="bcd-section bcd-section--ivory" aria-labelledby="bcd-route-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-route-title" title={r.heading} intro={r.intro} />

        <div className="bcd-routes">
          {r.options.map((o) => (
            <article key={o.id} className="bcd-routes__card">
              <h3 className="bcd-routes__title">{o.title}</h3>
              {o.route.length > 0 ? (
                <ol className="bcd-routes__chain" aria-label={`${o.title} sequence`}>
                  {o.route.map((stop, i) => (
                    <li key={stop}>
                      <span>{stop}</span>
                      {i < o.route.length - 1 && <ArrowRightIcon size={16} className="bcd-routes__arrow" />}
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="bcd-chips" aria-label="Factors that shape a custom circuit">
                  {r.factors.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <p className="bcd-routes__text">{o.text}</p>
            </article>
          ))}
        </div>

        <p className="bcd-note bcd-routes__note">
          <InfoIcon size={18} />
          <span>{r.planningNote}</span>
        </p>
      </div>
    </section>
  );
}
