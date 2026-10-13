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
import {
  CHAR_DHAM_INTRO,
  CHAR_DHAM_NOTES,
  CUSTOM_ENQUIRY,
  DESTINATIONS,
  DHAMS,
  ESCAPES,
  FAQS,
  FILTERS,
  GUIDE,
  ITINERARIES,
  PACKAGES,
  PAGE_TITLE,
  RELATED,
  SEASONS,
  SEASON_NOTE,
} from "@/data/uttarakhand/content";
import * as I from "@/data/uttarakhand/images";
import DestinationExplorer from "./DestinationExplorer";
import UttarakhandHero from "./UttarakhandHero";
import { CharDham, Escapes, Itineraries, Packages, Seasons, TravelGuide } from "./sections";
import { buildUttarakhandStructuredData } from "./structured-data";

const CHAR_DHAM_IDS = ["char-dham-road", "char-dham-helicopter", "do-dham"];

const BOOKING: ResolvedBooking = {
  destination: "Uttarakhand tour",
  departures: ["Delhi", "Haridwar", "Dehradun", "Rishikesh", "Kathgodam", "Kathmandu", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [
    "Char Dham Yatra",
    "Kedarnath Yatra",
    "Kedarnath & Badrinath",
    "Haridwar & Rishikesh",
    "Adi Kailash & Om Parvat",
    "Mussoorie & Nainital holiday",
    "Auli mountain escape",
    "Chopta & Tungnath trek",
    "Valley of Flowers trek",
    "Jim Corbett wildlife holiday",
    "Uttarakhand nature escape",
    "Uttarakhand family holiday",
    "Yoga & wellness",
    "Customized Himalayan tour",
  ],
  defaults: { date: "", travelers: "2 Adults", departure: "Delhi", tourType: "Customized Himalayan tour", message: "We would like to plan an Uttarakhand tour." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Journey" },
};

/**
 * Uttarakhand Tour Packages. Content lives in data/uttarakhand; Char Dham
 * packages and itineraries are read from data/char-dham, and every other
 * package links to its own existing page — nothing is offered here that
 * is not already a Karvaahh product. Other destinations are enquiry-only.
 */
export default function UttarakhandPage() {
  const destinations = resolveImages(DESTINATIONS.filter((d) => d.active));
  const packages = resolveImages(PACKAGES);
  const charDhamPackages = packages.filter((p) => CHAR_DHAM_IDS.includes(p.id));

  return (
    <>
      {buildUttarakhandStructuredData(destinations, packages, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Uttarakhand Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <UttarakhandHero
              background={resolveImages(I.hero)}
              highlights={[
                { value: "Char Dham", label: "Sacred shrines" },
                { value: "Ganga towns", label: "Haridwar & Rishikesh" },
                { value: "Hill stations", label: "Garhwal & Kumaon" },
                { value: "Custom trips", label: "Road or helicopter" },
              ]}
            />
            <HeliTrustBar />
            <DestinationExplorer destinations={destinations} filters={FILTERS} />
            <CharDham dhams={resolveImages(DHAMS)} intro={CHAR_DHAM_INTRO} notes={CHAR_DHAM_NOTES} packages={charDhamPackages} />
            <Escapes items={resolveImages(ESCAPES)} />
            <Packages items={packages} customHref={CUSTOM_ENQUIRY} />
            <Itineraries items={ITINERARIES} />
            <Seasons items={SEASONS} note={SEASON_NOTE} />
            <TravelGuide items={GUIDE} />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Begin Your Himalayan Journey",
                  text: "From the four Dhams of the Garhwal Himalaya to the lakes of Kumaon and the ghats of the Ganga — tell us what calls you, and we will plan an Uttarakhand journey around your dates, pace and travel style.",
                  image: resolveImages(I.charDhamPanorama),
                  animated: true,
                  primaryLabel: "Explore Uttarakhand Packages",
                  primaryHref: "#packages",
                  quoteLabel: "Plan Your Custom Uttarakhand Trip",
                  quoteHref: CUSTOM_ENQUIRY,
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan an Uttarakhand tour.",
                  quoteSubject: "Uttarakhand tour enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: resolveImages(RELATED), labels: { related: "Continue Your Journey", relatedTitle: "Related Journeys" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Uttarakhand Tours", mobileTitle: "Plan Your Trip", desktop: "Plan My Uttarakhand Trip", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
