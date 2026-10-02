import { galleryImages } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Gallery from "@/components/shared/Gallery";
import "./PhotoGallery.css";

export default function PhotoGallery() {
  return (
    <section className="photo-gallery-section" id="gallery">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Gallery"
          heading="Dhorpatan in Pictures"
          subheading="Alpine meadows, mountain passes, traditional villages, and wildlife across the reserve."
        />
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
}
