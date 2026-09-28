import Image from "next/image";
import Link from "next/link";
import ActivityBreadcrumbs, { type Crumb } from "./ActivityBreadcrumbs";
import "./ActivityHero.css";

export interface HeroStat {
  value: string;
  label: string;
}

interface ActivityHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  supporting?: string;
  image: string;
  imageAlt: string;
  stats: HeroStat[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  location?: string;
  crumbs: Crumb[];
  /** "river" = dark, high-contrast. "water" = calm, low-contrast. */
  tone?: "river" | "water";
}

export default function ActivityHero({
  eyebrow,
  title,
  subtitle,
  supporting,
  image,
  imageAlt,
  stats,
  primaryCta,
  secondaryCta,
  location,
  crumbs,
  tone = "river",
}: ActivityHeroProps) {
  return (
    <section className={`act-hero act-hero--${tone}`}>
      <div className="act-hero__media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="act-hero__image"
        />
        <div className="act-hero__scrim" aria-hidden="true" />
      </div>

      <div className="act-hero__inner">
        <ActivityBreadcrumbs crumbs={crumbs} />

        <p className="act-hero__eyebrow">{eyebrow}</p>
        <h1 className="act-hero__title">{title}</h1>
        <p className="act-hero__subtitle">{subtitle}</p>
        {supporting ? (
          <p className="act-hero__supporting">{supporting}</p>
        ) : null}

        <div className="act-hero__actions">
          <Link className="act-btn act-btn--primary" href={primaryCta.href}>
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link className="act-btn act-btn--ghost" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>

        {location ? <p className="act-hero__location">{location}</p> : null}

        <ul className="act-hero__stats">
          {stats.map((stat) => (
            <li className="act-hero__stat" key={stat.label}>
              <span className="act-hero__stat-value">{stat.value}</span>
              <span className="act-hero__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
