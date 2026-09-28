import Image from "next/image";
import { CONTENT_STATUS, VILLAGES } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import "./TsumValleyVillages.css";

export default function TsumValleyVillages() {
  return (
    <section className="tsum-section tsum-villages" id="villages" aria-labelledby="tsum-villages-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-villages-title"
          eyebrow="Along the trail"
          title="Discover the Villages of Tsum Valley"
          intro="Four settlements mark your way from the gateway at Lokpa to the high villages beneath Mu Gompa."
        />

        <ol className="tsum-villages__track">
          {VILLAGES.map((v, i) => (
            <Reveal as="li" key={v.id} id={`village-${v.id}`} className="tsum-villages__item" delay={i * 100}>
              <article className="tsum-villages__card" aria-labelledby={`village-${v.id}-title`}>
                <div className="tsum-media tsum-villages__media">
                  <Image src={v.image.src} alt={v.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </div>
                <div className="tsum-villages__stop" aria-hidden="true">
                  <span className="tsum-villages__pin">{i + 1}</span>
                </div>
                <p className="tsum-villages__stage">{v.stage}</p>
                <h3 className="tsum-villages__name" id={`village-${v.id}-title`}>{v.name}</h3>
                {v.elevationM && (
                  <p className="tsum-villages__elev">
                    {v.elevationM.toLocaleString("en-IN")} m
                    {!CONTENT_STATUS.figuresVerified && <span className="tsum-approx">approx.</span>}
                  </p>
                )}
                <p className="tsum-villages__desc">{v.description}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
