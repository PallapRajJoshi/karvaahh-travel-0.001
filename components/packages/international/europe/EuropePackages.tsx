"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CalendarDays, ChevronDown, Clock, MessageCircle, RotateCcw, Users } from "lucide-react";
import { countryById } from "@/data/europe/countries";
import { activePackages, type EuropePackage, type PackageType } from "@/data/europe/packages";
import { regionById } from "@/data/europe/regions";
import { europeSeasons } from "@/data/europe/seasons";
import { styleLabel } from "@/data/europe/travel-styles";
import { enquireAbout, liveHref } from "@/lib/europe/config";
import { hasActiveFilters, packageMatches, resetFilters, useExplorer } from "@/lib/europe/explorer";
import Carousel from "../../Carousel";
import RouteLine from "../../RouteLine";
import DestMedia from "../asia/DestMedia";
import Flag from "../asia/Flag";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

const TYPE_LABEL: Record<PackageType, string> = {
  private: "Private",
  group: "Group",
  "fixed-departure": "Fixed departure",
  "tailor-made": "Tailor-made",
};

function PackageCard({ p }: { p: EuropePackage }) {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const countries = p.countries.map((id) => countryById(id)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const primary = countries[0];
  const href = liveHref(p.href);
  const label = countries.length ? countries.map((c) => c.name).join(" · ") : "Anywhere in Europe";
  const seasons = p.season?.map((s) => europeSeasons.find((x) => x.id === s)?.label).filter(Boolean).join(", ");

  return (
    <article className={`asia-pcard eu-pcard${p.custom ? " eu-pcard--custom" : ""}`} aria-labelledby={`${uid}-h`}>
      <div className="asia-pcard__media">
        <DestMedia
          image={p.image}
          iso={primary?.iso ?? "eu"}
          label={p.title}
          tone={primary ? regionById(primary.region).tone : ["#0a1f33", "#1d5a8f"]}
          sizes="(min-width: 1200px) 320px, (min-width: 640px) 48vw, 88vw"
        />
        <span className="eu-pcard__dur">{p.duration}</span>
        <span className="asia-pcard__country">
          {countries.slice(0, 4).map((c) => (
            <Flag key={c.id} iso={c.iso} size={18} />
          ))}
          {countries.length > 4 && <span>+{countries.length - 4}</span>}
          {countries.length === 0 && "Your route"}
        </span>
      </div>
      <div className="asia-pcard__body">
        <h3 id={`${uid}-h`} className="asia-pcard__title">
          {p.custom ? p.title : `${p.duration} ${p.title}`}
        </h3>
        <p className="eu-pcard__countries">{label}</p>
        {p.travelStyles.length > 0 && (
          <p className="asia-pcard__meta">
            {p.travelStyles.slice(0, 2).map((s) => (
              <span key={s} className="asia-pcard__style">{styleLabel(s)}</span>
            ))}
          </p>
        )}
        <p className="asia-pcard__desc">{p.description}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`${uid}-more`}
              className="eu-pcard__more"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <RouteLine stops={p.destinations} label={`${p.title} route`} />
              <dl className="eu-pcard__facts">
                <div><dt><Clock size={14} aria-hidden="true" /> Duration</dt><dd>{p.custom ? "Your choice" : `${p.duration}, fully adjustable`}</dd></div>
                {seasons && <div><dt><CalendarDays size={14} aria-hidden="true" /> Seasons</dt><dd>{seasons}</dd></div>}
                <div><dt><Users size={14} aria-hidden="true" /> Formats</dt><dd>{p.packageType.map((t) => TYPE_LABEL[t]).join(", ")}</dd></div>
              </dl>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="asia-pcard__foot eu-pcard__foot">
          <div className="pkg-price">
            {p.price ? (
              <>
                <span className="pkg-price__label">Starting from</span>
                <span className="pkg-price__amount">{inr.format(p.price)}</span>
                <span className="pkg-price__basis">per person</span>
              </>
            ) : (
              <>
                <span className="pkg-price__label">Pricing</span>
                <span className="pkg-price__amount pkg-price__amount--text">{p.custom ? "Customize Your Trip" : "Price on Request"}</span>
              </>
            )}
          </div>
          <div className="eu-pcard__actions">
            {href ? (
              <Link href={href} className="pkg-btn asia-btn--navy">
                Explore <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </Link>
            ) : (
              <button
                type="button"
                className="pkg-btn asia-btn--navy"
                aria-expanded={open}
                aria-controls={`${uid}-more`}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? "Less" : "Explore"} <ChevronDown size={16} aria-hidden="true" className={open ? "is-flipped eu-flip" : "eu-flip"} />
              </button>
            )}
            <a href={enquireAbout(p.custom ? "a fully customized Europe tour" : `${p.duration} ${p.title}`)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
              <MessageCircle size={16} aria-hidden="true" /> Customize
              <span className="pkg-sr"> {p.title} (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Package carousel. Unfiltered it shows the featured templates; with filters, every matching package. */
export default function EuropePackages() {
  const s = useExplorer();
  const filtering = hasActiveFilters(s);

  const list = useMemo(() => {
    const hits = activePackages.filter((p) => (filtering ? packageMatches(p, s) : p.featured));
    // Custom template always last.
    return hits.sort((a, b) => Number(!!a.custom) - Number(!!b.custom));
  }, [s, filtering]);

  const real = list.filter((p) => !p.custom).length;
  const signature = `${s.region}|${s.styles.join(",")}|${s.country}`;

  return (
    <section className="pkg-section pkg-section--sand eu-packages" id="packages" aria-labelledby="packages-h">
      <div className="pkg-container">
        <div className="pkg-section__head pkg-section__head--split">
          <div>
            <p className="asia-eyebrow">Europe tour packages</p>
            <h2 id="packages-h" className="pkg-h2">Popular Europe Tour Packages</h2>
            <p className="pkg-lede">
              Proven routes to start from. Every package can be shortened, extended, upgraded or combined with another country.
            </p>
          </div>
          <p className="asia-count" aria-live="polite">
            <strong>{real}</strong> {real === 1 ? "package" : "packages"}
            {filtering ? " match your filters" : " featured"}
            {filtering && (
              <button type="button" className="pkg-btn pkg-btn--text asia-reset" onClick={resetFilters}>
                <RotateCcw size={15} aria-hidden="true" /> Reset
              </button>
            )}
          </p>
        </div>

        {real === 0 && (
          <p className="eu-packages__empty">
            No ready-made package matches this combination yet, but we can build one around it.
          </p>
        )}

        <motion.div key={signature} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Carousel label="Europe tour packages">
            {list.map((p) => (
              <PackageCard key={p.id} p={p} />
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
