"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Compass, MessageCircle, Phone, Send, type LucideIcon } from "lucide-react";
import { GENERAL_ENQUIRY, contact } from "@/lib/asia/config";

export type BarAction = { label: string; href: string; icon: LucideIcon; external?: boolean; primary?: boolean };

const ASIA_ACTIONS: BarAction[] = [
  { label: "Explore Asia", href: "#destinations", icon: Compass },
  { label: "WhatsApp", href: GENERAL_ENQUIRY, icon: MessageCircle, external: true },
  { label: "Call", href: contact.nepalPhoneHref, icon: Phone },
  { label: "Enquire Now", href: "#plan-trip", icon: Send, primary: true },
];

/**
 * Desktop: floating pill. Mobile: fixed bottom action bar. Hidden while any of
 * `watchIds` (hero, trip builder, final CTA) is on screen, so it never
 * duplicates a visible call to action. Defaults are the Asia hub's.
 */
export default function StickyBookingBar({
  watchIds = ["asia-hero", "plan-trip", "asia-final"],
  pillLabel = "Plan Your Asia Trip",
  pillHref = "#plan-trip",
  actions = ASIA_ACTIONS,
}: {
  watchIds?: string[];
  pillLabel?: string;
  pillHref?: string;
  actions?: BarAction[];
}) {
  const [visible, setVisible] = useState(false);
  const watchKey = watchIds.join("|");

  useEffect(() => {
    const onScreen = new Set<string>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target.id) : onScreen.delete(e.target.id)));
      setVisible(onScreen.size === 0);
    });
    watchKey.split("|").forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [watchKey]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.a
            key="pill"
            href={pillHref}
            className="asia-fab"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            {pillLabel} <ArrowRight size={18} aria-hidden="true" />
          </motion.a>

          <motion.nav
            key="bar"
            className="asia-mbar"
            aria-label="Quick actions"
            style={{ gridTemplateColumns: `repeat(${actions.length}, minmax(0, 1fr))` }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            exit={{ y: "110%" }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
          >
            {actions.map(({ label, href, icon: Icon, external, primary }) => (
              <a
                key={label}
                href={href}
                className={`asia-mbar__btn${primary ? " asia-mbar__btn--primary" : ""}`}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon size={20} aria-hidden="true" /> {label}
                {external && <span className="pkg-sr"> (opens in a new tab)</span>}
              </a>
            ))}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
