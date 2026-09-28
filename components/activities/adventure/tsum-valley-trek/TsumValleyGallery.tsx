import { GALLERY } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import GalleryGrid from "./TsumValleyGalleryGrid";
import "./TsumValleyGallery.css";

export default function TsumValleyGallery() {
  return (
    <section className="tsum-section tsum-gallery" id="gallery" aria-labelledby="tsum-gallery-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-gallery-title"
          eyebrow="Gallery"
          title="Moments from Tsum Valley"
          intro="Monasteries, stone lanes and the peaks that watch over them. Tap any image to view it larger."
          align="center"
        />
        <GalleryGrid images={GALLERY} />
      </div>
    </section>
  );
}
