import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedJourneys from "@/components/featured-journeys/FeaturedJourneys";
import WhyTravelWithKarvaah from "@/components/home/WhyTravelWithKarvaah";
import ExploreNepalIndia from "@/components/home/ExploreNepalIndia";
import TravelExperiences from "@/components/home/TravelExperiences";
import HowWePlanJourney from "@/components/home/HowWePlanJourney";
import GuestTestimonials from "@/components/home/GuestTestimonials";
import RealJourneys from "@/components/home/RealJourneys";
import TravelTipsInspiration from "@/components/home/TravelTipsInspiration";
import PlanYourJourney from "@/components/home/PlanYourJourney";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HomeJsonLd from "@/components/seo/HomeJsonLd";
import { SEO_DEFAULTS, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: SEO_DEFAULTS.title },
  description: SEO_DEFAULTS.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.siteTitle,
    locale: "en_IN",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeaturedJourneys />
        <WhyTravelWithKarvaah />
        <ExploreNepalIndia />
        <TravelExperiences />
        <HowWePlanJourney />
        <GuestTestimonials />
        <RealJourneys />
        <TravelTipsInspiration />
        <PlanYourJourney />
      </main>
      <Footer />
    </>
  );
}
