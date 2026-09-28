import { anchors, headings } from "../data/config";
import { gallery } from "../data/gallery";
import SectionHeading from "../shared/SectionHeading";
import GalleryCarousel from "./GalleryCarousel";
import "./gallery.css";

export default function Gallery() {
  const h = headings.gallery;
  return (
    <section id={anchors.gallery.id} className="mc-section mc-section--dark mc-gallery" aria-labelledby="mc-gallery-title">
      <div className="mc-container">
        <SectionHeading id="mc-gallery-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
      </div>
      <div data-reveal>
        <GalleryCarousel images={gallery} />
      </div>
    </section>
  );
}
