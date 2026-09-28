import Link from "next/link";
import ActivityHero from "@/components/activities/shared/ActivityHero";
import ActivityGallery from "@/components/activities/shared/ActivityGallery";
import ActivityCTA from "@/components/activities/shared/ActivityCTA";
import FAQSection from "@/components/activities/shared/FAQSection";
import PriceDriver from "@/components/activities/shared/PriceDriver";
import Reveal from "@/components/activities/shared/Reveal";
import MobileStickyCTA from "@/components/activities/shared/MobileStickyCTA";
import {
  raftingFaqs,
  raftingGallery,
  raftingPriceDrivers,
} from "@/data/activities/raftingData";
import { PRICE_NOTE } from "@/data/activities/pricing";
import RaftingLevels from "./RaftingLevels";
import RiverDirectory from "./RiverDirectory";
import RiverTable from "./RiverTable";
import RaftingHotspots from "./RaftingHotspots";
import RaftingSeason from "./RaftingSeason";
import KayakingPreview from "./KayakingPreview";
import "./rafting-page.css";
import "./rafting-sections.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const raftingCrumbs = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Adventure", href: "/activities/adventure" },
  { name: "Rafting", href: "/activities/adventure/rafting" },
];

export default function RaftingPage() {
  return (
    <div className="rafting-page">
      <Navbar />
      <ActivityHero
        tone="river"
        crumbs={raftingCrumbs}
        eyebrow="ADVENTURE ACTIVITIES · NEPAL"
        title="White-Water Rafting in Nepal"
        subtitle="From beginner-friendly Trishuli day trips to remote Grade V wilderness expeditions."
        supporting="Nepal's rivers range from accessible one-day runs near Kathmandu and Pokhara to multi-day expeditions through remote gorges and wilderness landscapes."
        image="/images/activities/rafting/nepal-white-water-rafting.jpg"
        imageAlt="A raft crossing white water on a Himalayan river in Nepal"
        stats={[
          { value: "Grade II–III", label: "Beginner / family" },
          { value: "Grade IV–V", label: "Technical / expedition" },
          { value: "1–10 days", label: "Day trips to wilderness" },
        ]}
        primaryCta={{ label: "Explore Rafting Rivers", href: "#river-directory" }}
        secondaryCta={{ label: "Plan a Rafting Trip", href: "#plan-rafting" }}
        location="📍 Rivers across Nepal"
      />

      <main className="rafting-page__main">
        <div className="rafting-section">
          <Reveal>
            <RaftingLevels />
          </Reveal>
        </div>

        <div className="rafting-section">
          <RiverDirectory />
        </div>

        <div className="rafting-section rafting-section--tint">
          <div className="rafting-section__inner">
            <RiverTable />
          </div>
        </div>

        <div className="rafting-section">
          <Reveal>
            <RaftingHotspots />
          </Reveal>
        </div>

        <div className="rafting-section rafting-section--flush">
          <Reveal>
            <PriceDriver
              heading="What Determines Rafting Price?"
              items={raftingPriceDrivers}
              id="rafting-price"
              footnote={PRICE_NOTE}
            />
          </Reveal>
        </div>

        <div className="rafting-section rafting-section--tint">
          <div className="rafting-section__inner">
            <RaftingSeason />
          </div>
        </div>

        <div className="rafting-section">
          <Reveal>
            <KayakingPreview />
          </Reveal>
        </div>

        <div className="rafting-section rafting-section--flush">
          <ActivityGallery
            heading="On the Water"
            lead="Six rivers, from the highway classic to eleven days in the far east."
            images={raftingGallery}
            id="rafting-gallery"
          />
        </div>

        <div className="rafting-section">
          <ActivityCTA
            id="plan-rafting"
            heading="Choose Your River"
            text="Tell us your travel dates, experience level and preferred trip length. We can help match your itinerary with an appropriate rafting route."
            primary={{ label: "Plan My Rafting Trip", href: "/contact" }}
            secondary={{
              label: "Ask About Multi-Day Expeditions",
              href: "/contact?interest=rafting-expedition",
            }}
          />
        </div>

        <div className="rafting-section rafting-section--flush">
          <FAQSection
            heading="Rafting in Nepal: Common Questions"
            items={raftingFaqs}
            id="rafting-faq"
          />
        </div>
      </main>

     <Footer />

      <MobileStickyCTA label="Plan My Rafting Trip" href="#plan-rafting" />
    </div>
  );
}
