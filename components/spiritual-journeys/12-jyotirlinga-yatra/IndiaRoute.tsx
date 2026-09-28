import IndiaRouteGraphic, { type RouteStop } from "./IndiaRouteGraphic";
import SectionHeading from "./SectionHeading";
import { anchorFor, bySlug, route } from "./data/jyotirlingaData";
import "./IndiaRoute.css";

/* Equirectangular placement from approximate coordinates. Not a map: no boundaries are drawn. */
const LNG0 = 67.5;
const LAT0 = 32;
const SCALE = 20;

/** Label placement chosen per stop so names never collide with each other or the line. */
const labelSide: Record<string, RouteStop["label"]> = {
  trimbakeshwar: "left",
  bhimashankar: "left",
  somnath: "left",
  mahakaleshwar: "left",
  "kashi-vishwanath": "left",
  vaidyanath: "below",
};

export default function IndiaRoute() {
  // Only the minimal serialisable fields cross into the client bundle.
  const stops: RouteStop[] = route.order.map((slug, index) => {
    const t = bySlug[slug];
    return {
      slug,
      step: index + 1,
      name: t.name,
      state: t.state,
      region: t.region,
      summary: t.shortDescription,
      anchor: `#${anchorFor(slug)}`,
      x: Math.round((t.coordinates.lng - LNG0) * SCALE * 10) / 10,
      y: Math.round((LAT0 - t.coordinates.lat) * SCALE * 10) / 10,
      label: labelSide[slug] ?? "right",
    };
  });

  return (
    <section id="route" className="jyl-section jyl-section--night jyl-route" aria-labelledby="jyl-route-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-route-title" title="An Illustrative Route Across India" lead={route.intro} />
        <IndiaRouteGraphic stops={stops} graphicNote={route.graphicNote} />
        <p className="jyl-note jyl-route__disclaimer">{route.disclaimer}</p>
      </div>
    </section>
  );
}
