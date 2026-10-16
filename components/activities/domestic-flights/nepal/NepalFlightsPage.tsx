import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ActivityHero from "@/components/activities/shared/ActivityHero";
import ActivityCTA from "@/components/activities/shared/ActivityCTA";
import FAQSection from "@/components/activities/shared/FAQSection";
import SectionHeading from "@/components/activities/shared/SectionHeading";
import Reveal from "@/components/activities/shared/Reveal";
import MobileStickyCTA from "@/components/activities/shared/MobileStickyCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ROUTES_VERIFIED,
  SOURCES,
  STATUS_LABEL,
  airlines,
  faqs,
  fareCategories,
  featuredRoutes,
  guidance,
  mountainAirports,
  planning,
  routeById,
  routes,
} from "@/data/domestic-flights/nepal-domestic-flights";
import RouteDirectory from "./RouteDirectory";
import "./nepal-flights.css";

export const nepalFlightsCrumbs = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Domestic Flights", href: "/activities/domestic-flights" },
  { name: "Domestic Nepal Flights", href: "/activities/domestic-flights/domestic-nepal-flights" },
];

const ENQUIRY_HREF = "/contact?interest=domestic-flights";

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function FeaturedRoutes() {
  return (
    <section aria-labelledby="popular-routes">
      <SectionHeading
        title="Popular Domestic Routes"
        lead="The flights our travellers book most — from city hops of under half an hour to early-morning runs into the mountains."
        id="popular-routes"
      />
      <ul className="nf-cards">
        {featuredRoutes.map((f) => {
          const r = routeById(f.routeId);
          return (
            <li className="nf-card" key={f.routeId}>
              <div className="nf-card__media">
                <Image
                  src={f.image}
                  alt={f.imageAlt}
                  fill
                  sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
                  className="nf-card__image"
                />
                <span className={`nf-status nf-status--${r.status} nf-card__badge`}>{STATUS_LABEL[r.status]}</span>
              </div>
              <div className="nf-card__body">
                <h3 className="nf-card__title">
                  {r.from.city} <span aria-hidden="true">→</span>
                  <span className="nf-sr"> to </span> {r.to.city}
                </h3>
                <p className="nf-card__codes">
                  {r.from.code} – {r.to.code}
                </p>
                <p className="nf-card__text">{f.headline}</p>
                <dl className="nf-card__facts">
                  <div>
                    <dt>Duration</dt>
                    <dd>{r.duration}</dd>
                  </div>
                  <div>
                    <dt>Distance</dt>
                    <dd>≈ {r.distanceKm} km</dd>
                  </div>
                  <div>
                    <dt>Airlines</dt>
                    <dd>{r.airlines.join(", ")}</dd>
                  </div>
                </dl>
                <Link className="nf-card__cta" href={ENQUIRY_HREF}>
                  Enquire about this route
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function MountainAirports() {
  return (
    <section aria-labelledby="mountain-airports">
      <SectionHeading
        title="Mountain & Remote Airports"
        lead="Short airstrips flown by small STOL aircraft in daylight and clear weather. None of them promises a daily flight — services depend on season, demand and conditions on the day."
        id="mountain-airports"
      />
      <ul className="nf-airports">
        {mountainAirports.map((a) => (
          <li className="nf-airport" key={a.code}>
            <div className="nf-airport__head">
              <h3 className="nf-airport__name">{a.name}</h3>
              <span className="nf-code nf-code--pill">{a.code}</span>
            </div>
            <p className="nf-airport__region">{a.region}</p>
            <dl className="nf-airport__facts">
              <div>
                <dt>Gateway to</dt>
                <dd>{a.gateway}</dd>
              </div>
              <div>
                <dt>Flown from</dt>
                <dd>{a.reachedFrom}</dd>
              </div>
              <div>
                <dt>Operators</dt>
                <dd>{a.operators}</dd>
              </div>
            </dl>
            <p className="nf-airport__note">{a.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Airlines() {
  return (
    <section aria-labelledby="airlines">
      <SectionHeading
        title="Domestic Airlines at a Glance"
        lead="What each operator publishes about its network, baggage and changes. Rules differ by fare class — we confirm the exact terms on your ticket."
        id="airlines"
      />
      <div className="nf-airlines">
        {airlines.map((a) => (
          <article className="nf-airline" key={a.name}>
            <header className="nf-airline__head">
              <h3 className="nf-airline__name">{a.name}</h3>
              <p className="nf-airline__type">{a.type}</p>
            </header>
            <dl className="nf-airline__facts">
              <div>
                <dt>Network</dt>
                <dd>{a.network}</dd>
              </div>
              <div>
                <dt>Baggage</dt>
                <dd>{a.baggage}</dd>
              </div>
              <div>
                <dt>Changes & refunds</dt>
                <dd>{a.policy}</dd>
              </div>
            </dl>
            <p className="nf-airline__links">
              <External href={a.website.href}>Official site: {a.website.label}</External>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Fares() {
  return (
    <section aria-labelledby="fares">
      <SectionHeading
        title="Fares & Passenger Categories"
        lead="Domestic fares change daily with demand and fare class, so we don't publish prices here. What is fixed is who pays which fare type."
        id="fares"
      />
      <div className="nf-fares">
        <div className="nf-table-wrap">
          <table className="nf-table nf-table--fares">
            <caption className="nf-sr">Domestic fare type by traveller nationality</caption>
            <thead>
              <tr>
                <th scope="col">Traveller</th>
                <th scope="col">Fare type</th>
                <th scope="col">What to know</th>
              </tr>
            </thead>
            <tbody>
              {fareCategories.map((c) => (
                <tr key={c.traveller}>
                  <th scope="row">{c.traveller}</th>
                  <td data-label="Fare type">
                    <strong>{c.fare}</strong>
                  </td>
                  <td data-label="What to know">{c.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="nf-fares__cta" aria-label="Current fares">
          <p className="nf-fares__cta-title">Contact Karvaahh for current fares.</p>
          <p>
            Tell us the route, date, number of travellers and nationality. We will quote the fare in NPR or USD with
            taxes, fare class and baggage allowance shown.
          </p>
          <Link className="act-btn act-btn--primary" href={ENQUIRY_HREF}>
            Request a fare quote
          </Link>
        </aside>
      </div>
      <p className="nf-footnote">
        Fare types from <External href={SOURCES.buddhaRules.href}>Buddha Air</External>,{" "}
        <External href={SOURCES.yetiPolicy.href}>Yeti Airlines</External> and{" "}
        <External href={SOURCES.shreePolicy.href}>Shree Airlines</External> fare rules, checked {ROUTES_VERIFIED}.
        Mountain operators&apos; nationality rules are not published online and are confirmed at booking.
      </p>
    </section>
  );
}

function Guidance() {
  return (
    <section aria-labelledby="before-you-fly">
      <SectionHeading
        title="Weather, Safety & Booking Guidance"
        lead="Conditions differ by airport and airline. These are the things that most often change a domestic travel day in Nepal."
        id="before-you-fly"
      />
      <ul className="nf-guidance">
        {guidance.map((g, i) => (
          <li className="nf-guide" key={g.title}>
            <span className="nf-guide__num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="nf-guide__title">{g.title}</h3>
            <p className="nf-guide__text">{g.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Planning() {
  return (
    <section aria-labelledby="plan-your-trip">
      <SectionHeading
        title="Where Domestic Flights Take You"
        lead="How flights fit into the journeys we plan — and what still has to be arranged on the ground."
        id="plan-your-trip"
      />
      <div className="nf-plans">
        {planning.map((p) => (
          <article className="nf-plan" key={p.title}>
            <h3 className="nf-plan__title">{p.title}</h3>
            <dl className="nf-plan__facts">
              <div>
                <dt>Flight</dt>
                <dd>{p.flight}</dd>
              </div>
              <div>
                <dt>Onward</dt>
                <dd>{p.onward}</dd>
              </div>
              <div>
                <dt>Also needed</dt>
                <dd>{p.needs}</dd>
              </div>
            </dl>
            <ul className="nf-plan__links">
              {p.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sources() {
  return (
    <section aria-labelledby="sources" className="nf-sources">
      <h2 id="sources" className="nf-sources__title">
        Sources
      </h2>
      <p>
        Checked {ROUTES_VERIFIED}. Airlines change schedules and rules without notice — always rely on your ticket and
        the airline&apos;s current conditions.
      </p>
      <ul>
        {Object.values(SOURCES).map((s) => (
          <li key={s.href}>
            <External href={s.href}>{s.label}</External>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function NepalFlightsPage() {
  return (
    <div className="nepal-flights">
      <Navbar />
      <ActivityHero
        crumbs={nepalFlightsCrumbs}
        eyebrow="DOMESTIC FLIGHTS · NEPAL"
        title="Nepal Domestic Flights & Routes"
        subtitle="Airlines, airport codes, flight times and approximate distances across Nepal — from 25-minute city hops to mountain airstrips."
        supporting="A practical guide for Nepalese, Indian and international travellers, with routes taken only from airline websites and timetables."
        image="/images/home/annapurna-view.jpg"
        imageAlt="The Annapurna range and Machhapuchhre rising above the Pokhara valley at sunrise"
        stats={[
          { value: `${routes.length} routes`, label: "Sourced from airlines" },
          { value: `${airlines.length} operators`, label: "City & mountain" },
          { value: ROUTES_VERIFIED, label: "Last verified" },
        ]}
        primaryCta={{ label: "Browse All Routes", href: "#route-directory" }}
        secondaryCta={{ label: "Enquire About a Flight", href: "#plan-flights" }}
      />

      <main>
        <div className="nf-section">
          <Reveal>
            <FeaturedRoutes />
          </Reveal>
        </div>

        <div className="nf-section nf-section--flush">
          <RouteDirectory />
        </div>

        <div className="nf-section nf-section--tint">
          <div className="nf-section__inner">
            <Reveal>
              <MountainAirports />
            </Reveal>
          </div>
        </div>

        <div className="nf-section">
          <Reveal>
            <Airlines />
          </Reveal>
        </div>

        <div className="nf-section nf-section--flush">
          <Reveal>
            <Fares />
          </Reveal>
        </div>

        <div className="nf-section nf-section--tint">
          <div className="nf-section__inner">
            <Reveal>
              <Guidance />
            </Reveal>
          </div>
        </div>

        <div className="nf-section">
          <Reveal>
            <Planning />
          </Reveal>
        </div>

        <div className="nf-section nf-section--flush">
          <ActivityCTA
            id="plan-flights"
            heading="Book Your Domestic Flights With Karvaahh"
            text="Send your route, travel dates, number of travellers and nationality. We check current schedules and fares, and plan buffer days and transfers around mountain flights."
            primary={{ label: "Enquire About Flights", href: ENQUIRY_HREF }}
            secondary={{ label: "Explore Nepal Packages", href: "/packages/nepal/trekking-hiking-packages" }}
          />
        </div>

        <div className="nf-section nf-section--flush">
          <FAQSection heading="Nepal Domestic Flights: Common Questions" items={faqs} id="flights-faq" />
        </div>

        <div className="nf-section nf-section--flush">
          <Sources />
        </div>
      </main>

      <Footer />

      <MobileStickyCTA label="Enquire About Flights" href="#plan-flights" />
    </div>
  );
}
