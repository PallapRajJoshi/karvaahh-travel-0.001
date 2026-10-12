import { Check, CircleDashed } from "lucide-react";
import type { InclusionItem } from "../product-types";

/** Included items; package-dependent ones get a dashed marker and a note. */
export default function InclusionList({ items }: { items: InclusionItem[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((it) => (
        <li key={it.text} className="flex items-start gap-3.5">
          {it.status === "included" ? (
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          ) : (
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-[#C98500] text-[#C98500]">
              <CircleDashed className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          )}
          <span>
            <span className="block text-[15px] font-medium text-[#0B2942]">{it.text}</span>
            {it.status === "package" && <span className="mt-0.5 block text-[12.5px] text-[#8A6A1F]">Depending on selected package</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
