import type { TravelPackage } from "@/data/packages/package-types";
import { buildFacets, byCategory, byCountry } from "@/lib/packages/query";
import CategoryNav from "./CategoryNav";
import CollectionSection from "./CollectionSection";
import { ConfidenceSection, CustomJourneyCta } from "./CtaSections";
import PackageExplorer from "./PackageExplorer";
import PackagesHero from "./PackagesHero";
import SeasonalTabs from "./SeasonalTabs";
import Reveal from "./Reveal";
import TravelStyleSection from "./TravelStyleSection";
import TrustStrip from "./TrustStrip";
import "./packages.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

/**
 * Server-rendered assembly. Only the interactive pieces (search, filters, sorting,
 * carousel, quick view, tabs, count-up, reveal) are client components.
 * Any section with no matching packages renders nothing, so the page grows with the data.
 */
export default function PackagesPage({ packages }: { packages: TravelPackage[] }) {
  const facets = buildFacets(packages);
  const featured = packages.filter((p) => p.featured);
  const faith = byCategory(packages, "spiritual");
  const adventure = packages.filter((p) => p.categories.includes("adventure") || p.categories.includes("trekking"));
  const seasonal = packages.filter((p) => p.seasons?.length);

  return (
    <div className="pkg-page">
      <Navbar/>
      <PackagesHero packages={packages} />
      <CategoryNav packages={packages} />
      <TrustStrip packages={packages} />

      <CollectionSection
        id="featured"
        eyebrow="Curated for you"
        title="Featured Journeys"
        description="Our most-loved journeys, carefully designed for memorable travel."
        packages={featured}
        layout="carousel"
        limit={6}
        firstPriority
      />

      <TravelStyleSection packages={packages} />

      <CollectionSection
        id="nepal"
        eyebrow="Nepal collection"
        title="Discover Nepal"
        description="From Himalayan adventures and sacred pilgrimage routes to relaxed family escapes, discover Nepal through carefully designed journeys."
        packages={byCountry(packages, "Nepal")}
        layout="grid"
        cta={{ label: "View All Nepal Packages", filters: { countries: ["Nepal"] } }}
      />

      <CollectionSection
        id="india"
        eyebrow="India collection"
        title="Journey Through India"
        description="Yatras, Himalayan circuits and coastal escapes, built as complete packages rather than single stops."
        packages={byCountry(packages, "India")}
        layout="carousel"
        tone="sand"
        cta={{ label: "Explore India Packages", filters: { countries: ["India"] } }}
      />

      <CollectionSection
        id="international"
        eyebrow="International collection"
        title="Go Beyond South Asia"
        description="Longer flights, new cultures, the same careful planning."
        packages={byCountry(packages, "International")}
        layout="cinematic-grid"
        limit={6}
        cta={{ label: "Explore International Packages", filters: { countries: ["International"] } }}
      />

      <CollectionSection
        id="faith"
        eyebrow="Pilgrimage"
        title="Journeys of Faith"
        description="Sacred routes across Nepal and India, from single shrines to full yatra circuits."
        packages={faith}
        layout="rows"
        tone="sand"
        limit={8}
        cta={{ label: "All spiritual packages", filters: { categories: ["spiritual"] } }}
      />

      <CollectionSection
        id="adventure"
        eyebrow="Adventure collection"
        title="Adventure Begins Where the Road Ends"
        description="High passes, remote valleys and classic Himalayan trails."
        packages={adventure}
        layout="cinematic-carousel"
        tone="dark"
        cta={{ label: "All adventure packages", filters: { categories: ["adventure", "trekking"] } }}
      />

      {seasonal.length > 0 && (
        <section id="seasonal" className="pkg-section" aria-labelledby="pkg-season-h">
          <div className="pkg-container">
            <Reveal>
              <header className="pkg-section__head">
                <p className="pkg-eyebrow">Season &amp; festivals</p>
                <h2 id="pkg-season-h" className="pkg-h2">Travel This Season</h2>
                <p className="pkg-lede">Journeys timed for the season or festival they suit best.</p>
              </header>
            </Reveal>
            <SeasonalTabs packages={seasonal} />
          </div>
        </section>
      )}

      <PackageExplorer packages={packages} facets={facets} />
      <ConfidenceSection />
      <CustomJourneyCta />
      <Footer/>
    </div>
  );
}
