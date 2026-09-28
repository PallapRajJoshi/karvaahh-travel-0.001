import Link from "next/link";
import { anchors, headings, links } from "../data/config";
import { itinerary } from "../data/itinerary";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import RouteExplorer from "./RouteExplorer";
import "./route.css";

export default function Route() {
  const h = headings.route;
  return (
    <section id={anchors.route.id} className="mc-section mc-route" aria-labelledby="mc-route-title">
      <div className="mc-container">
        <SectionHeading id="mc-route-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <div className="mc-route__notice" data-reveal>
          <Icon name="route" />
          <p>
            {h.disclaimer}{" "}
            <a href={`#${anchors.preparation.id}`}>Read the altitude &amp; safety notes</a>.
          </p>
        </div>

        <div data-reveal>
          <RouteExplorer stages={itinerary} />
        </div>

        <p className="mc-route__cta" data-reveal>
          Want a different sequence or more time in one place?{" "}
          <Link href={links.customize}>Tell us how you’d like to travel</Link>.
        </p>
      </div>
    </section>
  );
}
