import React from "react";
import Image from "next/image";
import Link from "next/link";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import { packageById } from "@/data/pilgrimage/packages";
import { getHelicopterTour } from "@/data/helicopter-tours";
import "./bagmati-packages.css";

const VALLEY_TOURS = "/packages/nepal/spiritual-pilgrimage-tours#packages";
const LANGTANG_TREK = "/adventure/langtang-valley-trek";

interface Card {
  id: string;
  meta: string;
  title: string;
  text: string;
  image: { src: string; alt: string };
  href: string;
}

/** Existing Karvaahh packages covering Bagmati — no prices or availability are shown here. */
function featuredPackages(): Card[] {
  const valley = ["ktm-spiritual-3n4d", "ktm-temple-1n2d", "pashupatinath-darshan"]
    .map(packageById)
    .filter((pkg) => pkg !== undefined)
    .map<Card>((pkg) => ({
      id: pkg.id,
      meta: `${pkg.category} · ${pkg.duration}`,
      title: pkg.title,
      text: pkg.description,
      image: pkg.image?.src
        ? { src: pkg.image.src, alt: pkg.image.alt }
        : { src: "/images/bagmati/kathmandu-durbar-square-heritage-city-bagmati-nepal.jpg", alt: pkg.title },
      href: pkg.href ?? VALLEY_TOURS,
    }));

  const gosaikunda = getHelicopterTour("gosaikunda");

  return [
    ...valley,
    {
      id: "langtang-valley-trek",
      meta: "Trekking · Customisable",
      title: "Langtang Valley Trek",
      text: "Tamang villages, Kyanjin Gompa and glacier views on the closest classic trek to Kathmandu.",
      image: {
        src: "/images/bagmati/langtang-valley-rasuwa-himalayan-mountains-trekking-nepal.jpg",
        alt: "Trekkers in the Langtang Valley",
      },
      href: LANGTANG_TREK,
    },
    ...(gosaikunda
      ? [
          {
            id: "gosaikunda-helicopter",
            meta: "Helicopter · Pilgrimage",
            title: gosaikunda.title,
            text: "Fly from Kathmandu to the sacred Gosaikunda Lake for Langtang Himalayan views — ideal when time or fitness rules out the trek.",
            image: {
              src: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg",
              alt: "Gosaikunda Lake in the Langtang Himalaya",
            },
            href: gosaikunda.path,
          },
        ]
      : []),
  ];
}

export default function BagmatiPackages() {
  const packages = featuredPackages();

  return (
    <section className="bagmati-packages" id="packages" aria-label="Featured Bagmati tour packages">
      <BagmatiSectionHeading
        eyebrow="Featured Tours"
        heading={
          <>
            Journeys through <em>Bagmati</em>
          </>
        }
        description="Kathmandu Valley heritage, Langtang trekking and sacred-lake pilgrimages — every package is tailored to your dates, group and pace."
      />

      <ul className="bagmati-packages__grid">
        {packages.map((pkg) => (
          <li key={pkg.id} className="bagmati-package bagmati-reveal">
            <div className="bagmati-package__media">
              <Image
                src={pkg.image.src}
                alt={pkg.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="bagmati-package__image"
              />
            </div>
            <div className="bagmati-package__body">
              <p className="bagmati-package__meta">{pkg.meta}</p>
              <h3 className="bagmati-package__title">{pkg.title}</h3>
              <p className="bagmati-package__text">{pkg.text}</p>
              <Link href={pkg.href} className="bagmati-package__link">
                View package<span className="bagmati-sr"> — {pkg.title}</span>
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </li>
        ))}

        <li className="bagmati-package bagmati-package--custom bagmati-reveal">
          <div className="bagmati-package__body">
            <p className="bagmati-package__meta">Tailor-made</p>
            <h3 className="bagmati-package__title">Design your own Bagmati journey</h3>
            <p className="bagmati-package__text">
              Family holidays, Kathmandu–Chitwan combinations, Tamang Heritage
              Trail homestays or a Gosaikunda pilgrimage — tell us how you like
              to travel and we&apos;ll plan routes, stays and transfers.
            </p>
            <Link href="/contact?province=bagmati" className="bagmati-package__link">
              Plan with us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
