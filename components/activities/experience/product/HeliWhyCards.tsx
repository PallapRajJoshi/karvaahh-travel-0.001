"use client";

import { motion } from "motion/react";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "../ui";
import type { HelicopterTour } from "../product-types";

/**
 * Minimal tiles that expand on hover/focus: the photo fades in and scales,
 * the icon lifts and the description appears. On touch screens (no hover)
 * the photo and text are shown by default.
 */
export default function HeliWhyCards({ tour }: { tour: Pick<HelicopterTour, "whyHelicopter" | "labels"> }) {
  const why = tour.whyHelicopter;
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading id="why-title" eyebrow={tour.labels?.why ?? "Why a Helicopter"} title={why.title} intro={why.intro} center />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((w, i) => (
            <motion.li
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <article
                tabIndex={0}
                className="group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-[26px] bg-[#F8F6F1] p-7 outline-none ring-1 ring-[#0B2942]/[0.06] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.6)] focus-visible:ring-2 focus-visible:ring-[#F4A300] lg:h-[320px]"
              >
                <div className="absolute inset-0 scale-110 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 [@media(hover:none)]:scale-100 [@media(hover:none)]:opacity-100">
                  {w.image && <PageImageFill image={w.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/95 via-[#071421]/50 to-[#071421]/10" />
                </div>

                <span
                  className={`${SERIF} absolute right-7 top-6 text-[44px] leading-none text-[#0B2942]/10 transition-colors duration-500 group-hover:text-white/25 [@media(hover:none)]:text-white/25`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2942] text-[#F4A300] transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#F4A300] group-hover:text-[#0C1D30] [@media(hover:none)]:bg-[#F4A300] [@media(hover:none)]:text-[#0C1D30]">
                    <PageIcon name={w.icon ?? "helicopter"} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold leading-snug text-[#0B2942] transition-colors duration-500 group-hover:text-white [@media(hover:none)]:text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-[14.5px] leading-6 text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100 [@media(hover:none)]:max-h-24 [@media(hover:none)]:opacity-100">
                    {w.text}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
