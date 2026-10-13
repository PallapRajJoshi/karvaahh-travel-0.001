"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import type { HeritageCategoryId, HeritageDestination } from "@/data/historical-heritage/types";
import HeritageVisual from "./HeritageVisual";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Explore Nepal's Historic Cities & Heritage Sites" — destination cards
 * with a category filter. Categories come from each destination's own
 * data, so a site appears only under labels that genuinely apply.
 */
export default function HeritageExplorer({ destinations, categories }: { destinations: HeritageDestination[]; categories: { id: HeritageCategoryId; label: string }[] }) {
  const [active, setActive] = useState<HeritageCategoryId | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: destinations.length };
    for (const d of destinations) for (const cat of d.categories) c[cat] = (c[cat] ?? 0) + 1;
    return c;
  }, [destinations]);

  const visible = active === "all" ? destinations : destinations.filter((d) => d.categories.includes(active));
  const filters = [{ id: "all" as const, label: "All Destinations" }, ...categories.filter((c) => counts[c.id])];

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-[120px] bg-[#F7F1E8] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="destinations-title"
            eyebrow="Historic Destinations"
            title="Explore Nepal's Historic Cities & Heritage Sites"
            intro="Royal palace squares, ancient stupas, temple complexes and archaeological remains — places where Nepal's history is still part of everyday life."
          />
        </Reveal>

        <div role="group" aria-label="Filter destinations by heritage type" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {filters.map((c) => {
            const on = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-[13.5px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4532A] ${
                  on
                    ? "border-[#0B2942] bg-[#0B2942] text-white shadow-[0_10px_24px_-12px_rgba(11,41,66,0.7)]"
                    : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#B4532A] hover:text-[#8A3A1C]"
                }`}
              >
                {c.label}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-[#F4A300] text-[#0C1D30]" : "bg-[#0B2942]/[0.07] text-[#5B6B7B]"}`}>{counts[c.id]}</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="sr-only">
          Showing {visible.length} destinations
        </p>

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((d, i) => (
              <motion.li
                key={d.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              >
                <DestinationCard d={d} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-10 flex items-start gap-2 rounded-2xl border border-[#B4532A]/20 bg-white px-5 py-4 text-[14px] leading-6 text-[#5B4A3A]">
          <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#B4532A]" aria-hidden="true" />
          The UNESCO badge appears only on sites inside Nepal&apos;s two World Heritage cultural properties — the Kathmandu Valley&apos;s seven Monument Zones and Lumbini. Other sites here are historically significant but not World Heritage Sites.
        </p>
      </div>
    </section>
  );
}

function DestinationCard({ d }: { d: HeritageDestination }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <HeritageVisual image={d.image} tone={d.tone} title={d.name} sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
        </div>
        {d.unesco && (
          <span title={d.unesco} className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#0B2942]/85 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <Award className="h-3.5 w-3.5 text-[#F4C66A]" aria-hidden="true" />
            UNESCO
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B4532A]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {d.region}
        </p>
        <h3 className={`${SERIF} mt-2 text-[26px] font-medium leading-tight text-[#0B2942]`}>{d.name}</h3>
        <p className="mt-3 text-[14.5px] leading-6 text-[#4A5B6B]">{d.text}</p>
        {d.unesco && <p className="mt-3 border-l-2 border-[#F4A300] pl-3 text-[12.5px] leading-5 text-[#5B6B7B]">{d.unesco}</p>}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Heritage themes">
          {d.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#0B2942]/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0B2942]/75">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <Link
            href={d.href}
            aria-label={`${d.linkLabel}: ${d.name}`}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#B4532A] decoration-2 underline-offset-[6px] transition-colors hover:text-[#B4532A]"
          >
            {d.linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
