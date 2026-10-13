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
import { DESTINATIONS, ETIQUETTE, EXPERIENCES, FAQS, FEATURED_PACKAGES, ITINERARIES, PAGE_TITLE, RELATED, SEASONS, TOUR_TYPES } from "@/data/festival-cultural/content";
import { activeFestivals } from "@/data/festival-cultural/festivals";
import * as I from "@/data/festival-cultural/images";
import { destinationById } from "@/data/pilgrimage/destinations";
import { packageById } from "@/data/pilgrimage/packages";
import FestivalExplorer from "./FestivalExplorer";
import FestivalHero from "./FestivalHero";
import { BestTime, CulturalDestinations, CulturalExperiences, CulturalPackages, Etiquette, FestivalCalendar, ItineraryConcepts, type ResolvedCulturalPackage } from "./sections";
import { buildFestivalStructuredData } from "./structured-data";

const BOOKING: ResolvedBooking = {
  destination: "Nepal festival & cultural tour",
  departures: ["Kathmandu", "Gorakhpur", "Sunauli", "Raxaul", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: TOUR_TYPES,
  defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom cultural journey", message: "We would like to plan a festival or cultural tour in Nepal." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Journey style" },
};

/**
 * Nepal Festival & Cultural Tours. Content lives in data/festival-cultural;
 * packages are reused from the Nepal pilgrimage collection, so nothing is
 * offered here that is not already a Karvaahh product.
 */
export default function FestivalCulturalPage() {
  const festivals = resolveImages(activeFestivals());
  const destinations = resolveImages(DESTINATIONS.filter((d) => d.active));
  const experiences = resolveImages(EXPERIENCES);
  const itineraries = resolveImages(ITINERARIES);

  const packages: ResolvedCulturalPackage[] = resolveImages(
    FEATURED_PACKAGES.flatMap((ref) => {
      const p = packageById(ref.id);
      if (!p) return [];
      const names = p.destinations.map((id) => destinationById(id)?.name).filter((n): n is string => Boolean(n));
      return [{ p, names, highlights: ref.highlights, tourType: ref.tourType }];
    }),
  );

  return (
    <>
      {buildFestivalStructuredData(destinations, packages.map((x) => x.p), FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Nepal Festival & Cultural Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <FestivalHero
              background={I.krishnaMandir}
              frames={[
                { image: I.courtyardDance, caption: "Living traditions, Kathmandu" },
                { image: I.pashupatiAarati, caption: "Evening aarati, Pashupatinath" },
                { image: I.chhath, caption: "Chhath offerings at dusk" },
              ]}
            />
            <HeliTrustBar />
            <FestivalExplorer festivals={festivals} />
            <CulturalDestinations items={destinations} />
            <CulturalExperiences items={experiences} />
            <CulturalPackages items={packages} />
            <FestivalCalendar festivals={festivals} />
            <Etiquette items={ETIQUETTE} image={I.swayambhuHill} />
            <BestTime seasons={SEASONS} festivals={festivals} />
            <ItineraryConcepts items={itineraries} />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Celebrate Nepal With Karvaahh",
                  text: "From lamp-lit Tihar evenings to chariot festivals in the Kathmandu Valley, Mithila art in Janakpur and Tharu dances in the Terai — tell us what you would love to experience and we will plan the journey around it.",
                  image: I.janakiNight,
                  animated: true,
                  primaryLabel: "Explore Cultural Tours",
                  primaryHref: "#packages",
                  quoteLabel: "Customize Your Cultural Tour",
                  quoteHref: "/contact",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a festival or cultural tour in Nepal.",
                  quoteSubject: "Nepal festival & cultural tour enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: resolveImages(RELATED), labels: { related: "Continue Exploring", relatedTitle: "Related Experiences" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Cultural Nepal", mobileTitle: "Plan Your Cultural Tour", desktop: "Plan Your Festival Trip", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
