import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import HeliTrustBar from "@/components/activities/experience/product/HeliTrustBar";
import ProductCta from "@/components/activities/experience/product/ProductCta";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import RelatedTours from "@/components/activities/experience/product/RelatedTours";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import {
  DIFFICULTY,
  DIFFICULTY_NOTE,
  EDITORIAL,
  FAQS,
  FEATURES,
  GETTING_THERE,
  PAGE_PATH,
  PERMITS,
  PREPARE,
  RELATED,
  SEASON_NOTE,
  SEASONS,
  SEO,
  WHY_NEPAL,
} from "@/data/trekking/content";
import * as I from "@/data/trekking/images";
import { FEATURED_PACKAGES } from "@/data/trekking/packages";
import { TREK_CATEGORIES, TREKS } from "@/data/trekking/treks";
import ExperienceShowcase from "./ExperienceShowcase";
import FeaturedPackages from "./FeaturedPackages";
import TrailExplorer from "./TrailExplorer";
import TrekkingHero from "./TrekkingHero";
import { BestTime, PermitsAndAccess, PrepareSection, TrekDifficulty, WhyTrekNepal } from "./TravelEssentials";
import { buildTrekkingStructuredData } from "./structured-data";

/**
 * Nepal Trekking & Hiking hub. Content lives in data/trekking/*; featured
 * packages are read from each trek's existing package data.
 */
export default function TrekkingPage() {
  const treks = resolveImages(TREKS);
  const packages = resolveImages(FEATURED_PACKAGES);
  const [editorial, features, related] = resolveImages([EDITORIAL, FEATURES, RELATED] as const);

  const booking: ResolvedBooking = {
    destination: "Nepal trekking",
    departures: ["Kathmandu", "Pokhara", "Sunauli", "Raxaul", "Other"],
    travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
    tourTypes: [...packages.map((p) => p.name), "Custom trek", "Not sure yet — suggest a trek"],
    defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom trek", message: "We would like to plan a trek in Nepal." },
    sample: false,
    sampleNotice: "",
    labels: { departure: "Starting point", tourType: "Trek" },
  };

  const stats = [
    { value: String(treks.length), label: "Trails to explore" },
    { value: "8", label: "Of the world's 14 peaks above 8,000 m" },
    { value: "2", label: "Popular seasons: spring & autumn" },
  ];

  return (
    <>
      {buildTrekkingStructuredData({ path: PAGE_PATH, title: SEO.title, description: SEO.description, treks, faqs: FAQS }).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={booking} tourTitle="Nepal Trekking & Hiking Adventure">
          <Navbar />
          <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <TrekkingHero image={I.hero} stats={stats} />
            <TrailExplorer treks={treks} categories={TREK_CATEGORIES} />
            <HeliTrustBar />
            <ExperienceShowcase editorial={editorial} features={features} />
            <FeaturedPackages packages={packages} customImage={I.annapurna} />
            <WhyTrekNepal items={WHY_NEPAL} image={I.manaslu} />
            <BestTime seasons={SEASONS} note={SEASON_NOTE} />
            <TrekDifficulty levels={DIFFICULTY} note={DIFFICULTY_NOTE} />
            <PrepareSection items={PREPARE} image={I.trekkingGear} />
            <PermitsAndAccess permits={PERMITS} gettingThere={GETTING_THERE} />
            <ProductFaq tour={{ title: "Nepal Trekking & Hiking Packages", faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Your Himalayan Trail Is Waiting",
                  text: "Whether it's a sunrise walk to Poon Hill or the long road to Everest Base Camp, we'll help you choose the right trail, pace and season — and take care of the details.",
                  image: I.poonHill,
                  animated: true,
                  primaryLabel: "Explore Trekking Packages",
                  primaryHref: "#packages",
                  quoteLabel: "Customize My Trek",
                  quoteHref: "/contact",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a trek in Nepal.",
                  quoteSubject: "Nepal trekking enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: related, labels: { related: "Continue Exploring", relatedTitle: "More Ways to See Nepal" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Nepal Trekking", mobileTitle: "Plan Your Himalayan Trek", desktop: "Enquire About a Trek", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
