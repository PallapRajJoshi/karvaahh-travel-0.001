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
import { CATEGORIES, DESTINATIONS, ERAS, EXPERIENCES, FAQS, FEATURED_PACKAGES, GUIDE, ITINERARIES, KV_MONUMENT_ZONES, PAGE_TITLE, RELATED, TOUR_TYPES, UNESCO_THEMES } from "@/data/historical-heritage/content";
import * as I from "@/data/historical-heritage/images";
import { destinationById } from "@/data/pilgrimage/destinations";
import { packageById } from "@/data/pilgrimage/packages";
import HeritageExplorer from "./HeritageExplorer";
import HeritageHero from "./HeritageHero";
import { ArchitecturalEras, HeritageExperiences, HeritageItineraries, HeritagePackages, TravelGuide, UnescoLegacy, type ResolvedHeritagePackage } from "./sections";
import { buildHeritageStructuredData } from "./structured-data";

const BOOKING: ResolvedBooking = {
  destination: "Nepal historical & heritage tour",
  departures: ["Kathmandu", "Gorakhpur", "Sunauli", "Raxaul", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: TOUR_TYPES,
  defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom heritage journey", message: "We would like to plan a historical and heritage tour in Nepal." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Journey style" },
};

/**
 * Nepal Historical & Heritage Tours. Content lives in
 * data/historical-heritage; packages are reused from the Nepal
 * pilgrimage collection, so nothing is offered here that is not
 * already a Karvaahh product.
 */
export default function HistoricalHeritagePage() {
  const destinations = resolveImages(DESTINATIONS.filter((d) => d.active));
  const eras = resolveImages(ERAS);
  const experiences = resolveImages(EXPERIENCES);
  const itineraries = resolveImages(ITINERARIES);

  const packages: ResolvedHeritagePackage[] = resolveImages(
    FEATURED_PACKAGES.flatMap((ref) => {
      const p = packageById(ref.id);
      if (!p) return [];
      const names = p.destinations.map((id) => destinationById(id)?.name).filter((n): n is string => Boolean(n));
      return [{ p, names, highlights: ref.highlights, tourType: ref.tourType }];
    }),
  );

  const unescoCount = destinations.filter((d) => d.unesco).length;

  return (
    <>
      {buildHeritageStructuredData(destinations, packages.map((x) => x.p), FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Nepal Historical & Heritage Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <HeritageHero
              background={I.patanSquare}
              frames={[
                { image: I.nyatapola, caption: "Nyatapola, Bhaktapur" },
                { image: I.nuwakot, caption: "Nuwakot Durbar" },
                { image: I.raniMahal, caption: "Rani Mahal, Palpa" },
              ]}
              stats={[`${destinations.length} historic destinations`, `${unescoCount} sites within UNESCO properties`, "Customised heritage itineraries"]}
            />
            <HeliTrustBar />
            <HeritageExplorer destinations={destinations} categories={CATEGORIES} />
            <UnescoLegacy zones={KV_MONUMENT_ZONES} themes={UNESCO_THEMES} valleyImage={I.patanPalace} lumbiniImage={I.mayaDevi} />
            <ArchitecturalEras items={eras} />
            <HeritagePackages items={packages} />
            <HeritageExperiences items={experiences} />
            <TravelGuide guide={GUIDE} />
            <HeritageItineraries items={itineraries} />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Walk Through Nepal's History With Karvaahh",
                  text: "From the royal squares of the Kathmandu Valley to the Buddha's birthplace at Lumbini and the hilltop palaces of Gorkha and Nuwakot — tell us what fascinates you and we will plan the journey around it.",
                  image: I.patanGolden,
                  animated: true,
                  primaryLabel: "Explore Heritage Tours",
                  primaryHref: "#packages",
                  quoteLabel: "Customize Your Heritage Tour",
                  quoteHref: "/contact",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a historical and heritage tour in Nepal.",
                  quoteSubject: "Nepal historical & heritage tour enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: resolveImages(RELATED), labels: { related: "Continue Exploring", relatedTitle: "Related Experiences" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Heritage Nepal", mobileTitle: "Plan Your Heritage Tour", desktop: "Plan Your Heritage Trip", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
