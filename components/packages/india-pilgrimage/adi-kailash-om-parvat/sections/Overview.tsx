import { overview } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { CtaLink } from "../ui/CtaLink";
import { KImage } from "../ui/KImage";
import { Reveal } from "../ui/Reveal";
import "./overview.css";

/** Splits the paragraph into a lead-in (first N sentences) and the remainder. */
function splitLead(text: string, sentences: number): [string, string] {
  if (sentences <= 0) return ["", text];
  const parts = text.match(/[^.!?]+[.!?]+(\s+|$)/g) ?? [text];
  return [parts.slice(0, sentences).join("").trim(), parts.slice(sentences).join("").trim()];
}

/** Section 3 — Destination overview. */
export function Overview() {
  const [lead, rest] = splitLead(overview.paragraph, overview.leadSentences);

  return (
    <section id="overview" className="akop-section akop-overview" aria-labelledby="overview-title">
      <div className="akop-container akop-overview__grid">
        <Reveal className="akop-overview__copy">
          <p className="akop-eyebrow">{overview.eyebrow}</p>
          <h2 id="overview-title" className="akop-heading__title">
            {overview.heading}
          </h2>
          {/* One paragraph, visually split into a lead-in and body. */}
          <p className="akop-overview__text">
            {lead ? <span className="akop-overview__lead">{lead} </span> : null}
            {rest}
          </p>
          <div className="akop-overview__ctas">
            <CtaLink cta={overview.cta} />
            <CtaLink cta={overview.secondaryCta} />
          </div>
        </Reveal>

        <Reveal className="akop-overview__visual" variant="fade">
          <figure className="akop-overview__main">
            <KImage
              image={overview.mainImage}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="akop-overview__img"
            />
          </figure>
          <figure className="akop-overview__inset">
            <div className="akop-overview__inset-media">
              <KImage image={overview.insetImage} sizes="(min-width: 1024px) 240px, 45vw" className="akop-overview__img" />
            </div>
            <figcaption className="akop-overview__caption">{overview.insetCaption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
