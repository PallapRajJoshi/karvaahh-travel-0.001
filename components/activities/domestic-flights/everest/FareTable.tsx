import { ArrowRight, CalendarCheck, Info, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTACT } from "@/components/activities/experience/site";
import { BTN_PRIMARY, CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "./Sources";
import type { FaresData, FareRow } from "./types";

const COLUMNS: { key: keyof Omit<FareRow, "category" | "sources">; label: string }[] = [
  { key: "eligibility", label: "Eligibility & ID" },
  { key: "price", label: "Price per person" },
  { key: "currency", label: "Currency" },
  { key: "taxes", label: "Taxes & airport charges" },
  { key: "inclusions", label: "Inclusions" },
  { key: "validity", label: "Validity" },
];

/** Fare table by passenger category: a table on desktop, stacked cards on mobile. */
export default function FareTable({ data }: { data: FaresData }) {
  return (
    <section id="fares" aria-labelledby="fares-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading id="fares-title" eyebrow="Fares" title={data.title} intro={data.intro} />
          </Reveal>
          <Reveal delay={100}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#F8F6F1] px-4 py-2 text-[12.5px] font-medium text-[#4A5B6C] ring-1 ring-[#0B2942]/[0.06]">
              <CalendarCheck className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
              Fare rules last checked: {data.verified}
            </p>
          </Reveal>
        </div>

        {/* Desktop table */}
        <Reveal className="mt-12 hidden xl:block">
          <div className="overflow-hidden rounded-[26px] ring-1 ring-[#0B2942]/[0.08]">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{data.title}: fare basis by passenger category</caption>
              <thead className="bg-[#0B2942] text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F4A300]">
                    Passenger category
                  </th>
                  {COLUMNS.map((c) => (
                    <th key={c.key} scope="col" className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r) => (
                  <tr key={r.category} className="border-t border-[#0B2942]/[0.07] align-top transition-colors odd:bg-white even:bg-[#F8F6F1]/70 hover:bg-[#FFF7E6]">
                    <th scope="row" className="w-[17%] px-5 py-5">
                      <span className={`${SERIF} block text-[18px] font-medium leading-snug text-[#0B2942]`}>{r.category}</span>
                      <Sources sources={r.sources} className="mt-2" />
                    </th>
                    {COLUMNS.map((c) => (
                      <td key={c.key} className={`px-5 py-5 text-[13.5px] leading-6 ${c.key === "price" ? "font-semibold text-[#0B2942]" : "text-[#4A5B6C]"}`}>
                        {r[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile, tablet and small-laptop cards */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
          {data.rows.map((r, i) => (
            <li key={r.category}>
              <Reveal delay={i * 60} className="h-full">
                <article className="h-full rounded-[22px] bg-[#F8F6F1] p-6 ring-1 ring-[#0B2942]/[0.06]">
                  <h3 className={`${SERIF} text-[21px] font-medium text-[#0B2942]`}>{r.category}</h3>
                  <p className="mt-2 text-[15px] font-semibold text-[#0B2942]">{r.price}</p>
                  <dl className="mt-4 space-y-3">
                    {COLUMNS.filter((c) => c.key !== "price").map((c) => (
                      <div key={c.key}>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5B6B7B]">{c.label}</dt>
                        <dd className="mt-0.5 text-[13.5px] leading-6 text-[#4A5B6C]">{r[c.key]}</dd>
                      </div>
                    ))}
                  </dl>
                  <Sources sources={r.sources} className="mt-4" />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <ul className="space-y-2.5">
            {data.notes.map((n) => (
              <li key={n.slice(0, 40)} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
                <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                {n}
              </li>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="rounded-[24px] bg-[#0B2942] p-7 text-white">
              <p className={`${SERIF} text-[22px] leading-snug`}>Want a quotation in INR, NPR, USD or another currency?</p>
              <p className="mt-2 text-[14px] leading-6 text-white/70">
                Tell us your date, passenger count and nationality. We check the operator&apos;s current fare and send a written quote with taxes, inclusions and cancellation terms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <OpenBookingButton className={`group ${BTN_PRIMARY}`}>
                  {data.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </OpenBookingButton>
                <a
                  href={CONTACT.whatsappHref(data.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
