import { headings, routeCopy } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { routeMap, routeStages } from "@/data/india-pilgrimage/adi-kailash-om-parvat/routes";
import { RouteExplorer } from "../route/RouteExplorer";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./journey-route.css";

/** Section 8 — Route & journey experience. */
export function JourneyRoute() {
  const stages = routeStages.filter((s) => s.enabled !== false);
  return (
    <section id="route" className="akop-section akop-route" aria-labelledby="route-title">
      <div className="akop-container">
        <SectionHeading id="route-title" {...headings.route} />

        {/* Text summary of the corridor — scannable, and crawlable. */}
        <Reveal as="div" className="akop-route__summary" variant="fade">
          <p className="akop-sr-only">Route outline:</p>
          <ol className="akop-route__chain" role="list">
            {stages.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ol>
        </Reveal>

        <Reveal variant="fade">
          <RouteExplorer stages={stages} map={routeMap} />
        </Reveal>

        <p className="akop-route__disclaimer">
          <Icon name="info" size={18} />
          <span>{routeCopy.disclaimer}</span>
        </p>
      </div>
    </section>
  );
}
