import Image from "next/image";
import Link from "next/link";
import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import { packageById } from "@/data/pilgrimage/packages";
import "./koshi-guide.css";

type TourCard = {
  title: string;
  meta: string;
  text: string;
  href: string;
  image: string;
  alt: string;
};

/** Existing Karvaahh tour pages that cover Koshi Province. */
const tours: TourCard[] = [
  {
    title: "Everest Base Camp Trek",
    meta: "Trekking · Solukhumbu",
    text: "The classic trail via Namche Bazaar and Tengboche to the foot of Everest and the Kala Patthar viewpoint.",
    href: "/adventure/everest-base-camp-trek",
    image: "/koshi/everest-base-camp.jpg",
    alt: "Mount Everest, Nuptse and the Khumbu Glacier at dawn, seen from the Kala Patthar area",
  },
  {
    title: "Everest Three Passes Trek",
    meta: "Trekking · Solukhumbu",
    text: "A challenging circuit over three high passes, linking Gokyo's lakes with Everest Base Camp.",
    href: "/adventure/everest-three-passes-trek",
    image: "/images/home/solukhumbu-everest-region-nepal.webp",
    alt: "Turquoise Gokyo Lake and village beside the Ngozumpa Glacier in the Everest region",
  },
  {
    title: "Everest Base Camp Helicopter Tour",
    meta: "Helicopter · From Kathmandu",
    text: "See the Khumbu glaciers and Everest up close on a short helicopter journey from Kathmandu — no trekking required.",
    href: "/activities/helicopter-tours/everest-base-camp",
    image: "/koshi/cholatse-peak.jpg",
    alt: "Cholatse and Taboche peaks above a glacial river valley in Sagarmatha National Park",
  },
];

const eastern = packageById("eastern-circuit");
if (eastern?.image?.src) {
  tours.push({
    title: eastern.title,
    meta: eastern.category,
    text: eastern.description,
    href: "/packages/nepal/spiritual-pilgrimage-tours#packages",
    image: eastern.image.src,
    alt: eastern.image.alt,
  });
}

export default function KoshiPackages() {
  return (
    <section
      id="packages"
      className="koshi-guide koshi-guide--cream"
      aria-labelledby="koshi-packages-title"
    >
      <div className="koshi-shell">
        <KoshiSectionHeading
          eyebrow="FEATURED TOURS"
          titleId="koshi-packages-title"
          title={
            <>
              Journeys through <em>Koshi.</em>
            </>
          }
        />

        <ul className="koshi-guide__grid koshi-guide__grid--4 koshi-guide__packages">
          {tours.map((tour) => (
            <li key={tour.href} className="koshi-guide__package koshi-reveal">
              <div className="koshi-guide__package-media">
                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="koshi-guide__package-image"
                />
              </div>
              <div className="koshi-guide__package-body">
                <p className="koshi-guide__circuit-style">{tour.meta}</p>
                <h3>{tour.title}</h3>
                <p>{tour.text}</p>
                <Link href={tour.href} className="koshi-guide__link">
                  View tour <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
