import { ArrowUpRight, CalendarRange, MessageCircle, ShieldCheck } from "lucide-react";
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
import {
  CONDITIONAL_NOTE,
  DESTINATIONS,
  FAQS,
  IMAGES,
  ITINERARY,
  PACKAGES,
  PAGE_PATH,
  PAGE_TITLE,
  PREPARATION,
  SEASONS,
  SERVICES,
} from "@/data/garhwal-kumaon/content";
import { CircuitHero, ItineraryTabs, PackageChooser } from "./interactive";
import { BTN_GOLD, BTN_LINE } from "./styles";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const WHATSAPP_MESSAGE = "Hello Karvaahh, I'd like to plan the Garhwal & Kumaon Grand Himalayan Circuit.";

const BOOKING: ResolvedBooking = {
  destination: PAGE_TITLE,
  departures: ["Delhi", "Haridwar", "Dehradun", "Rishikesh", "Kathgodam", "Kathmandu", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [PAGE_TITLE, ...PACKAGES.map((p) => p.title), "Garhwal only", "Kumaon only"],
  defaults: { date: "", travelers: "2 Adults", departure: "Delhi", tourType: PAGE_TITLE, message: "We would like to plan the Garhwal & Kumaon circuit." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Journey" },
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
      "@type": "ItemList",
      name: `${PAGE_TITLE} — Karvaahh journeys`,
      itemListElement: PACKAGES.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristTrip", name: p.title, description: p.text, provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL }, url: `${url}#package-${p.id}` },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];
}

/**
 * Karvaahh Specials — Garhwal & Kumaon Grand Himalayan Circuit.
 * Content lives in data/garhwal-kumaon; enquiries use the shared booking
 * dialog and site-wide WhatsApp number.
 */
export default function GarhwalKumaonPage() {
  const destinations = resolveImages(DESTINATIONS);
  const packages = resolveImages(PACKAGES);

  return (
    <>
      {structuredData().map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle={PAGE_TITLE}>
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <CircuitHero background={resolveImages(IMAGES.hero)} />

            {/* Introduction + destination mosaic */}
            <section id="introduction" aria-labelledby="intro-title" className={`${SECTION} bg-[#FBFAF7]`}>
              <div className={CONTAINER}>
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
                  <Reveal>
                    <SectionHeading id="intro-title" eyebrow="Two Regions, One Journey" title="From the Char Dham to the Panchachuli Peaks" />
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="text-[16px] leading-8 text-[#4A5B6B]">
                      This circuit links Garhwal&apos;s pilgrimage routes and high Himalayan valleys — the sources of the Yamuna and Ganga, Kedarnath, Badrinath and the
                      meadows of Chopta and Auli — with Kumaon&apos;s lake towns, oak forests, stone temples and remote villages on the edge of the Tibetan frontier.
                    </p>
                  </Reveal>
                </div>

                <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {destinations.map((d, i) => (
                    <li key={d.name} className={i === 0 || i === 5 ? "sm:col-span-2" : ""}>
                      <Reveal delay={(i % 4) * 80} className="h-full">
                        <a
                          href={`#itinerary-${d.region}`}
                          className="group relative block aspect-[4/5] overflow-hidden bg-[#071421] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A96E] sm:aspect-auto sm:h-[340px]"
                        >
                          <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]">
                            <PageImageFill image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                          </div>
                          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/95 via-[#071421]/35 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                            <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#E3CFA4]">
                              {d.region === "garhwal" ? "Garhwal" : "Kumaon"}
                              {d.optional && " · Optional"}
                            </p>
                            <h3 className={`${SERIF} mt-1 flex items-center gap-1.5 text-[22px] font-medium leading-tight`}>
                              {d.name}
                              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                            </h3>
                            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/75">{d.text}</p>
                          </div>
                        </a>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Packages + experience chooser */}
            <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-[#F3F5F7]`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading
                    id="packages-title"
                    eyebrow="Featured Journeys"
                    title="Three Ways to Travel the Circuit"
                    intro="Each journey follows the same grand route through Garhwal and Kumaon, shaped around a different kind of traveller. All are private and fully customizable."
                  />
                </Reveal>
                <PackageChooser packages={packages} />
              </div>
            </section>

            {/* Itinerary */}
            <section id="itinerary" aria-labelledby="itinerary-title" className={`${SECTION} relative bg-[#FBFAF7]`}>
              <span id="itinerary-garhwal" className="absolute top-0 scroll-mt-[120px] md:scroll-mt-[160px]" aria-hidden="true" />
              <span id="itinerary-kumaon" className="absolute top-0 scroll-mt-[120px] md:scroll-mt-[160px]" aria-hidden="true" />
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading
                    id="itinerary-title"
                    eyebrow="Sample Itinerary"
                    title="The Grand Circuit, Day by Day"
                    intro="A representative 28-day route. Every itinerary is customized, and actual timings depend on road, weather and trail conditions on the day."
                  />
                </Reveal>
                <ItineraryTabs itinerary={ITINERARY} />
              </div>
            </section>

            {/* Seasons & responsible planning */}
            <section id="seasons" aria-labelledby="seasons-title" className={`${SECTION} bg-[#071421] text-white`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading id="seasons-title" dark eyebrow="When to Travel" title="Seasons & Responsible Planning" />
                </Reveal>
                <ol className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                  {SEASONS.map((s, i) => (
                    <li key={s.title} className="bg-[#071421] p-6">
                      <Reveal delay={i * 80}>
                        <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
                          <CalendarRange className="h-4 w-4" aria-hidden="true" />
                          {s.months}
                        </p>
                        <h3 className={`${SERIF} mt-3 text-[22px] font-medium`}>{s.title}</h3>
                        <p className="mt-2 text-[14px] leading-6 text-white/70">{s.text}</p>
                      </Reveal>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-[860px] text-[14px] leading-6 text-white/60">{CONDITIONAL_NOTE}</p>

                <Reveal className="mt-12 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className={`${SERIF} flex items-center gap-2 text-[24px] font-medium`}>
                      <ShieldCheck className="h-5 w-5 text-[#C9A96E]" aria-hidden="true" />
                      Before You Travel
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-white/65">Temple access and remote valleys are never guaranteed — preparation keeps the journey flexible and safe.</p>
                  </div>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {PREPARATION.map((p) => (
                      <li key={p} className="flex items-start gap-3 border-b border-white/10 pb-3 text-[14.5px] text-white/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A96E]" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>

            {/* Why Karvaahh */}
            <section id="why-karvaahh" aria-labelledby="why-title" className={`${SECTION} bg-[#FBFAF7]`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading id="why-title" center eyebrow="Why Travel with Karvaahh" title="Planned Around You, Region by Region" />
                </Reveal>
                <ol className="mt-12 grid gap-px overflow-hidden border border-[#0B2942]/10 bg-[#0B2942]/10 sm:grid-cols-2 lg:grid-cols-5">
                  {SERVICES.map((s, i) => (
                    <li key={s.title} className="bg-white p-6">
                      <Reveal delay={i * 70}>
                        <span className={`${SERIF} text-[28px] text-[#C9A96E]`}>0{i + 1}</span>
                        <h3 className="mt-3 text-[15.5px] font-semibold text-[#0B2942]">{s.title}</h3>
                        <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{s.text}</p>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />

            {/* Enquiry */}
            <section id="enquire" aria-labelledby="enquire-title" className="relative isolate scroll-mt-[100px] overflow-hidden bg-[#071421] py-24 text-white md:scroll-mt-[144px] lg:py-32">
              <div className="absolute inset-0 -z-10 opacity-40">
                <PageImageFill image={resolveImages(IMAGES.cta)} sizes="100vw" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(7,20,33,0.55)_0%,rgba(7,20,33,0.95)_75%)]" />
              <Reveal className="mx-auto w-full max-w-[820px] px-5 text-center sm:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C9A96E]">Karvaahh Tours &amp; Travels · Live to Travel</p>
                <h2 id="enquire-title" className={`${SERIF} mt-5 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[52px]`}>
                  Your Himalayan Journey Starts Here
                </h2>
                <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
                  Tell us your travel dates, preferred experiences and group size. Karvaahh will help you plan a personalized Garhwal and Kumaon journey.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <OpenBookingButton prefill={{ tourType: PAGE_TITLE }} className={BTN_GOLD}>
                    Plan My Journey
                  </OpenBookingButton>
                  <a href={CONTACT.whatsappHref(WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className={BTN_LINE}>
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Contact on WhatsApp
                  </a>
                </div>
                <p className="mt-5 text-[13px] text-white/55">
                  Or call <a href={CONTACT.phoneHref} className="underline decoration-[#C9A96E] underline-offset-4 hover:text-white">{CONTACT.phoneDisplay}</a>
                </p>
              </Reveal>
            </section>
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Garhwal & Kumaon", mobileTitle: "Plan Your Trip", desktop: "Plan My Journey", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
