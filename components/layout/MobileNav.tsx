"use client";

// components/layout/MobileNav.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { mainNav, ctaLink, contactInfo, siteInfo } from "@/lib/navigation-data";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Lock background scroll while the panel is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#0A2540] transition-colors hover:bg-[#0A2540]/5"
      >
        <Menu className="h-6 w-6" strokeWidth={2} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <span className="text-lg font-semibold text-[#0A2540]">{siteInfo.brand}</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#0A2540] transition-colors hover:bg-[#0A2540]/5"
              >
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="divide-y divide-slate-100">
                {mainNav.map((item) => {
                  const hasMegaMenu = Boolean(item.megaMenu);
                  const isSectionOpen = openSection === item.label;

                  if (!hasMegaMenu) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="flex items-center py-3.5 text-[16px] font-medium text-[#0A2540]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setOpenSection(isSectionOpen ? null : item.label)}
                        aria-expanded={isSectionOpen}
                        aria-controls={`mobile-section-${item.label}`}
                        className="flex w-full items-center justify-between py-3.5 text-[16px] font-medium text-[#0A2540]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                            isSectionOpen ? "rotate-180 text-emerald-600" : ""
                          }`}
                          strokeWidth={2}
                        />
                      </button>

                      {/* CSS-grid accordion: animates height without measuring the DOM */}
                      <div
                        id={`mobile-section-${item.label}`}
                        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                          isSectionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="space-y-4 pb-4 pl-1 pt-1">
                            {item.megaMenu!.columns.map((column) => (
                              <div key={column.title}>
                                <p className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                  <span
                                    className={`h-1 w-1 rounded-full ${
                                      column.accent === "gold" ? "bg-[#C9962E]" : "bg-emerald-500"
                                    }`}
                                  />
                                  {column.title}
                                </p>
                                <ul className="space-y-0.5 pl-3">
                                  {column.items.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        onClick={close}
                                        className="block py-1.5 text-[14.5px] text-slate-600"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 space-y-2 rounded-xl bg-slate-50 p-4">
                {(["india", "nepal"] as const).map((key) => {
                  const c = contactInfo[key];
                  return (
                    <div key={key} className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-slate-600">
                      <span className="font-semibold text-[#0A2540]">{c.label}</span>
                      <a href={c.phoneHref} className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-emerald-600" /> {c.phone}
                      </a>
                      <a href={`mailto:${c.email}`} className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-emerald-600" /> {c.email}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sticky CTA footer */}
            <div className="border-t border-slate-100 px-5 py-4">
              <Link
                href={ctaLink.href}
                onClick={close}
                className="flex w-full items-center justify-center rounded-full bg-[#0A2540] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0A2540]/90"
              >
                {ctaLink.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
