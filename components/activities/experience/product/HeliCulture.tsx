"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { CONTAINER, SectionHeading, PageImageFill } from "../ui";
import type { HelicopterTour, ImageCard } from "../product-types";

/* Final resting offsets for each card (percent of the collage box). */
const LAYOUT = [
  { left: 0, top: 2, w: 44, rotate: -4 },
  { left: 40, top: 0, w: 36, rotate: 3 },
  { left: 66, top: 24, w: 34, rotate: -2 },
  { left: 6, top: 57, w: 38, rotate: 2 },
  { left: 46, top: 54, w: 42, rotate: -3 },
];

/* Six cards: two rows of three. */
const LAYOUT_6 = [
  { left: 0, top: 4, w: 36, rotate: -4 },
  { left: 32, top: 0, w: 34, rotate: 3 },
  { left: 64, top: 6, w: 36, rotate: -2 },
  { left: 2, top: 52, w: 34, rotate: 2 },
  { left: 34, top: 56, w: 32, rotate: -3 },
  { left: 64, top: 50, w: 36, rotate: 3 },
];

function CollageCard({
  item,
  index,
  total,
  progress,
  reduce,
}: {
  item: ImageCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const layout = total >= 6 ? LAYOUT_6 : LAYOUT;
  const pos = layout[index % layout.length];
  // Cards start stacked near the centre and drift out to their layout positions.
  const x = useTransform(progress, [0, 1], [`${50 - pos.left - pos.w / 2}%`, "0%"]);
  const y = useTransform(progress, [0, 1], [`${(40 - pos.top) * 0.6}%`, "0%"]);
  const rotate = useTransform(progress, [0, 1], [0, pos.rotate]);

  return (
    <motion.figure
      style={
        reduce
          ? { left: `${pos.left}%`, top: `${pos.top}%`, width: `${pos.w}%`, rotate: pos.rotate }
          : { left: `${pos.left}%`, top: `${pos.top}%`, width: `${pos.w}%`, x, y, rotate }
      }
      className="group absolute rounded-[18px] bg-white p-2 pb-3 shadow-[0_24px_50px_-24px_rgba(11,41,66,0.55)] transition-shadow hover:z-10 hover:shadow-[0_34px_70px_-24px_rgba(11,41,66,0.7)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
        <PageImageFill image={item.image} sizes="(min-width: 1024px) 26vw, 45vw" className="transition-transform duration-700 group-hover:scale-105" />
      </div>
      <figcaption className="mt-2 px-1 text-[12.5px] font-semibold text-[#0B2942]">{item.title}</figcaption>
    </motion.figure>
  );
}

/** Overlapping image collage whose cards separate into layers on scroll. */
export default function HeliCulture({ tour }: { tour: Pick<HelicopterTour, "culture"> }) {
  return tour.culture ? <CultureCollage culture={tour.culture} /> : null;
}

function CultureCollage({ culture }: { culture: NonNullable<HelicopterTour["culture"]> }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 50%"] });

  return (
    <section aria-labelledby="culture-title" className="overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-28">
      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div>
          <SectionHeading id="culture-title" eyebrow="Culture" title={culture.title} intro={culture.intro} />
          <dl className="mt-8 space-y-4">
            {culture.items.map((c) => (
              <div key={c.title} className="border-l-2 border-[#F4A300]/60 pl-4">
                <dt className="text-[15.5px] font-semibold text-[#0B2942]">{c.title}</dt>
                <dd className="mt-0.5 text-[14px] leading-6 text-[#5B6B7B]">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={ref} className="relative aspect-[5/4] w-full">
          {culture.items.map((item, i) => (
            <CollageCard key={item.title} item={item} index={i} total={culture.items.length} progress={scrollYProgress} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}
