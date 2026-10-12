import { australiaRegions } from "@/data/australia/regions";
import { australiaRegionPaths } from "@/lib/australia/map";

/**
 * The dot map, defined once per page. Every map (hero, explorer, journeys,
 * road trips) draws it with <use href="#au-land…">, so the path data ships
 * once. Styles (stroke, dash) are applied on the <use> element and inherited
 * by the referenced path.
 */
export default function AustraliaLandSprite() {
  const paths = australiaRegionPaths();
  return (
    <svg className="us-sprite" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        {australiaRegions.map((r) => (
          <path key={r.id} id={`au-land-${r.id}`} d={paths[r.id]} />
        ))}
        <g id="au-land">
          {australiaRegions.map((r) => (
            <use key={r.id} href={`#au-land-${r.id}`} />
          ))}
        </g>
      </defs>
    </svg>
  );
}
