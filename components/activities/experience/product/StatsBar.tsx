"use client";

import { motion } from "motion/react";
import type { HelicopterTour } from "../product-types";
import { PageIcon } from "../ui";

/**
 * Floating glass stats overlapping the bottom of the hero (first four quick
 * facts). Desktop: four cards in a row; mobile: a swipeable row.
 */
export default function StatsBar({ tour }: { tour: Pick<HelicopterTour, "quickFacts"> }) {
  const items = tour.quickFacts.slice(0, 4);
  return (
    <section aria-label="Flight at a glance" className="relative z-20 -mt-14 px-5 sm:px-8 lg:-mt-16 lg:px-10">
      <ul className="mx-auto flex max-w-[1280px] snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {items.map((f, i) => (
          <motion.li
            key={f.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group min-w-[72%] shrink-0 snap-start rounded-[22px] border border-white/70 bg-white/85 p-5 shadow-[0_24px_50px_-28px_rgba(7,20,33,0.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(7,20,33,0.6)] min-[480px]:min-w-[46%] lg:min-w-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2942] text-[#F4A300] transition-transform duration-500 group-hover:scale-105">
              <PageIcon name={f.icon} className="h-[18px] w-[18px]" />
            </span>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A97A5]">{f.label}</p>
            <p className="mt-1 text-[17px] font-semibold leading-snug text-[#0B2942]">{f.value}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
