import SafeImage from "@/components/shared/SafeImage";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { trekkingExperience } from "@/data/panch-pokhari/content";
import "./trekking-experience.css";

const progressionImages = [
  {
    src: "/images/destinations/panch-pokhari/trekking/village-landscape.jpg",
    alt: "Mountain village landscape at the start of the Panch Pokhari trek",
    label: "Villages",
  },
  {
    src: "/images/destinations/panch-pokhari/trekking/forest-trail.jpg",
    alt: "Rhododendron forest trail on the way to Panch Pokhari",
    label: "Forest Trails",
  },
  {
    src: "/images/destinations/panch-pokhari/trekking/alpine-terrain.jpg",
    alt: "Alpine terrain approaching Panch Pokhari",
    label: "Alpine Terrain",
  },
  {
    src: "/images/destinations/panch-pokhari/trekking/sacred-lakes.jpg",
    alt: "The sacred lakes of Panch Pokhari",
    label: "The Sacred Lakes",
  },
];

export default function TrekkingExperience() {
  return (
    <section className="pp-trekking" aria-labelledby="trekking-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="The Trek"
          title={trekkingExperience.heading}
          description={trekkingExperience.intro}
        />

        <div className="pp-trekking__progression">
          {progressionImages.map((img, index) => (
            <Reveal
              key={img.label}
              variant="fade-up"
              delay={index * 90}
              className="pp-trekking__frame"
            >
              <div className="pp-trekking__image-wrap">
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  fallbackLabel={img.label}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className="pp-trekking__image"
                />
              </div>
              <span className="pp-trekking__frame-label">{img.label}</span>
              {index < progressionImages.length - 1 && (
                <span className="pp-trekking__connector" aria-hidden="true" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="pp-trekking__list-wrap">
          <ul className="pp-trekking__list">
            {trekkingExperience.highlights.map((item) => (
              <li key={item} className="pp-trekking__list-item">
                <Icon name="mountain" className="pp-trekking__list-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="pp-trekking__caution" variant="fade-in">
          <Icon name="shield" className="pp-trekking__caution-icon" />
          <p>{trekkingExperience.cautionBadge}</p>
        </Reveal>
      </div>
    </section>
  );
}
