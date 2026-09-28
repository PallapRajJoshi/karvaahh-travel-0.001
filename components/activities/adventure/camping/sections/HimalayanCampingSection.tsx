import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import PlaceList from "../shared/PlaceList";
import MountainLayers from "./MountainLayers";
import CampingDestinationCard from "./CampingDestinationCard";
import { himalayanPlaces } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";
import { getDestination, type CampingDestination } from "@/data/campingDestinations";
import "./HimalayanCampingSection.css";

const highlights = ["kalinchowk", "gosaikunda", "mardi-himal"]
  .map(getDestination)
  .filter((d): d is CampingDestination => Boolean(d))
  .map((d) => ({ ...d, size: "standard" as const }));

export default function HimalayanCampingSection() {
  return (
    <section id="himalayan" className="cmp-himal" aria-labelledby="cmp-himal-title">
      <div className="cmp-himal__backdrop" aria-hidden="true">
        <div className="cmp-himal__photo" data-parallax="0.15">
          <CampImage src={campingImages.sections.himalayan} alt="" tone="night" loading="lazy" sizes="100vw" />
        </div>
        <div className="cmp-himal__veil" />
        <MountainLayers />
      </div>

      <div className="cmp-container cmp-himal__content">
        <SectionHeading
          id="cmp-himal-title"
          tone="light"
          kicker="Himalayan view camping"
          title="Wake Up Where the Mountains Begin"
          lead="High hills and trekking camps with snow peaks on the horizon — from Kalinchowk and Sailung near Kathmandu to Rara, Khaptad and Kanchenjunga at the edges of the country."
        />
        <PlaceList places={himalayanPlaces} tone="light" label="Himalayan camping destinations" />

        <ul className="cmp-himal__cards">
          {highlights.map((d, i) => (
            <li key={d.slug} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
              <CampingDestinationCard d={d} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
