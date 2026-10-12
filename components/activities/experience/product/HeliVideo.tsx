"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { CONTAINER, SectionHeading, PageImageFill } from "../ui";
import type { HelicopterTour } from "../product-types";

const FRAME_MS = 5000;

type VideoData = NonNullable<HelicopterTour["video"]>;

/**
 * Real footage when the tour provides a video file; otherwise a cinematic
 * image sequence (never a stand-in "fake" video).
 */
export default function HeliVideo({ tour }: { tour: Pick<HelicopterTour, "video"> }) {
  const { video } = tour;
  if (!video) return null;
  // Only frames whose photo exists; without footage or two real frames the section stays hidden.
  const frames = video.frames.filter((f) => f.image.src);
  if (!video.src && frames.length < 2) return null;
  return (
    <section aria-labelledby="cinema-title" className="bg-[#071421] py-20 text-white sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading id="cinema-title" eyebrow="From Above" title={video.title} intro={video.intro} dark />
        {video.src ? <Footage video={video} /> : <Sequence cinema={{ ...video, frames }} />}
      </div>
    </section>
  );
}

/** Muted inline footage with native controls; plays only when requested. */
function Footage({ video }: { video: VideoData }) {
  return (
    <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[#0B2942]">
      <video
        className="aspect-[4/5] w-full object-cover sm:aspect-[16/9]"
        controls
        muted
        playsInline
        preload="none"
        poster={video.poster?.src ?? undefined}
        aria-label={video.title}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
}

/**
 * Image sequence: auto-advances with a slow Ken Burns drift while in view;
 * pause/play control included; no autoplay for reduced-motion visitors.
 */
function Sequence({ cinema }: { cinema: VideoData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const playing = !paused && !reduce && inView;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % cinema.frames.length), FRAME_MS);
    return () => clearInterval(id);
  }, [playing, cinema.frames.length]);

  const frame = cinema.frames[index];

  return (
    <div ref={ref} className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[28px] bg-[#0B2942] sm:aspect-[16/9]">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.02 }}
            animate={reduce ? { scale: 1.02 } : { scale: 1.14, x: "-2%" }}
            transition={{ duration: FRAME_MS / 1000 + 1.2, ease: "linear" }}
            className="absolute inset-0"
          >
            <PageImageFill image={frame.image} sizes="(min-width: 1400px) 1320px, 100vw" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/80 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={frame.caption}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="text-[18px] font-medium sm:text-[22px]"
            aria-live="polite"
          >
            {frame.caption}
          </motion.p>
        </AnimatePresence>
        <div className="flex items-center gap-3">
          <div className="hidden gap-1.5 sm:flex" role="group" aria-label="Choose frame">
            {cinema.frames.map((f, i) => (
              <button
                key={f.caption}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${f.caption}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-[#F4A300]" : "w-3 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
