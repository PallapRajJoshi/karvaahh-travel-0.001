import Image from "next/image";
import Link from "next/link";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import { packageById } from "@/data/pilgrimage/packages";
import "./madhesh-packages.css";

const PACKAGES_PAGE = "/packages/nepal/spiritual-pilgrimage-tours#packages";
const FALLBACK_IMAGE = "/images/madhesh/janaki-mandir.jpg";

/** Existing Karvaahh packages that include Madhesh, in display order. */
const FEATURED_IDS = ["janakpur-darshan", "ramayana-nepal", "pashupati-janakpur-lumbini-7n8d"];

export default function MadheshPackages() {
  const packages = FEATURED_IDS.map(packageById).filter((pkg) => pkg !== undefined);

  return (
    <section className="madhesh-packages" id="packages" aria-labelledby="madhesh-packages-title">
      <div className="madhesh-container">
        <MadheshSectionHeading
          eyebrow="Featured Tours"
          titleId="madhesh-packages-title"
          theme="dark"
          heading={
            <>
              Journeys that include{" "}
              <span className="madhesh-gold-italic">Madhesh.</span>
            </>
          }
        />

        <ul className="madhesh-packages__grid">
          {packages.map((pkg) => (
            <li key={pkg.id} className="madhesh-package-card madhesh-reveal">
              <div className="madhesh-package-card__media">
                <Image
                  src={pkg.image?.src ?? FALLBACK_IMAGE}
                  alt={pkg.image?.alt ?? pkg.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="madhesh-package-card__image"
                />
              </div>
              <div className="madhesh-package-card__body">
                <p className="madhesh-package-card__meta">
                  {pkg.category} · {pkg.duration}
                </p>
                <h3 className="madhesh-package-card__title">{pkg.title}</h3>
                <p className="madhesh-package-card__text">{pkg.description}</p>
                <Link href={PACKAGES_PAGE} className="madhesh-package-card__link">
                  View package <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          ))}

          <li className="madhesh-package-card madhesh-package-card--custom madhesh-reveal">
            <div className="madhesh-package-card__body">
              <p className="madhesh-package-card__meta">Tailor-made</p>
              <h3 className="madhesh-package-card__title">Design your own Madhesh trip</h3>
              <p className="madhesh-package-card__text">
                Combine Janakpurdham with Mithila villages, Simraungadh, Parsa
                or a cross-border Ramayana circuit at your own pace — we handle
                routes, stays and border logistics.
              </p>
              <Link href="/contact" className="madhesh-package-card__link">
                Plan with us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
