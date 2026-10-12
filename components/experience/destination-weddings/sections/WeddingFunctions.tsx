import { weddingFunctions } from "../data/celebration";
import ChapterMark from "../shared/ChapterMark";
import SectionHeading from "../shared/SectionHeading";
import WeddingImage from "../shared/WeddingImage";
import { cssVars } from "../shared/cssVars";
import "./WeddingFunctions.css";

export default function WeddingFunctions() {
  return (
    <section className="dw-section dw-functions" aria-labelledby="dw-functions-title">
      <div className="dw-container">
        <ChapterMark index={3} />
        <SectionHeading
          id="dw-functions-title"
          eyebrow="Wedding functions"
          title={
            <>
              Every moment deserves <em>its own celebration</em>
            </>
          }
          intro="Each function is planned as its own event — its own look, its own music, its own timing — so the days build towards the ceremony rather than blurring together."
        />

        <ul className="dw-functions__grid">
          {weddingFunctions.map((f, i) => (
            <li
              key={f.id}
              className={`dw-fn dw-fn--${i}`}
              data-reveal=""
              style={cssVars({ "--dw-i": i % 3 })}
            >
              <article className="dw-fn__inner" aria-labelledby={`dw-fn-${f.id}`}>
                <div className="dw-fn__media">
                  {f.image && (
                    <WeddingImage
                      image={f.image}
                      sizes={i < 2 ? "(min-width: 900px) 50vw, 100vw" : "(min-width: 900px) 33vw, 100vw"}
                      compact
                    />
                  )}
                </div>
                <div className="dw-fn__body">
                  <p className="dw-fn__n">0{i + 1}</p>
                  <h3 id={`dw-fn-${f.id}`} className="dw-fn__title">
                    {f.title}
                  </h3>
                  <p className="dw-fn__desc">{f.description}</p>
                  <div className="dw-fn__reveal">
                    {f.note && <p className="dw-fn__note">{f.note}</p>}
                    <ul className="dw-dotlist">
                      {f.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
