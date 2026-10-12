import { LegalBreadcrumb } from "./LegalBreadcrumb";
import { LegalIcon } from "./LegalIcon";
import { LegalLastUpdated } from "./LegalLastUpdated";

interface LegalHeroProps {
  /** Short breadcrumb label. */
  breadcrumbLabel: string;
  title: string;
  headline: string;
  subtitle: string;
  /** DOM id of the content area the scroll indicator points to. */
  contentId: string;
}

/**
 * Server component — all motion is CSS (see legal.css) and is disabled under
 * prefers-reduced-motion, which leaves a fully drawn static composition.
 */
export function LegalHero({
  breadcrumbLabel,
  title,
  headline,
  subtitle,
  contentId,
}: LegalHeroProps) {
  return (
    <header className="legal-hero">
      <div className="legal-hero__art" aria-hidden="true">
        {/* Minimal mountain-contour pattern */}
        <svg
          className="legal-hero__contours"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMaxYMax slice"
          focusable="false"
        >
          <g fill="none" strokeWidth="1">
            <path d="M-20 430 C 120 380, 220 400, 330 340 S 540 250, 640 300 S 860 380, 1000 300 S 1180 220, 1230 250" />
            <path d="M-20 455 C 130 410, 230 428, 345 372 S 550 285, 650 332 S 870 408, 1010 332 S 1185 256, 1230 282" />
            <path d="M-20 480 C 140 440, 240 456, 360 404 S 560 320, 660 364 S 880 436, 1020 364 S 1190 292, 1230 314" />
            <path d="M-20 505 C 150 470, 250 484, 375 436 S 570 355, 670 396 S 890 464, 1030 396 S 1195 328, 1230 346" />
            <path d="M120 330 C 200 270, 280 250, 360 270 S 480 330, 560 300" />
            <path d="M160 350 C 230 300, 290 284, 360 300 S 460 345, 530 322" />
            <path d="M700 250 C 770 180, 850 150, 930 175 S 1050 235, 1130 205" />
            <path d="M740 270 C 800 215, 865 192, 930 212 S 1030 258, 1100 235" />
          </g>
        </svg>

        {/* Animated route line with waypoints */}
        <svg
          className="legal-hero__route"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMaxYMax slice"
          focusable="false"
        >
          <path
            className="legal-hero__route-guide"
            d="M520 430 C 640 430, 660 290, 790 312 S 950 420, 1015 292 S 1100 150, 1150 138"
            fill="none"
          />
          <path
            className="legal-hero__route-line"
            d="M520 430 C 640 430, 660 290, 790 312 S 950 420, 1015 292 S 1100 150, 1150 138"
            fill="none"
            pathLength={1}
          />
          <circle className="legal-hero__waypoint" cx="520" cy="430" r="5" />
          <circle className="legal-hero__waypoint legal-hero__waypoint--mid" cx="790" cy="312" r="4" />
          <circle className="legal-hero__waypoint legal-hero__waypoint--mid2" cx="1015" cy="292" r="4" />
          <circle className="legal-hero__waypoint legal-hero__waypoint--end" cx="1150" cy="138" r="6" />
        </svg>

        <div className="legal-hero__compass">
          <svg viewBox="0 0 200 200" focusable="false">
            <circle cx="100" cy="100" r="92" fill="none" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" strokeWidth="1" strokeDasharray="2 6" />
            <path d="M100 12 L108 100 L100 188 L92 100 Z" fill="none" strokeWidth="1" />
            <path d="M12 100 L100 92 L188 100 L100 108 Z" fill="none" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="legal-hero__inner">
        <LegalBreadcrumb current={breadcrumbLabel} />

        <p className="legal-hero__eyebrow">
          <LegalIcon name="compass" size={16} />
          <span>Legal / Trust</span>
        </p>

        <h1 className="legal-hero__title">{title}</h1>
        <p className="legal-hero__headline">{headline}</p>
        <p className="legal-hero__subtitle">{subtitle}</p>

        <div className="legal-hero__meta">
          <LegalLastUpdated />
        </div>
      </div>

      <a className="legal-hero__scroll" href={`#${contentId}`}>
        <span className="legal-hero__scroll-label">Scroll to read</span>
        <span className="legal-hero__scroll-line" aria-hidden="true" />
      </a>
    </header>
  );
}
