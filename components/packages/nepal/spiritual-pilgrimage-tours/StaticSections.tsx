import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { contactInfo } from "@/lib/navigation-data";
import type { IconName, PageImage } from "@/components/activities/experience/types";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";

export function BestTime({ items }: { items: { name: string; text: string; icon: IconName; image: PageImage }[] }) {
  return (
    <section aria-labelledby="best-time-title" className="bg-[#F8F6F1] py-20 sm:py-24 lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="best-time-title"
            eyebrow="Best Time"
            title="When Should You Begin Your Yatra?"
            intro="Timing varies by destination. Valley temples welcome pilgrims through the year; Himalayan shrines need careful seasonal planning."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <li key={b.name}>
              <Reveal delay={i * 80} className="group h-full overflow-hidden rounded-[24px] bg-white ring-1 ring-[#0B2942]/[0.06]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <PageImageFill image={b.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C98500]">
                    <PageIcon name={b.icon} className="h-4 w-4" />
                    Timing
                  </p>
                  <h3 className={`${SERIF} mt-2 text-[22px] text-[#0B2942]`}>{b.name}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#4A5B6C]">{b.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PracticalInformation({ items }: { items: { title: string; text: string; icon: IconName }[] }) {
  return (
    <section aria-labelledby="practical-title" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="practical-title" eyebrow="Before You Travel" title="Practical Travel Information" intro="A little preparation makes a pilgrimage smoother and more respectful." />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 4) * 60} className="group h-full rounded-[22px] bg-[#F8F6F1] p-5 ring-1 ring-[#0B2942]/[0.05] transition-colors hover:bg-white hover:ring-[#F4A300]/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2942] text-[#F4A300] transition-transform group-hover:-translate-y-0.5">
                  <PageIcon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-[#0B2942]">{p.title}</h3>
                <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-3 rounded-[22px] border border-[#0B2942]/10 p-5 sm:grid-cols-2">
          {[contactInfo.nepal, contactInfo.india].map((c) => (
            <div key={c.label} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-[#0B2942]">
              <span className="font-semibold">Karvaahh {c.city}</span>
              <a href={c.phoneHref} className="inline-flex items-center gap-1.5 hover:underline">
                <Phone className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
                {c.phone}
              </a>
              <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                <Mail className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
                {c.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyKarvaahh({ items }: { items: { title: string; text: string; icon: IconName }[] }) {
  return (
    <section aria-labelledby="why-title" className="relative isolate overflow-hidden bg-[#0B2942] py-20 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(244,163,0,0.12)_0%,transparent_65%)]" />
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="why-title" eyebrow="Why Karvaahh" title="Your Pilgrimage. Thoughtfully Planned." intro="Karvaahh – Live to Travel plans spiritual journeys across Nepal and India around your faith, family and pace." dark />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={(i % 3) * 80} className="group h-full rounded-[22px] border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-[#F4A300]/40 hover:bg-white/[0.08]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4A300]/15 text-[#F4A300] ring-1 ring-[#F4A300]/30">
                  <PageIcon name={w.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-[14px] leading-6 text-white/70">{w.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
