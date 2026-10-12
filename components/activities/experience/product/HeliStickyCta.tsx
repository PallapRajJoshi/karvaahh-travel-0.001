"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CalendarDays, Phone } from "lucide-react";
import { useBooking } from "../booking";
import { CONTACT } from "../site";

/**
 * Persistent booking access once the hero is passed.
 * Desktop: a floating "Check Availability" pill beside the site-wide
 * WhatsApp button (rendered by the Footer at bottom-5 right-5).
 * Mobile: a bottom bar with Call + Book Now; the site's WhatsApp button
 * sits in the space reserved on its right, completing WhatsApp · Call · Book.
 * A spacer keeps the bar from covering the end of the page.
 */
type Titled = { title: string; mobileTitle?: string; desktop: string; mobile: string };

export default function HeliStickyCta({ plan, titled }: { plan?: { label: string; href: string }; titled?: Titled }) {
  const { open } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && plan && (
          <motion.a
            key="plan"
            href={plan.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-[19rem] z-40 hidden items-center rounded-full bg-[#F4A300] px-6 py-3.5 text-[14.5px] font-semibold text-[#0C1D30] shadow-[0_18px_40px_-14px_rgba(244,163,0,0.7)] transition-colors hover:bg-[#FFB524] lg:inline-flex"
          >
            {plan.label}
          </motion.a>
        )}
        {visible && titled && (
          <motion.button
            key="titled"
            type="button"
            onClick={() => open()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="group fixed bottom-6 right-24 z-40 hidden items-center gap-4 rounded-2xl bg-[#0B2942] py-3 pl-5 pr-4 text-left text-white shadow-[0_18px_40px_-14px_rgba(7,20,33,0.7)] transition-colors hover:bg-[#123653] lg:flex"
          >
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">{titled.title}</span>
              <span className="block text-[15px] font-semibold">{titled.desktop}</span>
            </span>
            <ArrowRight className="h-5 w-5 text-[#F4A300] transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </motion.button>
        )}
        {visible && !titled && (
          <motion.button
            key="desktop"
            type="button"
            onClick={() => open()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="group fixed bottom-6 right-24 z-40 hidden items-center gap-2 rounded-full bg-[#0B2942] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_18px_40px_-14px_rgba(7,20,33,0.7)] transition-colors hover:bg-[#123653] lg:inline-flex"
          >
            <CalendarDays className="h-4 w-4 text-[#F4A300]" aria-hidden="true" />
            Check Availability
          </motion.button>
        )}
      </AnimatePresence>

      <div
        aria-hidden={!visible}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#0B2942]/10 bg-white/95 px-3 py-3 pr-[88px] backdrop-blur-md transition-transform duration-300 lg:hidden ${
          visible ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        {titled ? (
          <div className="flex items-center gap-3">
            <p className="min-w-0 flex-1 truncate text-[14px] font-semibold text-[#0B2942]">{titled.mobileTitle ?? titled.title}</p>
            <button
              type="button"
              tabIndex={visible ? 0 : -1}
              onClick={() => open()}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F4A300] px-5 py-3 text-[14.5px] font-semibold text-[#0C1D30] active:scale-[0.98]"
            >
              {titled.mobile}
            </button>
          </div>
        ) : (
        <div className="flex gap-2">
          <a
            href={CONTACT.phoneHref}
            tabIndex={visible ? 0 : -1}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#0B2942]/15 py-3 text-[14.5px] font-semibold text-[#0B2942]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            tabIndex={visible ? 0 : -1}
            onClick={() => open()}
            className="inline-flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-[#F4A300] py-3 text-[14.5px] font-semibold text-[#0C1D30] active:scale-[0.98]"
          >
            Book Now
          </button>
        </div>
        )}
      </div>
      <div aria-hidden="true" className="h-[70px] lg:hidden" />
    </>
  );
}
