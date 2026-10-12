"use client";

import { motion } from "motion/react";
import { CONTAINER, SERIF, SectionHeading, PageImageFill } from "../ui";
import type { HelicopterTour } from "../product-types";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-width scene sequence. Each scene reveals with a clip-path wipe and
 * a slow zoom, while its numbered title slides in from alternating sides.
 */
export default function HeliLandscapes({ tour }: { tour: Pick<HelicopterTour, "landscapes"> }) {
  const { landscapes } = tour;
  if (!landscapes) return null;
  return (
    <section aria-labelledby="landscapes-title" className="bg-[#071421] pb-6 pt-20 text-white sm:pt-24 lg:pt-28">
      <div className={`${CONTAINER} mb-12`}>
        <SectionHeading id="landscapes-title" eyebrow="Landscapes" title={landscapes.title} intro={landscapes.intro} dark />
      </div>

      <ol className="space-y-3 px-3 sm:space-y-4 sm:px-4">
        {landscapes.scenes.map((s, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <li key={s.title}>
              <motion.figure
                initial={{ clipPath: fromLeft ? "inset(0 100% 0 0 round 24px)" : "inset(0 0 0 100% round 24px)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0% round 24px)" }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 1.2, ease: EASE }}
                className="relative h-[62svh] min-h-[360px] overflow-hidden rounded-[24px] lg:h-[78vh]"
              >
                <motion.div
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ duration: 2.2, ease: EASE }}
                  className="absolute inset-0"
                >
                  <PageImageFill image={s.image} sizes="100vw" />
                </motion.div>
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${fromLeft ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-[#071421]/85 via-[#071421]/30 to-transparent`}
                />
                <motion.figcaption
                  initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                  className={`absolute bottom-8 max-w-[520px] px-6 sm:bottom-12 sm:px-12 ${fromLeft ? "left-0" : "right-0 text-right"}`}
                >
                  <span className={`${SERIF} block text-[56px] leading-none text-[#F4A300]/80 sm:text-[80px]`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`${SERIF} mt-2 block text-[32px] font-medium leading-tight sm:text-[48px]`}>{s.title}</span>
                  <span className="mt-2 block text-[15px] leading-7 text-white/80 sm:text-[16px]">{s.text}</span>
                </motion.figcaption>
              </motion.figure>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
