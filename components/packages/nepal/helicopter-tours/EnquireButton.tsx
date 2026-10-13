"use client";

import type { ReactNode } from "react";
import { useBooking } from "@/components/activities/experience/booking";

/** Opens the page's enquiry form with the given experience preselected. */
export default function EnquireButton({ tourType, className, children }: { tourType?: string; className: string; children: ReactNode }) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={() => open(tourType ? { tourType } : undefined)} className={className}>
      {children}
    </button>
  );
}
