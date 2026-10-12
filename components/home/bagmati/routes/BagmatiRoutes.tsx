import React from "react";
import Image from "next/image";
import Link from "next/link";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import { bagmatiRoutes } from "@/data/bagmati/routes";
import "./bagmati-routes.css";

export default function BagmatiRoutes() {
  return (
    <section className="bagmati-routes" id="routes" aria-label="Suggested Bagmati travel routes">
      <BagmatiSectionHeading
        eyebrow="Suggested Travel Routes"
        heading={
          <>
            Circuits to <em>inspire</em> your journey
          </>
        }
        description="Travel concepts rather than fixed itineraries — we tailor timing and routing to season, road and trail conditions."
        light
      />

      <ol className="bagmati-routes__grid">
        {bagmatiRoutes.map((route, i) => (
          <li className="bagmati-route bagmati-reveal" key={route.id}>
            <div className="bagmati-route__media">
              <Image
                src={route.image}
                alt={route.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="bagmati-route__image"
              />
              <span className="bagmati-route__number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="bagmati-route__body">
              <h3 className="bagmati-route__title">{route.title}</h3>
              <ol className="bagmati-route__stops" aria-label={`${route.title} stops`}>
                {route.stops.map((stop) => (
                  <li key={stop}>{stop}</li>
                ))}
              </ol>
              <p className="bagmati-route__text">{route.description}</p>
              <p className="bagmati-route__ideal">
                <span>Ideal for</span> {route.idealFor}
              </p>
              <Link
                href={route.href ?? "/contact?province=bagmati"}
                className="bagmati-route__link"
              >
                {route.href ? "See related journeys" : "Plan this route"}
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
