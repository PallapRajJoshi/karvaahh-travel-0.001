import Reveal from "@/components/shared/Reveal";
import ParallaxImage from "@/components/activities/experience/ParallaxImage";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import type { DIFFICULTY, PERMITS, SEASONS } from "@/data/trekking/content";
import type { InfoBlock } from "@/data/trekking/types";

function IconCard({ item, dark = false }: { item: InfoBlock; dark?: boolean }) {
  return (
    <div className={`flex h-full gap-4 rounded-[22px] p-5 ${dark ? "bg-white/[0.05] ring-1 ring-white/10" : "bg-white ring-1 ring-[#0B2942]/[0.07]"}`}>
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${dark ? "bg-[#F4A300]/15 text-[#F4A300]" : "bg-[#0B2942] text-[#F4A300]"}`}>
        <PageIcon name={item.icon} className="h-5 w-5" />
      </span>
      <div>
        <h3 className={`text-[16px] font-semibold ${dark ? "text-white" : "text-[#0B2942]"}`}>{item.title}</h3>
        <p className={`mt-1.5 text-[14px] leading-6 ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>{item.text}</p>
      </div>
    </div>
  );
}

export function WhyTrekNepal({ items, image }: { items: InfoBlock[]; image: PageImage }) {
  return (
    <section id="why-nepal" aria-labelledby="why-title" className={`${ANCHOR} ${SECTION_Y} relative overflow-hidden bg-[#071421]`}>
      <div aria-hidden="true" className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[#123653] opacity-60 blur-[120px]" />
      <div className={`${CONTAINER} relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <Reveal>
            <SectionHeading
              id="why-title"
              eyebrow="Why Trek in Nepal?"
              title="The World's Great Walking Country"
              intro="Few places pack so much variety into a single journey on foot — the highest mountains on Earth, living village cultures and landscapes that change by the day."
              dark
            />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 80} className="h-full">
                  <IconCard item={item} dark />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal variant="scale-in">
          <ParallaxImage image={image} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] rounded-[32px] ring-1 ring-white/10 sm:aspect-[4/3] lg:aspect-[4/5]" />
        </Reveal>
      </div>
    </section>
  );
}

const TONE = {
  best: { label: "Popular season", cls: "bg-[#2F8F6B]/10 text-[#22704F]" },
  good: { label: "Lower routes", cls: "bg-[#F4A300]/15 text-[#8A5A00]" },
  care: { label: "Plan carefully", cls: "bg-[#C2562E]/10 text-[#9A3D1E]" },
} as const;

export function BestTime({ seasons, note }: { seasons: typeof SEASONS; note: string }) {
  return (
    <section id="best-time" aria-labelledby="best-time-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="best-time-title" eyebrow="Seasons" title="Best Time to Trek" intro={note} />
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={i * 90} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.08] bg-[#FBFAF7] p-6">
                  <span className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${TONE[s.tone].cls}`}>{TONE[s.tone].label}</span>
                  <h3 className={`${SERIF} mt-5 text-[28px] font-medium text-[#0B2942]`}>{s.name}</h3>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C98500]">{s.months}</p>
                  <p className="mt-4 text-[14px] leading-6 text-[#5B6B7B]">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TrekDifficulty({ levels, note }: { levels: typeof DIFFICULTY; note: string }) {
  return (
    <section id="difficulty" aria-labelledby="difficulty-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
        <Reveal>
          <SectionHeading
            id="difficulty-title"
            eyebrow="Trek Grades"
            title="Choose Your Trek Difficulty"
            intro="Nepal has trails for first-time hikers and seasoned mountain walkers alike. Use these broad levels to find the right starting point."
          />
          <p className="mt-6 text-[13.5px] leading-6 text-[#5B6B7B]">{note}</p>
        </Reveal>
        <ol className="space-y-4">
          {levels.map((l, i) => (
            <li key={l.level}>
              <Reveal delay={i * 90}>
                <div className="flex gap-5 rounded-[22px] bg-white p-5 ring-1 ring-[#0B2942]/[0.07] sm:p-6">
                  <div className="flex shrink-0 flex-col items-center gap-1 pt-1" aria-hidden="true">
                    {[0, 1, 2, 3].map((b) => (
                      <span key={b} className="h-2 w-8 rounded-full" style={{ background: b >= 3 - i ? l.tone : "#E7E1D5" }} />
                    ))}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold" style={{ color: l.tone }}>
                      {l.level}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-6 text-[#5B6B7B]">{l.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PrepareSection({ items, image }: { items: InfoBlock[]; image: PageImage }) {
  return (
    <section id="prepare" aria-labelledby="prepare-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              id="prepare-title"
              eyebrow="Before You Go"
              title="Prepare for Your Adventure"
              intro="Good preparation makes every trail more enjoyable — and safer. Here is what matters most."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[26px]">
              <PageImageFill image={image} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </Reveal>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.title} className={i === items.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <IconCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PermitsAndAccess({ permits, gettingThere }: { permits: typeof PERMITS; gettingThere: InfoBlock[] }) {
  return (
    <section id="permits" aria-labelledby="permits-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
        <Reveal>
          <SectionHeading id="permits-title" eyebrow="Permits" title="Permits and Local Requirements" />
          <p className="mt-5 text-[15.5px] leading-7 text-[#5B6B7B]">{permits.text}</p>
          <p className="mt-5 rounded-[18px] border-l-4 border-[#F4A300] bg-white p-5 text-[14px] leading-6 text-[#0B2942]">{permits.note}</p>
        </Reveal>
        <div>
          <Reveal>
            <h2 id="access-title" className={`${SERIF} text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-[#0B2942] sm:text-[36px]`}>
              Getting to Nepal&apos;s Trekking Regions
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2" aria-labelledby="access-title">
            {gettingThere.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 80} className="h-full">
                  <IconCard item={item} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
