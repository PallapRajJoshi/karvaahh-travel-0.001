"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuColumn as MegaMenuColumnType } from "@/lib/navigation-data";
import { getColumnIcon } from "@/lib/mega-menu-icons";

const accentStyles = {
  emerald: {
    icon: "text-emerald-600 bg-emerald-50",
    arrow: "text-emerald-500",
  },

  gold: {
    icon: "text-[#B8862B] bg-[#FBF3E3]",
    arrow: "text-[#C9962E]",
  },
} as const;

export default function MegaMenuColumn({
  column,
  onNavigate,
}: {
  column: MegaMenuColumnType;
  onNavigate?: () => void;
}) {
  const Icon = getColumnIcon(column.title);

  const accent =
    accentStyles[column.accent ?? "emerald"];

  return (
    <div className="min-w-0 w-full">

      {/* COLUMN HEADER */}
      <div className="mb-4 flex min-w-0 items-center gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent.icon}`}
        >
          <Icon
            className="h-4 w-4"
            strokeWidth={2}
          />
        </span>

        <span className="min-w-0 text-[13px] font-bold uppercase tracking-[0.05em] leading-tight text-[#0A2540]">
          {column.title}
        </span>
      </div>

      {/* COLUMN LINKS */}
      <ul className="m-0 min-w-0 space-y-1 p-0">

        {column.items.map((item) => (
          <li
            key={item.href}
            className="min-w-0"
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group/link flex min-w-0 w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-[14px] leading-snug text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#0A2540]"
            >

              {/* TEXT */}
              <span className="min-w-0 break-words">
                {item.label}
              </span>

              {/* ARROW */}
              <ArrowRight
                className={`h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:opacity-100 ${accent.arrow}`}
                strokeWidth={2}
              />

            </Link>
          </li>
        ))}

      </ul>
    </div>
  );
}