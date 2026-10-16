import { ArrowRight, Info, Plane } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "../everest/Sources";
import { AirlineLink, VerifiedPill, km } from "./shared";
import type { DomesticRoute, RouteDirectoryData } from "./types";

const COLUMNS = ["Route", "Airlines (official sites)", "Service", "Approx. time", "Distance", "Status"];

/** Hub cards, tourism gateways and the route table (table on desktop, cards on mobile). */
export default function RouteDirectory({ data }: { data: RouteDirectoryData }) {
  return (
    <section id="routes" aria-labelledby="routes-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading id="routes-title" eyebrow="Route Directory" title={data.title} intro={data.intro} />
          </Reveal>
          <Reveal delay={100}>
            <VerifiedPill date={data.verified} />
          </Reveal>
        </div>

        {/* Major hubs */}
        <h3 className={`${SERIF} mt-14 text-[24px] font-medium text-[#0B2942] sm:text-[28px]`}>Major city hubs</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.hubs.map((h, i) => (
            <li key={h.code}>
              <Reveal delay={(i % 4) * 60} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[22px] bg-gradient-to-br from-[#123653] via-[#0B2942] to-[#071421] p-6 text-white ring-1 ring-white/5 transition-transform duration-300 hover:-translate-y-1">
                  <Plane className="absolute -right-3 -top-3 h-24 w-24 rotate-45 text-white/[0.04] transition-transform duration-500 group-hover:translate-x-2" aria-hidden="true" />
                  <p className="font-mono text-[34px] font-semibold leading-none tracking-[0.06em] text-[#F4A300]">{h.code}</p>
                  <h4 className={`${SERIF} mt-3 text-[22px] font-medium`}>{h.city}</h4>
                  <p className="mt-0.5 text-[12px] text-white/55">{h.airport}</p>
                  <p className="mt-3 text-[14px] leading-6 text-white/75">{h.text}</p>
                  {h.connects.length > 0 && (
                    <p className="mt-4 flex flex-wrap items-center gap-1.5 text-[11.5px]" aria-label={`Example nonstop routes from ${h.city}`}>
                      {h.connects.map((c) => (
                        <span key={c} className={`rounded-full px-2.5 py-1 font-mono tracking-wide ${c === "KTM" ? "bg-[#F4A300]/20 text-[#F4A300]" : "bg-white/10 text-white/80"}`}>
                          {c}
                        </span>
                      ))}
                    </p>
                  )}
                  {h.note && <p className="mt-3 text-[12px] leading-5 text-white/50">{h.note}</p>}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Tourism gateways */}
        <h3 className={`${SERIF} mt-14 text-[24px] font-medium text-[#0B2942] sm:text-[28px]`}>Tourism & regional gateways</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.gateways.map((g, i) => (
            <li key={g.code}>
              <Reveal delay={(i % 4) * 50} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-[18px] bg-[#F8F6F1] p-4 ring-1 ring-[#0B2942]/[0.06]">
                  <span className="rounded-xl bg-[#0B2942] px-2.5 py-2 font-mono text-[14px] font-semibold tracking-wide text-[#F4A300]">{g.code}</span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-[#0B2942]">{g.city}</p>
                    <p className="text-[13px] leading-5 text-[#5B6B7B]">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Route table */}
        <h3 className={`${SERIF} mt-16 text-[24px] font-medium text-[#0B2942] sm:text-[28px]`}>Popular domestic routes</h3>

        <Reveal className="mt-6 hidden lg:block">
          <div className="overflow-hidden rounded-[26px] ring-1 ring-[#0B2942]/[0.08]">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Popular domestic routes in India with airlines, approximate flight time and distance</caption>
              <thead className="bg-[#0B2942] text-white">
                <tr>
                  {COLUMNS.map((c, i) => (
                    <th key={c} scope="col" className={`px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${i === 0 ? "text-[#F4A300]" : "text-white/80"}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.routes.map((r) => (
                  <tr key={`${r.from.code}-${r.to.code}`} className="border-t border-[#0B2942]/[0.07] align-top transition-colors odd:bg-white even:bg-[#F8F6F1]/70 hover:bg-[#FFF7E6]">
                    <th scope="row" className="px-5 py-4">
                      <RouteLabel route={r} />
                    </th>
                    <td className="px-5 py-4 text-[13.5px] leading-6">
                      <span className="flex flex-wrap gap-x-3 gap-y-1">
                        {r.airlines.map((a) => (
                          <AirlineLink key={a.name} airline={a} />
                        ))}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[13.5px] text-[#4A5B6C]">{r.service}</td>
                    <td className="px-5 py-4 text-[13.5px] font-semibold text-[#0B2942]">{r.duration}</td>
                    <td className="px-5 py-4 text-[13.5px] text-[#4A5B6C]">{km(r.distanceKm)}</td>
                    <td className="px-5 py-4 text-[13px] leading-5 text-[#4A5B6C]">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
          {data.routes.map((r) => (
            <li key={`${r.from.code}-${r.to.code}`} className="rounded-[20px] bg-[#F8F6F1] p-5 ring-1 ring-[#0B2942]/[0.06]">
              <RouteLabel route={r} />
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
                <Item label="Approx. time" value={r.duration} strong />
                <Item label="Distance" value={km(r.distanceKm)} />
                <Item label="Service" value={r.service} />
                <Item label="Status" value={r.status} />
              </dl>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5B6B7B]">Airlines</p>
              <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[13.5px]">
                {r.airlines.map((a) => (
                  <AirlineLink key={a.name} airline={a} />
                ))}
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 space-y-2.5">
          {data.notes.map((n) => (
            <li key={n.slice(0, 40)} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
              <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
              {n}
            </li>
          ))}
        </ul>
        <Sources sources={data.sources} className="mt-4" />
      </div>
    </section>
  );
}

function RouteLabel({ route }: { route: DomesticRoute }) {
  return (
    <span className="block">
      <span className="flex items-center gap-2 text-[15px] font-semibold text-[#0B2942]">
        {route.from.city}
        <ArrowRight className="h-3.5 w-3.5 text-[#C98500]" aria-label="to" />
        {route.to.city}
      </span>
      <span className="mt-0.5 block font-mono text-[12px] tracking-wide text-[#5B6B7B]">
        {route.from.code} – {route.to.code}
      </span>
    </span>
  );
}

function Item({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5B6B7B]">{label}</dt>
      <dd className={`mt-0.5 leading-5 ${strong ? "font-semibold text-[#0B2942]" : "text-[#4A5B6C]"}`}>{value}</dd>
    </div>
  );
}
