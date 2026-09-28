import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import ScrollRail from "../shared/ScrollRail";
import { IconPin } from "../shared/Icons";
import { lakes } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";
import "./LakeCampingSection.css";

export default function LakeCampingSection() {
  return (
    <section id="lakes" className="cmp-section cmp-lakes" aria-labelledby="cmp-lakes-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-lakes-title"
          tone="light"
          kicker="Lakeside camping"
          title="Camp Beside Nepal's Lakes"
          lead="Easy shoreline camps near Pokhara and Kathmandu, sacred high-altitude lakes, and remote water in the far west."
        />
      </div>
      <ScrollRail label="Lakes for camping in Nepal" tone="light">
        {lakes.map((l) => (
          <article key={l.slug} className="cmp-lake">
            <div className="cmp-lake__media">
              <CampImage
                src={campingImages.lake(l.slug)}
                alt={`${l.name}, ${l.area}`}
                tone="lake" loading="lazy"
                sizes="(max-width: 767px) 86vw, 44vw"
              />
              <span className="cmp-lake__shimmer" aria-hidden="true" />
            </div>
            <div className="cmp-lake__body">
              <p className="cmp-lake__area"><IconPin size={14} /> {l.area}</p>
              <h3 className="cmp-lake__name">{l.name}</h3>
              <p className="cmp-lake__note">{l.note}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
