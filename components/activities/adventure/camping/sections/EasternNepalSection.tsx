import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import PlaceList from "../shared/PlaceList";
import { easternGroups } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";
import "./EasternNepalSection.css";

export default function EasternNepalSection() {
  return (
    <section id="eastern" className="cmp-section cmp-section--snow cmp-east" aria-labelledby="cmp-east-title">
      <div className="cmp-east__banner" aria-hidden="true">
        <div className="cmp-east__banner-inner" data-parallax="0.08">
          <CampImage src={campingImages.sections.eastern} alt="" tone="forest" loading="lazy" sizes="100vw" />
        </div>
      </div>
      <div className="cmp-container">
        <div className="cmp-east__card">
          <SectionHeading
            id="cmp-east-title"
            kicker="Eastern Nepal"
            title="Discover Nepal's Eastern Camping Trails"
            lead="Tea gardens, ridge-top sunrises and sacred lakes, with Kanchenjunga and Makalu on the skyline."
          />
          <div className="cmp-east__groups">
            {easternGroups.map((g, i) => (
              <div key={g.title} className="cmp-east__group" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <h3>{g.title}</h3>
                <PlaceList places={g.places} label={`${g.title} camping places`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
