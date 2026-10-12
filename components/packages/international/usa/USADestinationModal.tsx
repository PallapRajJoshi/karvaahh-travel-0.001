"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, CalendarDays, Clock, MapPin, MessageCircle, X } from "lucide-react";
import type { USADestination } from "@/data/usa/destinations";
import { usaImage } from "@/data/usa/images";
import { activeUSAPackages } from "@/data/usa/packages";
import { usaRegionById } from "@/data/usa/regions";
import { styleLabel } from "@/data/usa/travel-styles";
import { enquireAbout, liveHref } from "@/lib/usa/config";
import DestMedia from "../asia/DestMedia";

/**
 * Destination details in a native <dialog>: focus is trapped and restored by
 * the browser, Escape and the backdrop close it. Used until each destination
 * has its own page (then "Open the full guide" links there).
 */
export default function USADestinationModal({
  d,
  onClose,
  onPackages,
}: {
  d: USADestination | null;
  onClose: () => void;
  onPackages: (id: string) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (d && !el.open) el.showModal();
    if (!d && el.open) el.close();
  }, [d]);

  const packages = d ? activeUSAPackages.filter((p) => p.destinations.includes(d.id)) : [];
  const live = liveHref(d?.href);
  const region = d ? usaRegionById(d.region) : null;

  return (
    <dialog
      ref={ref}
      className="us-modal"
      aria-labelledby="us-modal-h"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {d && region && (
        <div className="us-modal__inner">
          <div className="us-modal__media">
            <DestMedia image={usaImage(d.image)} label={d.name} tone={region.tone} sizes="(min-width: 900px) 420px, 100vw" />
          </div>
          <div className="us-modal__body">
            <button type="button" className="us-modal__close" onClick={onClose} aria-label="Close details">
              <X size={20} aria-hidden="true" />
            </button>
            <p className="us-modal__where">{d.state ? `${d.state} · ` : ""}{region.name}</p>
            <h2 id="us-modal-h" className="us-modal__title">{d.name}</h2>
            <p className="us-modal__desc">{d.description}</p>

            <h3 className="us-modal__h">Major attractions</h3>
            <ul className="us-modal__chips">
              {d.attractions.map((a) => (
                <li key={a}><MapPin size={13} aria-hidden="true" /> {a}</li>
              ))}
            </ul>

            <dl className="us-modal__facts">
              {d.recommendedDuration && (
                <div><dt><Clock size={14} aria-hidden="true" /> Recommended</dt><dd>{d.recommendedDuration}</dd></div>
              )}
              {d.idealSeason && (
                <div><dt><CalendarDays size={14} aria-hidden="true" /> Ideal season</dt><dd>{d.idealSeason}</dd></div>
              )}
            </dl>

            <h3 className="us-modal__h">Travel style</h3>
            <p className="us-modal__styles">
              {d.travelStyles.slice(0, 8).map((s) => (
                <span key={s}>{styleLabel(s)}</span>
              ))}
            </p>

            {packages.length > 0 && (
              <>
                <h3 className="us-modal__h">Packages that include {d.name}</h3>
                <ul className="us-modal__pkgs">
                  {packages.slice(0, 5).map((p) => (
                    <li key={p.id}><strong>{p.duration}</strong> {p.title}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="us-modal__cta">
              {packages.length > 0 && (
                <button type="button" className="pkg-btn asia-btn--navy" onClick={() => onPackages(d.id)}>
                  View {packages.length} {packages.length === 1 ? "package" : "packages"} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                </button>
              )}
              <a href={enquireAbout(d.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
                <MessageCircle size={16} aria-hidden="true" /> Customize {d.name}
                <span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              {live ? (
                <Link href={live} className="pkg-btn pkg-btn--text">Open the full guide</Link>
              ) : d.sectionId ? (
                <a href={`#${d.sectionId}`} className="pkg-btn pkg-btn--text" onClick={onClose}>Read more on this page</a>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
