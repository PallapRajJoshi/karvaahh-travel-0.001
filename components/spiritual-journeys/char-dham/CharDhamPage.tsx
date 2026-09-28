import "./styles/base.css";
import "./styles/hero.css";
import "./styles/journey.css";
import "./styles/package.css";
import "./styles/prepare.css";
import "./styles/closing.css";
import { LINKS, chapters, dhams, packing } from "./data/charDhamData";
import { buildCharDhamJsonLd } from "./seo";
import JsonLd from "./shared/JsonLd";
import RevealObserver from "./shared/RevealObserver";
import AccommodationSection from "./sections/AccommodationSection";
import AltitudeSafety from "./sections/AltitudeSafety";
import ChapterNav from "./sections/ChapterNav";
import CharDhamFAQ from "./sections/CharDhamFAQ";
import CharDhamGallery from "./sections/CharDhamGallery";
import CharDhamHero from "./sections/CharDhamHero";
import CharDhamIntroduction from "./sections/CharDhamIntroduction";
import DestinationStops from "./sections/DestinationStops";
import DhamComparison from "./sections/DhamComparison";
import DhamQuickNav from "./sections/DhamQuickNav";
import DhamSection from "./sections/DhamSection";
import JourneyRoute from "./sections/JourneyRoute";
import JourneyStory from "./sections/JourneyStory";
import JourneyTimeline from "./sections/JourneyTimeline";
import KarvaahhCTA from "./sections/KarvaahhCTA";
import KedarnathTransport from "./sections/KedarnathTransport";
import PackageSection from "./sections/PackageSection";
import PackingChecklist from "./sections/PackingChecklist";
import RegistrationSection from "./sections/RegistrationSection";
import ResponsiblePilgrimage from "./sections/ResponsiblePilgrimage";
import TempleEtiquette from "./sections/TempleEtiquette";
import TravellerTypes from "./sections/TravellerTypes";
import WeatherSection from "./sections/WeatherSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ROOT_ID = "char-dham-yatra";

/**
 * Assembly only. Site Navbar/Footer come from the root layout.
 * Server component — the client islands are ChapterNav, SeasonTabs,
 * PackingChecklist and RevealObserver.
 */
export default function CharDhamPage() {
  return (
    <main id={ROOT_ID} className="chardham">
      <Navbar/>
      <JsonLd data={buildCharDhamJsonLd()} />
      <RevealObserver rootId={ROOT_ID} />

      <CharDhamHero />
      <ChapterNav chapters={chapters} cta={{ label: "Plan Your Yatra", href: `${LINKS.enquiry}?interest=char-dham-yatra` }} />
      <DhamQuickNav />
      <JourneyRoute />

      <CharDhamIntroduction />
      <div className="cd-dhams">
        {dhams.map((d, i) => (
          <DhamSection key={d.slug} dham={d} flip={i % 2 === 1} />
        ))}
      </div>
      <DhamComparison />
      <JourneyStory />

      <DestinationStops />
      <JourneyTimeline />

      <PackageSection />
      <KedarnathTransport />

      <RegistrationSection />
      <AltitudeSafety />
      <WeatherSection />
      <PackingChecklist groups={packing} />
      <TempleEtiquette />
      <TravellerTypes />
      <AccommodationSection />
      <ResponsiblePilgrimage />

      <CharDhamGallery />
      <CharDhamFAQ />
      <KarvaahhCTA />
      <Footer/>
    </main>
  );
}
