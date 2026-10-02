"use client";

import { useId, useState } from "react";
import type { Season, TravelPackage } from "@/data/packages/package-types";
import { SEASON_LABEL, SEASON_ORDER } from "@/lib/packages/query";
import PackageCard from "./PackageCard";

/** "Travel This Season". Tabs are built only from seasons that real packages declare. */
export default function SeasonalTabs({ packages }: { packages: TravelPackage[] }) {
  const uid = useId();
  const seasons = SEASON_ORDER.filter((s) => packages.some((p) => p.seasons?.includes(s)));
  const [active, setActive] = useState<Season>(seasons[0]);
  if (!seasons.length) return null;
  const list = packages.filter((p) => p.seasons?.includes(active)).slice(0, 4);

  return (
    <div>
      <div role="tablist" aria-label="Season or festival" className="pkg-tabs">
        {seasons.map((s) => (
          <button
            key={s}
            role="tab"
            id={`${uid}-t-${s}`}
            aria-selected={active === s}
            aria-controls={`${uid}-p`}
            tabIndex={active === s ? 0 : -1}
            className="pkg-tab"
            type="button"
            onClick={() => setActive(s)}
            onKeyDown={(e) => {
              const i = seasons.indexOf(active);
              const next = e.key === "ArrowRight" ? seasons[(i + 1) % seasons.length] : e.key === "ArrowLeft" ? seasons[(i - 1 + seasons.length) % seasons.length] : null;
              if (next) {
                e.preventDefault();
                setActive(next);
                document.getElementById(`${uid}-t-${next}`)?.focus();
              }
            }}
          >
            {SEASON_LABEL[s]}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${uid}-p`} aria-labelledby={`${uid}-t-${active}`} className="pkg-tabpanel">
        <ul className="pkg-grid pkg-grid--grid" key={active}>
          {list.map((p) => (
            <li key={p.id} className="pkg-grid__item"><PackageCard pkg={p} /></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
