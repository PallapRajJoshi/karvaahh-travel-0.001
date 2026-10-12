import Image from "next/image";
import Link from "next/link";
import "./gandaki-adventure.css";

/** `href` is set only where a dedicated Karvaahh page already exists. */
const routes: { name: string; href?: string }[] = [
  { name: "Annapurna Circuit & Manang", href: "/packages/manang-circuit-trek" },
  { name: "Upper Mustang", href: "/adventure/mustang-circuit-trek" },
  { name: "Tsum Valley", href: "/adventure/tsum-valley-trek" },
  { name: "Annapurna Base Camp" },
  { name: "Manaslu Circuit" },
  { name: "Poon Hill & Ghorepani" },
  { name: "Khopra & Mohare Danda" },
  { name: "Tilicho Lake & Thorong La" },
  { name: "Dhaulagiri Circuit" },
];

const activities: { name: string; href?: string }[] = [
  { name: "Paragliding over Pokhara", href: "/activities/adventure/paragliding" },
  { name: "Whitewater rafting", href: "/activities/adventure/rafting" },
  { name: "Bungee jumping & canyon swing", href: "/activities/adventure/bungee-jumping" },
  { name: "Zipline", href: "/activities/adventure/zip-flying" },
  { name: "Camping", href: "/activities/adventure/camping" },
  { name: "Helicopter tours", href: "/activities/helicopter-tours" },
  { name: "Canyoning" },
  { name: "Mountain biking" },
  { name: "Rock climbing" },
];

function AdventureList({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <ul className="gandaki-adventure__list">
      {items.map((item) => (
        <li key={item.name}>
          {item.href ? (
            <Link href={item.href} className="gandaki-adventure__link">
              {item.name} <span aria-hidden="true">↗</span>
            </Link>
          ) : (
            item.name
          )}
        </li>
      ))}
    </ul>
  );
}

export default function GandakiAdventure() {
  return (
    <section className="gandaki-adventure" id="adventure" aria-labelledby="gandaki-adventure-title">
      <div className="gandaki-adventure__media">
        <Image
          src="/images/gandaki/annapurna-circuit-trekking-trail-gandaki-nepal.jpg"
          alt="Trekker on a high Annapurna trail beneath snow-covered peaks"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="gandaki-adventure__image"
        />
      </div>

      <div className="gandaki-adventure__panel gandaki-reveal">
        <span className="gandaki-adventure__index" aria-hidden="true">
          04
        </span>
        <p className="gandaki-adventure__eyebrow">HIGH ROUTES & ADVENTURE</p>
        <h2 id="gandaki-adventure-title" className="gandaki-adventure__title">
          Where the trail
          <em> rises higher.</em>
        </h2>
        <p className="gandaki-adventure__intro">
          The Annapurna region is Nepal&rsquo;s most-trekked mountain area, with teahouse trails
          for every level, while Pokhara&rsquo;s lakes, ridges and rivers make it the
          country&rsquo;s busiest base for paragliding, rafting and bungee.
        </p>

        <div className="gandaki-adventure__columns">
          <div className="gandaki-adventure__column">
            <h3 className="gandaki-adventure__column-title">Signature treks</h3>
            <AdventureList items={routes} />
          </div>
          <div className="gandaki-adventure__column">
            <h3 className="gandaki-adventure__column-title">Activities</h3>
            <AdventureList items={activities} />
          </div>
        </div>

        <Link href="/activities/adventure/hotspots" className="gandaki-adventure__cta">
          Explore adventure hotspots <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
