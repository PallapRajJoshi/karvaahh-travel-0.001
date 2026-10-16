import { Check, ExternalLink, Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

/** Required documents + eligibility rules (optional section). */
export default function Documents({ tour }: { tour: HelicopterProductTour }) {
  const { documents } = tour;
  if (!documents) return null;

  return (
    <section id="documents" aria-labelledby="documents-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="documents-title" eyebrow="Documents & Eligibility" title={documents.title} intro={documents.intro} />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {documents.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 100} className="h-full rounded-[24px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                  <PageIcon name="passport" className="h-5 w-5" />
                </span>
                <h3 className={`${SERIF} mt-5 text-[21px] font-medium text-[#0B2942]`}>{g.title}</h3>
                <ul className="mt-4 space-y-3">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[14.5px] leading-6 text-[#4A5B6C]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="rounded-[24px] bg-[#0B2942] p-7 text-white sm:p-8">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Eligibility</h3>
            <dl className="mt-5 space-y-5">
              {documents.eligibility.map((e) => (
                <div key={e.title}>
                  <dt className="text-[16px] font-semibold">{e.title}</dt>
                  <dd className="mt-1 text-[14px] leading-6 text-white/70">{e.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[13px] leading-6 text-white/70">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
              {documents.note}
            </p>
            {documents.links && (
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
                {documents.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white/85 underline decoration-[#F4A300] underline-offset-4 transition-colors hover:text-[#F4A300]"
                    >
                      {l.label}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
