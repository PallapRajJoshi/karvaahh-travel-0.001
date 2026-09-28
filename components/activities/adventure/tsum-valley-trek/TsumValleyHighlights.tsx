import Image from "next/image";
import { HIGHLIGHTS } from "@/data/destinations/tsum-valley/content";
import type { TsumHighlight } from "@/data/destinations/tsum-valley/types";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { ArrowRight } from "./shared/Icons";
import "./TsumValleyHighlights.css";

function CardBody({ item, index }: { item: TsumHighlight; index: number }) {
  return (
    <>
      <div className="tsum-media tsum-hl__media">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="tsum-hl__num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="tsum-hl__body">
        <p className="tsum-hl__tag">{item.tag}</p>
        <h3 className="tsum-hl__title">{item.title}</h3>
        <p className="tsum-hl__desc">{item.description}</p>
        {item.href && (
          <span className="tsum-hl__more">
            Learn more <ArrowRight />
          </span>
        )}
      </div>
    </>
  );
}

export default function TsumValleyHighlights() {
  return (
    <section className="tsum-section tsum-section--tint tsum-hl" id="highlights" aria-labelledby="tsum-hl-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-hl-title"
          eyebrow="Ten reasons to go"
          title="Highlights of Tsum Valley Trek"
          intro="Monasteries, cave shrines and stone villages strung along one of Nepal’s quietest trekking valleys."
        />
        <ul className="tsum-hl__grid">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal as="li" key={item.id} className={`tsum-hl__item${i < 2 ? " tsum-hl__item--feature" : ""}`} delay={(i % 4) * 80}>
              {item.href ? (
                <a className="tsum-hl__card" href={item.href}>
                  <CardBody item={item} index={i} />
                </a>
              ) : (
                <div className="tsum-hl__card">
                  <CardBody item={item} index={i} />
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
