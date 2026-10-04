"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

/**
 * Mobile/tablet bottom bar, shown once the hero (which has its own CTAs) is
 * scrolled past. Leaves room on the right for the site-wide floating
 * WhatsApp button rendered by the Footer (fixed bottom-5 right-5).
 */
export default function MobileCta({ title }: { title: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden={!visible}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#0B2942]/10 bg-white/95 px-4 py-3 pr-[92px] backdrop-blur-md transition-transform duration-300 lg:hidden ${
          visible ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <p className="hidden min-w-0 flex-1 truncate text-[13px] font-medium text-[#0B2942] min-[420px]:block">{title}</p>
          <a
            href="#book"
            tabIndex={visible ? 0 : -1}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F4A300] px-5 py-3 text-[15px] font-semibold text-[#0C1D30] shadow-[0_8px_20px_-8px_rgba(244,163,0,0.6)] transition-transform active:scale-[0.98] min-[420px]:flex-none"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enquire Now
          </a>
        </div>
      </div>
      {/* Spacer so the bar never covers the end of the footer */}
      <div aria-hidden="true" className="h-[72px] lg:hidden" />
    </>
  );
}
