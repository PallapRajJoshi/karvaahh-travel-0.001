import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import Link from "next/link";
import { formatPrice } from "../format";
import { CONTACT } from "../site";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

export default function BookingOptions({ tour }: { tour: Pick<HelicopterProductTour, "options"> }) {
  const { options } = tour;
  return (
    <section aria-labelledby="book-title" className={`${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="book-title" eyebrow="Book / Enquire" title={options.title} intro={options.intro} center />
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {options.items.map((o, i) => (
            <li key={o.name}>
              <Reveal delay={i * 100} className="h-full">
                <article
                  className={`group relative flex h-full flex-col rounded-[28px] p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8 ${
                    o.featured
                      ? "bg-[#0B2942] text-white shadow-[0_30px_60px_-30px_rgba(11,41,66,0.7)]"
                      : "bg-white text-[#0B2942] ring-1 ring-[#0B2942]/[0.08] hover:shadow-[0_26px_50px_-30px_rgba(11,41,66,0.45)]"
                  }`}
                >
                  {o.image?.src && (
                    <div className="relative -mx-7 -mt-7 mb-6 aspect-[16/9] overflow-hidden rounded-t-[28px] sm:-mx-8 sm:-mt-8">
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                        <PageImageFill image={o.image} sizes="(min-width: 1024px) 33vw, 100vw" />
                      </div>
                    </div>
                  )}
                  <p className={`text-[11.5px] font-semibold uppercase tracking-[0.24em] ${o.featured ? "text-[#F4A300]" : "text-[#C98500]"}`}>
                    {o.basis}
                  </p>
                  <h3 className={`${SERIF} mt-3 text-[26px] font-medium`}>{o.name}</h3>
                  {o.duration && (
                    <p className={`mt-2 inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-semibold ${o.featured ? "bg-white/10 text-white" : "bg-[#F8F6F1] text-[#0B2942]"}`}>
                      {o.duration}
                    </p>
                  )}
                  {formatPrice(o.pricing) ? (
                    <div className="mt-4">
                      <p className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${o.featured ? "text-white/60" : "text-[#8A97A5]"}`}>Starting from</p>
                      <p className={`text-[24px] font-semibold ${o.featured ? "text-white" : "text-[#0B2942]"}`}>{formatPrice(o.pricing)}</p>
                      <p className={`mt-1 text-[12px] ${o.featured ? "text-white/60" : "text-[#5B6B7B]"}`}>
                        {[o.pricing?.taxIncluded ? "Taxes included" : "Taxes extra", o.pricing?.permitIncluded ? "Permits included" : null, o.pricing?.validity]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                  ) : (
                    <p className={`mt-4 text-[22px] font-semibold ${o.featured ? "text-white" : "text-[#0B2942]"}`}>{o.price}</p>
                  )}

                  <ul className="mt-6 space-y-3">
                    {o.points.map((p) => (
                      <li key={p} className={`flex items-start gap-2.5 text-[14.5px] ${o.featured ? "text-white/85" : "text-[#4A5B6C]"}`}>
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <p className={`mt-6 border-t pt-5 text-[13.5px] ${o.featured ? "border-white/15 text-white/70" : "border-[#0B2942]/10 text-[#5B6B7B]"}`}>
                    <span className="font-semibold">Ideal for:</span> {o.idealFor}
                  </p>

                  <a
                    href={CONTACT.whatsappHref(o.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
                      o.featured
                        ? "bg-[#F4A300] text-[#0C1D30] hover:bg-[#FFB524]"
                        : "bg-[#0B2942] text-white hover:bg-[#123653]"
                    }`}
                  >
                    {options.ctaLabel ?? "Request a Quote"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                  {o.href && (
                    <Link
                      href={o.href}
                      className={`mt-3 text-center text-[14px] font-semibold underline-offset-4 hover:underline ${o.featured ? "text-white/85" : "text-[#0B2942]"}`}
                    >
                      View details
                    </Link>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[13px] text-[#5B6B7B]">{options.note}</p>
      </div>
    </section>
  );
}
