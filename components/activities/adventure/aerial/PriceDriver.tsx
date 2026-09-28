import type { FlightOption, PriceDriverContent } from "./types";
import RevealOnView from "./RevealOnView";
import "./price-driver.css";

interface Props {
  content: PriceDriverContent;
  options: FlightOption[];
}

export default function PriceDriver({ content, options }: Props) {
  const max = content.axisMax;
  const ticks = Array.from({ length: Math.floor(max / 15) + 1 }, (_, i) => i * 15);
  const pct = (m: number) => `${Math.min(100, (m / max) * 100)}%`;

  return (
    <section className="ae-section ae-section--dark ae-price" aria-labelledby="ae-price-title">
      <div className="ae-container ae-price__grid">
        <div className="ae-price__copy">
          <h2 id="ae-price-title" className="ae-price__heading">
            {content.heading}
          </h2>
          <p className="ae-price__statement">{content.statement}</p>
          <p className="ae-price__body">{content.body}</p>
        </div>

        <RevealOnView className="ae-price__chart">
          <p className="ae-price__chart-cap" id="ae-price-chart-cap">
            Minutes aloft and indicative price, by flight
          </p>
          <ul className="ae-price__rows" aria-labelledby="ae-price-chart-cap">
            {options.map((o, i) => {
              const [lo, hi] = o.minutes;
              return (
                <li key={o.id} className="ae-price__row" style={{ "--ae-i": i } as React.CSSProperties}>
                  <div className="ae-price__row-head">
                    <span className="ae-price__row-name">{o.title}</span>
                    <span className="ae-price__row-price">{o.price}</span>
                  </div>
                  <div className="ae-price__track" aria-hidden="true">
                    <span className="ae-price__bar" style={{ width: pct(lo) }} />
                    {hi > lo ? (
                      <span className="ae-price__range" style={{ left: pct(lo), width: `calc(${pct(hi)} - ${pct(lo)})` }} />
                    ) : null}
                  </div>
                  <span className="ae-sr-only">{o.duration}</span>
                </li>
              );
            })}
          </ul>
          <div className="ae-price__axis" aria-hidden="true">
            {ticks.map((t) => (
              <span key={t} className="ae-price__tick" style={{ left: pct(t) }}>
                {t === max ? `${t} min` : t}
              </span>
            ))}
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
