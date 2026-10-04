import { Check, CircleDashed, X } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

export default function Inclusions({ tour }: { tour: HelicopterProductTour }) {
  return (
    <section id="inclusions" aria-labelledby="inclusions-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="inclusions-title"
            eyebrow="Inclusions"
            title="What's Included & What's Not"
            intro="Inclusions vary with the package you choose. Everything is confirmed in writing before you book."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full rounded-[26px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-7 sm:p-9">
            <h3 className={`${SERIF} text-[24px] font-medium text-[#0B2942]`}>Included</h3>
            <ul className="mt-6 space-y-4">
              {tour.inclusions.map((it) => (
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
                    {it.status === "package" && (
                      <span className="mt-0.5 block text-[12.5px] text-[#8A6A1F]">Depending on selected package</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="h-full rounded-[26px] border border-[#0B2942]/[0.08] bg-white p-7 sm:p-9">
            <h3 className={`${SERIF} text-[24px] font-medium text-[#0B2942]`}>Not Included</h3>
            <ul className="mt-6 space-y-4">
              {tour.exclusions.map((t) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1ECE3] text-[#8A97A5]">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] text-[#4A5B6C]">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
