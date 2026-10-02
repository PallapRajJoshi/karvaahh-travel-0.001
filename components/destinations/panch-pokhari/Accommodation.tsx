import SafeImage from "@/components/shared/SafeImage";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { accommodation } from "@/data/panch-pokhari/content";
import "./accommodation.css";

export default function Accommodation() {
  return (
    <section className="pp-stay" aria-labelledby="stay-heading">
      <div className="pp-container pp-stay__grid">
        <Reveal variant="slide-left" className="pp-stay__media">
          <div className="pp-stay__image-frame pp-stay__image-frame--tall">
            <SafeImage
              src="/images/destinations/panch-pokhari/accommodation/mountain-lodge.jpg"
              alt="A local mountain lodge along the Panch Pokhari trekking route"
              fallbackLabel="Mountain Lodge"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="pp-stay__image"
            />
          </div>
          <div className="pp-stay__image-frame pp-stay__image-frame--short">
            <SafeImage
              src="/images/destinations/panch-pokhari/accommodation/mountain-camping.jpg"
              alt="Trekkers camping near Panch Pokhari"
              fallbackLabel="Mountain Camping"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="pp-stay__image"
            />
          </div>
        </Reveal>

        <Reveal variant="slide-right" delay={100} className="pp-stay__content">
          <SectionHeading
            eyebrow="Where to Stay"
            title={accommodation.heading}
            description={accommodation.intro}
            align="left"
          />
          <ul className="pp-stay__list">
            {accommodation.items.map((item) => (
              <li key={item} className="pp-stay__list-item">
                <Icon name="camp" className="pp-stay__list-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
