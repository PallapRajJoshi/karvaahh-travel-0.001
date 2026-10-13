"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import { CATEGORY_LABEL, FESTIVAL_CATEGORIES } from "@/data/festival-cultural/festivals";
import type { Festival, FestivalCategoryId } from "@/data/festival-cultural/types";
import FestivalVisual from "./FestivalVisual";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Celebrate Nepal Through Its Festivals" — festival cards with a
 * category filter. Categories come from each festival's own data, so a
 * festival only appears under traditions it genuinely belongs to.
 */
export default function FestivalExplorer({ festivals }: { festivals: Festival[] }) {
  const [active, setActive] = useState<FestivalCategoryId | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: festivals.length };
    for (const f of festivals) for (const cat of f.categories) c[cat] = (c[cat] ?? 0) + 1;
    return c;
  }, [festivals]);

  const visible = active === "all" ? festivals : festivals.filter((f) => f.categories.includes(active));
  const categories = FESTIVAL_CATEGORIES.filter((c) => counts[c.id]);

  return (
    <section id="festivals" aria-labelledby="festivals-title" className="scroll-mt-[120px] bg-[#FBF7F0] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="festivals-title"
            eyebrow="Festivals of Nepal"
            title="Celebrate Nepal Through Its Festivals"
            intro="From family blessings at Dashain to chariot processions in the Kathmandu Valley, Nepal's calendar is full of celebration. Each festival belongs to its own community and tradition — here is what to know before you go."
          />
        </Reveal>

        <div role="group" aria-label="Filter festivals by tradition" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((c) => {
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
          Showing {visible.length} festivals
        </p>

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((f, i) => (
              <motion.li
                key={f.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              >
                <FestivalCard f={f} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-10 flex items-start gap-2 rounded-2xl border border-[#C98500]/25 bg-[#FFF6E5] px-5 py-4 text-[14px] leading-6 text-[#5B4320]">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          Festival dates follow lunar and Nepali solar calendars and change every year. Seasons shown are typical; we confirm the current year&apos;s dates when planning. Festivals are public and religious events — no tour can guarantee access to specific ceremonies.
        </p>
      </div>
    </section>
  );
}

function FestivalCard({ f }: { f: Festival }) {
  const isRoute = f.link.href.startsWith("/");
  const dates = f.confirmedDates ? Object.entries(f.confirmedDates) : [];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <FestivalVisual image={f.image} art={f.art} title={f.name} sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
        </div>
        {f.image.src && <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />}
        {f.image.src && f.pictured && (
          <span className="absolute bottom-3 left-4 text-[11.5px] font-medium text-white/85">Pictured: {f.pictured}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="flex flex-wrap gap-1.5" aria-label="Traditions">
          {f.categories.map((c) => (
            <li key={c} className="rounded-full bg-[#0B2942]/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0B2942]/75">
              {CATEGORY_LABEL[c]}
            </li>
          ))}
        </ul>
        <h3 className={`${SERIF} mt-4 text-[26px] font-medium leading-tight text-[#0B2942]`}>{f.name}</h3>
        <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#C2561A]">{f.tagline}</p>
        <p className="mt-3 text-[14.5px] leading-6 text-[#4A5B6B]">{f.description}</p>
        <p className="mt-3 border-l-2 border-[#F4A300] pl-3 text-[13.5px] leading-6 text-[#5B6B7B]">{f.significance}</p>

        <dl className="mt-5 grid gap-2 text-[13px] text-[#0B2942]">
          <div className="flex items-start gap-2">
            <dt className="sr-only">Typical season</dt>
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            <dd>{f.season}</dd>
          </div>
          {dates.map(([year, text]) => (
            <div key={year} className="flex items-start gap-2 pl-6">
              <dt className="font-semibold">{year}:</dt>
              <dd>{text}</dd>
            </div>
          ))}
          <div className="flex items-start gap-2">
            <dt className="sr-only">Where</dt>
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            <dd>{f.location}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-6">
          {isRoute ? (
            <Link
              href={f.link.href}
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C2561A]"
            >
              Explore {f.link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : (
            <a href={f.link.href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px]">
              {f.link.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
