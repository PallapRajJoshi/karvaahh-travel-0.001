import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import "./nepal-heli.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import HeliTrustBar from "@/components/activities/experience/product/HeliTrustBar";
import ProductCta from "@/components/activities/experience/product/ProductCta";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { CONTAINER, SectionHeading } from "@/components/activities/experience/ui";
import Reveal from "@/components/shared/Reveal";
import { HERO_IMAGE, HOW_IT_WORKS, HUB_CATEGORIES, HUB_FAQS, HUB_RELATED, PRIVATE_CHARTER, TRAVEL_INFO, WHY_HELICOPTER } from "@/data/helicopter-tours/nepal-hub";
import { everestDawn, mustangRidgeMonastery } from "@/data/helicopter-tours/images";
import ExperienceExplorer from "./ExperienceExplorer";
import HeliHubHero from "./HeliHubHero";
import { Comparison, FeaturedPackages, HowItWorks, RelatedLinks, TravelInfo, WhyHelicopter } from "./HubSections";
import { hubCards, hubPackages } from "./model";
import { buildHubStructuredData } from "./structured-data";

/**
 * Nepal Helicopter Tours hub (/packages/nepal/helicopter-tours).
 * Copy lives in data/helicopter-tours/nepal-hub.ts; every fact comes from
 * the individual tour data files, so this page never contradicts them.
 */
export default function NepalHelicopterToursPage() {
  const cards = hubCards();
  const packages = hubPackages();

  const booking: ResolvedBooking = {
    destination: "Nepal helicopter tour",
    departures: ["Kathmandu", "Pokhara", "Nepalgunj", "Not sure yet"],
    travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (6+)"],
    tourTypes: [...cards.map((c) => c.enquiryType), "Not sure yet — suggest for me"],
    defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Not sure yet — suggest for me", message: "" },
    sample: false,
    sampleNotice: "",
    labels: { departure: "Departure", tourType: "Experience" },
  };

  return (
    <>
      {buildHubStructuredData(cards, HUB_FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={booking} tourTitle="Nepal Helicopter Tour">
          <Navbar />
          <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <HeliHubHero image={HERO_IMAGE} charterType={PRIVATE_CHARTER.enquiryType} />
            <HeliTrustBar />

            <section id="experiences" aria-labelledby="experiences-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
              <div className={CONTAINER}>
                <Reveal>
                  <SectionHeading
                    id="experiences-title"
                    eyebrow="Explore Nepal from the Air"
                    title="Unforgettable Helicopter Journeys Across Nepal"
                    intro="From the Khumbu to the Annapurna Sanctuary and the sacred heights of Muktinath — every journey is confirmed with the operator for your date, with landings only where weather and permissions allow."
                  />
                </Reveal>
                <ExperienceExplorer cards={cards} categories={HUB_CATEGORIES} />
              </div>
            </section>

            <WhyHelicopter items={WHY_HELICOPTER} image={everestDawn} />
            <FeaturedPackages packages={packages} />
            <HowItWorks steps={HOW_IT_WORKS} />
            <TravelInfo items={TRAVEL_INFO} />
            <Comparison cards={cards} />
            <ProductFaq tour={{ title: "Karvaahh Nepal helicopter tours", faqs: HUB_FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Your Himalayan Flight Awaits",
                  text: "Tell us where you would like to fly — Everest, Annapurna, Muktinath or a private route of your own — and our Nepal team will confirm the itinerary, availability and price with the operator.",
                  image: mustangRidgeMonastery,
                  animated: true,
                  primaryLabel: "Explore Helicopter Tours",
                  primaryHref: "#experiences",
                  quoteLabel: "Contact Our Team",
                  quoteHref: "/contact",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a helicopter tour in Nepal.",
                  quoteSubject: "Nepal helicopter tour enquiry",
                },
              }}
            />
            <RelatedLinks links={HUB_RELATED} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Nepal Helicopter Tours", mobileTitle: "Plan Your Flight", desktop: "Check Availability", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
