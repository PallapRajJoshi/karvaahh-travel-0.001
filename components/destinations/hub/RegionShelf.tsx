"use client";

import { countRegion } from "@/lib/destinations/data";
import type { ArtTheme, RegionId } from "@/lib/destinations/types";
import { REGIONS } from "@/lib/destinations/taxonomy";
import { scrollToExplorer, useExplorerParams } from "@/lib/destinations/url-state";
import { DestinationRegionCard } from "./cards/DestinationRegionCard";

const THEME: Record<RegionId, ArtTheme> = {
  himalayas: "himalaya",
  "south-asia": "beach",
  "southeast-asia": "wildlife",
  "middle-east": "desert",
  europe: "city",
  africa: "wildlife",
  americas: "city",
  oceania: "lake",
};

/** International region tiles; selecting one filters the explorer to that region. */
export function RegionShelf() {
  const [, update] = useExplorerParams();
  return (
    <ul className="dregions" role="list">
      {REGIONS.map((r) => (
        <li key={r.id}>
          <DestinationRegionCard
            region={r}
            count={countRegion(r.id, "international")}
            theme={THEME[r.id]}
            onSelect={() => {
              update({ country: "international", region: r.id, exp: undefined, q: "" });
              scrollToExplorer();
            }}
          />
        </li>
      ))}
    </ul>
  );
}
