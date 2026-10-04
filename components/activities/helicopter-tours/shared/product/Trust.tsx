import { Building2, Mail, Phone } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { contactInfo } from "@/lib/navigation-data";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

/**
 * Trust built only from facts already in the project (site contact data).
 * No reviews are shown: add verified, permissioned reviews here once available.
 */
export default function Trust({ tour }: { tour: HelicopterProductTour }) {
  const { trust } = tour;
  const offices = [contactInfo.nepal, contactInfo.india];

  return (
    <section aria-labelledby="trust-title" className={`${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16`}>
        <div>
          <Reveal>
            <SectionHeading id="trust-title" eyebrow="Karvaahh Tours & Travels" title={trust.title} intro={trust.intro} />
          </Reveal>
          <ul className="mt-8 space-y-5">
            {trust.points.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 90} className="flex gap-4">
                  <span className={`${SERIF} text-[26px] leading-none text-[#F4A300]`}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[16px] font-semibold text-[#0B2942]">{p.title}</span>
                    <span className="mt-1 block text-[14.5px] leading-6 text-[#5B6B7B]">{p.text}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {offices.map((o, i) => (
            <li key={o.label}>
              <Reveal delay={i * 120} className="h-full rounded-[24px] bg-white p-7 ring-1 ring-[#0B2942]/[0.06]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className={`${SERIF} mt-5 text-[22px] font-medium text-[#0B2942]`}>{o.label}</h3>
                <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#C98500]">{o.city}</p>
                <ul className="mt-5 space-y-2.5 text-[14.5px]">
                  <li>
                    <a href={o.phoneHref} className="flex items-center gap-2.5 text-[#0B2942] transition-colors hover:text-[#C98500]">
                      <Phone className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
                      {o.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-2.5 break-all text-[#0B2942] transition-colors hover:text-[#C98500]">
                      <Mail className="h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                      {o.email}
                    </a>
                  </li>
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
