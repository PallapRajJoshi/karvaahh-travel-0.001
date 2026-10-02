import type { Metadata } from "next";
import { CANONICAL_URL, SITE_URL, seo } from "@/content/corporate-retreats";
import { RetreatProvider } from "@/components/corporate-retreats/retreat-context";
import { Breadcrumbs, CorporateHero, CorporateIntro } from "@/components/corporate-retreats/hero-intro";
import {
  CorporateCategories, CorporateDestinations, RetreatPhilosophy, WhyKarvaahh,
} from "@/components/corporate-retreats/sections-discover";
import {
  ConferenceSection, LeadershipSection, RetreatStyleSelector, TeamBuildingActivities, WellnessSection,
} from "@/components/corporate-retreats/sections-experience";
import {
  CorporatePackages, CustomizationSection, LogisticsSection, PlanningProcess, SampleItineraries,
} from "@/components/corporate-retreats/sections-plan";
import {
  CorporateFAQ, CorporateFinalCTA, CorporateGallery, CorporateInquiryForm, CorporateTestimonials,
} from "@/components/corporate-retreats/sections-close";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// app/activities/educational-corporate/corporate-tours-retreats/page.tsx

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Karvaahh – Live to Travel",
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: seo.breadcrumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.href}`,
  })),
};

export default function CorporateToursRetreatsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {/* The existing Karvaahh <Navbar /> and <Footer /> come from your root layout. */}
      <Navbar />
      <RetreatProvider>
        <main id="main">
          <CorporateHero />
          <Breadcrumbs />
          <CorporateIntro />
          <RetreatPhilosophy />
          <WhyKarvaahh />
          <CorporateCategories />
          <CorporateDestinations />
          <RetreatStyleSelector />
          <TeamBuildingActivities />
          <LeadershipSection />
          <WellnessSection />
          <ConferenceSection />
          <SampleItineraries />
          <PlanningProcess />
          <CustomizationSection />
          <LogisticsSection />
          <CorporatePackages />
          <CorporateGallery />
          <CorporateTestimonials />
          <CorporateFAQ />
          <CorporateInquiryForm />
          <CorporateFinalCTA />
        </main>
      </RetreatProvider>
      <Footer />
    </>
  );
}
