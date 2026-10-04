"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { PageImage } from "./types";
import { PageImageFill } from "./ui";

/** Image that eases from a slight zoom to rest as it scrolls through view. */
export default function ParallaxImage({
  image,
  sizes,
  className = "",
}: {
  image: PageImage;
  sizes: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.02, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={reduceMotion ? undefined : { scale, y }} className="absolute inset-0">
        <PageImageFill image={image} sizes={sizes} />
      </motion.div>
    </div>
  );
}
