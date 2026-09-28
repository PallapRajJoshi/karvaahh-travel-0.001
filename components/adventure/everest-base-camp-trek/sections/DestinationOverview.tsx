import { overview } from "../data/experiences";
import { ebcSite } from "../config/site";
import SmartImage from "../ui/SmartImage";
import CtaButton from "../ui/CtaButton";
import Icon from "../ui/Icon";
import "../styles/overview.css";

export default function DestinationOverview() {
  return (
    <section id="overview" className="ebc-section ebc-overview" aria-labelledby="ebc-overview-title">
      <div className="ebc-container ebc-overview__grid">
        <div className="ebc-overview__copy">
          <p className="ebc-heading__eyebrow" data-reveal="">
            {overview.eyebrow}
          </p>
          <h2 id="ebc-overview-title" className="ebc-overview__title" data-reveal="" style={{ ["--i" as string]: 1 }}>
            {overview.title}
          </h2>
          <p className="ebc-overview__text" data-reveal="" style={{ ["--i" as string]: 2 }}>
            {overview.paragraph}
          </p>
          <ul className="ebc-overview__highlights" data-reveal="" style={{ ["--i" as string]: 3 }}>
            {overview.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" />
                {h}
              </li>
            ))}
          </ul>
          <div className="ebc-overview__ctas" data-reveal="" style={{ ["--i" as string]: 4 }}>
            <CtaButton href="#packages" label="Explore Trek Packages" variant="dark" />
            <CtaButton href={ebcSite.links.customize} label="Plan a Custom Trek" variant="outline" arrow={false} />
          </div>
        </div>

        <div className="ebc-overview__media">
          <figure className="ebc-img ebc-overview__primary" data-reveal="zoom">
            <SmartImage image={overview.primaryImage} sizes="(max-width: 1023px) 100vw, 50vw" />
          </figure>
          <figure className="ebc-img ebc-overview__secondary" data-reveal="right" style={{ ["--i" as string]: 3 }}>
            <SmartImage image={overview.secondaryImage} sizes="(max-width: 1023px) 45vw, 22vw" />
          </figure>
          <div className="ebc-overview__stamp" data-reveal="fade" style={{ ["--i" as string]: 5 }} aria-hidden="true">
            <span className="ebc-overview__stamp-num">5,364</span>
            <span className="ebc-overview__stamp-label">metres · Base Camp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
