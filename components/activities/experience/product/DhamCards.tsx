"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Mountain } from "lucide-react";
import type { Dham, HelicopterTour } from "../product-types";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Each destination keeps its own colour story while photos are pending. */
const TONES = [
  "from-[#1F4E5F] via-[#123653] to-[#071421]",
  "from-[#2C5A73] via-[#16405E] to-[#071421]",
  "from-[#3A4A6B] via-[#1B2F4F] to-[#071421]",
  "from-[#5A4A2E] via-[#2A2C3A] to-[#071421]",
];

function CardImage({ dham, index }: { dham: Dham; index: number }) {
  if (dham.image.src) {
    return <PageImageFill image={dham.image} sizes="(min-width: 1024px) 40vw, 80vw" className="transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-focus-within:scale-110" />;
  }
  return (
    <div role="img" aria-label={dham.image.alt} className={`absolute inset-0 bg-gradient-to-b ${TONES[index % TONES.length]}`}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-2/3 w-full text-white/[0.07]" aria-hidden="true">
        <path d="M0 300 L80 150 L130 200 L210 70 L290 190 L340 130 L400 210 L400 300 Z" fill="currentColor" />
        <path d="M0 300 L70 240 L150 270 L220 200 L300 260 L400 220 L400 300 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

/**
 * The sacred destinations of a circuit as large interactive cards. Desktop:
 * hovering or focusing a card expands it, zooms its image, lifts the title
 * and lights the route up to that stop. Mobile: a horizontal swipe rail.
 */
export default function DhamCards({ tour }: { tour: Pick<HelicopterTour, "dhams"> }) {
  const [active, setActive] = useState<number | null>(null);
  const { dhams } = tour;
  if (!dhams) return null;
  const n = dhams.items.length;

  return (
    <section id="dhams" aria-labelledby="dhams-title" className={`${ANCHOR} overflow-hidden bg-[#071421] py-20 text-white sm:py-24 lg:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading id="dhams-title" eyebrow="The Sacred Circuit" title={dhams.title} intro={dhams.intro} dark />

        {/* Route line across the cards (desktop) */}
        <div className="relative mt-12 hidden lg:block" aria-hidden="true">
          <span className="absolute left-0 right-0 top-[7px] h-px bg-white/15" />
          <motion.span
            className="absolute left-0 top-[7px] h-px origin-left bg-[#F4A300]"
            initial={false}
            animate={{ width: active === null ? "0%" : `${((active + 0.5) / n) * 100}%` }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
            {dhams.items.map((d, i) => (
              <li key={d.id} className="flex items-center gap-3">
                <span
                  className={`h-[15px] w-[15px] rounded-full border-2 transition-colors duration-500 ${
                    active !== null && i <= active ? "border-[#F4A300] bg-[#F4A300]" : "border-white/40 bg-[#071421]"
                  }`}
                />
                <span className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${active === i ? "text-white" : "text-white/45"}`}>
                  {String(i + 1).padStart(2, "0")} · {d.name}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ul
        className="mx-auto mt-8 flex max-w-[1400px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:h-[560px] lg:overflow-visible lg:px-10 [&::-webkit-scrollbar]:hidden"
        onMouseLeave={() => setActive(null)}
      >
        {dhams.items.map((d, i) => (
          <motion.li
            key={d.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`group relative h-[480px] w-[80%] shrink-0 snap-start overflow-hidden rounded-[28px] bg-[#0B2942] ring-1 ring-white/10 transition-[flex-grow] duration-700 ease-out sm:w-[46%] lg:h-full lg:w-auto lg:flex-1 ${
              active === i ? "lg:flex-[2.1]" : ""
            }`}
          >
            <CardImage dham={d} index={i} />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421] via-[#071421]/45 to-transparent" />

            <span className={`${SERIF} absolute right-6 top-5 text-[56px] leading-none text-white/20`}>{String(i + 1).padStart(2, "0")}</span>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F4A300]">{d.deity}</p>
              <h3 className={`${SERIF} mt-2 text-[34px] font-medium leading-none transition-transform duration-700 ease-out lg:text-[38px] lg:group-hover:-translate-y-1`}>
                {d.name}
              </h3>
              <p className="mt-2 text-[13.5px] text-white/70">{d.temple}</p>

              {/* Details: always on touch / small screens, revealed on hover or focus on desktop */}
              <div className="grid transition-all duration-700 ease-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-within:grid-rows-[1fr] lg:group-focus-within:opacity-100">
                <div className="min-h-0 overflow-hidden">
                  <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] text-white/80">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#F4A300]" aria-hidden="true" />
                      {d.region}
                    </span>
                    {d.altitude && (
                      <span className="inline-flex items-center gap-1.5">
                        <Mountain className="h-3.5 w-3.5 text-[#F4A300]" aria-hidden="true" />
                        {d.altitude}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 max-w-[460px] text-[14.5px] leading-6 text-white/80">{d.text}</p>
                  {d.href && (
                    <Link
                      href={d.href}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-all hover:-translate-y-0.5 hover:bg-[#F4A300] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
                    >
                      Explore {d.name}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
