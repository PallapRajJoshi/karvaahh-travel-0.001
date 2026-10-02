import { khaptadGallery } from "@/data/destinations/khaptad/khaptad-gallery";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import KhaptadLightboxGallery from "../shared/KhaptadLightboxGallery";

export default function KhaptadGallery() {
  return (
    <section className="khaptad-gallery" aria-labelledby="khaptad-gallery-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Photo Gallery"
          title="Khaptad in Pictures"
          description="Meadows, sacred sites, forest trails, and Himalayan views from across the park."
          align="center"
        />
        <KhaptadLightboxGallery images={khaptadGallery} />
      </div>
    </section>
  );
}
