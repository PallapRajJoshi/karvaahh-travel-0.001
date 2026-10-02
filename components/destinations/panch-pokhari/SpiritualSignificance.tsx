import SafeImage from "@/components/shared/SafeImage";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { spiritualSection } from "@/data/panch-pokhari/content";
import "./spiritual-significance.css";

export default function SpiritualSignificance() {
  return (
    <section className="pp-spiritual" aria-labelledby="spiritual-heading">
      <div className="pp-spiritual__media">
        <SafeImage
          src="/images/destinations/panch-pokhari/spiritual/janai-purnima-pilgrimage.jpg"
          alt="Pilgrims at the sacred lakes of Panch Pokhari during the Janai Purnima festival"
          fallbackLabel="Sacred Lakes — Janai Purnima Pilgrimage"
          fill
          sizes="100vw"
          className="pp-spiritual__image"
        />
        <div className="pp-spiritual__overlay" aria-hidden="true" />
      </div>

      <div className="pp-container pp-spiritual__content">
        <Reveal variant="fade-up" className="pp-spiritual__intro">
          <p className="pp-eyebrow pp-spiritual__eyebrow">Faith &amp; Tradition</p>
          <h2 id="spiritual-heading" className="pp-spiritual__heading">
            {spiritualSection.heading}
          </h2>
          <p className="pp-spiritual__lede">{spiritualSection.intro}</p>
        </Reveal>

        <div className="pp-spiritual__grid">
          {spiritualSection.points.map((point, index) => (
            <Reveal
              key={point.title}
              variant="fade-up"
              delay={index * 90}
              className="pp-spiritual__card"
            >
              <Icon name="lotus" className="pp-spiritual__card-icon" />
              <h3 className="pp-spiritual__card-title">{point.title}</h3>
              <p className="pp-spiritual__card-body">{point.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-in" className="pp-spiritual__disclaimer">
          <p>{spiritualSection.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
