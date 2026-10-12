"use client";

import { useId, useState } from "react";
import type { InclusionItem } from "../product-types";
import InclusionList from "./InclusionList";

/** Tabs for package-specific inclusions (e.g. Helicopter / Road). */
export default function InclusionTabs({ sets }: { sets: { label: string; items: InclusionItem[] }[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <>
      <div role="tablist" aria-label="Package type" className="mt-5 inline-flex flex-wrap gap-1 rounded-full bg-white p-1 ring-1 ring-[#0B2942]/10">
        {sets.map((s, i) => (
          <button
            key={s.label}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${id}-panel`}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors ${
              active === i ? "bg-[#0B2942] text-white" : "text-[#0B2942] hover:bg-[#F8F6F1]"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`}>
        <InclusionList items={sets[active].items} />
      </div>
    </>
  );
}
