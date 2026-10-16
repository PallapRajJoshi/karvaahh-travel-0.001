import { Check, Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "./Sources";
import type { PoliciesData, PolicyOwner } from "./types";

const OWNER: Record<PolicyOwner, { label: string; className: string }> = {
  airline: { label: "Airline decision", className: "bg-[#0B2942] text-white" },
  passenger: { label: "Your request", className: "bg-[#F4A300]/20 text-[#7A4E00]" },
  karvaahh: { label: "Karvaahh terms", className: "bg-[#1F9D55]/12 text-[#146C3A]" },
};

/** Cancellation, refund and rescheduling, labelled by who applies each rule. */
export default function Policies({ data }: { data: PoliciesData }) {
  return (
    <section id="cancellation" aria-labelledby="cancellation-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="cancellation-title" eyebrow="Cancellation & Refunds" title={data.title} intro={data.intro} />
        </Reveal>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Legend">
          {Object.values(OWNER).map((o) => (
            <li key={o.label} className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${o.className}`}>
              {o.label}
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 3) * 90} className="h-full">
                <article
                  className={`flex h-full flex-col rounded-[24px] bg-white p-7 transition-shadow duration-500 hover:shadow-[0_24px_44px_-28px_rgba(11,41,66,0.45)] ${
                    p.confirm ? "border-2 border-dashed border-[#F4A300]/60" : "ring-1 ring-[#0B2942]/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1] text-[#0B2942]">
                      <PageIcon name={p.icon} className="h-5 w-5" />
                    </span>
                    <span className={`rounded-full px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${OWNER[p.owner].className}`}>
                      {OWNER[p.owner].label}
                    </span>
                  </div>
                  <h3 className={`${SERIF} mt-5 text-[22px] font-medium leading-snug text-[#0B2942]`}>{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-7 text-[#4A5B6C]">{p.text}</p>
                  {p.points && (
                    <ul className="mt-4 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-[13.5px] leading-6 text-[#4A5B6C]">
                          <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.confirm && (
                    <p className="mt-4 rounded-xl bg-[#FFF7E6] px-3.5 py-2.5 text-[12.5px] font-medium leading-5 text-[#7A4E00]">
                      To be confirmed: Karvaahh&apos;s service terms are stated in writing in your quotation.
                    </p>
                  )}
                  {p.sources && <Sources sources={p.sources} className="mt-auto pt-5" />}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          {data.note}
        </p>
      </div>
    </section>
  );
}
