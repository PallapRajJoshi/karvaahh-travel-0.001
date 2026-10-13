"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CONTAINER, SectionHeading } from "@/components/activities/experience/ui";
import { ANCHOR } from "@/components/activities/experience/product/constants";
import type { Trek, TrekCategory } from "@/data/trekking/types";
import { TrekCard } from "./cards";

const PAGE = 12;
const EASE = [0.22, 1, 0.36, 1] as const;

type Category = { id: TrekCategory | "all"; label: string; hint: string };

/**
 * "Discover Nepal's Most Incredible Trails": category pills filter the
 * destination grid in place. Cards are server-safe; only the filter state
 * lives on the client.
 */
export default function TrailExplorer({ treks, categories }: { treks: Trek[]; categories: Category[] }) {
  const [active, setActive] = useState<Category["id"]>("all");
  const [showAll, setShowAll] = useState(false);

  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c.id === "all" ? treks.length : treks.filter((t) => t.categories.includes(c.id as TrekCategory)).length])),
    [categories, treks],
  );
  const results = active === "all" ? treks : treks.filter((t) => t.categories.includes(active));
  const visible = showAll ? results : results.slice(0, PAGE);
  const current = categories.find((c) => c.id === active);

  return (
    <section id="destinations" aria-labelledby="destinations-title" className={`${ANCHOR} relative bg-[#F8F6F1] py-20 sm:py-24 lg:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading
          id="destinations-title"
          eyebrow="Trekking Destinations"
          title="Discover Nepal's Most Incredible Trails"
          intro="From sunrise ridges above Pokhara to glaciers beneath Everest and remote lakes in the far west — explore the trails we cover, then choose a route that matches your time, fitness and travel style."
        />

        <div className="mt-10" role="group" aria-label="Filter treks by category">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => {
              const on = active === c.id;
              return (
                <li key={c.id} className="shrink-0">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setActive(c.id);
                      setShowAll(false);
                    }}
                    className={`relative inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                      on ? "border-[#0B2942] text-white" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/45"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="trek-category-pill"
                        aria-hidden="true"
                        className="absolute inset-0 -z-0 rounded-full bg-[#0B2942]"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    )}
                    <span className="relative">{c.label}</span>
                    <span className={`relative rounded-full px-1.5 text-[11px] ${on ? "bg-white/15 text-white" : "bg-[#F3EFE6] text-[#0B2942]/70"}`}>{counts[c.id]}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-[13.5px] text-[#5B6B7B]" aria-live="polite">
            Showing <span className="font-semibold text-[#0B2942]">{results.length}</span> {results.length === 1 ? "trail" : "trails"}
            {current && current.id !== "all" ? ` · ${current.hint}` : ""}
          </p>
        </div>

        <ul className="mt-8 grid gap-5 min-[560px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((t, i) => (
              <motion.li
                key={t.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: EASE }}
              >
                <TrekCard trek={t} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {results.length > PAGE && !showAll && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#0B2942]/15 bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942]"
            >
              Show all {results.length} trails
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        <p className="mt-10 max-w-[760px] text-[13px] leading-6 text-[#5B6B7B]">
          Durations, grades and altitudes appear only where our trek pages state them. Treks linked to a province guide are planned on
          request — itinerary, availability and price are confirmed with you before booking.
        </p>
      </div>
    </section>
  );
}
