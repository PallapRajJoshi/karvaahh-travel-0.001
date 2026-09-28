'use client';

import { forwardRef } from 'react';

import type { JourneyStop } from '@/data/journey/nepalJourney';
import './JourneyProgress.css';

interface JourneyProgressProps {
  stops: JourneyStop[];
  activeIndex: number;
  /** Scrolls the page to the moment that stop settles. */
  onSelect: (index: number) => void;
}

/**
 * The fill is driven by a `--jm-progress` custom property written straight
 * onto the root by the scroll timeline, so scrolling never re-renders React.
 */
const JourneyProgress = forwardRef<HTMLElement, JourneyProgressProps>(function JourneyProgress(
  { stops, activeIndex, onSelect },
  ref,
) {
  return (
    <nav ref={ref} className="jm-progress" aria-label="Journey stops">
      <span className="jm-progress__track" aria-hidden="true">
        <span className="jm-progress__fill" />
      </span>

      <ol className="jm-progress__list">
        {stops.map((stop, index) => {
          const state =
            index === activeIndex ? 'current' : index < activeIndex ? 'visited' : 'ahead';

          return (
            <li key={stop.id} className="jm-progress__item" data-state={state}>
              <button
                type="button"
                className="jm-progress__button"
                onClick={() => onSelect(index)}
                aria-current={index === activeIndex ? 'step' : undefined}
              >
                <span className="jm-progress__tick" aria-hidden="true" />
                <span className="jm-progress__name">{stop.name}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
});

export default JourneyProgress;
