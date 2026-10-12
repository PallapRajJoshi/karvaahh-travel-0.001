"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Info } from "lucide-react";
import ParallaxImage from "@/components/activities/experience/ParallaxImage";
import { CONTACT } from "@/components/activities/experience/site";
import type { PageImage } from "@/components/activities/experience/types";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { MANAKAMANA } from "@/data/pilgrimage/content";

type Data = typeof MANAKAMANA;

/** Manakamana image + combination tabs, each with a sample day plan. */
export default function ManakamanaFeature({ data, image }: { data: Data; image: PageImage }) {
  const id = useId();
  const [active, setActive] = useState(0);
  const combo = data.combos[active];

  return (
    <section id="manakamana" aria-labelledby="manakamana-title" className="scroll-mt-[160px] overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 md:scroll-mt-[200px] lg:py-28">
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <motion.div
          initial={{ clipPath: "inset(10% 10% 10% 10% round 28px)", opacity: 0.4 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ParallaxImage image={image} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] rounded-[28px]" />
        </motion.div>

        <div>
          <SectionHeading id="manakamana-title" eyebrow="Featured Experience" title={data.title} intro={data.intro} />

          <div role="tablist" aria-label="Manakamana combinations" className="mt-8 flex flex-wrap gap-2">
            {data.combos.map((c, i) => (
              <button
                key={c.id}
                id={`${id}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls={`${id}-panel`}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors ${
                  active === i ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
                }`}
              >
                Manakamana {c.label}
              </button>
            ))}
          </div>

          <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="mt-6 rounded-[24px] bg-white p-6 ring-1 ring-[#0B2942]/[0.08]">
            <AnimatePresence mode="wait">
              <motion.ol
                key={combo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {combo.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className={`${SERIF} flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4A300]/15 text-[14px] text-[#8A5A00]`}>{i + 1}</span>
                    <span className="pt-1 text-[15px] text-[#0B2942]">{s}</span>
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>
            <a
              href={CONTACT.whatsappHref(`Hello Karvaahh, I'd like the Manakamana ${combo.label.replace("+ ", "+ ")} pilgrimage. Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4A300] px-5 py-3 text-[14px] font-semibold text-[#0C1D30] hover:bg-[#FFB524]"
            >
              Enquire about this journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 flex items-start gap-2 text-[12.5px] leading-5 text-[#5B6B7B]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
            {data.note}
          </p>
        </div>
      </div>
    </section>
  );
}
