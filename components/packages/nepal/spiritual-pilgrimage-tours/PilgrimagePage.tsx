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
import { BEST_TIME, COMBINATIONS, ENTRY_POINTS, FAQS, FESTIVALS, MANAKAMANA, PRACTICAL, RELATED, SECTIONS, TIMELINE, WHY } from "@/data/pilgrimage/content";
import { activeDestinations } from "@/data/pilgrimage/destinations";
import { DURATIONS, FAITHS, PILGRIMAGE_TYPES } from "@/data/pilgrimage/filters";
import * as I from "@/data/pilgrimage/images";
import { activePackages } from "@/data/pilgrimage/packages";
import type { PilgrimagePackage } from "@/data/pilgrimage/types";
import DestinationExplorer from "./DestinationExplorer";
import { CustomYatraBuilder, PopularCombinations, SeasonalPilgrimage, YatraTimeline } from "./InteractiveSections";
import ManakamanaFeature from "./ManakamanaFeature";
import PackageExplorer from "./PackageExplorer";
import PilgrimageHero from "./PilgrimageHero";
import PilgrimageMap from "./PilgrimageMap";
import RegionSection, { type ResolvedSection } from "./RegionSection";
import { BestTime, PracticalInformation, WhyKarvaahh } from "./StaticSections";
import { buildPilgrimageStructuredData } from "./structured-data";

const BOOKING: ResolvedBooking = {
  destination: "Nepal pilgrimage",
  departures: ["Kathmandu", "Gorakhpur", "Sunauli", "Raxaul", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: ["Hindu pilgrimage", "Buddhist pilgrimage", "Muktinath yatra", "Multi-destination yatra", "Custom spiritual journey"],
  defaults: { date: "", travelers: "2 Adults", departure: "Kathmandu", tourType: "Custom spiritual journey", message: "We would like to plan a pilgrimage in Nepal." },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Pilgrimage" },
};

/**
 * Nepal Spiritual & Pilgrimage Tours hub. All content comes from
 * data/pilgrimage/*; only active destinations and packages render.
 */
export default function PilgrimagePage() {
  const destinations = resolveImages(activeDestinations());
  const packages = resolveImages(activePackages());
  const names = Object.fromEntries(destinations.map((d) => [d.id, d.name]));
  const byId = (id: string) => destinations.find((d) => d.id === id);
  const pkgWithNames = (p: PilgrimagePackage) => ({ p, names: p.destinations.map((id) => names[id]).filter(Boolean) });

  const sections: ResolvedSection[] = SECTIONS.map((s) => {
    const featured = s.featured ? byId(s.featured) : undefined;
    const list = s.select ? destinations.filter(s.select) : (s.destinations ?? []).map(byId).filter((d): d is NonNullable<typeof d> => Boolean(d));
    return {
      id: s.id,
      eyebrow: s.eyebrow,
      title: s.title,
      intro: s.intro,
      featured,
      featuredPackages: featured ? packages.filter((p) => p.destinations.includes(featured.id)) : [],
      destinations: list.filter((d) => d.id !== featured?.id),
      packages: (s.packages ?? []).map((id) => packages.find((p) => p.id === id)).filter((p): p is PilgrimagePackage => Boolean(p)).map(pkgWithNames),
      highlights: s.highlights,
      note: s.note,
      dark: s.dark,
      splitShakti: s.splitShakti,
    };
  });
  const sec = (id: string) => sections.find((s) => s.id === id)!;

  const collage = [
    { image: I.pashupatinath, caption: "Pashupatinath" },
    { image: I.muktinath, caption: "Muktinath" },
    { image: I.mayaDevi, caption: "Lumbini" },
    { image: I.janakiMandir, caption: "Janaki Mandir" },
    { image: I.manakamanaCableCar, caption: "Manakamana" },
  ];

  const builderOptions = {
    destinations: ["Not sure yet — suggest for me", ...destinations.filter((d) => d.featured).map((d) => d.name), "Multiple destinations"],
    types: ["Temple darshan", ...Object.values(PILGRIMAGE_TYPES).filter((t) => t !== "Heritage Town"), "Festival yatra"],
    faiths: [...Object.values(FAITHS), "Open to all"],
    durations: Object.values(DURATIONS),
    transport: ["Road", "Flight + Road", "Helicopter", "Mixed / suggest for me"],
    hotels: ["Standard", "Deluxe", "Luxury", "Budget"],
    budgets: ["Budget", "Mid-range", "Premium", "Luxury"],
    starts: ["Kathmandu", "Gorakhpur", "Sunauli", "Raxaul", "Other"],
  };

  return (
    <>
      {buildPilgrimageStructuredData(destinations, packages, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle="Nepal Spiritual & Pilgrimage Tour">
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <PilgrimageHero
              background={I.mustangMonastery}
              collage={collage}
              badges={[
                { icon: "landmark", label: "Hindu & Buddhist Pilgrimage" },
                { icon: "users", label: "Private & Group Yatra" },
                { icon: "route", label: "Road • Flight • Helicopter" },
                { icon: "sparkles", label: "Customized Itineraries" },
              ]}
            />
            <DestinationExplorer destinations={destinations} />
            <HeliTrustBar />

            <RegionSection s={sec("kathmandu")} />
            <RegionSection s={sec("central")} />
            <RegionSection s={sec("east")} />
            <RegionSection s={sec("gandaki")} />
            <ManakamanaFeature data={MANAKAMANA} image={I.manakamanaCableCar} />
            <RegionSection s={sec("buddhist")} />
            <RegionSection s={sec("ramayana")} />
            <RegionSection s={sec("shakti")} />
            <RegionSection s={sec("shiva")} />
            <RegionSection s={sec("vaishnav")} />
            <RegionSection s={sec("himalayan")} />
            <RegionSection s={sec("west")} />

            <PilgrimageMap destinations={destinations} />
            <PackageExplorer packages={packages} names={names} />
            <PopularCombinations items={COMBINATIONS.filter((c) => c.active)} />
            <YatraTimeline steps={TIMELINE} entryPoints={ENTRY_POINTS} />
            <SeasonalPilgrimage festivals={FESTIVALS.filter((f) => f.active)} names={names} />
            <BestTime items={BEST_TIME} />
            <PracticalInformation items={PRACTICAL} />
            <WhyKarvaahh items={WHY} />
            <CustomYatraBuilder options={builderOptions} />
            <ProductFaq tour={{ title: "Nepal Pilgrimage Tours", faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Your Spiritual Journey Begins Here",
                  text: "From the sacred courtyards of Kathmandu to the high Himalayan sanctuary of Muktinath, from Janakpur's Ramayana heritage to the birthplace of Buddha in Lumbini — discover Nepal through a journey designed around your faith, time and travel style.",
                  image: I.mustangMonastery,
                  animated: true,
                  primaryLabel: "Explore Pilgrimage Packages",
                  primaryHref: "#packages",
                  quoteLabel: "Customize My Yatra",
                  quoteHref: "#builder",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan a pilgrimage in Nepal.",
                  quoteSubject: "Nepal pilgrimage enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: RELATED, labels: { related: "Continue Your Journey", relatedTitle: "Related Experiences" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Spiritual Nepal", mobileTitle: "Plan Your Spiritual Journey", desktop: "Plan Your Yatra", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}

