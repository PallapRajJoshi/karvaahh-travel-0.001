import SafeImage from "@/components/shared/SafeImage";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { natureLandscapes } from "@/data/panch-pokhari/content";
import "./nature-landscapes.css";

const images = [
  {
    src: "/images/destinations/panch-pokhari/nature/rhododendron-forest.jpg",
    alt: "Rhododendron forest trail near Panch Pokhari",
  },
  {
    src: "/images/destinations/panch-pokhari/nature/alpine-meadow.jpg",
    alt: "Alpine meadow along the Panch Pokhari trekking route",
  },
  {
    src: "/images/destinations/panch-pokhari/nature/mountain-stream.jpg",
    alt: "Mountain stream and rugged terrain near Panch Pokhari",
  },
  {
    src: "/images/destinations/panch-pokhari/nature/snow-ridgeline.jpg",
    alt: "Snow-covered Himalayan ridgeline near the Jugal Himal range",
  },
];

export default function NatureLandscapes() {
  return (
    <section className="pp-nature" aria-labelledby="nature-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Natural Beauty"
          title={natureLandscapes.heading}
          description={natureLandscapes.intro}
        />

        <div className="pp-nature__grid">
          {natureLandscapes.items.map((item, index) => (
            <Reveal
              key={item.label}
              variant="fade-up"
              delay={index * 90}
              className="pp-nature__card"
            >
              <div className="pp-nature__image-wrap">
                <SafeImage
                  src={images[index].src}
                  alt={images[index].alt}
                  fallbackLabel={item.label}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className="pp-nature__image"
                />
              </div>
              <h3 className="pp-nature__title">{item.label}</h3>
              <p className="pp-nature__body">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-in" className="pp-nature__note">
          <p>{natureLandscapes.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
