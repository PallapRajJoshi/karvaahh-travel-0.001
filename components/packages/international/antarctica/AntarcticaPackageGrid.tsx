"use client";

import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { activeExpeditions, expeditionById } from "@/data/antarctica/expeditions";
import { ANTARCTICA_ENQUIRY } from "@/lib/antarctica/config";
import { expeditionMatches, resetPolarFilters, usePolarFilters } from "@/lib/antarctica/explorer";
import ExpeditionCard from "./ExpeditionCard";

/** Filtered expedition grid. Swipeable row on phones, animated grid above. */
export default function AntarcticaPackageGrid() {
  const f = usePolarFilters();
  const shown = activeExpeditions.filter((e) => expeditionMatches(e, f));

  if (!shown.length) {
    return (
      <div className="an-empty" role="status">
        <p>No template matches every filter, but almost any combination can be built as a custom expedition.</p>
        <div className="an-empty__actions">
          <button type="button" className="pkg-btn an-btn--navy" onClick={() => resetPolarFilters()}>Clear filters</button>
          <a href={ANTARCTICA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
            <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.ul className="an-exp-grid" layout aria-label="Antarctica expedition packages">
      <AnimatePresence initial={false}>
        {shown.map((e) => (
          <motion.li
            key={e.id}
            layout
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <ExpeditionCard e={e} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

/** A fixed set of expedition cards for a story section (no filtering). */
export function ExpeditionRail({ ids, dark = false, label }: { ids: string[]; dark?: boolean; label: string }) {
  const list = ids.map(expeditionById).filter((e) => e?.active) as NonNullable<ReturnType<typeof expeditionById>>[];
  if (!list.length) return null;
  return (
    <ul className="an-rail" aria-label={label}>
      {list.map((e) => (
        <li key={e.id}>
          <ExpeditionCard e={e} compact dark={dark} />
        </li>
      ))}
    </ul>
  );
}
