import { Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, PageIcon, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "../everest/Sources";
import type { DisruptionData } from "./types";

/** Weather, delays, refunds, baggage and layover guidance. */
export default function DisruptionGuide({ data }: { data: DisruptionData }) {
  return (
    <section id="delays" aria-labelledby="delays-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="delays-title" eyebrow="Plan for the Unexpected" title={data.title} intro={data.intro} />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((it, i) => (
            <li key={it.title}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <div className="h-full rounded-[22px] bg-[#F8F6F1] p-6 ring-1 ring-[#0B2942]/[0.06] transition-shadow hover:shadow-[0_12px_30px_-18px_rgba(11,41,66,0.4)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                    <PageIcon name={it.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-[#0B2942]">{it.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{it.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          {data.note}
        </p>
        <Sources sources={data.sources} className="mt-3" />
      </div>
    </section>
  );
}
