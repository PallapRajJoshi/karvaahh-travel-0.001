'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { FeaturedJourney } from '@/types/hero';

const JOURNEY: FeaturedJourney = {
  eyebrow: 'FEATURED JOURNEY',
  title: 'Nepal Himalayan Escape',
  duration: '9 Nights / 10 Days',
  route: 'Kathmandu · Pokhara · Ghandruk · Muktinath',
  ctaLabel: 'View Journey',
  href: '/packages/nepal-himalayan-escape',
  images: [
    { src: '/images/destinations/pokhara.webp', alt: 'Boats on Phewa Lake, Pokhara', label: 'Pokhara' },
    { src: '/images/destinations/ghandruk.webp', alt: 'Terraced hillside village of Ghandruk', label: 'Ghandruk' },
    { src: '/images/destinations/muktinath.webp', alt: 'Muktinath temple in the high mountains', label: 'Muktinath' },
    { src: '/images/destinations/kathmandu.webp', alt: 'Temple spires in Kathmandu at dusk', label: 'Kathmandu' },
  ],
};

export default function DestinationShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="motion-safe:animate-[heroFloat_7s_ease-in-out_infinite]"
    >
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="w-[300px] overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:w-[330px]">
        {/* 2x2 image collage */}
        <div className="grid grid-cols-2 gap-[3px] p-[3px]">
          {JOURNEY.images.map((img) => (
            <div key={img.label} className="group relative aspect-square overflow-hidden rounded-[20px] bg-[#0C1D30]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2.5 text-[11px] font-medium tracking-wide text-white/90">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Card content */}
        <div className="px-6 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F4A300]">
            {JOURNEY.eyebrow}
          </p>
          <h3 className="mt-1.5 text-[19px] font-semibold text-white">{JOURNEY.title}</h3>
          <p className="mt-1 text-[13px] text-white/70">{JOURNEY.duration}</p>
          <p className="mt-2.5 text-[12.5px] leading-relaxed text-white/55">{JOURNEY.route}</p>

          <a
            href={JOURNEY.href}
            className="group mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white transition-colors duration-200 hover:text-[#F4A300] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {JOURNEY.ctaLabel}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
