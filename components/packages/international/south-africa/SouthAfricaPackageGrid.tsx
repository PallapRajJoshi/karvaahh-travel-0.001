"use client";

import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { saDestinationName } from "@/data/south-africa/destinations";
import { activeSAPackages, saPackageById } from "@/data/south-africa/packages";
import { SA_ENQUIRY } from "@/lib/south-africa/config";
import { clearSAStyles, packageMatches, setSAFilter, useSAFilters } from "@/lib/south-africa/explorer";
import SouthAfricaPackageCard from "./SouthAfricaPackageCard";

/** Package marketplace: follows styles and the selected destination. Swipeable on phones. */
export default function SouthAfricaPackageGrid() {
  const f = useSAFilters();
  const shown = activeSAPackages.filter((p) => packageMatches(p, f));
  const templates = shown.filter((p) => p.kind === "template").length;

  return (
    <>
      {f.destination !== "all" && (
        <p className="za-scope">
          Showing packages that include <strong>{saDestinationName(f.destination)}</strong>
          <button type="button" onClick={() => setSAFilter({ destination: "all" })} aria-label="Show packages for all destinations">
            <X size={14} aria-hidden="true" /> All destinations
          </button>
        </p>
      )}
      {templates === 0 ? (
        <div className="za-empty" role="status">
          <p>No template matches every choice, but almost any combination can be built as a custom trip.</p>
          <div className="za-empty__actions">
            <button type="button" className="pkg-btn za-btn--earth" onClick={() => { clearSAStyles(); setSAFilter({ destination: "all" }); }}>Clear filters</button>
            <a href={SA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
              <MessageCircle size={16} aria-hidden="true" /> Ask Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      ) : null}
      <motion.ul className="za-pkg-grid" layout aria-label="South Africa tour packages">
        <AnimatePresence initial={false}>
          {shown.map((p) => (
            <motion.li key={p.id} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}>
              <SouthAfricaPackageCard p={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

/** Fixed set of package cards for a story section (no filtering). */
export function PackageRail({ ids, dark = false, label }: { ids: string[]; dark?: boolean; label: string }) {
  const list = ids.map(saPackageById).filter((p) => p?.active) as NonNullable<ReturnType<typeof saPackageById>>[];
  if (!list.length) return null;
  return (
    <ul className="za-rail" aria-label={label}>
      {list.map((p) => (
        <li key={p.id}>
          <SouthAfricaPackageCard p={p} compact dark={dark} />
        </li>
      ))}
    </ul>
  );
}
