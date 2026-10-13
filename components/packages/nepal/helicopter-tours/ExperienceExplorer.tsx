"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Plane } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { HelicopterIcon, PageImageFill, SERIF } from "@/components/activities/experience/ui";
import type { HubCategory } from "@/data/helicopter-tours/nepal-hub";
import EnquireButton from "./EnquireButton";
import type { HubCard } from "./model";

type Filter = HubCategory | "all";

/** Category filter + experience cards. Every card stays in the server HTML; filtering only hides cards. */
export default function ExperienceExplorer({ cards, categories }: { cards: HubCard[]; categories: { id: Filter; label: string }[] }) {
  const [active, setActive] = useState<Filter>("all");
  const visible = active === "all" ? cards : cards.filter((c) => c.categories.includes(active));
  const activeLabel = categories.find((c) => c.id === active)?.label ?? "";

  return (
    <>
      <div className="-mx-5 mt-10 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        <div role="group" aria-label="Filter helicopter tours by category" className="flex w-max gap-2.5 sm:w-auto sm:flex-wrap">
          {categories.map((c) => {
            const count = c.id === "all" ? cards.length : cards.filter((card) => card.categories.includes(c.id as HubCategory)).length;
            const on = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-[14px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                  on
                    ? "border-[#0B2942] bg-[#0B2942] text-white shadow-[0_10px_24px_-12px_rgba(11,41,66,0.8)]"
                    : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
                }`}
              >
                {c.label}
                <span className={`rounded-full px-2 py-0.5 text-[11.5px] ${on ? "bg-white/15 text-white" : "bg-[#0B2942]/[0.06] text-[#5B6B7B]"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>
      <p aria-live="polite" className="mt-5 text-[13.5px] text-[#5B6B7B]">
        Showing {visible.length} {visible.length === 1 ? "experience" : "experiences"}
        {active !== "all" && <> in {activeLabel}</>}
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const shown = visible.includes(card);
          return (
            <li key={card.id} hidden={!shown} className="min-w-0">
              <Reveal delay={(visible.indexOf(card) % 3) * 90} className="h-full">
                <ExperienceCard card={card} />
              </Reveal>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function ExperienceCard({ card }: { card: HubCard }) {
  const AircraftIcon = card.aircraft === "Helicopter" ? HelicopterIcon : Plane;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white ring-1 ring-[#0B2942]/[0.07] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.55)] motion-reduce:transform-none">
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none">
          <PageImageFill image={card.image} sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071421]/70 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#071421]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          <AircraftIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {card.aircraft}
        </span>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-white">
          <MapPin className="h-3.5 w-3.5 text-[#F4A300]" aria-hidden="true" />
          {card.region}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${SERIF} text-[24px] font-medium leading-tight text-[#0B2942]`}>{card.title}</h3>
        <p className="mt-3 text-[14.5px] leading-6 text-[#5B6B7B]">{card.text}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Experience highlights">
          {card.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#F4A300]/10 px-3 py-1 text-[12px] font-medium text-[#8A5A00]">
              {t}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid gap-2.5 border-t border-[#0B2942]/[0.08] pt-5 text-[13.5px]">
          <Fact icon={<MapPin className="h-3.5 w-3.5" />} label="From" value={card.from} />
          <Fact icon={<Clock className="h-3.5 w-3.5" />} label="Duration" value={card.duration} />
          <Fact icon={<HelicopterIcon className="h-3.5 w-3.5" />} label="Landing" value={card.landing} />
        </dl>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="text-[13px] font-semibold text-[#0B2942]">{card.price}</p>
          <div className="flex items-center gap-2">
            {card.href ? (
              <>
                <EnquireButton
                  tourType={card.enquiryType}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-[13.5px] font-semibold text-[#5B6B7B] transition-colors hover:text-[#0B2942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F4A300]"
                >
                  Enquire
                </EnquireButton>
                <Link
                  href={card.href}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-[#0B2942] px-5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
                >
                  Explore Tour
                  <span className="sr-only">: {card.title}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </>
            ) : (
              <EnquireButton
                tourType={card.enquiryType}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-[#F4A300] px-5 text-[13.5px] font-semibold text-[#0C1D30] transition-colors hover:bg-[#FFB524] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2942]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Enquire Now
              </EnquireButton>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[18px_76px_1fr] items-start gap-1.5">
      <span className="mt-0.5 text-[#C98500]" aria-hidden="true">
        {icon}
      </span>
      <dt className="text-[#5B6B7B]">{label}</dt>
      <dd className="font-medium text-[#0B2942]">{value}</dd>
    </div>
  );
}
