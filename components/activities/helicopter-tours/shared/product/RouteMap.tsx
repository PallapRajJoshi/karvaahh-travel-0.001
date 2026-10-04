"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Ban, CircleDashed, Eye, Info, MapPin, type LucideIcon } from "lucide-react";
import type { HelicopterProductTour, RouteMode } from "../product-types";
import { CONTAINER, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

const MODES: Record<RouteMode, { label: string; Icon: LucideIcon; marker: string }> = {
  landing: { label: "Ground stop", Icon: MapPin, marker: "bg-[#F4A300] text-[#0C1D30]" },
  optional: { label: "Optional landing", Icon: CircleDashed, marker: "border-2 border-dashed border-[#F4A300] bg-[#071421] text-[#F4A300]" },
  aerial: { label: "Aerial sightseeing", Icon: Eye, marker: "bg-white/10 text-white" },
  restricted: { label: "Operationally restricted", Icon: Ban, marker: "border border-white/30 bg-[#071421] text-white/70" },
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Animated route: horizontal, swipeable cards on mobile; a vertical
 * timeline on desktop. Every stop shows how it is experienced, with an
 * icon and a text label (never colour alone).
 */
export default function RouteMap({ tour }: { tour: HelicopterProductTour }) {
  const { route } = tour;
  const used = Array.from(new Set(route.stops.map((s) => s.mode)));

  return (
    <section
      id="route"
      aria-labelledby="route-title"
      className={`${ANCHOR} ${SECTION_Y} relative isolate overflow-clip bg-[#071421] text-white`}
    >
      <Image
        src={tour.cta.image.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.12]"
        style={{ objectPosition: tour.cta.image.objectPosition }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071421] via-[#071421]/80 to-[#071421]" />

      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-[200px] lg:self-start">
          <SectionHeading id="route-title" eyebrow="Route" title={route.title} intro={route.intro} dark />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Route legend">
            {used.map((m) => {
              const { Icon, marker } = MODES[m];
              const label = route.modeLabels?.[m] ?? MODES[m].label;
              return (
                <li key={m} className="flex items-center gap-3 text-[14px] text-white/80">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full ${marker}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              );
            })}
          </ul>

          <p className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-[13.5px] leading-6 text-white/70">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
            {route.note}
          </p>
        </div>

        <ol className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {route.stops.map((stop, i) => {
            const { Icon, marker } = MODES[stop.mode];
            const label = route.modeLabels?.[stop.mode] ?? MODES[stop.mode].label;
            const last = i === route.stops.length - 1;
            return (
              <li key={`${stop.name}-${i}`} className="relative w-[220px] shrink-0 snap-start lg:flex lg:w-auto lg:gap-6 lg:pb-7 lg:last:pb-0">
                {/* Connector to the next stop */}
                {!last && (
                  <>
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
                      className="absolute left-12 right-[-16px] top-[22px] h-px origin-left bg-gradient-to-r from-[#F4A300]/70 to-white/15 lg:hidden"
                    />
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
                      className="absolute bottom-0 left-[22px] top-12 hidden w-px origin-top bg-gradient-to-b from-[#F4A300]/70 to-white/15 lg:block"
                    />
                  </>
                )}

                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * i, ease: EASE }}
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${marker}`}
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i + 0.1, ease: EASE }}
                  className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm lg:mt-0 lg:flex-1 lg:p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-[16px] font-semibold text-white">{stop.name}</h3>
                    {stop.elevation && <span className="text-[12.5px] text-white/55">{stop.elevation}</span>}
                  </div>
                  <p className="mt-1 text-[13.5px] leading-6 text-white/65">{stop.detail}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4A300]">{label}</p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
