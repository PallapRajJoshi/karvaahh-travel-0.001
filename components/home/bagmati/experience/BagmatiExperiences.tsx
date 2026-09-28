import React from "react";
import Image from "next/image";
import Link from "next/link";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import { bagmatiExperiences } from "@/data/bagmati/experiences";
import "./bagmati-experiences.css";

export default function BagmatiExperiences() {
  return (
    <section className="bagmati-experiences" aria-label="Ways to experience Bagmati">
      <BagmatiSectionHeading
        eyebrow="Experience Bagmati"
        heading={
          <>
            One province.
            <br />
            <em>Endless</em> ways to explore.
          </>
        }
      />

      <div className="bagmati-experiences__grid">
        {bagmatiExperiences.map((item) => (
          <Link
            href={item.href}
            className="bagmati-experience-card"
            key={item.id}
          >
            <div className="bagmati-experience-card__media">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="bagmati-experience-card__image"
              />
              <div className="bagmati-experience-card__overlay" aria-hidden="true" />
            </div>
            <div className="bagmati-experience-card__body">
              <span className="bagmati-experience-card__number">{item.number}</span>
              <h3 className="bagmati-experience-card__title">{item.title}</h3>
              <p className="bagmati-experience-card__description">
                {item.description}
              </p>
              <span className="bagmati-experience-card__arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
