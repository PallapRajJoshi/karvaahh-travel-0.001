import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { RouteIcon } from "../../shared/Icon";
import { routeOptions } from "@/data/routes";
import "./HowToReach.css";

export default function HowToReach() {
  return (
    <section className="saipal-page__section saipal-page__section--dark saipal-reach">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Getting There" title="The Gateway to the Remote Himalayas" align="center" dark />

        <div className="saipal-reach__routes">
          {routeOptions.map((route, index) => (
            <Reveal key={route.id} delay={index * 120} className="saipal-reach__card">
              <span className="saipal-reach__icon">
                <RouteIcon />
              </span>
              <h3 className="saipal-reach__gateway">{route.gateway}</h3>
              <ol className="saipal-reach__steps">
                {route.steps.map((step, stepIndex) => (
                  <li key={step}>
                    <span className="saipal-reach__step-index">{stepIndex + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>

        <Reveal className="saipal-reach__note">
          <p>
            Reaching Saipal Base Camp requires overland travel into Bajhang followed by a multi-day trek. Road
            distances, driving durations, flight schedules, trailhead names, and precise coordinates are not
            listed here and should be confirmed with an experienced local operator.
          </p>
          <div className="saipal-reach__map-placeholder" role="img" aria-label="Map placeholder — verified route map to be added">
            Map placeholder — verified route map integration pending
          </div>
        </Reveal>
      </div>
    </section>
  );
}
