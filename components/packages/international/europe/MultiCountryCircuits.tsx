import { countryById } from "@/data/europe/countries";
import { activePackages } from "@/data/europe/packages";
import { allLandPath } from "@/lib/europe/map";
import { project, routePath } from "@/lib/europe/projection";
import CircuitExplorer, { type CircuitView } from "./CircuitExplorer";

/** Server half: route geometry is computed here so the client only animates it. */
export default function MultiCountryCircuits() {
  const circuits: CircuitView[] = activePackages
    .filter((p) => p.circuit && p.routeCoords && p.routeCoords.length === p.destinations.length)
    .filter((p) => p.countries.every((id) => countryById(id)?.operationalStatus === "active"))
    .map((p) => {
      const points = p.routeCoords!.map(project);
      return {
        id: p.id,
        title: p.title,
        duration: p.duration,
        description: p.description,
        flags: p.countries.map((id) => countryById(id)!.iso),
        stops: p.destinations.map((name, i) => ({ name, ...points[i] })),
        path: routePath(points),
      };
    });

  if (!circuits.length) return null;

  return (
    <section className="pkg-section asia-section--deep eu-circuits" id="multi-country" aria-labelledby="circuits-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow asia-eyebrow--light">Multi-country circuits</p>
          <h2 id="circuits-h" className="pkg-h2 pkg-h2--light">One Trip. Multiple Countries.</h2>
          <p className="pkg-lede pkg-lede--light">
            Europe&apos;s trains and short flights make it easy to see several countries in one holiday. Pick a circuit to trace
            the route.
          </p>
        </div>
        <CircuitExplorer land={allLandPath()} circuits={circuits} />
      </div>
    </section>
  );
}
