"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { mainNav } from "@/lib/navigation-data";
import NavLink from "./NavLink";
import MegaMenu from "./MegaMenu";

const CLOSE_DELAY = 150;

export default function DesktopNav() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (label: string) => {
    clearCloseTimer();
    setOpenLabel(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      setOpenLabel(null);
    }, CLOSE_DELAY);
  };

  const closeNow = () => {
    clearCloseTimer();
    setOpenLabel(null);
  };

  const activeItem = mainNav.find(
    (item) => item.label === openLabel && item.megaMenu
  );

  return (
    <nav
      aria-label="Primary"
      className="relative hidden items-center gap-1 lg:flex"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          closeNow();
        }
      }}
    >
      {/* =========================
          NAVIGATION LINKS
         ========================= */}

      {mainNav.map((item) => {
        const hasMegaMenu = Boolean(item.megaMenu);

        const menuId = `mega-menu-${item.label
          .toLowerCase()
          .replace(/\s+/g, "-")}`;

        const isOpen = openLabel === item.label;

        return (
          <div
            key={item.label}
            className="relative px-4"
            onMouseEnter={() => {
              if (hasMegaMenu) {
                openMenu(item.label);
              } else {
                closeNow();
              }
            }}
            onMouseLeave={() => {
              if (hasMegaMenu) {
                scheduleClose();
              }
            }}
          >
            <NavLink
              href={item.href}
              label={item.label}
              hasMegaMenu={hasMegaMenu}
              isMenuOpen={isOpen}
              aria-controls={
                hasMegaMenu ? menuId : undefined
              }
              onFocus={() => {
                if (hasMegaMenu) {
                  openMenu(item.label);
                } else {
                  closeNow();
                }
              }}
            />
          </div>
        );
      })}

      {/* =========================
          FULL-WIDTH MEGA MENU
         ========================= */}

      <AnimatePresence>
        {activeItem && (
          <div
            className="
              fixed
              left-0
              right-0
              z-[100]
              w-full
            "
            style={{
              top: "128px",
            }}
            onMouseEnter={() => {
              openMenu(activeItem.label);
            }}
            onMouseLeave={() => {
              scheduleClose();
            }}
          >
            <MegaMenu
              key={activeItem.label}
              item={activeItem}
              id={`mega-menu-${activeItem.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              onNavigate={closeNow}
            />
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}