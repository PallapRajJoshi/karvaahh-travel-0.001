import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarRange, Check, Clock, Info, MapPin, MessageCircle, Mountain, Plane } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import Reveal from "@/components/shared/Reveal";
import { BookingProvider, OpenBookingButton } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { BRAND_NAME, CONTACT, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import { BTN_GOLD, BTN_LINE, BTN_NAVY, FOCUS } from "@/components/packages/garhwal-kumaon/styles";
import {
  DIMENSIONS,
  FAQS,
  GATEWAYS,
  IMAGES,
  EXTENSIONS,
  ITINERARY,
  ITINERARY_BADGES,
  ITINERARY_NOTICE,
  PAGE_PATH,
  PAGE_TITLE,
  PRACTICAL,
  REGIONS,
  RELATED,
  ROAD_NOTE,
  SEASON_NOTE,
  SEASONS,
  SERVICES,
  STYLES,
} from "@/data/all-nepal-circuit/content";
import { CircuitHero, ItineraryTimeline } from "./interactive";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const CARD_IMG = "absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05] motion-reduce:transition-none";
const WHATSAPP_MESSAGE = "Hello Karvaahh, I'd like to plan the All Nepal Adventure Circuit.";

const BOOKING: ResolvedBooking = {
  destination: PAGE_TITLE,
  departures: ["Kathmandu", "Pokhara", "Nepalgunj", "Bhairahawa (via Sunauli)", "Birgunj (via Raxaul)", "Mahendranagar (via Banbasa)", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [PAGE_TITLE, ...STYLES.map((s) => s.title), "Multiple regions — help me choose"],
  defaults: {
    date: "",
    travelers: "2 Adults",
    departure: "Kathmandu",
    tourType: PAGE_TITLE,
    message: "Interests (adventure, culture, spirituality, wildlife, multiple regions) and any other requirements:",
  },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Arrival gateway", tourType: "Journey" },
};

function structuredData() {
  const url = pageUrl(PAGE_PATH);
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
        { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: PAGE_TITLE,
      description: "A customizable multi-region Nepal journey across the Himalayas, remote western Nepal, Mustang, Kathmandu Valley, Chitwan and Lumbini.",
      url,
      touristType: ["Adventure travellers", "Trekkers", "Cultural travellers", "Pilgrims", "Wildlife enthusiasts"],
      provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL },
      itinerary: {
        "@type": "ItemList",
        itemListElement: ITINERARY.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: `Day ${s.day}: ${s.title}` })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];
}

/**
 * Karvaahh Specials — All Nepal Adventure Circuit.
 * Content lives in data/all-nepal-circuit; enquiries use the shared booking
 * dialog (sent via WhatsApp) and the site-wide contact number.
 */
