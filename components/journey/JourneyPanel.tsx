'use client';

import Image from 'next/image';
import { forwardRef, useState } from 'react';

import type { JourneyStop } from '@/data/journey/nepalJourney';
import './JourneyPanel.css';

interface JourneyPanelProps {
  stop: JourneyStop;
  index: number;
  total: number;
  /** Road distance travelled from the first stop, in km. */
  distanceKm: number;
  /** Only the active panel is exposed to assistive tech and hit-testing. */
  isActive: boolean;
}

const JourneyPanel = forwardRef<HTMLElement, JourneyPanelProps>(function JourneyPanel(
  { stop, index, total, distanceKm, isActive },
  ref,
) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(stop.image) && !imageFailed;

  return (
    <article
      ref={ref}
      className="jm-panel"
      id={`journey-${stop.id}`}
      aria-hidden={!isActive}
      // `inert` is not in React 18's JSX types; spreading keeps it valid in both 18 and 19.
      {...(isActive ? {} : { inert: '' })}
    >
      <figure className="jm-panel__figure" data-empty={showImage ? undefined : ''}>
        <div className="jm-panel__frame" data-parallax>
          {showImage ? (
            <Image
              src={stop.image!.src}
              alt={stop.image!.alt}
              fill
              sizes="(max-width: 880px) 92vw, 34vw"
              className="jm-panel__image"
              priority={index === 0}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="jm-panel__placeholder" aria-hidden="true">
              {stop.name}
            </span>
          )}
        </div>
      </figure>

      <div className="jm-panel__body">
        <p className="jm-panel__step" data-reveal>
          Stop {index + 1} of {total}
        </p>

        <h3 className="jm-panel__name">
          <span className="jm-panel__mask">
            <span className="jm-panel__line" data-reveal>
              {stop.name}
            </span>
          </span>
        </h3>

        <p className="jm-panel__region" data-reveal>
          {stop.region}
        </p>

        <p className="jm-panel__blurb" data-reveal>
          {stop.blurb}
        </p>

        <ul className="jm-panel__notes">
          {stop.notes.map((note) => (
            <li key={note} className="jm-panel__note" data-reveal>
              {note}
            </li>
          ))}
        </ul>

        <dl className="jm-panel__meta" data-reveal>
          <div className="jm-panel__meta-item">
            <dt>Nights</dt>
            <dd>{stop.nights}</dd>
          </div>
          <div className="jm-panel__meta-item">
            <dt>Elevation</dt>
            <dd>{stop.elevation.toLocaleString('en-IN')} m</dd>
          </div>
          <div className="jm-panel__meta-item">
            <dt>{index === 0 ? 'Start' : 'Travelled'}</dt>
            <dd>{index === 0 ? '0 km' : `${distanceKm.toLocaleString('en-IN')} km`}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
});

export default JourneyPanel;
