"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import ParallaxImage from "../ParallaxImage";
import type { HelicopterTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Renders text with [[highlighted]] words that sweep in a gold underline on view. */
function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[\[(.+)\]\]$/);
        if (!m) return <Fragment key={i}>{p}</Fragment>;
        return (
          <span key={i} className="relative inline-block font-semibold uppercase tracking-[0.08em] text-[#0B2942]">
            {m[1]}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute inset-x-0 bottom-0.5 -z-10 h-[0.45em] origin-left bg-[#F4A300]/35"
            />
          </span>
        );
      })}
    </>
  );
}

/**
 * Editorial storytelling: a large image revealed with a clip-path, an inset
 * photo, a floating fact card and staggered paragraphs.
 */
export default function HeliDestinationStory({ tour, anchorId }: { tour: Pick<HelicopterTour, "editorial">; anchorId?: string }) {
  const { editorial } = tour;
  if (!editorial) return null;

  return (
    <section id={anchorId} aria-labelledby="story-title" className={`${anchorId ? ANCHOR : ""} overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-28`}>
      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20`}>
        <div className="relative pb-14 sm:pb-20">
          <motion.div
            initial={{ clipPath: "inset(12% 12% 12% 12% round 28px)", opacity: 0.4 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <ParallaxImage image={editorial.image} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5] w-[90%] rounded-[28px] sm:aspect-[4/3] lg:aspect-[4/5]" />
          </motion.div>

          {editorial.inset && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute bottom-0 right-0 w-[46%]"
            >
              <ParallaxImage
                image={editorial.inset}
                sizes="(min-width: 1024px) 22vw, 48vw"
                className="aspect-square rounded-[22px] border-[6px] border-[#F8F6F1] shadow-[0_30px_60px_-24px_rgba(11,41,66,0.5)]"
              />
            </motion.div>
          )}

          {editorial.fact && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="heli-motion absolute left-3 top-6 max-w-[220px] rounded-[20px] bg-[#0B2942] p-5 text-white shadow-[0_24px_50px_-20px_rgba(7,20,33,0.7)] sm:left-[-12px] lg:animate-[heliFloat_7s_ease-in-out_infinite]"
            >
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#F4A300]">{editorial.fact.label}</p>
              <p className={`${SERIF} mt-1.5 text-[28px] leading-none`}>{editorial.fact.value}</p>
              {editorial.fact.text && <p className="mt-2 text-[12.5px] leading-5 text-white/70">{editorial.fact.text}</p>}
            </motion.div>
          )}
        </div>

        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>
            <SectionHeading id="story-title" eyebrow={editorial.eyebrow} title={editorial.title} />
          </motion.div>
          <div className="mt-7 space-y-5">
            {editorial.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE }}
                className="relative isolate text-[16px] leading-8 text-[#4A5B6C]"
              >
                <Highlighted text={p} />
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
