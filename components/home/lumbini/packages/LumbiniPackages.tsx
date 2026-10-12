import Image from "next/image";
import Link from "next/link";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { packageById } from "@/data/pilgrimage/packages";
import "./lumbini-packages.css";

const PACKAGES_PAGE = "/packages/nepal/spiritual-pilgrimage-tours#packages";
const FALLBACK_IMAGE = "/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg";

/** Existing Karvaahh packages that include Lumbini, in display order. */
const FEATURED_IDS = ["lumbini-circuit", "pashupati-janakpur-lumbini-7n8d", "buddhist-tour"];

export default function LumbiniPackages() {
  const packages = FEATURED_IDS.map(packageById).filter((pkg) => pkg !== undefined);

  return (
    <section className="lumbini-packages" id="packages" aria-labelledby="lumbini-packages-title">
      <div className="lumbini-packages__inner">
        <LumbiniSectionHeading
          index="13"
          eyebrow="Featured Tours"
          heading="Journeys that include"
          emphasis="Lumbini."
          titleId="lumbini-packages-title"
          theme="dark"
        />

        <ul className="lumbini-packages__grid">
          {packages.map((pkg) => (
            <li key={pkg.id} className="lumbini-package-card lumbini-reveal">
              <div className="lumbini-package-card__media">
                <Image
                  src={pkg.image?.src ?? FALLBACK_IMAGE}
                  alt={pkg.image?.alt ?? pkg.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="lumbini-package-card__image"
                />
              </div>
              <div className="lumbini-package-card__body">
                <p className="lumbini-package-card__meta">
                  {pkg.category} · {pkg.duration}
                </p>
                <h3 className="lumbini-package-card__title">{pkg.title}</h3>
                <p className="lumbini-package-card__text">{pkg.description}</p>
                <Link href={PACKAGES_PAGE} className="lumbini-package-card__link">
                  View package <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          ))}

          <li className="lumbini-package-card lumbini-package-card--custom lumbini-reveal">
            <div className="lumbini-package-card__body">
              <p className="lumbini-package-card__meta">Tailor-made</p>
              <h3 className="lumbini-package-card__title">Design your own Lumbini Province trip</h3>
              <p className="lumbini-package-card__text">
                Combine Lumbini with Tansen, Bardiya, Swargadwari or the
                western hills at your own pace — we handle routes, stays and
                border logistics.
              </p>
              <Link href="/contact" className="lumbini-package-card__link">
                Plan with us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
