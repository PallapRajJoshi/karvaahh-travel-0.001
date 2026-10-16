import { ExternalLink } from "lucide-react";
import type { SourceLink } from "./types";

/** "Source:" line with external links to official pages. */
export default function Sources({ sources, dark = false, className = "" }: { sources: SourceLink[]; dark?: boolean; className?: string }) {
  if (!sources.length) return null;
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] leading-5 ${dark ? "text-white/55" : "text-[#5B6B7B]"} ${className}`}>
      <span className="font-semibold uppercase tracking-[0.16em]">{sources.length > 1 ? "Sources" : "Source"}</span>
      {sources.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 underline decoration-1 underline-offset-2 transition-colors ${
            dark ? "text-white/75 hover:text-[#F4A300]" : "text-[#0B2942] hover:text-[#C98500]"
          }`}
        >
          {s.label}
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ))}
    </p>
  );
}
