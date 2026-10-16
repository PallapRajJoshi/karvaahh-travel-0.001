import { CalendarCheck, ExternalLink } from "lucide-react";
import type { Airline } from "./types";

/** "Last reviewed" pill shown beside researched sections. */
export function VerifiedPill({ date, label = "Last reviewed" }: { date: string; label?: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-[#F8F6F1] px-4 py-2 text-[12.5px] font-medium text-[#4A5B6C] ring-1 ring-[#0B2942]/[0.06]">
      <CalendarCheck className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
      {label}: {date}
    </p>
  );
}

/** Airline name linking to its official booking site. */
export function AirlineLink({ airline, className = "" }: { airline: Airline; className?: string }) {
  return (
    <a
      href={airline.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 font-medium text-[#0B2942] underline decoration-[#0B2942]/25 decoration-1 underline-offset-2 transition-colors hover:text-[#C98500] hover:decoration-[#C98500] ${className}`}
    >
      {airline.name}
      <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
      <span className="sr-only">(official site, opens in a new tab)</span>
    </a>
  );
}

export const km = (n: number) => `≈ ${n.toLocaleString("en-IN")} km`;