export default function AllNepalCircuitPage() {
  const dimensions = resolveImages(DIMENSIONS);
  const regions = resolveImages(REGIONS);
  const styles = resolveImages(STYLES);
  const extensions = resolveImages(EXTENSIONS);

  return (
    <>
      {structuredData().map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle={PAGE_TITLE}>
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#102A43] antialiased">
            <CircuitHero background={resolveImages(IMAGES.hero)} />

            {/* Journey introduction */}
            <section id="introduction" aria-labelledby="intro-title" className={`${SECTION} bg-white`}>
              <div className={CONTAINER}>
                <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                  <Reveal>
                    <SectionHeading id="intro-title" eyebrow="A Flagship Journey" title="Experience the Many Faces of Nepal" />
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="text-[16px] leading-8 text-[#41556A]">
                      The All Nepal Adventure Circuit is a flagship, customizable multi-region journey — a framework you shape, not a fixed tour that promises every
                      remote corner in one go. Choose the regions that matter to you, and we plan realistic routes, transfers and rest days around them.
                    </p>
                  </Reveal>
                </div>

                <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {dimensions.map((d, i) => (
                    <li key={d.title}>
                      <Reveal delay={i * 90} className="h-full">
                        <article className="group h-full overflow-hidden rounded-2xl border border-[#102A43]/10 bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-34px_rgba(16,42,67,0.55)]">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <div className={CARD_IMG}>
                              <PageImageFill image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                            </div>
                            <span className={`${SERIF} absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[16px] text-[#102A43]`}>
                              0{i + 1}
                            </span>
                          </div>
                          <div className="p-5">
                            <h3 className={`${SERIF} text-[21px] font-medium leading-snug text-[#102A43]`}>{d.title}</h3>
                            <p className="mt-2 text-[14.5px] leading-6 text-[#5B6B7B]">{d.text}</p>
                          </div>
                        </article>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Destination highlights */}
            <section id="destinations" aria-labelledby="destinations-title" className={`${SECTION} bg-[#F3F7FA]`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading
                    id="destinations-title"
                    eyebrow="Destination Highlights"
                    title="From the Far West to the Eastern Hills"
                    intro="Pick the regions that inspire you. Some are easy additions; others are remote extensions that deserve their own time."
                  />
                </Reveal>

                <div className="mt-14 space-y-16">
                  {regions.map((r) => (
                    <div key={r.id} aria-labelledby={`region-${r.id}`} role="group">
                      <Reveal className="flex flex-col gap-3 border-b border-[#102A43]/10 pb-5 md:flex-row md:items-end md:justify-between">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1769AA]">{r.label}</p>
                          <h3 id={`region-${r.id}`} className={`${SERIF} mt-1 text-[26px] font-medium leading-tight text-[#102A43] sm:text-[30px]`}>
                            {r.title}
                          </h3>
                        </div>
                        {r.link && (
                          <Link href={r.link.href} className={`group inline-flex items-center gap-1.5 rounded-full text-[14px] font-semibold text-[#1769AA] hover:text-[#102A43] ${FOCUS}`}>
                            {r.link.label}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                        )}
                      </Reveal>
                      {r.note && (
                        <p className="mt-4 flex max-w-[860px] items-start gap-2 text-[14px] leading-6 text-[#41556A]">
                          <Info className="mt-1 h-4 w-4 shrink-0 text-[#D9AD5B]" aria-hidden="true" />
                          {r.note}
                        </p>
                      )}
                      <ul className={`mt-6 grid gap-5 sm:grid-cols-2 ${r.places.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                        {r.places.map((p, i) => (
                          <li key={p.name}>
                            <Reveal delay={i * 80} className="h-full">
                              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(16,42,67,0.06)] transition-shadow duration-500 hover:shadow-[0_26px_50px_-32px_rgba(16,42,67,0.5)]">
                                <div className="relative aspect-[3/2] overflow-hidden">
                                  <div className={CARD_IMG}>
                                    <PageImageFill image={p.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
                                  </div>
                                  {p.tag && (
                                    <span className="absolute left-3 top-3 rounded-full bg-[#102A43]/85 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#E8CB8E]">
                                      {p.tag}
                                    </span>
                                  )}
                                </div>
                                <div className="p-5">
                                  <h4 className="text-[16.5px] font-semibold text-[#102A43]">{p.name}</h4>
                                  <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{p.text}</p>
                                </div>
                              </article>
                            </Reveal>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section id="itinerary" aria-labelledby="itinerary-title" className={`${SECTION} bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F7FA_100%)]`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading
                    id="itinerary-title"
                    center
                    eyebrow="Day-Wise Itinerary"
                    title="Explore Your 30-Day Nepal Adventure"
                    intro="From remote Himalayan lakes and mountain villages to sacred temples, historic cities, and wildlife-rich plains, discover Nepal through a carefully planned, customizable journey."
                  />
                </Reveal>
                <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
                  {ITINERARY_BADGES.map((b, i) => (
                    <li key={b}>
                      <Reveal delay={i * 80}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D9AD5B]/45 bg-white px-4 py-2 text-[12.5px] font-semibold text-[#102A43] shadow-[0_6px_16px_-12px_rgba(16,42,67,0.5)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D9AD5B]" aria-hidden="true" />
                          {b}
                        </span>
                      </Reveal>
                    </li>
                  ))}
                </ul>
                <Reveal delay={200}>
                  <p className="mx-auto mt-6 flex max-w-[760px] items-start justify-center gap-2 text-center text-[13.5px] leading-6 text-[#5B6B7B]">
                    <Info className="mt-1 h-4 w-4 shrink-0 text-[#1769AA]" aria-hidden="true" />
                    {ROAD_NOTE}
                  </p>
                </Reveal>

                <ItineraryTimeline days={resolveImages(ITINERARY)} />

                <Reveal className="mx-auto mt-10 max-w-[980px]">
                  <p role="note" className="flex items-start gap-3 rounded-2xl border border-[#D9AD5B]/40 bg-[#FBF6EC] p-5 text-[14.5px] leading-6 text-[#102A43] sm:p-6">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#A8803A]" aria-hidden="true" />
                    {ITINERARY_NOTICE}
                  </p>
                </Reveal>

                {/* Optional extensions — not part of the standard 30 days */}
                <div className="mt-20">
                  <Reveal>
                    <SectionHeading
                      id="extensions-title"
                      center
                      eyebrow="Optional Extensions"
                      title="Extend Your Himalayan Adventure"
                      intro="These are alternatives or extensions — not stops within the standard 30-day journey. Each needs separate planning, additional days and any applicable permits, so we never combine every remote region into one rushed trip."
                    />
                  </Reveal>
                  <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {extensions.map((x, i) => (
                      <li key={x.title}>
                        <Reveal delay={i * 90} className="h-full">
                          <article className="group h-full overflow-hidden rounded-2xl border border-[#102A43]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D9AD5B]/60 hover:shadow-[0_30px_60px_-34px_rgba(16,42,67,0.55)] motion-reduce:hover:translate-y-0">
                            <div className="relative aspect-[3/2] overflow-hidden">
                              <div className={CARD_IMG}>
                                <PageImageFill image={x.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                              </div>
                              <span className="absolute left-3 top-3 rounded-full bg-[#102A43]/85 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#E8CB8E]">
                                {x.duration}
                              </span>
                            </div>
                            <div className="p-5">
                              <h3 className={`${SERIF} text-[20px] font-medium leading-snug text-[#102A43]`}>{x.title}</h3>
                              <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{x.text}</p>
                            </div>
                          </article>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary CTA */}
                <Reveal className="mt-16">
                  <div className="relative isolate overflow-hidden rounded-3xl bg-[#102A43] px-6 py-12 text-center text-white sm:px-12 sm:py-14">
                    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(23,105,170,0.55)_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(217,173,91,0.18)_0%,transparent_55%)]" />
                    <h3 className={`${SERIF} text-[28px] font-medium leading-tight sm:text-[38px]`}>Ready to Plan Your Nepal Adventure?</h3>
                    <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-7 text-white/75">
                      Customize your travel dates, destinations, preferred transport, and travel style with Karvaahh.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                      <OpenBookingButton prefill={{ tourType: PAGE_TITLE }} className={BTN_GOLD}>
                        Customize This Itinerary
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </OpenBookingButton>
                      <a href={CONTACT.whatsappHref(WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className={BTN_LINE}>
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Contact Karvaahh
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Alternative journey styles */}
            <section id="journey-styles" aria-labelledby="styles-title" className={`${SECTION} bg-[#F3F7FA]`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading
                    id="styles-title"
                    eyebrow="Shorter Journey Styles"
                    title="Three Ways to Focus Your Trip"
                    intro="Less time, or a clear priority? These focused journeys draw on the same destinations. Each is a starting point we tailor with you."
                  />
                </Reveal>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                  {styles.map((s, i) => (
                    <Reveal key={s.title} delay={i * 120} className="h-full">
                      <article aria-labelledby={`style-${i}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#102A43]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D9AD5B]/60 hover:shadow-[0_30px_60px_-34px_rgba(16,42,67,0.55)] motion-reduce:hover:translate-y-0">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <div className={CARD_IMG}>
                            <PageImageFill image={s.image} sizes="(min-width: 1024px) 33vw, 100vw" />
                          </div>
                          <span className="absolute left-4 top-4 rounded-full bg-[#102A43]/85 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#E8CB8E]">
                            Option {i + 1}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 id={`style-${i}`} className={`${SERIF} text-[23px] font-medium leading-tight text-[#102A43]`}>
                            {s.title}
                          </h3>
                          <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-[#5B6B7B]">
                            <div className="flex items-center gap-1.5">
                              <dt className="sr-only">Suggested duration</dt>
                              <Clock className="h-3.5 w-3.5 text-[#D9AD5B]" aria-hidden="true" />
                              <dd>{s.duration}</dd>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <dt className="sr-only">Travel style</dt>
                              <Mountain className="h-3.5 w-3.5 text-[#D9AD5B]" aria-hidden="true" />
                              <dd>{s.level}</dd>
                            </div>
                          </dl>
                          <ul className="mt-4 space-y-2">
                            {s.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2 text-[14px] text-[#102A43]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1769AA]" aria-hidden="true" />
                                {h}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-4 text-[13px] leading-5 text-[#5B6B7B]">{s.note}</p>
                          <div className="mt-auto pt-6">
                            <OpenBookingButton prefill={{ tourType: s.title }} className={BTN_NAVY} ariaLabel={`Enquire about ${s.title}`}>
                              Enquire About This Style
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </OpenBookingButton>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* Gateways */}
            <section id="gateways" aria-labelledby="gateways-title" className={`${SECTION} bg-white`}>
              <div className={`${CONTAINER} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
                <Reveal>
                  <SectionHeading
                    id="gateways-title"
                    eyebrow="Route & Arrival"
                    title="Choose the Right Gateway for Your Journey"
                    intro="The best entry and exit points depend on your chosen destinations, international flights, border formalities and current transport connections. Not every gateway suits every itinerary."
                  />
                </Reveal>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {GATEWAYS.map((g, i) => (
                    <li key={g.name}>
                      <Reveal delay={(i % 2) * 80} className="h-full">
                        <div className="h-full rounded-2xl border border-[#102A43]/10 p-5 transition-colors duration-300 hover:border-[#1769AA]/35">
                          <h3 className="flex items-start gap-2 text-[15.5px] font-semibold text-[#102A43]">
                            {i === 0 || i === 4 || i === 5 ? (
                              <Plane className="mt-0.5 h-4 w-4 shrink-0 text-[#1769AA]" aria-hidden="true" />
                            ) : (
                              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1769AA]" aria-hidden="true" />
                            )}
                            {g.name}
                          </h3>
                          <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{g.text}</p>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Seasons + practical information */}
            <section id="seasons" aria-labelledby="seasons-title" className={`${SECTION} bg-[#102A43] text-white`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading id="seasons-title" dark eyebrow="When to Travel" title="Best Time to Travel" />
                </Reveal>
                <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                  {SEASONS.map((s, i) => (
                    <li key={s.title} className="bg-[#102A43] p-6">
                      <Reveal delay={i * 80}>
                        <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#D9AD5B]">
                          <CalendarRange className="h-4 w-4" aria-hidden="true" />
                          {s.months}
                        </p>
                        <h3 className={`${SERIF} mt-3 text-[22px] font-medium`}>{s.title}</h3>
                        <p className="mt-2 text-[14px] leading-6 text-white/70">{s.text}</p>
                      </Reveal>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-[860px] text-[14px] leading-6 text-white/60">{SEASON_NOTE}</p>

                <div id="practical-info" className="mt-16 border-t border-white/10 pt-12">
                  <Reveal>
                    <h2 className={`${SERIF} text-[28px] font-medium sm:text-[34px]`}>Practical Travel Information</h2>
                  </Reveal>
                  <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                    {PRACTICAL.map((p, i) => (
                      <Reveal key={p.term} delay={(i % 4) * 70}>
                        <dt className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#D9AD5B]">{p.term}</dt>
                        <dd className="mt-2 text-[14.5px] leading-6 text-white/80">{p.text}</dd>
                      </Reveal>
                    ))}
                  </dl>
                </div>
              </div>
            </section>

            {/* Why Karvaahh + related journeys */}
            <section id="why-karvaahh" aria-labelledby="why-title" className={`${SECTION} bg-white`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading id="why-title" center eyebrow="Why Travel with Karvaahh" title="One Journey, Designed Around You" />
                </Reveal>
                <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#102A43]/10 bg-[#102A43]/10 sm:grid-cols-2 lg:grid-cols-3">
                  {SERVICES.map((s, i) => (
                    <li key={s.title} className="bg-white p-6">
                      <Reveal delay={(i % 3) * 70}>
                        <span className={`${SERIF} text-[28px] text-[#D9AD5B]`}>0{i + 1}</span>
                        <h3 className="mt-3 text-[15.5px] font-semibold text-[#102A43]">{s.title}</h3>
                        <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{s.text}</p>
                      </Reveal>
                    </li>
                  ))}
                </ol>

                <Reveal className="mt-12 text-center">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#5B6B7B]">Related Nepal journeys</h3>
                  <ul className="mt-4 flex flex-wrap justify-center gap-2">
                    {RELATED.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          className={`inline-flex min-h-[40px] items-center rounded-full border border-[#102A43]/15 px-4 text-[13.5px] font-medium text-[#102A43] transition-colors hover:border-[#1769AA] hover:text-[#1769AA] ${FOCUS}`}
                        >
                          {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>

            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />

            {/* Enquiry */}
            <section id="enquire" aria-labelledby="enquire-title" className="relative isolate scroll-mt-[100px] overflow-hidden bg-[#102A43] py-24 text-white md:scroll-mt-[144px] lg:py-32">
              <div className="absolute inset-0 -z-10 opacity-45">
                <PageImageFill image={resolveImages(IMAGES.cta)} sizes="100vw" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,42,67,0.55)_0%,rgba(16,42,67,0.95)_75%)]" />
              <Reveal className="mx-auto w-full max-w-[820px] px-5 text-center sm:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D9AD5B]">Karvaahh Tours &amp; Travels · Live to Travel</p>
                <h2 id="enquire-title" className={`${SERIF} mt-5 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[52px]`}>
                  Your Nepal Adventure, Your Way
                </h2>
                <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
                  Tell us when you want to travel, which regions interest you, and what kind of experience you are looking for. Karvaahh can help shape a practical
                  Nepal journey around your priorities.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <OpenBookingButton prefill={{ tourType: PAGE_TITLE }} className={BTN_GOLD}>
                    Customize Your Nepal Tour
                  </OpenBookingButton>
                  <a href={CONTACT.whatsappHref(WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className={BTN_LINE}>
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Contact Karvaahh
                  </a>
                </div>
                <p className="mt-5 text-[13px] text-white/55">
                  Enquiries open in WhatsApp so you can review before sending. Or call{" "}
                  <a href={CONTACT.phoneHref} className="underline decoration-[#D9AD5B] underline-offset-4 hover:text-white">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </Reveal>
            </section>
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "All Nepal Circuit", mobileTitle: "Plan Your Nepal Trip", desktop: "Customize Your Trip", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
