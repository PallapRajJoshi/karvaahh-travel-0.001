import Link from "next/link";
import ActivityHero from "@/components/activities/shared/ActivityHero";
import ActivityGallery from "@/components/activities/shared/ActivityGallery";
import ActivityCTA from "@/components/activities/shared/ActivityCTA";
import FAQSection from "@/components/activities/shared/FAQSection";
import PriceDriver from "@/components/activities/shared/PriceDriver";
import Reveal from "@/components/activities/shared/Reveal";
import MobileStickyCTA from "@/components/activities/shared/MobileStickyCTA";
import {
  boatingFaqs,
  boatingGallery,
  boatingPriceDrivers,
} from "@/data/activities/boatingData";
import { PRICE_NOTE } from "@/data/activities/pricing";
import BoatingDirectory from "./BoatingDirectory";
import BoatingCategories from "./BoatingCategories";
import PokharaLakeLoop from "./PokharaLakeLoop";
import WildlifeBoating from "./WildlifeBoating";
import "./boating-page.css";
import "./boating-sections.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const boatingCrumbs = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Adventure", href: "/activities/adventure" },
  { name: "Boating & Canoeing", href: "/activities/adventure/boating" },
];

export default function BoatingPage() {
  return (
    <div className="boating-page">
    <Navbar/>
      <ActivityHero
        tone="water"
        crumbs={boatingCrumbs}
        eyebrow="ADVENTURE ACTIVITIES · BOATING & CANOEING"
        title="Boating & Canoeing in Nepal"
        subtitle="From Phewa Lake mornings to remote Himalayan lakes and wildlife rivers."
        supporting="Explore Nepal by paddle boat, canoe, lake boat and wildlife safari — from the lakes of Pokhara to Rara, Phoksundo, Koshi Tappu and Bardiya."
        image="/images/activities/boating/nepal-lake-boating.jpg"
        imageAlt="Wooden boats resting on a still Himalayan lake at dawn"
        stats={[
          { value: "Lakes", label: "Pokhara to Rara" },
          { value: "Wildlife", label: "Chitwan · Bardiya · Koshi Tappu" },
          { value: "Calm water", label: "Family-friendly outings" },
        ]}
        primaryCta={{
          label: "Explore Boating Destinations",
          href: "#boating-directory",
        }}
        secondaryCta={{
          label: "Plan a Boating Experience",
          href: "#plan-boating",
        }}
      />

      <main>
        <div className="boating-section">
          <Reveal>
            <BoatingCategories />
          </Reveal>
        </div>

        <div className="boating-section boating-section--flush">
          <BoatingDirectory />
        </div>

        <div className="boating-section boating-section--tint">
          <div className="boating-section__inner">
            <PokharaLakeLoop />
          </div>
        </div>

        <div className="boating-section">
          <Reveal>
            <WildlifeBoating />
          </Reveal>
        </div>

        <div className="boating-section boating-section--flush">
          <Reveal>
            <PriceDriver
              heading="What Determines the Price?"
              items={boatingPriceDrivers}
              id="boating-price"
              footnote={PRICE_NOTE}
            />
          </Reveal>
        </div>

        <div className="boating-section boating-section--flush">
          <ActivityGallery
            heading="Still Water, Early Light"
            images={boatingGallery}
            id="boating-gallery"
          />
        </div>

        <div className="boating-section">
          <ActivityCTA
            id="plan-boating"
            heading="Find Your Water Experience"
            text="Tell us your destination, travel dates and preferred experience. We'll help identify suitable boating or canoeing options."
            primary={{ label: "Plan My Boating Experience", href: "/contact" }}
            secondary={{
              label: "Ask About Availability",
              href: "/contact?interest=boating",
            }}
          />
        </div>

        <div className="boating-section boating-section--flush">
          <FAQSection
            heading="Boating in Nepal: Common Questions"
            items={boatingFaqs}
            id="boating-faq"
          />
        </div>
      </main>

      <Footer/>

      <MobileStickyCTA label="Plan My Boating Experience" href="#plan-boating" />

    </div>
  );
}
