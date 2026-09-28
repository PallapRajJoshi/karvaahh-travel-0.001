import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-wildlife.css";

const landscapes = [
  "Bardiya National Park",
  "Banke National Park",
  "Blackbuck Conservation Area",
  "Karnali River",
  "Geruwa River",
  "Babai Valley",
  "Rapti River",
  "Community forests",
  "Tharu villages",
  "Chure landscapes",
];

const experiences = [
  "Tiger sightings",
  "Rhinoceros sightings",
  "Birdwatching",
  "Jungle safari",
  "Canoeing",
  "Walking safari",
  "Wildlife photography",
  "Nature walks",
];

export default function LumbiniWildlife() {
  return (
    <section
      className="lumbini-wildlife"
      id="wildlife"
      aria-label="Wildlife and nature in Lumbini"
    >
      <div className="lumbini-wildlife__media">
        <Image
          src="/images/lumbini/lumbini-province-wildlife-nature-bardiya-banke-nepal.jpg"
          alt="Wildlife along the riverbanks of Bardiya National Park at dusk"
          fill
          sizes="100vw"
          className="lumbini-wildlife__image"
        />
        <div className="lumbini-wildlife__overlay" aria-hidden="true" />
      </div>

      <div className="lumbini-wildlife__content">
        <LumbiniSectionHeading
          index="08"
          eyebrow="Wildlife & Nature"
          heading="Where the wild"
          emphasis="still moves."
          description="From the forests and rivers of the Terai to the remote western hills, Lumbini Province reveals a remarkable journey through wildlife, wilderness and living landscapes."
          theme="dark"
        />

        <div className="lumbini-wildlife__panels">
          <div className="lumbini-wildlife__panel">
            <span className="lumbini-wildlife__panel-label">Landscapes</span>
            <div className="lumbini-wildlife__tags">
              {landscapes.map((item) => (
                <span key={item} className="lumbini-wildlife__tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lumbini-wildlife__panel">
            <span className="lumbini-wildlife__panel-label">
              Experiences
            </span>
            <div className="lumbini-wildlife__tags">
              {experiences.map((item) => (
                <span key={item} className="lumbini-wildlife__tag">
                  {item}
                </span>
              ))}
            </div>
            <p className="lumbini-wildlife__note">
              Opportunities for tiger and rhinoceros sightings, depending on
              season and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
