import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDown, Clock, Landmark, MapPin, Users } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import type { RequiredImage } from "@/components/activities/experience/types";
import { BTN_GHOST, BTN_PRIMARY, CONTAINER, HelicopterIcon, SERIF } from "@/components/activities/experience/ui";
import EnquireButton from "./EnquireButton";

const delay = (s: number) => ({ "--nh-delay": `${s}s` }) as CSSProperties;

const FACTS = [
  { icon: MapPin, label: "Departures", value: "Kathmandu · Pokhara · Nepalgunj" },
  { icon: Users, label: "Arrangements", value: "Shared seats & private charters" },
  { icon: Landmark, label: "Journeys", value: "Scenic, mountain & pilgrimage" },
  { icon: Clock, label: "Pricing", value: "Confirmed at enquiry" },
];

export default function HeliHubHero({ image, charterType }: { image: RequiredImage; charterType: string }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="nh-zoom object-cover"
          style={{ objectPosition: image.objectPosition }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,20,33,0.55)_0%,rgba(7,20,33,0.25)_35%,rgba(7,20,33,0.9)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,33,0.85)_0%,rgba(11,41,66,0.45)_55%,transparent_100%)]" />

      <HelicopterIcon className="nh-glide pointer-events-none absolute right-[8%] top-[18%] hidden h-16 w-16 text-white/80 drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] md:block lg:h-20 lg:w-20" />

      <div className={`${CONTAINER} flex min-h-[calc(100svh-101px)] flex-col justify-end pb-12 pt-14 md:min-h-[calc(100svh-145px)] lg:pb-16`}>
        <div className="nh-rise" style={delay(0.05)}>
          <Breadcrumb
            className="pp-breadcrumb--on-dark text-white"
            items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Nepal Helicopter Tours" }]}
          />
        </div>
        <p
          className="nh-rise mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F4A300] backdrop-blur-sm sm:tracking-[0.28em]"
          style={delay(0.15)}
        >
          <HelicopterIcon className="h-3.5 w-3.5" />
          Discover the Himalayas from Above
        </p>
        <h1
          id="hero-title"
          className={`${SERIF} nh-rise mt-6 max-w-[880px] text-[44px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[64px] lg:text-[84px]`}
          style={delay(0.28)}
        >
          Nepal <span className="text-[#F4A300]">Helicopter</span> Tours
        </h1>
        <p className="nh-rise mt-6 max-w-[640px] text-[16px] leading-7 text-white/85 sm:text-[17.5px] sm:leading-8" style={delay(0.42)}>
          Experience the world&apos;s most spectacular mountain landscapes from the sky. Discover breathtaking Himalayan panoramas, extraordinary aerial adventures,
          and sacred pilgrimage destinations with Karvaahh Travels.
        </p>
        <div className="nh-rise mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap" style={delay(0.56)}>
          <a href="#experiences" className={BTN_PRIMARY}>
            Explore Helicopter Tours
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <EnquireButton tourType={charterType} className={BTN_GHOST}>
            Plan Your Private Flight
          </EnquireButton>
        </div>

        <dl
          className="nh-rise mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md lg:grid-cols-4"
          style={delay(0.7)}
        >
          {FACTS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 bg-[#071421]/55 p-4 sm:p-5">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/55">{label}</dt>
                <dd className="mt-1 text-[13.5px] font-medium leading-5 text-white sm:text-[14.5px]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
