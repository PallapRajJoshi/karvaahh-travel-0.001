import { Info, Sparkles } from "lucide-react";
import type { FeatureSectionConfig } from "@/data/russia/content";
import { russiaImage } from "@/data/russia/images";
import { russiaPackageById, type RussiaPackage } from "@/data/russia/packages";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import FeaturePackages from "./FeaturePackages";
import Snowfall from "./Snowfall";

/**
 * One layout for every destination/collection story on the Russia page
 * (Moscow, Saint Petersburg, Golden Ring, Kazan, Sochi, Murmansk, Baikal,
 * Honeymoon, Family...). Content comes from data/russia/content.ts; packages
 * are picked by id from data/russia/packages.ts, so nothing is duplicated.
 */
export default function FeatureSection({ config: c }: { config: FeatureSectionConfig }) {
  const packages = c.packageIds
    .map((id) => russiaPackageById(id))
    .filter((p): p is RussiaPackage => Boolean(p?.active));
  const images = c.images.map((id) => russiaImage(id)).filter((i) => !!i);
  const dark = c.tone === "dark" || c.tone === "arctic";
  const headingId = `${c.id}-h`;

  return (
    <section
      className={`pkg-section ru-feature ru-feature--${c.tone}${c.flagship ? " ru-feature--flagship" : ""}`}
      id={c.id}
      aria-labelledby={headingId}
    >
      {c.tone === "arctic" && (
        <div className="ru-feature__sky" aria-hidden="true">
          <span className="ru-aurora ru-aurora--a" />
          <span className="ru-aurora ru-aurora--b" />
          <Snowfall className="ru-snow--soft" />
        </div>
      )}
      <div className="pkg-container">
        <div className={`ru-feature__grid${images.length ? "" : " ru-feature__grid--noimg"}`}>
          {images.length > 0 && (
            <Reveal className={`ru-feature__media ru-feature__media--${Math.min(images.length, 3)}`}>
              {images.slice(0, 3).map((img, i) => (
                <div key={img.src} className={`ru-feature__img ru-feature__img--${i + 1}`}>
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    sizes={i === 0 ? "(min-width: 1024px) 45vw, 92vw" : "(min-width: 1024px) 22vw, 45vw"}
                    className="asia-media__img"
                  />
                </div>
              ))}
            </Reveal>
          )}

          <div className="ru-feature__copy">
            <p className={`asia-eyebrow${dark ? " asia-eyebrow--light" : ""}`}>{c.eyebrow}</p>
            <h2 id={headingId} className={`pkg-h2${dark ? " pkg-h2--light" : ""}${c.flagship ? " ru-h2--xl" : ""}`}>{c.title}</h2>
            <p className={`pkg-lede${dark ? " pkg-lede--light" : ""}`}>{c.intro}</p>

            <h3 className="ru-feature__h3">{c.highlightsTitle}</h3>
            <ul className="ru-highlights">
              {c.highlights.map((h, i) => (
                <li key={h} style={{ "--i": i } as React.CSSProperties}>
                  <Sparkles size={13} aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>

            {c.callout && (
              <div className="ru-callout">
                <p className="ru-callout__title">{c.callout.title}</p>
                <p>{c.callout.text}</p>
              </div>
            )}
            {c.notes?.map((n) => (
              <p key={n} className="ru-note">
                <Info size={14} aria-hidden="true" /> {n}
              </p>
            ))}
          </div>
        </div>

        {packages.length > 0 && (
          <div className="ru-feature__packages">
            <h3 className="ru-feature__pkgh">{c.packagesTitle}</h3>
            <FeaturePackages packages={packages} tabs={c.tabs} label={c.packagesTitle} dark={dark} />
          </div>
        )}
      </div>
    </section>
  );
}
