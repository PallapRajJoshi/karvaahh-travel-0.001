import { listedCircuits } from "@/data/usa/circuits";
import { journeyView } from "@/lib/usa/routes";
import RouteJourney from "./RouteJourney";

/** Journey builder: pick a circuit, watch the route draw across the map, read the timeline. */
export default function USAMultiCityCircuits() {
  return (
    <section className="pkg-section asia-section--deep us-circuits" id="circuits" aria-labelledby="circuits-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow asia-eyebrow--light">Multi-city USA circuits</p>
          <h2 id="circuits-h" className="pkg-h2 pkg-h2--light">Connect the Dots Across America</h2>
          <p className="pkg-lede pkg-lede--light">
            Suggested routes with nights per stop and the usual way between them. Every circuit can be shortened, extended or re-ordered.
          </p>
        </div>
        <RouteJourney journeys={listedCircuits.map(journeyView)} layout="explorer" tone="dark" label="Multi-city USA circuits" />
      </div>
    </section>
  );
}
