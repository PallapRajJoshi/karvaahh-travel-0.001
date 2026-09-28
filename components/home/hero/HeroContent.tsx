'use client';

import { motion, cubicBezier } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const easeCustom = cubicBezier(0.22, 1, 0.36, 1);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const eyebrowVariants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: easeCustom,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: easeCustom,
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.7,
      ease: easeCustom,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative max-w-[760px]"
    >
      {/* ============================================================
          SOFT ATMOSPHERIC GLOW
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-1/2
          h-[300px]
          w-[300px]
          -translate-y-1/2
          rounded-full
          bg-[#F4A300]/8
          blur-[110px]
        "
      />

      {/* ============================================================
          EYEBROW
      ============================================================ */}
      <motion.div
        variants={eyebrowVariants}
        className="relative mb-4 flex items-center gap-3 sm:mb-5"
      >
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 34, opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.55,
            ease: easeCustom,
          }}
          className="h-px shrink-0 bg-[#F4A300]"
        />

        <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4A300] sm:text-xs">
          <Sparkles
            className="h-3.5 w-3.5"
            strokeWidth={2}
            aria-hidden="true"
          />

          Live to Travel
        </span>
      </motion.div>

      {/* ============================================================
          MAIN HEADING
      ============================================================ */}
      <motion.h1
        variants={headingVariants}
        className="
          relative
          max-w-[740px]
          font-[var(--font-display,inherit)]
          text-[43px]
          font-semibold
          leading-[0.96]
          tracking-[-0.045em]
          text-white
          sm:text-[53px]
          md:text-[61px]
          lg:text-[68px]
          xl:text-[74px]
        "
      >
        <span className="block text-white">
          Discover Nepal.
        </span>

        <span
          className="
            block
            bg-gradient-to-r
            from-[#F4A300]
            via-[#FFC247]
            to-[#F4A300]
            bg-[length:200%_100%]
            bg-clip-text
            text-transparent
            animate-[heroGoldShimmer_6s_ease-in-out_infinite]
          "
        >
          Experience the
        </span>

        <span className="block text-[#F4A300]">
          Extraordinary.
        </span>
      </motion.h1>

      {/* ============================================================
          DESCRIPTION
      ============================================================ */}
      <motion.p
        variants={descriptionVariants}
        className="
          relative
          mt-5
          max-w-[590px]
          text-[14.5px]
          leading-[1.65]
          text-white/75
          sm:text-[15.5px]
          lg:text-[16px]
        "
      >
        Curated journeys across{' '}
        <span className="font-medium text-white">
          Nepal & India
        </span>{' '}
        — from Himalayan adventures and sacred journeys to authentic
        cultural escapes and unforgettable experiences.
      </motion.p>

      {/* ============================================================
          SUBTLE BRAND LINE
      ============================================================ */}
      <motion.div
        variants={descriptionVariants}
        className="
          relative
          mt-4
          flex
          items-center
          gap-3
          text-[9.5px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/45
          sm:text-[10px]
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-[#F4A300]
            shadow-[0_0_10px_rgba(244,163,0,0.7)]
          "
        />

        <span>Nepal & India Travel Specialists</span>

        <span className="hidden h-px w-8 bg-white/15 sm:block" />

        <span className="hidden sm:block">
          Crafted Journeys
        </span>
      </motion.div>

      {/* ============================================================
          GOLD SHIMMER ANIMATION
      ============================================================ */}
      <style>{`
        @keyframes heroGoldShimmer {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[heroGoldShimmer_6s_ease-in-out_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  );
}