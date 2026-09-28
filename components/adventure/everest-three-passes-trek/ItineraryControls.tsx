"use client";

import { useState } from "react";

/** Expand / collapse every <details> day at once. Purely progressive enhancement. */
export default function ItineraryControls({ targetId }: { targetId: string }) {
  const [allOpen, setAllOpen] = useState(false);

  const toggle = () => {
    const next = !allOpen;
    document.querySelectorAll<HTMLDetailsElement>(`#${targetId} details`).forEach((d) => {
      d.open = next;
    });
    setAllOpen(next);
  };

  return (
    <button type="button" className="etp-route__toggle" onClick={toggle} aria-controls={targetId}>
      {allOpen ? "Collapse all days" : "Expand all days"}
    </button>
  );
}
