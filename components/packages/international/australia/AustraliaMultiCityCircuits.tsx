import { listedCircuits } from "@/data/australia/circuits";
import { journeyView } from "@/lib/australia/routes";
import RouteJourney from "./RouteJourney";

/** Route planner: pick a circuit, watch the route draw across the map, read the timeline. */
export default function AustraliaMultiCityCircuits() {
  return (
    <section className="pkg-section asia-section--deep us-circuits" id="circuits" aria-labelledby="circuits-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow asia-eyebrow--light">Multi-city Australia circuits</p>
          <h2 id="circuits-h" className="pkg-h2 pkg-h2--light">Build Your Multi-City Journey</h2>
          <p className="pkg-lede pkg-lede--light">
            Suggested routes with nights per stop and the usual way between them. Dashed arcs are flights. Every circuit can be shortened,
            extended or re-ordered.
          </p>
        </div>
        <RouteJourney journeys={listedCircuits.map(journeyView)} layout="explorer" tone="dark" label="Multi-city Australia circuits" />
      </div>
    </section>
  );
}
