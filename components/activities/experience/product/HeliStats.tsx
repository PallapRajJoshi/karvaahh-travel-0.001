"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { CONTAINER, SERIF } from "../ui";
import type { HelicopterTour } from "../product-types";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    const controls = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]);

  // Years read better without a thousands separator.
  const formatted = value >= 1900 && value <= 2100 ? String(display) : display.toLocaleString("en-IN");
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/** Animated count-up statistics — verified values only. */
export default function HeliStats({ tour }: { tour: Pick<HelicopterTour, "stats" | "breadcrumbLabel"> }) {
  const { stats } = tour;
  if (!stats) return null;
  return (
    <section aria-label={`${tour.breadcrumbLabel} in numbers`} className="bg-[#0B2942] py-16 text-white sm:py-20">
      <div className={CONTAINER}>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <div key={s.label} className={`flex flex-col-reverse px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}>
              <dt className="mx-auto mt-3 max-w-[200px] text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/70">{s.label}</dt>
              <dd className={`${SERIF} text-[40px] leading-none text-[#F4A300] sm:text-[56px]`}>
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-[12px] text-white/45">{stats.note}</p>
      </div>
    </section>
  );
}
