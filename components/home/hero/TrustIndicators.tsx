'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, MapPinned, Compass, ShieldCheck } from 'lucide-react';

const INDICATORS: { label: string; Icon: typeof BadgeCheck }[] = [
  { label: 'Nepal & India Operations', Icon: MapPinned },
  { label: 'Local Travel Experts', Icon: Compass },
  { label: 'Customized Journeys', Icon: BadgeCheck },
  { label: 'Trusted Travel Partner', Icon: ShieldCheck },
];

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TrustIndicators() {
  return (
    <ul
      className="flex flex-wrap items-center gap-x-6 gap-y-2.5"
      aria-label="Karvaahh trust indicators"
    >
      {INDICATORS.map(({ label, Icon }, i) => (
        <motion.li
          key={label}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-white/80"
        >
          <Icon className="h-3.5 w-3.5 shrink-0 text-[#F4A300]" strokeWidth={2.25} aria-hidden="true" />
          <span>{label}</span>
        </motion.li>
      ))}
    </ul>
  );
}
