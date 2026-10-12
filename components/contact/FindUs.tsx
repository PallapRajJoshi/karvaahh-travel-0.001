import { FIND_US } from "@/lib/contact/content";
import { BRAND_NAME, OFFICE_CITY, type Channels } from "@/lib/contact/channels";
import { ContactIcon } from "./ContactIcon";
import { MapEmbed } from "./MapEmbed";

type Props = { channels: Channels };

/** Stylised topographic placeholder with an animated pin (no tiles, no API). */
function MapArt() {
  return (
    <div className="ct-map__art" aria-hidden="true">
      <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="1200" height="640" fill="var(--ct-ice-100)" />
        <g fill="none" stroke="var(--ct-sky-300)" strokeWidth="1.4" opacity="0.9">
          <path d="M-20 520C120 470 220 560 360 500s240-150 380-120 260 120 480 40" />
          <path d="M-20 450C130 400 230 490 370 430s250-140 390-110 250 110 460 30" />
          <path d="M-20 380C140 330 240 420 380 360s260-130 400-100 240 100 440 20" />
          <path d="M-20 300C150 250 250 340 390 280s270-120 410-90 230 90 420 10" />
          <path d="M-20 220C160 170 260 260 400 200s280-110 420-80 220 80 400 0" />
          <path d="M-20 140C170 90 270 180 410 120s290-100 430-70 210 70 380-10" />
        </g>
        <g fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity="0.95">
          <path d="M-20 330C200 360 380 250 560 300s330 130 680 40" />
          <path d="M520 -20C560 120 640 200 660 320s-40 220 30 340" />
        </g>
        <g fill="none" stroke="var(--ct-sky-300)" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 10" opacity="0.9">
          <path d="M140 600C300 520 420 560 560 470" />
          <path d="M860 90C940 160 1010 150 1100 230" />
        </g>
        <g fill="var(--ct-ice-200)" opacity="0.8">
          <rect x="700" y="400" width="120" height="70" rx="10" />
          <rect x="840" y="410" width="90" height="56" rx="10" />
          <rect x="300" y="120" width="130" height="64" rx="10" />
          <rect x="450" y="130" width="80" height="52" rx="10" />
        </g>
      </svg>
      <span className="ct-map__pin">
        <span className="ct-map__pulse" />
        <span className="ct-map__pulse ct-map__pulse--late" />
        <span className="ct-map__pin-icon">
          <ContactIcon name="pin" size={30} strokeWidth={2} />
        </span>
      </span>
    </div>
  );
}

export function FindUs({ channels }: Props) {
  return (
    <section className="ct-section ct-find" id="find-us" aria-labelledby="ct-find-title">
      <div className="ct-container">
        <header className="ct-heading ct-heading--center" data-reveal>
          <p className="ct-eyebrow ct-eyebrow--dark">Our office</p>
          <h2 id="ct-find-title" className="ct-h2">
            {FIND_US.title}
          </h2>
          <p className="ct-lead">{FIND_US.subtitle}</p>
        </header>

        <div className="ct-map" data-reveal>
          <MapEmbed embedUrl={channels.mapEmbedUrl}>
            <MapArt />
          </MapEmbed>

          <div className="ct-map__card">
            <span className="ct-map__card-icon">
              <ContactIcon name="pin" size={22} />
            </span>
            <div className="ct-map__card-body">
              <h3 className="ct-map__card-title">{BRAND_NAME}</h3>
              <p className="ct-map__card-text">
                {channels.address ? (
                  <>
                    {channels.address}
                    <br />
                  </>
                ) : null}
                {OFFICE_CITY}
              </p>
            </div>
            <a className="ct-btn ct-btn--dark" href={channels.directionsHref} target="_blank" rel="noopener noreferrer">
              Get Directions
              <ContactIcon name="arrow-up-right" size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
