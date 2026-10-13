import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { IconName, PageImage } from "@/components/activities/experience/types";
import type { Collection, ExperiencePanel, GuideTopic, OffbeatDestination } from "@/data/adventure-offbeat/types";

/* ============================================================
   Choose Your Kind of Adventure — editorial bento grid
   ============================================================ */

/** Bento placement per panel (lg, 12-column grid), in data order. */
const BENTO = [
  "lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-0",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-4",
];

export function ExperienceMosaic({ items }: { items: ExperiencePanel[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className="scroll-mt-[100px] bg-[#06111C] py-20 text-white sm:py-24 md:scroll-mt-[144px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            dark
            eyebrow="Ways to Explore"
            title="Choose Your Kind of Adventure"
            intro="Mix and match — a road trip into Mustang with a village homestay, or a lake trek with nights under canvas."
          />
        </Reveal>
        <ul className="mt-12 grid auto-rows-[minmax(300px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[290px]">
          {items.map((x, i) => (
            <li key={x.id} className={`${BENTO[i] ?? "lg:col-span-4"} ${i === 0 ? "sm:col-span-2 lg:col-span-7" : ""}`}>
              <Reveal delay={(i % 4) * 80} className="h-full">
                <ExperienceTile x={x} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExperienceTile({ x }: { x: ExperiencePanel }) {
  const href = x.href ?? (x.filter ? `#explore=${x.filter}` : "#destinations");
  const cta = x.href === "/contact" ? "Plan with us" : x.href ? "Explore" : "See destinations";
  const isRoute = href.startsWith("/");
  const cls =
    "group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[26px] p-6 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] sm:p-7";

  const body = (
    <>
      {x.image ? (
        <>
          <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <PageImageFill image={x.image} sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06111C] via-[#06111C]/45 to-[#06111C]/5" />
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(244,163,0,0.28),transparent_55%),linear-gradient(160deg,#123653,#0B2942_55%,#071421)]" />
      )}
      <div className="relative">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/20 backdrop-blur-md">
          <PageIcon name={x.icon} className="h-5 w-5 text-[#F4A300]" />
        </span>
        <h3 className={`${SERIF} mt-4 text-[25px] font-medium leading-tight sm:text-[27px]`}>{x.title}</h3>
        <p className="mt-2.5 max-w-[520px] text-[14.5px] leading-[1.7] text-white/80">{x.text}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#F4D6A0]">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  return isRoute ? (
    <Link href={href} className={cls}>
      {body}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {body}
    </a>
  );
}

/* ============================================================
   Why Choose Offbeat Nepal
   ============================================================ */

export function WhyOffbeat({ items, image, inset }: { items: readonly { icon: IconName; title: string; text: string }[]; image: PageImage; inset: PageImage }) {
  return (
    <section aria-labelledby="why-title" className="overflow-hidden bg-[#F6F4EE] py-20 sm:py-24 lg:py-28">
      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]`}>
        <Reveal variant="slide-left" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[5/4] lg:aspect-[4/5]">
            <PageImageFill image={image} sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div className="absolute -bottom-8 right-4 hidden w-[44%] overflow-hidden rounded-[22px] border-[6px] border-[#F6F4EE] shadow-[0_30px_60px_-30px_rgba(11,41,66,0.6)] sm:block lg:-right-8">
            <div className="relative aspect-[4/3]">
              <PageImageFill image={inset} sizes="22vw" />
            </div>
          </div>
          <p className="absolute left-4 top-4 rounded-full bg-[#06111C]/60 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm">{image.label}</p>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="why-title"
              eyebrow="Why Offbeat Nepal"
              title="Why Go Beyond the Classic Circuits?"
              intro="Nepal's best-known routes are famous for good reason. Step a little further and the country opens up in ways most visitors never see."
            />
          </Reveal>
          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {items.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={(i % 2) * 90} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-[#0B2942]/[0.08]">
                    <PageIcon name={w.icon} className="h-5 w-5 text-[#C98500]" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#0B2942]">{w.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{w.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Essential Travel Guide + Responsible Adventure Travel
   ============================================================ */

export function TravelGuide({ topics, responsible, image }: { topics: GuideTopic[]; responsible: string[]; image: PageImage }) {
  return (
    <section id="guide" aria-labelledby="guide-title" className="scroll-mt-[100px] bg-white py-20 sm:py-24 md:scroll-mt-[144px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="guide-title" eyebrow="Travel Guide" title="Essential Guide to Adventure Travel in Nepal" intro="The practical things worth knowing before you head off the main trails." />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {topics.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 90} className="h-full">
              <article className="h-full rounded-[26px] bg-[#F6F4EE] p-7 ring-1 ring-[#0B2942]/[0.05] sm:p-8">
                <div className="flex items-center gap-3.5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2942]">
                    <PageIcon name={t.icon} className="h-5 w-5 text-[#F4A300]" />
                  </span>
                  <h3 className={`${SERIF} text-[22px] font-medium leading-tight text-[#0B2942]`}>{t.title}</h3>
                </div>
                <div className="mt-5 space-y-3 text-[14.5px] leading-[1.75] text-[#4A5B6C]">
                  {t.body.map((b) => (
                    <p key={b.slice(0, 32)}>{b}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0B2942] text-white">
            {image.src && <Image src={image.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" style={{ objectPosition: image.objectPosition }} />}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B2942] via-[#0B2942]/90 to-[#0B2942]/60" />
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4A300]/15 ring-1 ring-[#F4A300]/30">
                  <Leaf className="h-5 w-5 text-[#F4A300]" aria-hidden="true" />
                </span>
                <h3 className={`${SERIF} mt-5 text-[28px] font-medium leading-tight sm:text-[34px]`}>Responsible Adventure Travel</h3>
                <p className="mt-3 max-w-[420px] text-[15px] leading-7 text-white/75">
                  Remote places stay special only if we travel lightly. These are the habits we ask every Karvaahh traveller to share.
                </p>
              </div>
              <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {responsible.map((r, i) => (
                  <li key={r} className="flex items-start gap-3 text-[14.5px] leading-6 text-white/85">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-[#F4D6A0]">{i + 1}</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Suggested Adventure Collections
   ============================================================ */

export function Collections({ items, destinations }: { items: Collection[]; destinations: OffbeatDestination[] }) {
  const byId = new Map(destinations.map((d) => [d.id, d]));
  return (
    <section aria-labelledby="collections-title" className="bg-[#F6F4EE] py-20 sm:py-24 lg:py-28">
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading id="collections-title" eyebrow="Curated Collections" title="Suggested Adventure Collections" intro="Short-lists to start from — each name opens its Karvaahh guide." />
          </Reveal>
          <a href="#destinations" className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] hover:text-[#C98500]">
            Browse all destinations <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {items.map((c, i) => {
            const stops = c.destinations.map((id) => byId.get(id)).filter((d): d is OffbeatDestination => Boolean(d));
            if (!stops.length) return null;
            return (
              <li key={c.id} className="w-[82vw] max-w-[380px] shrink-0 snap-start lg:w-auto lg:max-w-none">
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[26px] bg-white ring-1 ring-[#0B2942]/[0.07]">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <PageImageFill image={c.image} sizes="(min-width: 1024px) 33vw, 82vw" />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06111C]/75 to-transparent" />
                      <h3 className={`${SERIF} absolute bottom-4 left-5 right-5 text-[23px] font-medium leading-tight text-white`}>{c.title}</h3>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[14px] leading-6 text-[#5B6B7B]">{c.text}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {stops.map((d) => (
                          <li key={d.id}>
                            <Link
                              href={d.href}
                              className="inline-flex min-h-[36px] items-center gap-1 rounded-full border border-[#0B2942]/12 px-3 text-[12.5px] font-medium text-[#0B2942] transition-colors hover:border-[#0B2942] hover:bg-[#0B2942] hover:text-white"
                            >
                              {d.name}
                              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
