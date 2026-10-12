import { circuitById } from "@/data/usa/circuits";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { usaPackageCount } from "@/data/usa/packages";
import { projectUS } from "@/lib/usa/projection";
import { routeView } from "@/lib/usa/routes";
import USAMapClient, { type USMarker } from "./USAMapClient";

/** Signature journeys drawn on the main map. */
const MAP_ROUTES = ["coast-to-coast", "ny-orlando-miami", "ca-hawaii", "southwest-parks"];

export default function USAInteractiveMap() {
  const markers: USMarker[] = visibleUSADestinations
    .filter((d) => d.coords)
    .map((d) => ({ d, ...projectUS(d.coords!), packageCount: usaPackageCount(d.id) }));

  const routes = MAP_ROUTES.flatMap((id) => {
    const c = circuitById(id);
    return c ? [{ id, path: routeView(c.stops).path }] : [];
  });

  return (
    <section className="pkg-section asia-section--deep us-section--map" id="us-map" aria-labelledby="us-map-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow asia-eyebrow--light">Interactive map</p>
          <h2 id="us-map-h" className="pkg-h2 pkg-h2--light">Explore USA Destinations</h2>
          <p className="pkg-lede pkg-lede--light">
            Select a region to focus the destinations and packages below, or tap a city to see what it offers.
          </p>
        </div>
        <USAMapClient markers={markers} routes={routes} />
      </div>
    </section>
  );
}
