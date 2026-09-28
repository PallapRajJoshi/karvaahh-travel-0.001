import Image from "next/image";
import { overview } from "../../data/content";
import CtaButton from "../../shared/CtaButton";
import Icon from "../../shared/Icon";
import Reveal from "../../shared/Reveal";
import "./Overview.css";

export default function Overview() {
  return (
    <section id="overview" className="km-section km-overview" aria-labelledby="km-overview-title">
      <div className="km-container km-overview__grid">
        <Reveal className="km-overview__text">
          <p className="km-eyebrow">{overview.eyebrow}</p>
          <h2 id="km-overview-title" className="km-overview__title">
            {overview.heading}
          </h2>
          <p className="km-overview__body">{overview.body}</p>
          <ul className="km-overview__highlights">
            {overview.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={18} />
                {h}
              </li>
            ))}
          </ul>
          <CtaButton cta={overview.cta} />
        </Reveal>

        <Reveal className="km-overview__media" index={1}>
          <figure className="km-frame km-overview__main">
            <Image
              src={overview.primaryImage.src}
              alt={overview.primaryImage.alt}
              fill
              sizes="(min-width: 1024px) 560px, 92vw"
            />
          </figure>
          <figure className="km-frame km-overview__inset">
            <Image
              src={overview.secondaryImage.src}
              alt={overview.secondaryImage.alt}
              fill
              sizes="(min-width: 1024px) 280px, 46vw"
            />
          </figure>
          <p className="km-overview__stamp" aria-hidden="true">
            <span>Kailash</span>
            <span>Mansarovar</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
