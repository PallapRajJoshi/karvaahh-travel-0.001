import type { CSSProperties } from "react";
import { altitudeProfile as p } from "./data/skydivingData";
import "./AltitudeGauge.css";

const fmt = new Intl.NumberFormat("en-IN");
const pct = (alt: number) => ((alt - p.scaleMin) / (p.scaleMax - p.scaleMin)) * 100;
const at = (alt: number) => ({ "--at": `${pct(alt)}%` }) as CSSProperties;

/** Vertical altimeter: exit band, Everest summit reference, Syangboche landing. */
export default function AltitudeGauge() {
  const bandStyle = { "--from": `${pct(p.exitMin)}%`, "--len": `${pct(p.exitMax) - pct(p.exitMin)}%` } as CSSProperties;
  const dropStyle = { "--from": `${pct(p.landing)}%`, "--len": `${pct(p.exitMin) - pct(p.landing)}%` } as CSSProperties;

  return (
    <figure className="sky-gauge">
      <p className="sky-gauge__big">
        <span className="sky-gauge__big-value">{p.descentLabel}</span>
        <span className="sky-gauge__big-caption">{p.descentCaption}</span>
      </p>

      <div className="sky-gauge__scale" aria-hidden="true">
        <span className="sky-gauge__track" />
        <span className="sky-gauge__drop" style={dropStyle} />
        <span className="sky-gauge__band" style={bandStyle} />
        <span className="sky-gauge__ref" style={at(p.reference.value)} />

        <span className="sky-gauge__mark sky-gauge__mark--right" style={at(p.exitMax)}>
          <span className="sky-gauge__value">
            ~{fmt.format(p.exitMin)}–{fmt.format(p.exitMax)} m
          </span>
          <span className="sky-gauge__label">Exit</span>
        </span>
        <span className="sky-gauge__mark sky-gauge__mark--left" style={at(p.reference.value)}>
          <span className="sky-gauge__value">{fmt.format(p.reference.value)} m</span>
          <span className="sky-gauge__label">{p.reference.label}</span>
        </span>
        <span className="sky-gauge__mark sky-gauge__mark--right" style={at(p.landing)}>
          <span className="sky-gauge__value">~{fmt.format(p.landing)} m</span>
          <span className="sky-gauge__label">Syangboche landing</span>
        </span>
      </div>

      <figcaption className="sky-sr-only">
        Everest Skydive altitude profile: exit at approximately {fmt.format(p.exitMin)} to {fmt.format(p.exitMax)} metres,
        compared with the Everest summit at {fmt.format(p.reference.value)} metres, landing at approximately{" "}
        {fmt.format(p.landing)} metres at Syangboche.
      </figcaption>
    </figure>
  );
}
