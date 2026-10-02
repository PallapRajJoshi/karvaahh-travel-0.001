import SafeImage from "@/components/shared/SafeImage";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { destinationHighlight } from "@/data/panch-pokhari/content";
import "./destination-highlight.css";

export default function DestinationHighlight() {
  return (
    <section
      id="destination-highlight"
      className="pp-highlight"
      aria-labelledby="destination-highlight-heading"
    >
      <div className="pp-container pp-highlight__grid">
        <Reveal variant="slide-left" className="pp-highlight__text">
          <p className="pp-eyebrow">Sindhupalchok, Bagmati Province</p>
          <h2 id="destination-highlight-heading" className="pp-highlight__heading">
            {destinationHighlight.heading}
          </h2>
          {destinationHighlight.body.map((paragraph, i) => (
            <p key={i} className="pp-highlight__paragraph">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal variant="scale-in" delay={120} className="pp-highlight__media">
          <div className="pp-highlight__image-frame">
            <SafeImage
              src="/images/destinations/panch-pokhari/highlight/five-lakes-overview.jpg"
              alt="The five sacred lakes of Panch Pokhari seen from a ridge above, with the Himalayas in the background"
              fallbackLabel="Panch Pokhari Lakes"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="pp-highlight__image"
            />
            <span className="pp-highlight__elevation-badge">
              <Icon name="elevation" />
              {destinationHighlight.elevationBadge}
            </span>
          </div>
          <p className="pp-highlight__location-label">
            <Icon name="location" />
            {destinationHighlight.locationLabel}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
