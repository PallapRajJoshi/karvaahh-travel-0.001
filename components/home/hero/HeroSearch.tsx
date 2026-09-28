'use client';

import { useId, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import type { SearchSuggestion } from '@/types/hero';

const SUGGESTIONS: SearchSuggestion[] = [
  { label: 'Nepal', href: '/destinations/nepal' },
  { label: 'India', href: '/destinations/india' },
  { label: 'Kailash', href: '/destinations/kailash' },
  { label: 'Himalayas', href: '/destinations/himalayas' },
];

export default function HeroSearch() {
  const inputId = useId();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to real search / destinations route
    console.log('Search submitted:', query);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-5"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor={inputId} className="sr-only">
          Where do you want to go?
        </label>
        <div className="flex flex-1 items-center gap-3 rounded-full border border-white/15 bg-[#081422]/40 px-4 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
          <input
            id={inputId}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where do you want to go?"
            className="w-full bg-transparent text-[15px] text-white placeholder:text-white/50 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="shrink-0 rounded-full bg-[#F4A300] px-6 py-2.5 text-[14px] font-semibold text-[#0C1D30] transition-colors duration-200 hover:bg-[#FFB524] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Search
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="Popular searches">
        {SUGGESTIONS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="rounded-full border border-white/15 px-3.5 py-1.5 text-[12.5px] font-medium text-white/75 transition-colors duration-200 hover:border-[#F4A300]/50 hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
