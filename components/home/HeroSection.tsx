"use client";

import { motion } from "motion/react";

import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroCTA from "./hero/HeroCTA";
import TrustIndicators from "./hero/TrustIndicators";
import HeroStats from "./hero/HeroStats";

import "./css/HeroSection.css";

export default function HeroSection() {
  return (
    <section
      aria-label="Karvaahh Tours & Travels — Discover Nepal, experience the extraordinary"
      className="karvaahh-hero relative w-full overflow-hidden bg-[#071421] font-[var(--font-body,inherit)]"
    >
      {/* ============================================================
          VIDEO BACKGROUND
      ============================================================ */}
      <motion.div
        initial={{
          scale: 1.04,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <HeroBackground />
      </motion.div>

      {/* ============================================================
          HERO CONTENT
      ============================================================ */}
      <div className="relative z-10 flex h-full min-h-0 flex-col">

        {/* ==========================================================
            MAIN CONTENT
        ========================================================== */}
        <div className="hero-main mx-auto flex min-h-0 w-full max-w-[1500px] flex-1 items-start px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

          <div className="hero-content-wrapper w-full max-w-[780px]">

            {/* ======================================================
                HERO CONTENT
            ====================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(7px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <HeroContent />
            </motion.div>

            {/* ======================================================
                CTA
            ====================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 sm:mt-7 lg:mt-7"
            >
              <HeroCTA />
            </motion.div>

            {/* ======================================================
                TRUST INDICATORS
            ====================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-trust mt-6 hidden lg:block"
            >
              <TrustIndicators />
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            MOBILE TRUST
        ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="px-5 pb-3 sm:px-8 lg:hidden"
        >
          <TrustIndicators />
        </motion.div>

        {/* ==========================================================
            STATS
        ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hero-stats-wrapper mx-auto w-full max-w-[1500px] shrink-0 px-5 pb-5 pt-3 sm:px-8 sm:pb-6 sm:pt-4 lg:px-12 lg:pb-6 lg:pt-3 xl:px-16 2xl:px-20"
        >
          <HeroStats />
        </motion.div>
      </div>

      {/* ============================================================
          BOTTOM LINE
      ============================================================ */}
      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scaleX: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-[4] h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      {/* ============================================================
          DESKTOP SCROLL INDICATOR
      ============================================================ */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.6,
        }}
        className="pointer-events-none absolute bottom-24 right-5 z-20 hidden flex-col items-center gap-3 lg:flex xl:right-8"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/60 [writing-mode:vertical-rl]">
          Explore
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-9 w-px bg-gradient-to-b from-white/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}