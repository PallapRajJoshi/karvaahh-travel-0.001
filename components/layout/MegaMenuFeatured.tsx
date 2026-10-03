"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { MegaMenuFeatured as MegaMenuFeaturedType } from "@/lib/navigation-data";

export default function MegaMenuFeatured({
  featured,
  onNavigate,
}: {
  featured: MegaMenuFeaturedType;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={featured.href}
      onClick={onNavigate}
      className="group/featured relative flex h-full min-h-[180px] flex-col justify-end overflow-hidden rounded-xl"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        transition={{
          scale: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: 0.5,
          },
        }}
      >
        <Image
          src={featured.image}
          alt={featured.imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </motion.div>

      {/* DARK GRADIENT */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#061827] via-[#061827]/60 to-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
      />

      {/* SUBTLE DIAGONAL PATTERN */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 18px, rgba(255,255,255,0.06) 18px 19px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 flex items-start justify-between gap-2 p-4"
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div>
          {/* LABEL */}
          <motion.p
            className="text-[11px] font-bold uppercase tracking-wide text-emerald-300"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.3,
            }}
          >
            Featured
          </motion.p>

          {/* TITLE */}
          <motion.p
            className="mt-1 text-[16px] font-bold leading-snug text-white"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.36,
            }}
          >
            {featured.title}
          </motion.p>

          {/* SUBTITLE */}
          <motion.p
            className="mt-1 text-[12.5px] text-white/75"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.42,
            }}
          >
            {featured.subtitle}
          </motion.p>
        </div>

        {/* ARROW */}
        <motion.span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.12,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          transition={{
            duration: 0.3,
            delay: 0.48,
          }}
        >
          <ArrowUpRight
            className="h-4 w-4 text-white transition-transform duration-300 group-hover/featured:translate-x-0.5 group-hover/featured:-translate-y-0.5"
            strokeWidth={2}
          />
        </motion.span>
      </motion.div>

      {/* HOVER SHINE */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-120%" }}
        whileHover={{ x: "420%" }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </Link>
  );
}