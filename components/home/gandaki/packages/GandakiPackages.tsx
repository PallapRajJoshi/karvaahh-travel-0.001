import Image from "next/image";
import Link from "next/link";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import { packageById } from "@/data/pilgrimage/packages";
import "./gandaki-packages.css";

interface FeaturedTour {
  id: string;
  meta: string;
  title: string;
  text: string;
  href: string;
  image: { src: string; alt: string };
}

const PILGRIMAGE_PAGE = "/packages/nepal/spiritual-pilgrimage-tours#packages";

/** Existing pilgrimage packages that run through Gandaki, in display order. */
const PILGRIMAGE_IDS = ["ktm-pokhara-muktinath-5n6d", "pashupati-manakamana-pokhara-4n5d"];

/** Existing trek and helicopter pages set in Gandaki. */
const ADVENTURE_TOURS: FeaturedTour[] = [
  {
    id: "manang-circuit-trek",
    meta: "Trek · 16 days",
    title: "Manang Circuit Trek",
    text: "Chame, Pisang and Manang, a side trip to Tilicho Lake and the crossing of Thorong La, with an acclimatisation day built in.",
    href: "/packages/manang-circuit-trek",
    image: {
      src: "/images/gandaki/manang-village-annapurna-mountain-wall-gandaki-nepal.jpg",
      alt: "Manang valley village beneath eroded cliffs on the Annapurna Circuit",
    },
  },
  {
    id: "mustang-circuit-trek",
    meta: "Trek · Upper Mustang",
    title: "Mustang Circuit Trek",
    text: "Into the hidden kingdom of Lo — cliffside villages, painted monasteries and the walled town of Lo Manthang.",
    href: "/adventure/mustang-circuit-trek",
    image: {
      src: "/images/gandaki/lo-manthang-walled-city-upper-mustang-gandaki-nepal.jpg",
      alt: "Whitewashed houses and chortens inside the walled town of Lo Manthang",
    },
  },
  {
    id: "upper-mustang-helicopter",
    meta: "Helicopter · from Pokhara",
    title: "Upper Mustang Helicopter Tour",
    text: "Fly up the Kali Gandaki to Mustang's high desert, walled villages and cliffside monasteries in a single day.",
    href: "/activities/helicopter-tours/upper-mustang",
    image: {
      src: "/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg",
      alt: "Monastery on a desert ridge in Mustang beneath snow peaks",
    },
  },
];

export default function GandakiPackages() {
  const pilgrimageTours: FeaturedTour[] = PILGRIMAGE_IDS.map(packageById)
    .filter((pkg) => pkg !== undefined)
    .map((pkg) => ({
      id: pkg.id,
      meta: `${pkg.category} · ${pkg.duration}`,
      title: pkg.title,
      text: pkg.description,
      href: PILGRIMAGE_PAGE,
      image: {
        src: pkg.image?.src ?? "/images/home/muktinath-temple.jpg",
        alt: pkg.image?.alt ?? pkg.title,
      },
    }));

  const tours = [...pilgrimageTours, ...ADVENTURE_TOURS];

  return (
    <section className="gandaki-packages" id="packages" aria-labelledby="gandaki-packages-title">
      <div className="gandaki-packages__inner">
        <GandakiSectionHeading
          index="12"
          eyebrow="FEATURED TOURS"
          heading="Journeys through"
          emphasis="Gandaki."
          titleId="gandaki-packages-title"
          description="Pilgrimages, treks and scenic flights from our existing programmes — each one adjustable to your pace and group."
        />

        <ul className="gandaki-packages__grid">
          {tours.map((tour) => (
            <li key={tour.id} className="gandaki-package-card gandaki-reveal">
              <div className="gandaki-package-card__media">
                <Image
                  src={tour.image.src}
                  alt={tour.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="gandaki-package-card__image"
                />
              </div>
              <div className="gandaki-package-card__body">
                <p className="gandaki-package-card__meta">{tour.meta}</p>
                <h3 className="gandaki-package-card__title">{tour.title}</h3>
                <p className="gandaki-package-card__text">{tour.text}</p>
                <Link href={tour.href} className="gandaki-package-card__link">
                  View tour <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          ))}

          <li className="gandaki-package-card gandaki-package-card--custom gandaki-reveal">
            <div className="gandaki-package-card__body">
              <p className="gandaki-package-card__meta">Tailor-made</p>
              <h3 className="gandaki-package-card__title">Design your own Gandaki journey</h3>
              <p className="gandaki-package-card__text">
                Combine Pokhara, Muktinath, Bandipur, Gorkha or a trek at your own pace — we
                handle permits, transport, stays and guides.
              </p>
              <Link href="/contact" className="gandaki-package-card__link">
                Plan with us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
