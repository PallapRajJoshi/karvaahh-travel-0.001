"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { MainNavItem } from "@/lib/navigation-data";

import MegaMenuColumn from "./MegaMenuColumn";
import MegaMenuFeatured from "./MegaMenuFeatured";

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
};

export default function MegaMenu({
  item,
  id,
  onNavigate,
}: {
  item: MainNavItem;
  id: string;
  onNavigate?: () => void;
}) {
  if (!item.megaMenu) {
    return null;
  }

  const isCompact =
    item.megaMenu.density === "compact";

  const hasFeatured =
    Boolean(item.megaMenu.featured) &&
    !isCompact;

  return (
    <motion.div
      id={id}
      role="region"
      aria-label={`${item.label} menu`}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full"
    >
      {/* =========================================
          FULL-WIDTH MENU
         ========================================= */}

      <div className="w-full overflow-hidden border-y border-slate-200/70 bg-white/95 shadow-[0_24px_60px_-15px_rgba(10,37,64,0.18)] backdrop-blur-xl">

        {/* TOP ACCENT LINE */}

        <div className="h-[3px] w-full bg-gradient-to-r from-[#0A2540] via-emerald-500 to-[#2E6FF2]" />


        {/* =========================================
            CENTERED CONTENT
           ========================================= */}

        <div className="mx-auto flex w-full max-w-[1500px] min-w-0 gap-8 px-8 py-8">

          {/* =======================================
              MENU COLUMNS
             ======================================= */}

          <div
            className={`
              grid
              min-w-0
              flex-1
              gap-x-8
              gap-y-6

            ${item.label === "Experiences"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : isCompact
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                  : "grid-cols-2 md:grid-cols-4"
              }
            `}
          >
            {item.megaMenu.columns.map(
              (column) => (
                <div
                  key={column.title}
                  className="min-w-0 w-full"
                >
                  <MegaMenuColumn
                    column={column}
                    onNavigate={onNavigate}
                  />
                </div>
              )
            )}
          </div>


          {/* =======================================
              FEATURED CARD
             ======================================= */}

          {hasFeatured && (
            <div className="hidden w-[230px] min-w-0 shrink-0 xl:block">
              <MegaMenuFeatured
                featured={
                  item.megaMenu.featured!
                }
                onNavigate={onNavigate}
              />
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}