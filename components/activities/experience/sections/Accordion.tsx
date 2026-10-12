import { ChevronDown } from "lucide-react";
import "../heli.css";

/**
 * Native <details> accordion: accessible, works without JavaScript and
 * keeps the content in the HTML for search engines. Opening animates via
 * heli.css where the browser supports it.
 */
export default function Accordion({
  items,
  headingLevel = "h3",
  openFirst = true,
}: {
  items: { title: string; body: string }[];
  headingLevel?: "h3" | "h4";
  openFirst?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <div className="divide-y divide-[#0B2942]/10 rounded-[24px] border border-[#0B2942]/10 bg-white px-6 shadow-[0_14px_40px_-30px_rgba(11,41,66,0.45)] sm:px-8">
      {items.map((item, i) => (
        <details key={item.title} className="heli-details group" open={openFirst && i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#C98500] [&::-webkit-details-marker]:hidden">
            <Heading className="text-[16px] font-semibold text-[#0B2942] transition-colors group-hover:text-[#C98500] sm:text-[17px]">
              {item.title}
            </Heading>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1] text-[#0B2942] transition-all duration-300 group-open:rotate-180 group-open:bg-[#F4A300] group-open:text-[#0C1D30]">
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="pb-6 pr-2 text-[15px] leading-7 text-[#5B6B7B] sm:pr-14">{item.body}</p>
        </details>
      ))}
    </div>
  );
}
