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
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import {
  ASSURANCES,
  CUSTOM_ENQUIRY,
  DESTINATIONS,
  EXPERIENCES,
  FAQS,
  FILTERS,
  GUIDE,
  PACKAGES,
  PAGE_TITLE,
  RELATED,
  SAMPLE_ROUTE,
  SEASONS,
  SEASON_NOTE,
  TRAVEL_STYLES,
} from "@/data/jammu-kashmir/content";
import * as I from "@/data/jammu-kashmir/images";
import DestinationExplorer from "./DestinationExplorer";
import JammuKashmirHero from "./JammuKashmirHero";
import { Experiences, Packages, SampleItinerary, Seasons, TravelGuide, WhyKarvaahh } from "./sections";
import { buildJammuKashmirStructuredData } from "./structured-data";

const BOOKING: ResolvedBooking = {
  destination: "Jammu & Kashmir tour",
  departures: ["Srinagar", "Jammu", "Delhi", "Katra", "Kathmandu", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [
    "Kashmir family holiday",
    "Kashmir honeymoon",
    "Srinagar, Gulmarg & Pahalgam tour",
    "Kashmir scenic & photography tour",
    "Kashmir winter snow holiday",
    "Jammu & Vaishno Devi pilgrimage",
    "Amarnath & Vaishno Devi Yatra",
    "Customized Jammu & Kashmir tour",
  ],
  defaults: { date: "", travelers: "2 Adults", departure: "Srinagar", tourType: "Customized Jammu & Kashmir tour", message: "We would like to plan a Jammu & Kashmir tour." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Journey" },
};

/**
 * Jammu & Kashmir Tour Packages. Content lives in data/jammu-kashmir. The
 * Amarnath & Vaishno Devi Yatra is the only published package, and its
 * facts are read from that page's own data; every other travel style is
 * planned on request with a quote.
 */
export default function JammuKashmirPage() {
  const destinations = resolveImages(DESTINATIONS.filter((d) => d.active));
  const packages = resolveImages(PACKAGES);

  return (
    <>
      {buildJammuKashmirStructuredData(destinations, packages, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Jammu & Kashmir Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <JammuKashmirHero
              background={resolveImages(I.hero)}
              highlights={[
                { value: "Dal Lake", label: "Houseboats & shikaras" },
                { value: "Gulmarg", label: "Meadows & snow" },
                { value: "Pahalgam", label: "Lidder Valley" },
                { value: "Vaishno Devi", label: "Jammu pilgrimage" },
              ]}
            />
            <DestinationExplorer destinations={destinations} filters={FILTERS} />
            <Packages items={packages} styles={resolveImages(TRAVEL_STYLES)} customHref={CUSTOM_ENQUIRY} />
            <SampleItinerary route={SAMPLE_ROUTE} />
            <Experiences items={resolveImages(EXPERIENCES)} />
            <Seasons items={SEASONS} note={SEASON_NOTE} />
            <TravelGuide items={GUIDE} />
            <WhyKarvaahh items={ASSURANCES} />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Plan Your Kashmir Journey",
                  text: "Houseboats on Dal Lake, the meadows of Gulmarg and Pahalgam, or the pilgrimage to Vaishno Devi — tell us your dates and travel style, and we will plan a Jammu & Kashmir trip around you.",
                  image: resolveImages(I.gulmarg),
                  animated: true,
                  primaryLabel: "Explore Packages",
                  primaryHref: "#packages",
                  quoteLabel: "Request a Custom Quote",
                  quoteHref: CUSTOM_ENQUIRY,
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a Jammu & Kashmir tour.",
                  quoteSubject: "Jammu & Kashmir tour enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: resolveImages(RELATED), labels: { related: "Continue Your Journey", relatedTitle: "Related Journeys" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Jammu & Kashmir Tours", mobileTitle: "Plan Your Trip", desktop: "Plan My Kashmir Trip", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
