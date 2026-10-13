"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, CalendarDays, Check, Gauge, MessageCircle } from "lucide-react";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTACT } from "@/components/activities/experience/site";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import { PACKAGE_THEMES } from "@/data/adventure-offbeat/packages";
import type { AdventurePackage, PackageThemeId } from "@/data/adventure-offbeat/types";

/**
 * Package showcase grouped by theme. Cards show only confirmed details;
 * prices appear only when a real Karvaahh price is set in the data.
 */
export default function PackageShowcase({ packages }: { packages: AdventurePackage[] }) {
  const [theme, setTheme] = useState<PackageThemeId | null>(null);
  const reduce = useReducedMotion();
  const themes = useMemo(() => (Object.keys(PACKAGE_THEMES) as PackageThemeId[]).filter((t) => packages.some((p) => p.theme === t)), [packages]);
  const shown = theme ? packages.filter((p) => p.theme === theme) : packages;

  return (
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-[100px] bg-white py-20 sm:py-24 md:scroll-mt-[144px] lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading
          id="packages-title"
          eyebrow="Adventure Packages"
          title="Adventure Packages for Curious Travellers"
          intro="Treks, wilderness journeys, camping and road trips from across Karvaahh. Each itinerary is planned around your dates, fitness and travel style — prices on request."
        />

        <div role="tablist" aria-label="Package themes" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:px-0 [&::-webkit-scrollbar]:hidden">
          {[null, ...themes].map((t) => {
            const on = theme === t;
            return (
              <button
                key={t ?? "all"}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="package-grid"
                onClick={() => setTheme(t)}
                className={`relative min-h-[44px] shrink-0 rounded-full px-5 text-[13.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                  on ? "text-white" : "text-[#0B2942] hover:bg-[#0B2942]/[0.05]"
                }`}
              >
                {on && <motion.span layoutId={reduce ? undefined : "pkg-tab"} className="absolute inset-0 -z-0 rounded-full bg-[#0B2942]" transition={{ type: "spring", bounce: 0.18, duration: 0.5 }} />}
                <span className="relative">{t ? PACKAGE_THEMES[t].label : "All Packages"}</span>
              </button>
            );
          })}
        </div>
        {theme && <p className="mt-4 text-[14.5px] text-[#5B6B7B]">{PACKAGE_THEMES[theme].intro}</p>}

        <ul id="package-grid" role="tabpanel" className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p, i) => (
              <motion.li
                key={p.id}
                layout={!reduce}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <PackageCard p={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

function PackageCard({ p }: { p: AdventurePackage }) {
  const custom = p.theme === "custom";
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[26px] ring-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.5)] ${
        custom ? "bg-[#0B2942] text-white ring-[#0B2942]" : "bg-white ring-[#0B2942]/[0.08]"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <PageImageFill image={p.image} sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06111C]/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#06111C]/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {PACKAGE_THEMES[p.theme].label}
        </span>
        <p className="absolute bottom-4 left-4 right-4 text-[12.5px] font-medium text-white/90">{p.destinations.join(" · ")}</p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${SERIF} text-[22px] font-medium leading-tight ${custom ? "text-white" : "text-[#0B2942]"}`}>{p.title}</h3>

        <div className={`mt-4 flex flex-wrap gap-2 text-[12.5px] font-semibold ${custom ? "text-white/85" : "text-[#0B2942]"}`}>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${custom ? "bg-white/10" : "bg-[#0B2942]/[0.05]"}`}>
            <CalendarDays className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
            {p.duration ?? "Planned to your dates"}
          </span>
          {p.difficulty && (
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${custom ? "bg-white/10" : "bg-[#0B2942]/[0.05]"}`}>
              <Gauge className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
              {p.difficulty}
            </span>
          )}
        </div>

        <ul className={`mt-5 flex-1 space-y-2 text-[14px] ${custom ? "text-white/80" : "text-[#4A5B6C]"}`}>
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className={`mt-6 flex items-center justify-between gap-3 border-t pt-5 ${custom ? "border-white/10" : "border-[#0B2942]/[0.07]"}`}>
          <p className={`text-[13px] ${custom ? "text-white/60" : "text-[#6B7A89]"}`}>
            {p.price ? <span className={`text-[15px] font-semibold ${custom ? "text-white" : "text-[#0B2942]"}`}>{p.price}</span> : "Price on request"}
          </p>
          {custom ? (
            <div className="flex items-center gap-2">
              <a
                href={CONTACT.whatsappHref("Hello Karvaahh, I'd like to plan a custom adventure in Nepal.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Plan on WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <OpenBookingButton
                prefill={{ tourType: "Custom adventure" }}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-colors hover:bg-[#FFB524]"
              >
                Enquire Now
              </OpenBookingButton>
            </div>
          ) : (
            <Link href={p.href} className="group/cta inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0B2942] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#123653]">
              Explore Package
              <span className="sr-only"> — {p.title}</span>
              <ArrowRight className="h-4 w-4 text-[#F4A300] transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
