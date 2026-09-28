import { gallery } from "../data/gallery";
import SectionHeading from "../ui/SectionHeading";
import GalleryGrid from "./GalleryGrid";
import "../styles/gallery.css";

export default function PhotographyGallery() {
  return (
    <section id="gallery" className="ebc-section ebc-section--alt ebc-gallery" aria-labelledby="ebc-gallery-title">
      <div className="ebc-container">
        <SectionHeading
          id="ebc-gallery-title"
          eyebrow="Himalayan Landscapes & Photography"
          title="Capture the Extraordinary Beauty of Everest"
          subtitle="From Ama Dablam at dawn to prayer flags above Namche — the Khumbu is one of the most photogenic places on earth."
          align="center"
        />
        <GalleryGrid items={gallery} />
      </div>
    </section>
  );
}
