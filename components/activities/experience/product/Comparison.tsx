"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { ComparisonColumn, HelicopterTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";

const EASE = [0.22, 1, 0.36, 1] as const;

function Column({ col, side }: { col: ComparisonColumn; side: "left" | "right" }) {
  const dark = col.highlight;
  return (
    <motion.article
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`h-full rounded-[28px] p-7 sm:p-9 ${
        dark ? "bg-[#0B2942] text-white shadow-[0_30px_60px_-30px_rgba(11,41,66,0.7)]" : "bg-white text-[#0B2942] ring-1 ring-[#0B2942]/[0.08]"
      }`}
    >
      <p className={`text-[11.5px] font-semibold uppercase tracking-[0.24em] ${dark ? "text-[#F4A300]" : "text-[#C98500]"}`}>{col.eyebrow}</p>
      <h3 className={`${SERIF} mt-3 text-[28px] font-medium leading-tight sm:text-[32px]`}>{col.title}</h3>
      <ul className="mt-7 space-y-3.5">
        {col.points.map((p) => (
          <li key={p} className={`flex items-start gap-3 text-[15px] ${dark ? "text-white/85" : "text-[#4A5B6C]"}`}>
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                dark ? "bg-[#F4A300] text-[#0C1D30]" : "bg-[#F8F6F1] text-[#0B2942]"
              }`}
            >
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
            {p}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

/** Two options side by side with an animated "vs" divider. */
export default function Comparison({ tour }: { tour: Pick<HelicopterTour, "comparison"> }) {
  const { comparison } = tour;
  if (!comparison) return null;
  const [a, b] = comparison.columns;
  return (
    <section aria-labelledby="comparison-title" className="overflow-x-clip bg-[#F8F6F1] py-20 sm:py-24 lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading id="comparison-title" eyebrow="Know the Difference" title={comparison.title} intro={comparison.intro} center />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <Column col={a} side="left" />
          <div aria-hidden="true" className="relative flex min-h-14 items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#F4A300] to-transparent lg:h-full lg:w-px lg:bg-gradient-to-b"
            />
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className={`${SERIF} relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F4A300] text-[18px] italic text-[#0C1D30] shadow-[0_10px_30px_-10px_rgba(244,163,0,0.7)]`}
            >
              vs
            </motion.span>
          </div>
          <Column col={b} side="right" />
        </div>
      </div>
    </section>
  );
}
