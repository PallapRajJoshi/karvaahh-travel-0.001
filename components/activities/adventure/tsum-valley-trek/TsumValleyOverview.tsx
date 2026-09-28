import Image from "next/image";
import { OVERVIEW } from "@/data/destinations/tsum-valley/content";
import Reveal from "./shared/Reveal";
import "./TsumValleyOverview.css";

export default function TsumValleyOverview() {
  return (
    <section className="tsum-section tsum-overview" id="overview" aria-labelledby="tsum-overview-title">
      <div className="tsum-container tsum-overview__grid">
        <Reveal className="tsum-overview__text">
          <p className="tsum-overview__label">
            <span className="tsum-flagline" aria-hidden="true"><span /><span /><span /><span /><span /></span>
            {OVERVIEW.label}
          </p>
          <h2 className="tsum-overview__title" id="tsum-overview-title">{OVERVIEW.heading}</h2>
          <p className="tsum-overview__para">{OVERVIEW.paragraph}</p>

          <ul className="tsum-overview__pillars">
            {OVERVIEW.pillars.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="tsum-overview__visual" delay={120}>
          <div className="tsum-media tsum-overview__img-main">
            <Image src={OVERVIEW.image.src} alt={OVERVIEW.image.alt} fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="tsum-media tsum-overview__img-inset">
            <Image src={OVERVIEW.secondaryImage.src} alt={OVERVIEW.secondaryImage.alt} fill sizes="(max-width: 900px) 50vw, 20vw" />
          </div>
          <p className="tsum-overview__caption">Upper Tsum · Gorkha District</p>
        </Reveal>
      </div>
    </section>
  );
}
