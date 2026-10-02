import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import { regionSpots } from "@/data/regionSpots";
import "./RegionGallery.css";

export default function RegionGallery() {
  return (
    <section className="saipal-page__section saipal-region">
      <div className="saipal-page__inner">
        <SectionHeading
          eyebrow="The Wider Region"
          title="Discover the Valleys and Villages of Bajhang"
          align="center"
        />
        <div className="saipal-region__grid">
          {regionSpots.map((spot, index) => (
            <Reveal
              key={spot.id}
              delay={(index % 4) * 80}
              className={`saipal-region__card saipal-region__card--${spot.size}`}
            >
              <div className="saipal-region__media">
                <ImageSlot alt={spot.name} label={spot.name} />
                <div className="saipal-region__overlay">
                  <h3 className="saipal-region__name">{spot.name}</h3>
                  <p className="saipal-region__desc">{spot.description}</p>
                  {spot.note ? <p className="saipal-region__note">{spot.note}</p> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
