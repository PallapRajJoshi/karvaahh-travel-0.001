import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import type { PageImage } from "../types";
import { CONTAINER, SectionHeading } from "../ui";
import { ANCHOR, MIN_GALLERY_PHOTOS, SECTION_Y } from "./constants";
import GalleryLightbox from "./GalleryLightbox";

/** Only photos that exist are shown; pending slots stay in the data for the team to fill. */
export default function Gallery({ tour }: { tour: HelicopterProductTour }) {
  const items = tour.gallery.items.filter(
    (it): it is { image: PageImage & { src: string }; caption: string } => it.image.src !== null,
  );
  if (items.length < MIN_GALLERY_PHOTOS) return null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="gallery-title" eyebrow="Gallery" title={tour.gallery.title} intro={tour.gallery.intro} />
        </Reveal>
        <div className="mt-12">
          <GalleryLightbox items={items} />
        </div>
      </div>
    </section>
  );
}
