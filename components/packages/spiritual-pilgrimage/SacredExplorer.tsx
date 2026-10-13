"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Info, MapPin } from "lucide-react";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import type { SacredCategoryId, SacredPlace } from "@/data/spiritual-pilgrimage/types";

const EASE = [0.22, 1, 0.36, 1] as const;

type Category = { id: SacredCategoryId | "all"; label: string };

/**
 * "Discover Sacred Places Across Nepal & India" — destination cards with
 * a category filter. Membership comes from each place's own data, so a
 * place only appears under traditions it genuinely belongs to.
 */
export default function SacredExplorer({ places, categories }: { places: SacredPlace[]; categories: Category[] }) {
  const [active, setActive] = useState<Category["id"]>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: places.length };
    for (const p of places) for (const cat of p.categories) c[cat] = (c[cat] ?? 0) + 1;
    return c;
  }, [places]);

  const visible = active === "all" ? places : places.filter((p) => p.categories.includes(active));
  const chips = categories.filter((c) => counts[c.id]);

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-[120px] bg-[#FBF7F0] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="destinations-title"
            eyebrow="Sacred Destinations"
            title="Discover Sacred Places Across Nepal & India"
            intro="From Shiva's temple on the Bagmati to the Buddha's birthplace, and from Muktinath's Himalayan sanctuary to the four Dhams of Uttarakhand — places of devotion, history and quiet reflection."
          />
        </Reveal>

        <div role="group" aria-label="Filter sacred places by category" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {chips.map((c) => {
            const on = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-[13.5px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                  on
                    ? "border-[#0B2942] bg-[#0B2942] text-white shadow-[0_10px_24px_-12px_rgba(11,41,66,0.7)]"
                    : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#C98500] hover:text-[#8A4A12]"
                }`}
              >
                {c.label}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-[#F4A300] text-[#0C1D30]" : "bg-[#0B2942]/[0.07] text-[#5B6B7B]"}`}>{counts[c.id]}</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="sr-only">
          Showing {visible.length} sacred places
        </p>

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              >
                <PlaceCard p={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

function PlaceCard({ p }: { p: SacredPlace }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <PageImageFill image={p.image} sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-[#071421]/70 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">{p.country}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-[12px] font-medium text-[#8A97A5]">
          <MapPin className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
          {p.location}
        </p>
        <h3 className={`${SERIF} mt-1.5 text-[24px] font-medium leading-tight text-[#0B2942]`}>{p.name}</h3>
        <p className="mt-3 text-[14.5px] leading-6 text-[#4A5B6B]">{p.text}</p>
        <p className="mt-3 border-l-2 border-[#F4A300] pl-3 text-[13.5px] leading-6 text-[#5B6B7B]">
          <span className="sr-only">Significance: </span>
          {p.significance}
        </p>
        {p.note && (
          <p className="mt-3 flex items-start gap-1.5 text-[12.5px] leading-5 text-[#5B6B7B]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
            {p.note}
          </p>
        )}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Experiences">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#0B2942]/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0B2942]/75">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <Link
            href={p.link.href}
            aria-label={`${p.link.label} — ${p.name}`}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C2561A]"
          >
            {p.link.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
