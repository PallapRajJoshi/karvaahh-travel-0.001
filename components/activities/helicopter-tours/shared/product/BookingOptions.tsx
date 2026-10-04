import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTACT } from "../site";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

export default function BookingOptions({ tour }: { tour: HelicopterProductTour }) {
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
                  <p className={`text-[11.5px] font-semibold uppercase tracking-[0.24em] ${o.featured ? "text-[#F4A300]" : "text-[#C98500]"}`}>
                    {o.basis}
                  </p>
                  <h3 className={`${SERIF} mt-3 text-[26px] font-medium`}>{o.name}</h3>
                  <p className={`mt-4 text-[22px] font-semibold ${o.featured ? "text-white" : "text-[#0B2942]"}`}>{o.price}</p>

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
                    Request a Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
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
