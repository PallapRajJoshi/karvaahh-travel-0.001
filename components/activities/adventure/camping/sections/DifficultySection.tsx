"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import SectionHeading from "../shared/SectionHeading";
import { byDifficulty, type Difficulty } from "@/data/campingDestinations";
import { difficultyLevels } from "@/data/campingContent";
import "./DifficultySection.css";

// Three peaks, rising left to right (viewBox 600 × 220).
const PEAKS: Record<Difficulty, string> = {
  Easy: "M20 210 C70 190 110 150 150 150 C190 150 220 190 260 210Z",
  Moderate: "M160 210 C210 180 250 100 300 95 C350 90 380 170 440 210Z",
  Challenging: "M330 210 C380 170 430 40 480 20 C520 10 550 140 590 210Z",
};

export default function DifficultySection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const level = difficultyLevels[active];
  const examples = byDifficulty(level.level).map((d) => d.name);

  const onKey = (e: KeyboardEvent) => {
    const n = difficultyLevels.length;
    let next = active;
    if (e.key === "ArrowRight") next = (active + 1) % n;
    else if (e.key === "ArrowLeft") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="difficulty" className="cmp-section cmp-section--snow cmp-diff" aria-labelledby="cmp-diff-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-diff-title"
          kicker="Camping by difficulty"
          title="Choose Your Level"
          lead="From a night on the valley rim to weeks in high, remote country."
        />

        <div className="cmp-diff__wrap">
          <div className="cmp-diff__visual" aria-hidden="true">
            <svg viewBox="0 0 600 220" className="cmp-diff__svg">
              <line x1="0" y1="210" x2="600" y2="210" className="cmp-diff__ground" />
              {difficultyLevels.map((l, i) => (
                <path key={l.level} d={PEAKS[l.level]} className={`cmp-diff__peak ${i === active ? "is-active" : ""} ${i < active ? "is-past" : ""}`} />
              ))}
              <path d="M480 20 L495 45 L487 43 L480 52 L472 42 L465 44Z" className="cmp-diff__snow" />
            </svg>
          </div>

          <div>
            <div className="cmp-diff__tabs" role="tablist" aria-label="Difficulty levels" onKeyDown={onKey}>
              {difficultyLevels.map((l, i) => (
                <button
                  key={l.level}
                  ref={(el) => { tabs.current[i] = el; }}
                  role="tab"
                  type="button"
                  id={`cmp-diff-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="cmp-diff-panel"
                  tabIndex={i === active ? 0 : -1}
                  className="cmp-diff__tab"
                  onClick={() => setActive(i)}
                >
                  <span className="cmp-diff__tab-level">{l.level}</span>
                  <span className="cmp-diff__tab-sum">{l.summary}</span>
                </button>
              ))}
            </div>

            <div id="cmp-diff-panel" role="tabpanel" aria-labelledby={`cmp-diff-tab-${active}`} className="cmp-diff__panel" key={level.level}>
              <p className="cmp-diff__alt">{level.altitude}</p>
              <p className="cmp-diff__detail">{level.detail}</p>
              <p className="cmp-diff__ex-label">Destinations at this level</p>
              <p className="cmp-diff__examples">{examples.join(" • ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
