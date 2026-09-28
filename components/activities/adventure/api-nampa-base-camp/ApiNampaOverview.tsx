import Image from "next/image";
import { ADVISORY, OVERVIEW, QUICK_FACTS } from "./data/content";
import { ANCHORS, INQUIRY } from "./data/routes";
import Reveal from "./shared/Reveal";
import { Alert, ArrowRight } from "./shared/icons";
import "./ApiNampaOverview.css";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso));

export default function ApiNampaOverview() {
  return (
    <section className="an-section an-overview" id={ANCHORS.overview} aria-labelledby="an-overview-title">
      <div className="an-container">
        <div className="an-overview__grid">
          <Reveal className="an-overview__text">
            <p className="an-heading__eyebrow">{OVERVIEW.label}</p>
            <h2 className="an-heading__title" id="an-overview-title">
              {OVERVIEW.title}
            </h2>
            <p className="an-overview__lede">{OVERVIEW.paragraph}</p>
          </Reveal>

          <Reveal as="figure" className="an-overview__figure" delay={120}>
            <div className="an-overview__frame">
              <Image
                src={OVERVIEW.image.src}
                alt={OVERVIEW.image.alt}
                fill
                sizes="(max-width: 960px) 100vw, 46vw"
                className="an-overview__image"
              />
            </div>
            <figcaption className="an-overview__caption">{OVERVIEW.imageCaption}</figcaption>
          </Reveal>
        </div>

        {ADVISORY.active ? (
          <Reveal className="an-advisory" as="aside">
            <Alert className="an-advisory__icon" />
            <div className="an-advisory__body">
              <p className="an-advisory__title">{ADVISORY.title}</p>
              <p>{ADVISORY.body}</p>
              <p className="an-advisory__meta">Last reviewed {formatDate(ADVISORY.reviewed)}</p>
            </div>
            <a className="an-advisory__link" href={INQUIRY.general}>
              Ask for a ground report
              <ArrowRight />
            </a>
          </Reveal>
        ) : null}

        <Reveal as="dl" className="an-facts">
          {QUICK_FACTS.map((f) => (
            <div className="an-facts__item" key={f.label}>
              <dt>{f.label}</dt>
              <dd>
                {f.value}
                {f.note ? <span>{f.note}</span> : null}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
