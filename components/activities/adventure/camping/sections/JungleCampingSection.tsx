import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import { IconInfo } from "../shared/Icons";
import { junglePlaces } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";
import "./JungleCampingSection.css";

export default function JungleCampingSection() {
  return (
    <section id="jungle" className="cmp-jungle" aria-labelledby="cmp-jungle-title">
      <div className="cmp-jungle__media" aria-hidden="true">
        <div className="cmp-jungle__photo" data-parallax="0.1">
          <CampImage src={campingImages.sections.jungle} alt="" tone="forest" loading="lazy" sizes="100vw" />
        </div>
      </div>
      <div className="cmp-container cmp-jungle__inner">
        <SectionHeading
          id="cmp-jungle-title"
          tone="light"
          kicker="Jungle & wildlife camping"
          title="Trade Mountains for the Wild"
          lead="In the southern lowlands, the Himalaya gives way to river plains, tall grass and sal forest — home to rhinos, elephants, deer and hundreds of bird species."
        />
        <ul className="cmp-jungle__parks">
          {junglePlaces.map((p, i) => (
            <li key={p.name} className="cmp-jungle__park" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
              <h3>{p.name}</h3>
              <p>{p.note}</p>
            </li>
          ))}
        </ul>
        <p className="cmp-note cmp-note--light">
          <IconInfo size={16} />
          Wildlife camping experiences should follow park regulations and designated camping arrangements.
        </p>
      </div>
    </section>
  );
}
