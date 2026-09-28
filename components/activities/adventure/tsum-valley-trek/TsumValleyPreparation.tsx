import { DIFFICULTY, PREPARATION, SAFETY_NOTE } from "@/data/destinations/tsum-valley/content";
import type { TsumPrepItem } from "@/data/destinations/tsum-valley/types";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { Alert, Boot, Calendar, Droplet, FirstAid, Hands, Heart, Mountain, Shield, Signal, Umbrella } from "./shared/Icons";
import "./TsumValleyPreparation.css";

const ICONS: Record<TsumPrepItem["icon"], typeof Heart> = {
  fitness: Heart,
  days: Calendar,
  altitude: Mountain,
  boots: Boot,
  rain: Umbrella,
  water: Droplet,
  firstaid: FirstAid,
  insurance: Shield,
  signal: Signal,
  respect: Hands,
};

/** Four-step scale; the active step is derived from the configurable rating. */
const SCALE = ["Easy", "Moderate", "Challenging", "Strenuous"];

export default function TsumValleyPreparation() {
  const activeStep = Math.max(0, SCALE.findIndex((s) => s.toLowerCase() === DIFFICULTY.rating.toLowerCase()));

  return (
    <section className="tsum-section tsum-prep" id="preparation" aria-labelledby="tsum-prep-title">
      <div className="tsum-container">
        <div className="tsum-prep__top">
          <SectionHeading
            id="tsum-prep-title"
            eyebrow="Trek difficulty"
            title="Prepare for Your Remote Himalayan Adventure"
          />

          <Reveal className="tsum-prep__difficulty">
            <p className="tsum-prep__diff-label">Difficulty</p>
            <p className="tsum-prep__diff-rating">{DIFFICULTY.rating}</p>
            <ol className="tsum-prep__scale" aria-label={`Difficulty scale: ${DIFFICULTY.rating}`}>
              {SCALE.map((step, i) => (
                <li
                  key={step}
                  className={`tsum-prep__step${i <= activeStep ? " is-filled" : ""}`}
                  aria-current={i === activeStep ? "step" : undefined}
                >
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="tsum-prep__diff-text">{DIFFICULTY.summary}</p>
          </Reveal>
        </div>

        <ul className="tsum-prep__grid">
          {PREPARATION.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal as="li" key={item.title} className="tsum-prep__item" delay={(i % 5) * 60}>
                <span className="tsum-prep__icon"><Icon /></span>
                <h3 className="tsum-prep__title">{item.title}</h3>
                <p className="tsum-prep__body">{item.body}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal as="aside" className="tsum-prep__safety" aria-labelledby="tsum-safety-title">
          <span className="tsum-prep__safety-icon"><Alert /></span>
          <div>
            <h3 className="tsum-prep__safety-title" id="tsum-safety-title">{SAFETY_NOTE.title}</h3>
            <p>{SAFETY_NOTE.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
