import { illustrativeRoutes } from "@/data/asia-content";
import { activeDestinations, destinationById } from "@/data/asia-destinations";
import { packageCountFor } from "@/data/asia-packages";
import { landDotsPath } from "@/lib/asia/map";
import { arcPath, project } from "@/lib/asia/projection";
import AsiaMapClient, { type MapMarker, type MapRoute } from "./AsiaMapClient";

/** Where to put a marker label so close neighbours do not collide (default: below). */
const LABEL_SIDE: Record<string, MapMarker["labelSide"]> = {
  georgia: "left",
  armenia: "left",
  azerbaijan: "right",
  nepal: "left",
  bhutan: "right",
  india: "left",
  bangladesh: "right",
  malaysia: "left",
  vietnam: "right",
  laos: "top",
  cambodia: "left",
  "hong-kong": "right",
  macau: "left",
  kazakhstan: "right",
  kyrgyzstan: "left",
  qatar: "left",
  oman: "right",
};

/** Server half of the map: projection and path building happen here, not in the browser. */
export default function AsiaMap() {
  const markers: MapMarker[] = activeDestinations.map((d) => ({
    d,
    ...project(d.coords),
    packageCount: packageCountFor(d.id),
    labelSide: LABEL_SIDE[d.id],
  }));

  const routes: MapRoute[] = illustrativeRoutes.flatMap(({ from, to }) => {
    const a = destinationById(from);
    const b = destinationById(to);
    if (!a?.active || !b?.active) return [];
    return [{ id: `${from}-${to}`, path: arcPath(project(a.coords), project(b.coords)), label: `${a.country} to ${b.country}` }];
  });

  const kathmandu = destinationById("nepal")!;

  return (
    <section className="pkg-section asia-section--deep" id="asia-map" aria-labelledby="asia-map-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow asia-eyebrow--light">Interactive map</p>
          <h2 id="asia-map-h" className="pkg-h2 pkg-h2--light">Explore Asia on the Map</h2>
          <p className="pkg-lede pkg-lede--light">
            Select a country to see its highlights, travel styles and how long to plan for. Every journey starts from
            Nepal or India.
          </p>
        </div>
        <AsiaMapClient dotsPath={landDotsPath()} markers={markers} routes={routes} origin={project(kathmandu.coords)} />
      </div>
    </section>
  );
}
