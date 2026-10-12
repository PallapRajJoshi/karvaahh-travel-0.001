import { circuitById } from "@/data/australia/circuits";
import { visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaPackageCount } from "@/data/australia/packages";
import { australiaRegions } from "@/data/australia/regions";
import { projectAU } from "@/lib/australia/projection";
import { journeyView } from "@/lib/australia/routes";
import AustraliaMapClient, { type AUMarker } from "./AustraliaMapClient";

/** Signature journeys drawn on the main map. */
const MAP_ROUTES = ["east-coast", "perth-uluru", "mel-gor-syd", "alice-uluru-kings"];

/** "Explore Australia Destinations": states, markers and route connections. */
export default function AustraliaInteractiveMap() {
  const markers: AUMarker[] = visibleAustraliaDestinations
    .filter((d) => d.coords)
    .map((d) => ({ d, ...projectAU(d.coords!), packageCount: australiaPackageCount(d.id) }));

  const routes = MAP_ROUTES.flatMap((id) => {
    const c = circuitById(id);
    if (!c) return [];
    const r = journeyView(c).route;
    return [{ id, ground: r.ground, air: r.air }];
  });

  const labels = australiaRegions.map((r) => ({ id: r.id, short: r.short, ...projectAU(r.labelAt) }));

  return (
    <section className="pkg-section asia-section--deep us-section--map au-section--map" id="au-map" aria-labelledby="au-map-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow asia-eyebrow--light">Interactive map</p>
          <h2 id="au-map-h" className="pkg-h2 pkg-h2--light">Explore Australia Destinations</h2>
          <p className="pkg-lede pkg-lede--light">
            Select a state or territory to focus the destinations, experiences and packages below, or tap a place to see what it offers.
          </p>
        </div>
        <AustraliaMapClient markers={markers} routes={routes} labels={labels} />
      </div>
    </section>
  );
}
