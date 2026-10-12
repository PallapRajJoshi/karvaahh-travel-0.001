import { X } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";
import InclusionList from "./InclusionList";
import InclusionTabs from "./InclusionTabs";

export default function Inclusions({ tour }: { tour: Pick<HelicopterProductTour, "inclusions" | "exclusions" | "inclusionSets"> }) {
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
            {tour.inclusionSets?.length ? <InclusionTabs sets={tour.inclusionSets} /> : <InclusionList items={tour.inclusions} />}
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
