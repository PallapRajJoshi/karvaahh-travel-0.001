import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import ProductCta from "@/components/activities/experience/product/ProductCta";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import RelatedTours from "@/components/activities/experience/product/RelatedTours";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import HeliTrustBar from "@/components/activities/experience/product/HeliTrustBar";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { destinationById } from "@/data/pilgrimage/destinations";
import { packageById } from "@/data/pilgrimage/packages";
import { CATEGORIES, CIRCUITS, EXPERIENCES, FAQS, GUIDE, INDIA_PACKAGES, ITINERARIES, NEPAL_PACKAGES, PAGE_TITLE, PLACES, RELATED } from "@/data/spiritual-pilgrimage/content";
import * as I from "@/data/spiritual-pilgrimage/images";
import type { FeaturedPackage } from "@/data/spiritual-pilgrimage/types";
import SacredExplorer from "./SacredExplorer";
import SpiritualHero from "./SpiritualHero";
import { CUSTOM_ENQUIRY, Circuits, Experiences, Itineraries, Packages, PilgrimageGuide } from "./sections";
import { buildSpiritualStructuredData } from "./structured-data";

const NEPAL_PACKAGES_ANCHOR = "/packages/nepal/spiritual-pilgrimage-tours#packages";

const BOOKING: ResolvedBooking = {
  destination: "Spiritual & pilgrimage tour",
  departures: ["Kathmandu", "Delhi", "Haridwar / Dehradun", "Gorakhpur", "Sunauli", "Raxaul", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: ["Hindu pilgrimage", "Buddhist pilgrimage", "Muktinath yatra", "Multi-destination yatra", "Char Dham Yatra", "Do Dham Yatra", "Haridwar & Rishikesh", "Nepal + India combined", "Custom spiritual journey"],
  defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom spiritual journey", message: "We would like to plan a spiritual or pilgrimage tour." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Pilgrimage" },
};

/**
 * Spiritual & Pilgrimage Tours across Nepal and India. Content lives in
 * data/spiritual-pilgrimage; Nepal packages are reused from the Nepal
 * pilgrimage collection and India packages link to their own pages, so
 * nothing is offered here that is not already a Karvaahh product.
 */
export default function SpiritualPilgrimagePage() {
  const places = resolveImages(PLACES.filter((p) => p.active));

  const nepal: FeaturedPackage[] = NEPAL_PACKAGES.flatMap((ref) => {
    const p = packageById(ref.id);
    if (!p) return [];
    return [
      {
        id: p.id,
        country: "Nepal",
        title: p.title,
        destinations: p.destinations.map((id) => destinationById(id)?.name).filter((n): n is string => Boolean(n)),
        highlights: ref.highlights,
        duration: p.duration,
        transport: p.transport.join(" · "),
        accommodation: p.accommodation,
        meals: p.meals,
        price: p.price,
        image: p.image ?? I.kathmanduValley,
        href: p.href ?? NEPAL_PACKAGES_ANCHOR,
        tourType: ref.tourType,
      },
    ];
  });
  const packages = resolveImages([...nepal, ...INDIA_PACKAGES]);

  return (
    <>
      {buildSpiritualStructuredData(places, packages, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Spiritual & Pilgrimage Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <SpiritualHero
              background={I.mustangMonastery}
              frames={[
                { image: I.pashupatinathAarati, caption: "Evening aarati, Pashupatinath" },
                { image: I.mayaDevi, caption: "Maya Devi Temple, Lumbini" },
                { image: I.kashiAarti, caption: "Ganga Aarti, Varanasi" },
              ]}
              facts={["Hindu & Buddhist sacred sites", "Nepal & India journeys", "Road • Flight • Helicopter options", "Customised itineraries"]}
            />
            <HeliTrustBar />
            <SacredExplorer places={places} categories={CATEGORIES} />
            <Circuits items={resolveImages(CIRCUITS)} />
            <Experiences items={resolveImages(EXPERIENCES)} />
            <Packages items={packages} />
            <PilgrimageGuide items={GUIDE} />
            <Itineraries items={ITINERARIES} />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Begin Your Sacred Journey",
                  text: "From Pashupatinath's riverside aarati to the silence of Lumbini, and from Muktinath's Himalayan sanctuary to the four Dhams of Uttarakhand — tell us where your faith is calling and we will plan the journey around your time, pace and travel style.",
                  image: I.mustangMonastery,
                  animated: true,
                  primaryLabel: "Explore Pilgrimage Tours",
                  primaryHref: "#packages",
                  quoteLabel: "Plan a Custom Pilgrimage",
                  quoteHref: CUSTOM_ENQUIRY,
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a spiritual or pilgrimage tour.",
                  quoteSubject: "Spiritual & pilgrimage tour enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: resolveImages(RELATED), labels: { related: "Continue Your Journey", relatedTitle: "Related Experiences" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Sacred Journeys", mobileTitle: "Plan Your Pilgrimage", desktop: "Plan Your Yatra", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
