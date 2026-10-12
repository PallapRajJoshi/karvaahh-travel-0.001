"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently being read.
 *
 * A section counts as "active" while any part of it sits in a band near the
 * top of the viewport (15%–30% from the top). When several sections touch the
 * band, the last one in document order wins — i.e. the one whose heading has
 * just scrolled in. State only changes inside the observer callback.
 */
export function useActiveSection(ids: string[]): string | null {
  const key = ids.join("|");
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const sectionIds = key ? key.split("|") : [];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0 || typeof IntersectionObserver === "undefined") return;

    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }
        for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
          if (inBand.has(sectionIds[i])) {
            setActive(sectionIds[i]);
            return;
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
