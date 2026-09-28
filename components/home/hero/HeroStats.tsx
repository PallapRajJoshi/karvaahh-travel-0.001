'use client';

import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Sparkles } from 'lucide-react';

const STATS = [
  {
    value: '19+ Years',
    label: 'Experience',
    Icon: Clock,
  },
  {
    value: '3,450+',
    label: 'Happy Travelers',
    Icon: Users,
  },
  {
    value: 'Nepal & India',
    label: 'Specialists',
    Icon: MapPin,
  },
  {
    value: 'Customized',
    label: 'Journeys',
    Icon: Sparkles,
  },
];

export default function HeroStats() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mx-auto
        flex
        w-fit
        max-w-full
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-[#081422]/35
        px-5
        py-3
        backdrop-blur-xl
        shadow-[0_15px_50px_-20px_rgba(0,0,0,0.7)]
        sm:px-7
        sm:py-3.5
        lg:px-9
      "
    >
      {STATS.map(({ value, label, Icon }, index) => (
        <div
          key={label}
          className="flex items-center"
        >
          {/* Stat */}
          <div className="flex items-center gap-2.5 px-3 sm:px-5">
            <Icon
              className="h-4 w-4 shrink-0 text-[#F4A300] sm:h-[17px] sm:w-[17px]"
              strokeWidth={2}
              aria-hidden="true"
            />

            <div className="flex flex-col leading-tight">
              <dt className="text-[12.5px] font-semibold tracking-wide text-white sm:text-[13px]">
                {value}
              </dt>

              <dd className="mt-0.5 text-[10px] font-medium text-white/55 sm:text-[10.5px]">
                {label}
              </dd>
            </div>
          </div>

          {/* Divider */}
          {index < STATS.length - 1 && (
            <span
              className="h-7 w-px bg-white/10"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </motion.dl>
  );
}