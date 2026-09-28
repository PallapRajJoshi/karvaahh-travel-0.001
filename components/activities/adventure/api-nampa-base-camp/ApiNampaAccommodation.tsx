import Image from "next/image";
import { STAYS, STAYS_NOTE } from "./data/content";
import { IMAGES } from "./data/images";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Info } from "./shared/icons";
import "./ApiNampaAccommodation.css";

export default function ApiNampaAccommodation() {
  return (
    <section className="an-section an-section--dark an-stays" id="accommodation" aria-labelledby="an-stays-title">
      <div className="an-stays__bg" aria-hidden="true">
        <Image src={IMAGES.starryNight.src} alt="" fill sizes="100vw" className="an-stays__bg-image" />
      </div>

      <div className="an-container an-stays__inner">
        <SectionHeading
          id="an-stays-title"
          eyebrow="Accommodation & camping"
          title="Experience the Serenity of Himalayan Wilderness"
          intro="Nights on this trek are simple and memorable — a family hearth in the valley, a tent under the stars higher up."
        />

        <ul className="an-stays__grid" role="list">
          {STAYS.map((s, i) => (
            <Reveal as="li" key={s.id} className="an-stay" delay={i * 80}>
              <div className="an-stay__media">
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="an-stay__body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="an-stays__note">
          <Info />
          {STAYS_NOTE}
        </p>
      </div>
    </section>
  );
}
