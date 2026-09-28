import Image from "next/image";
import Link from "next/link";
import { HIGHLIGHTS } from "./data/content";
import { ANCHORS } from "./data/routes";
import type { Highlight } from "./data/types";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { ArrowRight } from "./shared/icons";
import "./ApiNampaHighlights.css";

function CardBody({ item, index }: { item: Highlight; index: number }) {
  return (
    <>
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 25vw"
        className="an-hl__image"
      />
      <span className="an-hl__scrim" aria-hidden="true" />
      <span className="an-hl__num" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="an-hl__body">
        <h3 className="an-hl__title">{item.title}</h3>
        <p className="an-hl__desc">{item.description}</p>
        {item.href ? (
          <span className="an-hl__more">
            Explore <ArrowRight />
          </span>
        ) : null}
      </div>
    </>
  );
}

export default function ApiNampaHighlights() {
  return (
    <section
      className="an-section an-section--stone an-hl"
      id={ANCHORS.highlights}
      aria-labelledby="an-hl-title"
    >
      <div className="an-container">
        <SectionHeading
          id="an-hl-title"
          eyebrow="Ten reasons to go"
          title="Highlights of Api Nampa Base Camp Trek"
          intro="From a 7,000-metre giant to village doorsteps — the landmarks that make this corner of Nepal worth the long road."
        />
      </div>

      <ul className="an-hl__grid an-container" role="list">
        {HIGHLIGHTS.map((item, i) => {
          const isInternalAnchor = item.href?.startsWith("#");
          return (
            <Reveal as="li" key={item.id} className={`an-hl__cell an-hl__cell--${i + 1}`} delay={(i % 4) * 70}>
              {item.href ? (
                isInternalAnchor ? (
                  <a className="an-hl__card an-hl__card--link" href={item.href}>
                    <CardBody item={item} index={i} />
                  </a>
                ) : (
                  <Link className="an-hl__card an-hl__card--link" href={item.href}>
                    <CardBody item={item} index={i} />
                  </Link>
                )
              ) : (
                <article className="an-hl__card">
                  <CardBody item={item} index={i} />
                </article>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
