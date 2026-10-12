import { nepalHamper, transport, welcomeHamper, welcomeSequence } from "../data/guests";
import WeddingImage from "../shared/WeddingImage";
import "./ArrivalExperience.css";

/**
 * Welcome experience + transportation — both answer the same question for a
 * guest: "what happens from the moment I land?"
 */
export default function ArrivalExperience() {
  return (
    <section className="dw-section dw-arrival dw-paper" aria-labelledby="dw-arrival-title">
      <div className="dw-container">
        <div className="dw-arrival__top">
          <div className="dw-arrival__lead" data-reveal="">
            <p className="dw-eyebrow">Welcome experience</p>
            <h2 id="dw-arrival-title" className="dw-h2">
              The celebration starts <em>before the wedding</em>
            </h2>
            <ol className="dw-arrival__sequence" aria-label="Guest welcome sequence">
              {welcomeSequence.map((s, i) => (
                <li key={s}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="dw-arrival__hamper" data-reveal="">
            <div className="dw-arrival__hamper-media">
              <WeddingImage
                image={{
                  file: "welcome-hamper.jpg",
                  alt: "Welcome hamper with Himalayan tea, a pashmina scarf, local sweets and a printed wedding itinerary",
                }}
                sizes="(min-width: 960px) 40vw, 100vw"
              />
            </div>
            <div className="dw-arrival__hamper-body">
              <h3 className="dw-h3">The welcome hamper</h3>
              <ul className="dw-dotlist">
                {welcomeHamper.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <p className="dw-arrival__nepal">
                <span>For Nepal weddings, optionally</span>
                {nepalHamper.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="dw-arrival__transport">
          <h3 className="dw-arrival__transport-title" data-reveal="">
            Every journey, <em>beautifully coordinated</em>
          </h3>
          <dl className="dw-arrival__fleet">
            {transport.map((t) => (
              <div key={t.id} className="dw-arrival__fleet-row" data-reveal="fade">
                <dt>{t.title}</dt>
                <dd>
                  {t.items.join(" • ")}
                  {t.note && <span className="dw-arrival__fleet-note">{t.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
