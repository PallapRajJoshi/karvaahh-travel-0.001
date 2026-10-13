import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import "./beach.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { CRUISE_PAGE, DESTINATIONS, ESCAPES, EXPERIENCES, FAQS, GUIDE, PAGE_TITLE, PLANNER, SEASONS, customEnquiry, resolvePackages } from "@/data/beach-cruise/content";
import * as I from "@/data/beach-cruise/images";
import BeachHero from "./BeachHero";
import CoastalExplorer from "./CoastalExplorer";
import EscapePlanner from "./EscapePlanner";
import { Essentials, Experiences, FinalCta, Packages, Seasons } from "./sections";
import { buildBeachStructuredData } from "./structured-data";
import { WaveDivider } from "./ui";

const RELATED = [
  { href: "/packages/international/asia", label: "Asia Tour Packages" },
  { href: "/packages/international/europe", label: "Europe Tour Packages" },
  { href: CRUISE_PAGE, label: "Cruise Experiences" },
  { href: "/packages/nepal/couple-tour-packages", label: "Couple & Honeymoon Tours" },
  { href: "/experience/destination-weddings", label: "Destination Weddings" },
  { href: "/destinations", label: "All Destinations" },
  { href: "/packages", label: "All Packages" },
];

/**
 * Beach & Cruise Holidays. Content lives in data/beach-cruise; packages
 * are resolved from the existing Asia and Europe package data, so every
 * package shown is a genuine Karvaahh product. Destinations without a
 * package are clearly marked "On request".
 */
export default function BeachCruisePage() {
  const destinations = DESTINATIONS.filter((d) => d.active);
  const packages = resolvePackages();
  const customHref = customEnquiry();
  const planner = PLANNER.map((c) => ({ ...c, enquiryHref: customEnquiry(c.label, c.enquiryType) }));

  const booking: ResolvedBooking = {
    destination: "Beach & cruise holiday",
    departures: ["Kathmandu", "Delhi", "Mumbai", "Bengaluru", "Kolkata", "Other"],
    travelerOptions: ["1 Adult", "2 Adults", "Couple (honeymoon)", "Family (3–5)", "Group (6+)"],
    tourTypes: [...packages.map((p) => p.tourType), "Cruise holiday", "Custom beach holiday"],
    defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom beach holiday", message: "We would like to plan a beach or cruise holiday." },
    sample: false,
    sampleNotice: "",
    labels: { departure: "Departing from", tourType: "Holiday" },
  };

  return (
    <>
      {buildBeachStructuredData(destinations, packages, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={booking} tourTitle="Beach & Cruise Holiday">
          <Navbar />
          <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <BeachHero background={I.heroMaldives} />
            <CoastalExplorer destinations={destinations} chips={ESCAPES} />
            <WaveDivider from="#F7F1E6" to="#FFFFFF" />
            <Experiences items={EXPERIENCES} />
            <WaveDivider from="#FFFFFF" to="#F7F1E6" flip />
            <Packages items={packages} customHref={customHref} />
            <EscapePlanner choices={planner} packages={packages} />
            <Seasons items={SEASONS} />
            <Essentials items={GUIDE} />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <FinalCta image={I.reefAerial} customHref={customHref} related={RELATED} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Beach & Cruise Escapes", mobileTitle: "Plan Your Escape", desktop: "Plan Your Escape", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
