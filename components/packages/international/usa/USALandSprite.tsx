import { usaRegions } from "@/data/usa/regions";
import { usaRegionPaths } from "@/lib/usa/map";

/**
 * The dot map, defined once per page. Every map (the main explorer, route
 * journeys, road trips) draws it with <use href="#usa-land…">, so the path
 * data ships once. Styles (stroke, dash) are applied on the <use> element and
 * inherited by the referenced path.
 */
export default function USALandSprite() {
  const paths = usaRegionPaths();
  return (
    <svg className="us-sprite" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        {usaRegions.map((r) => (
          <path key={r.id} id={`usa-land-${r.id}`} d={paths[r.id]} />
        ))}
        <g id="usa-land">
          {usaRegions.map((r) => (
            <use key={r.id} href={`#usa-land-${r.id}`} />
          ))}
        </g>
      </defs>
    </svg>
  );
}
