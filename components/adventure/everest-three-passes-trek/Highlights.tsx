import Link from "next/link";
import Media from "./Media";
import SectionHeading from "./SectionHeading";
import { highlights } from "@/data/adventure/everest-three-passes-trek/content";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="etp-section etp-highlights" aria-labelledby="etp-highlights-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-highlights-title"
          eyebrow="At a glance"
          title="Highlights of Everest Three Passes Trek"
          intro="Three passes, two of the Khumbu's great viewpoints, a chain of glacial lakes and the villages that hold it all together."
        />
        <ul className="etp-hl__grid">
          {highlights.map((h, i) => {
            const inner = (
              <>
                <Media image={h.image} sizes="(max-width: 560px) 34vw, (max-width: 1100px) 33vw, 20vw" className="etp-hl__media" quietPlaceholder />
                <div className="etp-hl__body">
                  <span className="etp-hl__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="etp-hl__title">{h.title}</h3>
                  <p className="etp-hl__desc">{h.description}</p>
                </div>
              </>
            );
            return (
              <li key={h.id} className="etp-hl" data-reveal style={{ "--i": i % 5 } as React.CSSProperties}>
                {h.href ? (
                  <Link href={h.href} className="etp-hl__card etp-hl__card--link">
                    {inner}
                  </Link>
                ) : (
                  <article className="etp-hl__card">{inner}</article>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
