import { bookableCountries, europeCountries } from "@/data/europe/countries";
import { packageCountFor } from "@/data/europe/packages";
import { contextLandPath, countryDotsPath } from "@/lib/europe/map";
import { MAP_H, MAP_W, project } from "@/lib/europe/projection";
import EuropeMapClient, { type MapCountry } from "./EuropeMapClient";

/** Server half of the map: dot paths and projection are built here, not in the browser. */
export default function EuropeMap() {
  const countries: MapCountry[] = europeCountries.map((c) => ({
    id: c.id,
    dots: countryDotsPath(c.iso),
    ...project(c.coords),
    packageCount: packageCountFor(c.id),
  }));

  // Flights from Nepal and India arrive from the east edge of the map (illustrative only).
  const origin = { x: MAP_W + 40, y: MAP_H * 0.86 };

  return (
    <section className="pkg-section asia-section--deep eu-map-section" id="europe-map" aria-labelledby="europe-map-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow asia-eyebrow--light">Interactive map</p>
          <h2 id="europe-map-h" className="pkg-h2 pkg-h2--light">Explore Europe on the Map</h2>
          <p className="pkg-lede pkg-lede--light">
            Select any of {bookableCountries.length} countries to see its cities, experiences, travel styles, best seasons and
            packages. Countries that match your filters stay lit.
          </p>
        </div>
        <EuropeMapClient land={contextLandPath()} countries={countries} origin={origin} />
      </div>
    </section>
  );
}
