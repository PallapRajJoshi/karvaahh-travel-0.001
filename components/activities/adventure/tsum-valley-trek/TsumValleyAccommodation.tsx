import Image from "next/image";
import { ACCOMMODATION } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { Info } from "./shared/Icons";
import "./TsumValleyAccommodation.css";

export default function TsumValleyAccommodation() {
  return (
    <section className="tsum-section tsum-stay" id="accommodation" aria-labelledby="tsum-stay-title">
      <div className="tsum-container tsum-stay__grid">
        <Reveal className="tsum-stay__visual">
          <div className="tsum-media tsum-stay__media">
            <Image
              src={ACCOMMODATION.image.src}
              alt={ACCOMMODATION.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <p className="tsum-stay__quote">
            Dal bhat by the stove, butter tea at dawn — here, hospitality is the luxury.
          </p>
        </Reveal>

        <div className="tsum-stay__content">
          <SectionHeading
            id="tsum-stay-title"
            eyebrow="Tea houses & homestays"
            title="Stay Close to the Culture of the Valley"
            intro={ACCOMMODATION.intro}
          />

          <dl className="tsum-stay__types">
            {ACCOMMODATION.types.map((t, i) => (
              <Reveal key={t.title} className="tsum-stay__type" delay={i * 70}>
                <dt>
                  <span className="tsum-stay__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  {t.title}
                </dt>
                <dd>{t.text}</dd>
              </Reveal>
            ))}
          </dl>

          <p className="tsum-stay__note" role="note">
            <Info aria-hidden="true" />
            {ACCOMMODATION.note}
          </p>
        </div>
      </div>
    </section>
  );
}
