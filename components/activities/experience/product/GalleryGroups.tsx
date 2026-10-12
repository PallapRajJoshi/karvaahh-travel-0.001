"use client";

import { useState } from "react";
import type { PageImage } from "../types";
import GalleryLightbox from "./GalleryLightbox";

type Item = { image: PageImage & { src: string }; caption: string; group?: string };

/** Filter chips per gallery group (e.g. each Dham) above the masonry lightbox. */
export default function GalleryGroups({ items }: { items: Item[] }) {
  const groups = Array.from(new Set(items.map((i) => i.group).filter((g): g is string => Boolean(g))));
  const [group, setGroup] = useState<string | null>(null);
  const visible = group ? items.filter((i) => i.group === group) : items;

  return (
    <>
      <div role="group" aria-label="Filter photos" className="mb-8 flex flex-wrap gap-2">
        {[null, ...groups].map((g) => {
          const active = group === g;
          return (
            <button
              key={g ?? "all"}
              type="button"
              aria-pressed={active}
              onClick={() => setGroup(g)}
              className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                active ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
              }`}
            >
              {g ?? "All photos"}
            </button>
          );
        })}
      </div>
      <GalleryLightbox key={group ?? "all"} items={visible} />
    </>
  );
}
