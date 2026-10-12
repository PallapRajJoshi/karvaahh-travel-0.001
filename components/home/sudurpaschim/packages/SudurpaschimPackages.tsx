import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-packages.css";

// Only existing Karvaahh pages are listed here; add new far-west packages as
// their pages go live.
const packages = [
  {
    title: "Api Nampa Base Camp Trek",
    type: "Trek · Darchula",
    description:
      "A remote Himalayan trek through the Api Nampa Conservation Area to the foot of Api Himal.",
    image: "/sudurpaschim/api-base-camp.jpg",
    alt: "Trekkers approaching Api Base Camp in Darchula",
    href: "/adventure/api-nampa-base-camp-trek",
  },
  {
    title: "Saipal Base Camp",
    type: "Offbeat Trek · Bajhang",
    description:
      "Long valley approaches and wild camps beneath the Saipal massif, for experienced trekkers.",
    image: "/sudurpaschim/bajhang.jpg",
    alt: "Himalayan village in the Bungal Valley, Bajhang",
    href: "/offbeat-unexplored/saipal-base-camp",
  },
  {
    title: "Khaptad National Park",
    type: "Nature & Spiritual · Doti",
    description:
      "Meadow walks, the Khaptad Baba Ashram and quiet forest trails on the far west's sacred plateau.",
    image: "/sudurpaschim/khaptad.jpg",
    alt: "Highland meadows of Khaptad National Park",
    href: "/offbeat-unexplored/khaptad-national-park",
  },
  {
    title: "Spiritual & Pilgrimage Tours",
    type: "Pilgrimage · Nepal",
    description:
      "Guided temple and pilgrimage journeys that can be tailored to Badimalika, Shaileshwari and Ugratara.",
    image: "/sudurpaschim/badimalika.jpg",
    alt: "Badimalika Temple in the Bajura highlands",
    href: "/packages/nepal/spiritual-pilgrimage-tours",
  },
  {
    title: "Wildlife & Nature Experiences",
    type: "Wildlife · Terai",
    description:
      "Safaris, birding and nature walks, including the grasslands of Shuklaphanta and the Ghodaghodi wetlands.",
    image: "/sudurpaschim/wildlife.jpg",
    alt: "Grassland habitat at Shuklaphanta National Park",
    href: "/activities/wildlife-nature",
  },
];

export default function SudurpaschimPackages() {
  return (
    <section
      id="sp-packages"
      className="sp-packages"
      aria-labelledby="sp-packages-heading"
    >
      <div className="sp-container sp-packages__inner">
        <SudurpaschimSectionHeading
          id="sp-packages-heading"
          index="12"
          eyebrow="Featured Journeys"
          heading="Ready-made ways into the far west."
          description="Start with one of our existing trips, or ask us to combine them into a custom Sudurpashchim itinerary."
          theme="dark"
        />

        <ul className="sp-packages__grid">
          {packages.map((pkg, i) => (
            <li
              key={pkg.href}
              className="sp-package"
              data-reveal
              style={{ "--d": i } as CSSProperties}
            >
              <Link href={pkg.href} className="sp-package__link">
                <div className="sp-package__media">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 20vw"
                    className="sp-package__image"
                  />
                </div>
                <div className="sp-package__body">
                  <span className="sp-package__type">{pkg.type}</span>
                  <h3 className="sp-package__title">{pkg.title}</h3>
                  <p className="sp-package__desc">{pkg.description}</p>
                  <span className="sp-package__cta">
                    View Journey <span className="sp-arrow">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
