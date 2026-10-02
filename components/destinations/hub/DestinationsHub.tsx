import type { HubContext } from "@/lib/destinations/discover-routes";
import type { ResolveContext } from "@/lib/destinations/types";
import { Explorer } from "./Explorer";
import { HubHero } from "./HubHero";
import { AdventureSection } from "./sections/AdventureSection";
import { CountrySection } from "./sections/CountrySection";
import { FeaturedSection } from "./sections/FeaturedSection";
import { FinalCta } from "./sections/FinalCta";
import { InspirationSection } from "./sections/InspirationSection";
import { InternationalSection } from "./sections/InternationalSection";
import { OffbeatSection } from "./sections/OffbeatSection";
import { ProvincesSection } from "./sections/ProvincesSection";
import { SpiritualSection } from "./sections/SpiritualSection";
import { StatsSection } from "./sections/StatsSection";
import { WildlifeSection } from "./sections/WildlifeSection";
import "./hub.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Assembly only: every section is its own component. Sections are Server Components;
 * only the search, explorer and filter links are client-side.
 *
 * Order (tone alternates so adjacent sections never look alike):
 * hero → featured → explorer → Nepal → provinces → India → international →
 * adventure → spiritual → wildlife → offbeat → inspiration → stats → CTA
 */
export function DestinationsHub({ ctx }: { ctx: HubContext }) {
  // Only what the client components need — keeps the serialised props tiny.
  const clientCtx: ResolveContext = { routes: ctx.routes, images: ctx.images };

  return (
    <div className="dhub">
      <Navbar/>
      <HubHero ctx={ctx} />
      <FeaturedSection ctx={clientCtx} />
      <Explorer ctx={clientCtx} />
      <CountrySection country="nepal" ctx={clientCtx} layout="grid" />
      <ProvincesSection ctx={ctx} />
      <CountrySection country="india" ctx={clientCtx} layout="rail" />
      <InternationalSection ctx={clientCtx} />
      <AdventureSection ctx={clientCtx} />
      <SpiritualSection ctx={clientCtx} />
      <WildlifeSection ctx={clientCtx} />
      <OffbeatSection ctx={clientCtx} />
      <InspirationSection ctx={ctx} />
      <StatsSection />
      <FinalCta />
      <Footer/>
    </div>
  );
}
