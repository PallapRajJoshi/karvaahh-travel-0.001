"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Info, MapPin, MessageCircle, Mountain } from "lucide-react";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import type { Destination, DestinationGroup, FilterId } from "@/data/uttarakhand/types";

const EASE = [0.22, 1, 0.36, 1] as const;

type Filter = { id: FilterId | "all"; label: string };

/** Distinct treatments: saffron for pilgrimage, Himalayan blue for hills, forest green for nature. */
const GROUP: Record<DestinationGroup, { label: string; chip: string; rule: string }> = {
  "char-dham": { label: "Char Dham", chip: "bg-[#F4A300] text-[#0C1D30]", rule: "border-[#F4A300]" },
  spiritual: { label: "Sacred Town", chip: "bg-[#C2561A] text-white", rule: "border-[#C2561A]" },
  hill: { label: "Hills & Mountains", chip: "bg-[#2E6E99] text-white", rule: "border-[#2E6E99]" },
  wildlife: { label: "Wildlife & Nature", chip: "bg-[#2F7A4A] text-white", rule: "border-[#2F7A4A]" },
};

/**
 * "Discover the Best Places to Visit in Uttarakhand" — destination cards
 * with a filter. Membership comes from each destination's own data.
 */
export default function DestinationExplorer({ destinations, filters }: { destinations: Destination[]; filters: Filter[] }) {
  const [active, setActive] = useState<Filter["id"]>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: destinations.length };
    for (const d of destinations) for (const f of d.filters) c[f] = (c[f] ?? 0) + 1;
    return c;
  }, [destinations]);

  const visible = active === "all" ? destinations : destinations.filter((d) => d.filters.includes(active));
  const chips = filters.filter((f) => counts[f.id]);

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-[120px] bg-[#F5F8FA] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="destinations-title"
            eyebrow="Top Destinations"
            title="Discover the Best Places to Visit in Uttarakhand"
            intro="Sacred shrines of the Garhwal Himalaya, river towns on the Ganga, hill stations of Kumaon and protected forests at the foot of the mountains — choose what calls you."
          />
        </Reveal>

        <div role="group" aria-label="Filter destinations" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {chips.map((f) => {
            const on = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f.id)}
                className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-[13.5px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                  on
                    ? "border-[#0B2942] bg-[#0B2942] text-white shadow-[0_10px_24px_-12px_rgba(11,41,66,0.7)]"
                    : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#2E6E99] hover:text-[#2E6E99]"
                }`}
              >
                {f.label}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-[#F4A300] text-[#0C1D30]" : "bg-[#0B2942]/[0.07] text-[#5B6B7B]"}`}>{counts[f.id]}</span>
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

        <p className="mt-10 flex items-start gap-2 text-[13.5px] leading-6 text-[#5B6B7B]">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#2E6E99]" aria-hidden="true" />
          Destinations marked &ldquo;Planned on request&rdquo; do not have a fixed Karvaahh package yet — we design the route, stays and pace around your dates.
        </p>
      </div>
    </section>
  );
}

function DestinationCard({ d }: { d: Destination }) {
  const g = GROUP[d.group];
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <PageImageFill image={d.image} sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
        </div>
        <span className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] ${g.chip}`}>{g.label}</span>
        {!d.link && (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-[#0B2942] backdrop-blur-sm">Planned on request</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-[12px] font-medium text-[#8A97A5]">
          <MapPin className="h-3.5 w-3.5 text-[#2E6E99]" aria-hidden="true" />
          {d.location}
        </p>
        <h3 className={`${SERIF} mt-1.5 text-[24px] font-medium leading-tight text-[#0B2942]`}>{d.name}</h3>
        <p className="mt-3 text-[14.5px] leading-6 text-[#4A5B6B]">{d.text}</p>
        {d.fact && (
          <p className={`mt-3 flex items-center gap-2 border-l-2 pl-3 text-[13px] font-semibold text-[#0B2942] ${g.rule}`}>
            <Mountain className="h-3.5 w-3.5 shrink-0 text-[#5B6B7B]" aria-hidden="true" />
            {d.fact}
          </p>
        )}
        {d.note && (
          <p className="mt-3 flex items-start gap-1.5 text-[12.5px] leading-5 text-[#5B6B7B]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
            {d.note}
          </p>
        )}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Experiences">
          {d.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#0B2942]/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0B2942]/75">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          {d.link ? (
            <Link
              href={d.link.href}
              aria-label={`${d.link.label} — ${d.name}`}
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#2E6E99]"
            >
              {d.link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : (
            <OpenBookingButton
              prefill={{ tourType: d.tourType }}
              ariaLabel={`Enquire about ${d.name}`}
              className="inline-flex min-h-[40px] items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#2E6E99] decoration-2 underline-offset-[6px] transition-colors hover:text-[#2E6E99]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire About {d.name}
            </OpenBookingButton>
          )}
        </div>
      </div>
    </article>
  );
}
