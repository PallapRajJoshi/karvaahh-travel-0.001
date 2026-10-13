"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageIcon, SERIF } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import type { BeachPackage, PlannerChoice } from "@/data/beach-cruise/types";
import { OceanHeading, OceanImage, SECTION } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "What Kind of Escape Are You Dreaming Of?" — pick a travel mood and see
 * the existing packages tagged with it. When nothing matches, the visitor
 * is sent to the custom enquiry form instead.
 */
export default function EscapePlanner({ choices, packages }: { choices: (PlannerChoice & { enquiryHref: string })[]; packages: BeachPackage[] }) {
  const uid = useId();
  const [activeId, setActiveId] = useState(choices[0]?.id);
  const choice = choices.find((c) => c.id === activeId) ?? choices[0];
  if (!choice) return null;

  const matches = packages.filter((p) => p.escapes.includes(choice.escape));

  return (
    <section id="planner" aria-labelledby="planner-title" className={`${SECTION} relative overflow-hidden bg-[#05283A] text-white`}>
      <div aria-hidden="true" className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0E8A9A]/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#2CC4C8]/15 blur-3xl" />

      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <OceanHeading
            id="planner-title"
            dark
            eyebrow="Escape Planner"
            title="What Kind of Escape Are You Dreaming Of?"
            intro="Choose the holiday you have in mind and we will show the Karvaahh packages that suit it. Nothing fits? Tell us, and we will plan it from scratch."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div role="group" aria-label="Type of escape" className="grid gap-3 sm:grid-cols-2">
            {choices.map((c) => {
              const on = c.id === choice.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  aria-controls={`${uid}-results`}
                  onClick={() => setActiveId(c.id)}
                  className={`flex min-h-[44px] items-start gap-3.5 rounded-[20px] border p-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0DB] ${
                    on ? "border-[#7FE0DB] bg-white text-[#0B2942] shadow-[0_18px_40px_-20px_rgba(127,224,219,0.6)]" : "border-white/12 bg-white/[0.05] hover:border-white/35 hover:bg-white/[0.09]"
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${on ? "bg-[#0A4D68] text-[#7FE0DB]" : "bg-white/10 text-[#7FE0DB]"}`}>
                    <PageIcon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold leading-snug">{c.label}</span>
                    <span className={`mt-1 block text-[13px] leading-5 ${on ? "text-[#4E6272]" : "text-white/60"}`}>{c.text}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id={`${uid}-results`} aria-live="polite" className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7FE0DB]">
              {matches.length > 0 ? `${matches.length} matching ${matches.length === 1 ? "package" : "packages"}` : "Planned around you"}
            </p>
            <h3 className={`${SERIF} mt-2 text-[28px] font-medium leading-tight`}>{choice.label}</h3>

            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={choice.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-6 space-y-3"
              >
                {matches.map((p) => (
                  <li key={p.id} className="flex gap-4 rounded-[20px] bg-white p-3 text-[#0B2942]">
                    <div className="relative h-[84px] w-[96px] shrink-0 overflow-hidden rounded-[14px] sm:w-[120px]">
                      <OceanImage image={p.image} sizes="120px" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#0E8A9A]">{p.destination}</p>
                      <Link href={p.href} className="mt-0.5 text-[15.5px] font-semibold leading-snug hover:text-[#0E8A9A]">
                        {p.title}
                      </Link>
                      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-1.5 text-[12.5px] text-[#5B6B7B]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-[#0E8A9A]" aria-hidden="true" />
                          {p.duration}
                        </span>
                        <OpenBookingButton prefill={{ tourType: p.tourType }} ariaLabel={`Enquire about ${p.title}`} className="font-semibold text-[#0A4D68] underline decoration-[#2CC4C8] underline-offset-4">
                          Enquire
                        </OpenBookingButton>
                      </div>
                    </div>
                  </li>
                ))}
                {matches.length === 0 && (
                  <li className="rounded-[20px] border border-dashed border-white/25 p-5 text-[14.5px] leading-6 text-white/75">
                    We don&apos;t have a fixed package for this yet, but we plan it often. Share your dates and budget and we will design the trip with you.
                  </li>
                )}
              </motion.ul>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <Link
                href={choice.enquiryHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]"
              >
                Request a Custom Holiday
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {choice.extra && (
                <Link href={choice.extra.href} className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/25 px-5 text-[14px] font-semibold transition-colors hover:bg-white/10">
                  {choice.extra.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
