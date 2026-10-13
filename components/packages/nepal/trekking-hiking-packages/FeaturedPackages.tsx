import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { BTN_GHOST, BTN_PRIMARY, CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import type { FeaturedPackage } from "@/data/trekking/types";
import { PackageCard } from "./cards";

export default function FeaturedPackages({ packages, customImage }: { packages: FeaturedPackage[]; customImage: PageImage }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="packages-title"
            eyebrow="Featured Trekking Packages"
            title="Treks Ready to Plan With You"
            intro="Sample itineraries from our trek pages. Every package can be adjusted for pace, rest days and comfort, and is priced once your dates and group are confirmed."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <PackageCard pkg={p} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16">
          <div className="relative isolate overflow-hidden rounded-[32px] bg-[#071421] text-white">
            <div className="absolute inset-0 -z-10 opacity-60">
              <PageImageFill image={customImage} sizes="(min-width: 1400px) 1320px, 100vw" />
            </div>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.96)_0%,rgba(7,20,33,0.85)_50%,rgba(11,41,66,0.5)_100%)]" />
            <div className="grid gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-14 lg:py-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F4A300]">Tailor-Made Treks</p>
                <h3 className={`${SERIF} mt-4 text-[32px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[44px]`}>Customize Your Himalayan Adventure</h3>
                <p className="mt-4 max-w-[560px] text-[15.5px] leading-7 text-white/80">
                  Tell us your dates, experience and the kind of trail you dream of. We&apos;ll suggest a route, build in acclimatisation and
                  buffer days, and plan your travel to and from the trailhead.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <Link href="/contact" className={`group ${BTN_PRIMARY}`}>
                  Customize Your Himalayan Adventure
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <OpenBookingButton prefill={{ tourType: "Custom trek" }} className={BTN_GHOST}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Quick Enquiry on WhatsApp
                </OpenBookingButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
