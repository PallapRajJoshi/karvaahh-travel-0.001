"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { Info, Mountain } from "lucide-react";
import type { HelicopterTour } from "../product-types";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

type Peak = NonNullable<HelicopterTour["peaks"]>["items"][number];

/** Elevation that counts up once when it scrolls into view. */
function Elevation({ metres, decimals = 0 }: { metres: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const id = requestAnimationFrame(() => setValue(metres));
      return () => cancelAnimationFrame(id);
    }
    const c = animate(metres * 0.6, metres, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: setValue });
    return () => c.stop();
  }, [inView, reduce, metres]);

  const fmt = value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} aria-label={`${metres.toLocaleString("en-US", { minimumFractionDigits: decimals })} metres`}>
      <span aria-hidden="true">{fmt}</span>
      <span aria-hidden="true" className="ml-1 text-[0.45em] font-sans font-semibold tracking-wide">m</span>
    </span>
  );
}

function PeakCard({ peak, featured, index }: { peak: Peak; featured: boolean; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto ${featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <article
        tabIndex={0}
        className={`group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[26px] bg-[#0B2942] p-6 text-white outline-none ring-1 ring-[#0B2942]/10 focus-visible:ring-2 focus-visible:ring-[#F4A300] ${
          featured ? "lg:min-h-[620px] lg:p-9" : ""
        }`}
      >
        {peak.image?.src ? (
          <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-focus:scale-110">
            <PageImageFill image={peak.image} sizes={featured ? "(min-width: 1024px) 50vw, 80vw" : "(min-width: 1024px) 25vw, 80vw"} />
          </div>
        ) : (
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#16405E] via-[#0B2942] to-[#071421]">
            <Mountain className="absolute -right-6 top-6 h-40 w-40 text-white/[0.05]" />
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421] via-[#071421]/40 to-transparent" />

        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F4A300]">{peak.region}</p>
          <p
            className={`${SERIF} mt-2 origin-left leading-none text-white transition-transform duration-500 group-hover:scale-110 group-focus:scale-110 ${
              featured ? "text-[50px] sm:text-[76px]" : "text-[40px]"
            }`}
          >
            <Elevation metres={peak.metres} decimals={peak.decimals} />
          </p>
          <h3 className={`mt-3 font-semibold ${featured ? "text-[24px]" : "text-[18px]"}`}>{peak.name}</h3>
          <p className={`mt-2 text-white/75 ${featured ? "max-w-[460px] text-[15.5px] leading-7" : "text-[13.5px] leading-6"}`}>{peak.text}</p>
        </div>
      </article>
    </motion.li>
  );
}

/** "Meet the giants": mountain cards with counting elevations; Everest featured. */
export default function PeakShowcase({ tour }: { tour: Pick<HelicopterTour, "peaks"> }) {
  const { peaks } = tour;
  if (!peaks) return null;
  return (
    <section id="peaks" aria-labelledby="peaks-title" className={`${ANCHOR} overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading id="peaks-title" eyebrow="The Himalayan Giants" title={peaks.title} intro={peaks.intro} />
      </div>
      <ul className="mx-auto mt-12 flex max-w-[1400px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-10 [&::-webkit-scrollbar]:hidden">
        {peaks.items.map((p, i) => (
          <PeakCard key={p.name} peak={p} featured={i === 0} index={i} />
        ))}
      </ul>
      <div className={CONTAINER}>
        <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          {peaks.note}
        </p>
      </div>
    </section>
  );
}
