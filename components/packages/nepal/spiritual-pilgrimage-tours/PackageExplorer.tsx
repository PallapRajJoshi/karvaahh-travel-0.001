"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { CONTAINER, SectionHeading } from "@/components/activities/experience/ui";
import { DURATIONS, PACKAGE_STYLES } from "@/data/pilgrimage/filters";
import type { DurationId, PackageStyleId, PilgrimagePackage, TransportId } from "@/data/pilgrimage/types";
import { PACKAGES_EVENT, PackageCard } from "./cards";

const PAGE = 9;
const TRANSPORT: TransportId[] = ["Road", "Flight", "Helicopter"];

/** "Choose your pilgrimage style" + filterable package grid. */
export default function PackageExplorer({ packages, names }: { packages: PilgrimagePackage[]; names: Record<string, string> }) {
  const [style, setStyle] = useState<PackageStyleId | null>(null);
  const [transport, setTransport] = useState<TransportId | "">("");
  const [duration, setDuration] = useState<DurationId | "">("");
  const [destination, setDestination] = useState<string | null>(null);
  const [shown, setShown] = useState(PAGE);

  // "View Packages" on any destination card narrows the list to that place.
  useEffect(() => {
    const onShow = (e: Event) => {
      setDestination((e as CustomEvent<string>).detail);
      setStyle(null);
      setTransport("");
      setDuration("");
      setShown(PAGE);
    };
    window.addEventListener(PACKAGES_EVENT, onShow);
    return () => window.removeEventListener(PACKAGES_EVENT, onShow);
  }, []);

  const results = useMemo(
    () =>
      packages.filter(
        (p) =>
          (!style || p.styles.includes(style)) &&
          (!transport || p.transport.includes(transport)) &&
          (!duration || p.durationBucket === duration) &&
          (!destination || p.destinations.includes(destination) || p.id === "custom"),
      ),
    [packages, style, transport, duration, destination],
  );

  const select = "rounded-full border border-[#0B2942]/15 bg-white px-4 py-2.5 text-[13.5px] text-[#0B2942] outline-none focus:border-[#F4A300]";

  return (
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-[160px] bg-[#F8F6F1] py-20 sm:py-24 md:scroll-mt-[200px] lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading
          id="packages-title"
          eyebrow="Pilgrimage Packages"
          title="Choose Your Pilgrimage Style"
          intro="Every package can be arranged for couples, families, groups and senior travellers, by road, flight or helicopter where suitable. Prices are confirmed with you before booking."
        />

        <div role="group" aria-label="Pilgrimage style" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {(Object.keys(PACKAGE_STYLES) as PackageStyleId[]).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={style === s}
              onClick={() => {
                setStyle((cur) => (cur === s ? null : s));
                setShown(PAGE);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                style === s ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
              }`}
            >
              {PACKAGE_STYLES[s]}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <label className="sr-only" htmlFor="pkg-transport">
            Transport
          </label>
          <select id="pkg-transport" className={select} value={transport} onChange={(e) => setTransport(e.target.value as TransportId | "")}>
            <option value="">Any transport</option>
            {TRANSPORT.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="pkg-duration">
            Duration
          </label>
          <select id="pkg-duration" className={select} value={duration} onChange={(e) => setDuration(e.target.value as DurationId | "")}>
            <option value="">Any duration</option>
            {Object.entries(DURATIONS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
          {destination && (
            <button
              type="button"
              onClick={() => setDestination(null)}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2942] px-4 py-2.5 text-[13px] font-semibold text-white"
            >
              Including {names[destination] ?? destination}
              <X className="h-3.5 w-3.5" aria-label="Clear destination filter" />
            </button>
          )}
          <p className="ml-auto text-[14px] text-[#4A5B6C]" aria-live="polite">
            <span className="font-semibold text-[#0B2942]">{results.length}</span> packages
          </p>
        </div>

        <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {results.slice(0, shown).map((p, i) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="w-[86%] shrink-0 snap-start sm:w-auto"
              >
                <PackageCard p={p} destinationNames={p.destinations.map((id) => names[id]).filter(Boolean)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {results.length > shown && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + PAGE)}
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2942]/15 bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0B2942] hover:border-[#0B2942]"
            >
              Show more packages ({results.length - shown})
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
