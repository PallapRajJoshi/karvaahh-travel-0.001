import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { HubContext } from "@/lib/destinations/discover-routes";
import { DestinationArt } from "./DestinationArt";
import { HeroSearch } from "./HeroSearch";
import "./hero.css";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/** Full-width hero: immersive image (or themed artwork), headline, search, popular suggestions. */
export function HubHero({ ctx }: { ctx: HubContext }) {
  return (
    <section className="dhero" aria-labelledby="dh-h1">
      <div className="dhero__media">
        {ctx.hero ? (
          <Image src={ctx.hero} alt="" fill priority sizes="100vw" className="dhero__img" />
        ) : (
          <DestinationArt theme="himalaya" seed="karvaahh-hero" alt="" sizes="100vw" />
        )}
      </div>
      <div className="dhero__scrim" aria-hidden="true" />

      <div className="dh-container dhero__inner">
        <nav aria-label="Breadcrumb" className="dhero__crumbs" style={stagger(0)}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Destinations</li>
          </ol>
        </nav>

        <p className="dhero__eyebrow" style={stagger(1)}>
          Karvaahh · Live to Travel
        </p>
        <h1 className="dhero__title" id="dh-h1" style={stagger(2)}>
          Explore the World <em>with Karvaahh</em>
        </h1>
        <p className="dhero__sub" style={stagger(3)}>
          From the Himalayas of Nepal to sacred journeys across India and unforgettable escapes around the world.
        </p>
        <div className="dhero__search" style={stagger(4)}>
          <HeroSearch ctx={{ routes: ctx.routes, images: ctx.images }} />
        </div>
      </div>

      <a href="#featured" className="dhero__scroll">
        <span>Scroll to explore</span>
        <span className="dhero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
