"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement: when the URL hash points at an itinerary day
 * (#day-7), open that <details> so deep links from the altitude chart,
 * search results or shared URLs land on expanded content. Chromium already
 * does this natively; this covers other browsers. Renders nothing.
 */
export default function DayHashOpener() {
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id.startsWith("day-")) return;
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement && !el.open) {
        el.open = true;
        el.scrollIntoView({ block: "start" });
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return null;
}
