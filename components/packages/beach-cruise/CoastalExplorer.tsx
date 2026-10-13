"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Info, Sun } from "lucide-react";
import { CONTAINER, SERIF } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import type { CoastalDestination, EscapeId } from "@/data/beach-cruise/types";
import { OceanHeading, OceanImage, SECTION, TEXT_LINK } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

type Chip = { id: EscapeId | "all"; label: string };
type Destination = CoastalDestination & { group: string };

/**
 * "Find Your Perfect Coastal Escape" — editorial destination cards with
 * an escape-type filter. Membership comes from each destination's own
 * data, and chips with no destinations are hidden.
 */
export default function CoastalExplorer({ destinations, chips }: { destinations: Destination[]; chips: Chip[] }) {
  const [active, setActive] = useState<Chip["id"]>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: destinations.length };
    for (const d of destinations) for (const e of d.escapes) c[e] = (c[e] ?? 0) + 1;
    return c;
  }, [destinations]);

  const visible = active === "all" ? destinations : destinations.filter((d) => d.escapes.includes(active));
  const shown = chips.filter((c) => counts[c.id]);
  const activeLabel = chips.find((c) => c.id === active)?.label ?? "All Escapes";

  return (
    <section id="destinations" aria-labelledby="destinations-title" className={`${SECTION} bg-[#F7F1E6] !pt-10 sm:!pt-14`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading
            id="destinations-title"
            eyebrow="Beach & Island Destinations"
            title="Find Your Perfect Coastal Escape"
            intro="Overwater villas in the Maldives, sea temples in Bali, limestone bays in Krabi and caldera sunsets in Santorini. Places marked “On request” have no fixed package yet; we plan them around your dates."
          />
        </Reveal>

        <div role="group" aria-label="Filter destinations by type of escape" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {shown.map((c) => {
            const on = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-[13.5px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2CC4C8] ${
                  on
                    ? "border-[#0A4D68] bg-[#0A4D68] text-white shadow-[0_10px_24px_-12px_rgba(10,77,104,0.8)]"
                    : "border-[#0A4D68]/15 bg-white/80 text-[#0B2942] hover:border-[#2CC4C8] hover:text-[#0E8A9A]"
                }`}
              >
                {c.label}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-[#7FE0DB] text-[#05283A]" : "bg-[#0A4D68]/[0.07] text-[#5B6B7B]"}`}>{counts[c.id]}</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="sr-only">
          Showing {visible.length} destinations for {activeLabel}
        </p>

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((d, i) => (
              <motion.li
                key={d.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.09, ease: EASE }}
              >
                <DestinationCard d={d} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

function DestinationCard({ d }: { d: Destination }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_22px_48px_-34px_rgba(5,40,58,0.55)] ring-1 ring-[#0A4D68]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_60px_-30px_rgba(5,40,58,0.6)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]">
          <OceanImage image={d.image} sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#05283A]/45 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#0A4D68] backdrop-blur-sm">{d.group}</span>
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${
            d.status === "packages" ? "bg-[#05283A]/75 text-[#7FE0DB]" : "bg-[#F7F1E6]/90 text-[#7A5A2A]"
          }`}
        >
          {d.status === "packages" ? "Karvaahh packages" : "On request"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0E8A9A]">{d.region}</p>
        <h3 className={`${SERIF} mt-1.5 text-[26px] font-medium leading-tight text-[#0B2942]`}>{d.name}</h3>
        <p className="mt-3 text-[14.5px] leading-6 text-[#4E6272]">{d.text}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Experiences">
          {d.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#EAF7F6] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0A4D68]">
              {t}
            </li>
          ))}
        </ul>

        {d.bestTime && (
          <p className="mt-4 flex items-start gap-2 text-[13px] leading-5 text-[#4E6272]">
            <Sun className="mt-0.5 h-4 w-4 shrink-0 text-[#E2A33B]" aria-hidden="true" />
            <span>
              <span className="font-semibold text-[#0B2942]">Typically best: </span>
              {d.bestTime}
            </span>
          </p>
        )}
        {d.note && (
          <p className="mt-3 flex items-start gap-2 text-[12.5px] leading-5 text-[#6B7A88]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
            {d.note}
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
          <Link href={d.link.href} aria-label={`${d.link.label}: ${d.name}`} className={TEXT_LINK}>
            {d.link.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          {d.secondary && (
            <Link href={d.secondary.href} className="text-[13px] font-medium text-[#5B6B7B] underline-offset-4 transition-colors hover:text-[#0E8A9A] hover:underline">
              {d.secondary.label}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
