"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TimelineStep } from "@/content/corporate-retreats";
import { Icon } from "./icons";
import { EASE } from "./ui";

/**
 * Journey line that draws itself as it enters the viewport.
 * Horizontal from `lg` up, vertical below. Steps reveal in sequence.
 * Reused by RetreatPhilosophy (5 steps) and PlanningProcess (6 steps).
 */
export function Timeline({ steps, invert = false, numbered = false }: { steps: TimelineStep[]; invert?: boolean; numbered?: boolean }) {
  const reduce = useReducedMotion();
  const n = steps.length;
  const step = 0.18;
  const line = invert ? "bg-white/25" : "bg-[#123B5D]/15";
  const fill = "bg-[#D8A64A]";

  return (
    <div className="relative">
      {/* desktop line */}
      <div aria-hidden="true" className={`absolute left-0 right-0 top-7 hidden h-px lg:block ${line}`} style={{ marginInline: `${100 / n / 2}%` }}>
        <motion.div
          className={`h-full origin-left ${fill}`}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: n * step + 0.6, ease: "easeInOut" }}
        />
      </div>
      {/* mobile line */}
      <div aria-hidden="true" className={`absolute bottom-6 left-7 top-6 w-px lg:hidden ${line}`}>
        <motion.div
          className={`h-full w-full origin-top ${fill}`}
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: n * step + 0.6, ease: "easeInOut" }}
        />
      </div>

      <ol
        className="relative grid gap-10 lg:gap-6 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
        style={{ ["--n" as string]: n }}
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * step, ease: EASE }}
          >
            <span
              className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${
                invert ? "border-[#D8A64A] bg-[#123B5D] text-[#D8A64A]" : "border-[#D8A64A] bg-[#F8F6F0] text-[#123B5D]"
              }`}
            >
              <Icon name={s.icon} className="h-6 w-6" />
              {numbered && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#123B5D] text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              )}
            </span>
            <div className="lg:mt-5">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${invert ? "text-white/70" : "text-[#252B32]/70"}`}>{s.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
