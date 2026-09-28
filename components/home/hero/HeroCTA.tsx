'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.65, staggerChildren: 0.1 } },
};

const btnVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroCTA() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3.5"
    >
      <motion.a
        variants={btnVariants}
        href="/packages"
        className="group inline-flex items-center gap-2 rounded-full bg-[#F4A300] px-6 py-3.5 text-[15px] font-semibold text-[#0C1D30] shadow-[0_8px_24px_-6px_rgba(244,163,0,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FFB524] hover:shadow-[0_12px_30px_-6px_rgba(244,163,0,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Explore Packages
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </motion.a>

      <motion.a
        variants={btnVariants}
        href="/plan-my-journey"
        className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/[0.06] px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Plan My Journey
        <MessageCircle
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </motion.a>
    </motion.div>
  );
}
