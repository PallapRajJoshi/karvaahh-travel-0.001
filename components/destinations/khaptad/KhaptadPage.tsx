"use client";

import "./khaptad-tokens.css";
import "./shared/khaptad-shared.css";
import "./sections/KhaptadHero.css";
import "./sections/KhaptadOverview.css";
import "./sections/KhaptadWhyVisit.css";
import "./sections/KhaptadAttractions.css";
import "./sections/KhaptadExperiences.css";
import "./sections/KhaptadTrekking.css";
import "./sections/KhaptadItineraries.css";
import "./sections/KhaptadWildlife.css";
import "./sections/KhaptadCulture.css";
import "./sections/KhaptadSeasons.css";
import "./sections/KhaptadAccess.css";
import "./sections/KhaptadAccommodation.css";
import "./sections/KhaptadEssentials.css";
import "./sections/KhaptadPackages.css";
import "./sections/KhaptadGallery.css";
import "./sections/KhaptadFaq.css";
import "./sections/KhaptadFinalCta.css";

import KhaptadBreadcrumb from "./shared/KhaptadBreadcrumb";
import KhaptadHero from "./sections/KhaptadHero";
import KhaptadOverview from "./sections/KhaptadOverview";
import KhaptadWhyVisit from "./sections/KhaptadWhyVisit";
import KhaptadAttractions from "./sections/KhaptadAttractions";
import KhaptadExperiences from "./sections/KhaptadExperiences";
import KhaptadTrekking from "./sections/KhaptadTrekking";
import KhaptadItineraries from "./sections/KhaptadItineraries";
import KhaptadWildlife from "./sections/KhaptadWildlife";
import KhaptadCulture from "./sections/KhaptadCulture";
import KhaptadSeasons from "./sections/KhaptadSeasons";
import KhaptadAccess from "./sections/KhaptadAccess";
import KhaptadAccommodation from "./sections/KhaptadAccommodation";
import KhaptadEssentials from "./sections/KhaptadEssentials";
import KhaptadPackages from "./sections/KhaptadPackages";
import KhaptadGallery from "./sections/KhaptadGallery";
import KhaptadFaq from "./sections/KhaptadFaq";
import KhaptadFinalCta from "./sections/KhaptadFinalCta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Assembly component for the Khaptad National Park destination page.
 * Composes 16 content sections plus breadcrumb navigation. Does not render
 * the global Navbar/Footer — those remain at the layout level per the
 * project's existing architecture.
 */
export default function KhaptadPage() {
  return (
    <main className="khaptad-page">
      <Navbar />
      <KhaptadHero />
      <KhaptadBreadcrumb />
      <KhaptadOverview />
      <KhaptadWhyVisit />
      <KhaptadAttractions />
      <KhaptadExperiences />
      <KhaptadTrekking />
      <KhaptadItineraries />
      <KhaptadWildlife />
      <KhaptadCulture />
      <KhaptadSeasons />
      <KhaptadAccess />
      <KhaptadAccommodation />
      <KhaptadEssentials />
      <KhaptadPackages />
      <KhaptadGallery />
      <KhaptadFaq />
      <KhaptadFinalCta />
      <Footer/>
    </main>
  );
}
