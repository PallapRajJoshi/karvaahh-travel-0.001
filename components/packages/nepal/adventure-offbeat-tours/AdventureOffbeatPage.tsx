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
import { COLLECTIONS, EXPERIENCES, FAQS, GUIDE, RELATED, RESPONSIBLE, WHY } from "@/data/adventure-offbeat/content";
import { activeDestinations } from "@/data/adventure-offbeat/destinations";
import * as I from "@/data/adventure-offbeat/images";
import { activePackages } from "@/data/adventure-offbeat/packages";
import AdventureHero from "./AdventureHero";
import DestinationExplorer from "./DestinationExplorer";
import { Collections, ExperienceMosaic, TravelGuide, WhyOffbeat } from "./EditorialSections";
import PackageShowcase from "./PackageShowcase";
import { buildAdventureStructuredData } from "./structured-data";

const BOOKING: ResolvedBooking = {
  destination: "Nepal adventure & offbeat",
  departures: ["Kathmandu", "Pokhara", "Nepalgunj", "India border", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: ["Offbeat destination", "Remote trek", "Lakes & nature", "Camping", "Road trip", "Village homestay", "Custom adventure"],
  defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom adventure", message: "We would like to plan an offbeat adventure in Nepal." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Trip style" },
};

/**
 * Nepal Adventure & Offbeat Tours hub. All content comes from
 * data/adventure-offbeat/*; every link points to an existing page.
 */
export default function AdventureOffbeatPage() {
  const destinations = resolveImages(activeDestinations());
  const packages = resolveImages(activePackages());
  const experiences = resolveImages(EXPERIENCES);
  const collections = resolveImages(COLLECTIONS);
  const related = resolveImages(RELATED);
  const featured = destinations.filter((d) => d.featured);
  const postcards = [...featured, ...destinations.filter((d) => d.id === "tsho-rolpa")].slice(0, 4).map((d) => ({ name: d.name, location: d.location, image: d.image, href: d.href }));

  return (
    <>
      {buildAdventureStructuredData(destinations, packages, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Nepal Adventure & Offbeat Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <AdventureHero
              background={I.loManthang}
              postcards={postcards}
              badges={[
                { icon: "waves", label: "Hidden Lakes" },
                { icon: "footprints", label: "Remote Treks" },
                { icon: "car", label: "Road Trips" },
                { icon: "landmark", label: "Village Stays" },
              ]}
            />
            <HeliTrustBar />
            <DestinationExplorer destinations={destinations} />
            <ExperienceMosaic items={experiences} />
            <PackageShowcase packages={packages} />
            <WhyOffbeat items={WHY} image={I.upperDolpo} inset={I.thawang} />
            <TravelGuide topics={GUIDE} responsible={RESPONSIBLE} image={I.annapurnaPass} />
            <Collections items={collections} destinations={destinations} />
            <ProductFaq tour={{ title: "Nepal Adventure & Offbeat Tours", faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Your Road Less Travelled Starts Here",
                  text: "From Rara's quiet shores to the walled city of Lo Manthang and the hill villages in between — tell us how you like to travel and we'll shape a journey around it.",
                  image: I.manang,
                  animated: true,
                  primaryLabel: "Explore Offbeat Tours",
                  primaryHref: "#packages",
                  quoteLabel: "Plan My Adventure",
                  quoteHref: "/contact",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan an offbeat adventure in Nepal.",
                  quoteSubject: "Nepal adventure & offbeat enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: related, labels: { related: "Keep Exploring", relatedTitle: "Related Experiences" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Offbeat Nepal", mobileTitle: "Plan Your Offbeat Adventure", desktop: "Plan Your Adventure", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
