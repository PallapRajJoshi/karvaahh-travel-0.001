import { russiaDestinationById, visibleDestinations } from "@/data/russia/destinations";
import { russiaPackageCount } from "@/data/russia/packages";
import { transSiberian } from "@/data/russia/transport";
import { russiaDotsPaths } from "@/lib/russia/map";
import { projectRu, routeThrough } from "@/lib/russia/projection";
import { arcPath } from "@/lib/asia/projection";
import RussiaMapClient, { type RuMarker, type RuRoute } from "./RussiaMapClient";

/** Label placement for close neighbours (default: below the marker). */
const LABEL_SIDE: Record<string, RuMarker["labelSide"]> = {
  moscow: "left",
  "saint-petersburg": "left",
  "golden-ring": "top",
  "nizhny-novgorod": "right",
  kazan: "right",
  irkutsk: "left",
  "lake-baikal": "right",
  novosibirsk: "top",
  krasnoyarsk: "top",
  khabarovsk: "right",
  vladivostok: "left",
  kaliningrad: "right",
};

/** Illustrative flight arcs from Moscow. */
const FLIGHTS = ["saint-petersburg", "murmansk", "sochi", "kazan", "irkutsk"];

export default function RussiaMap() {
  const markers: RuMarker[] = visibleDestinations
    .filter((d) => d.coords)
    .map((d) => ({ d, ...projectRu(d.coords!), packageCount: russiaPackageCount(d.id, d.partOf), labelSide: LABEL_SIDE[d.id] }));

  const moscow = projectRu(russiaDestinationById("moscow")!.coords!);
  const flights: RuRoute[] = FLIGHTS.flatMap((id) => {
    const d = russiaDestinationById(id);
    if (!d?.coords || d.operationalStatus === "inactive") return [];
    return [{ id: `moscow-${id}`, path: arcPath(moscow, projectRu(d.coords)), kind: "flight" as const }];
  });

  // Rail line through the visible Trans-Siberian stops that have coordinates.
  const railPoints = transSiberian.stops
    .map((s) => russiaDestinationById(s.id))
    .filter((d) => d?.coords && d.operationalStatus !== "inactive")
    .map((d) => projectRu(d!.coords!));
  const rail: RuRoute[] = railPoints.length > 1 ? [{ id: "trans-siberian", path: routeThrough(railPoints), kind: "rail" }] : [];

  return (
    <section className="pkg-section asia-section--deep ru-section--map" id="ru-map" aria-labelledby="ru-map-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow asia-eyebrow--light">Interactive map</p>
          <h2 id="ru-map-h" className="pkg-h2 pkg-h2--light">Russia on the Map</h2>
          <p className="pkg-lede pkg-lede--light">
            From the Baltic to the Pacific, Russia spans eleven time zones. Select a destination to see its highlights,
            best season and how long to plan for.
          </p>
        </div>
        <RussiaMapClient paths={russiaDotsPaths()} markers={markers} routes={[...rail, ...flights]} />
      </div>
    </section>
  );
}
