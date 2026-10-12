"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Info, MessageCircle, X } from "lucide-react";
import { saDestinationName } from "@/data/south-africa/destinations";
import { saPackageById } from "@/data/south-africa/packages";
import { SIGHTINGS_NOTE } from "@/data/south-africa/safari";
import { styleById } from "@/data/south-africa/styles";
import { enquireSA } from "@/lib/south-africa/config";
import { customize, openPackageDetail, usePackageDetail } from "@/lib/south-africa/explorer";
import { packageLabel } from "./SouthAfricaPackageCard";
import { ZaMedia } from "./ZaPrimitives";

/** One shared "View Details" dialog for every package card on the page. */
export default function SouthAfricaPackageModal() {
  const id = usePackageDetail();
  const p = id ? saPackageById(id) : undefined;
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (p && !el.open) {
      const opener = document.activeElement as HTMLElement | null;
      el.showModal();
      return () => opener?.focus({ preventScroll: true });
    }
    if (!p && el.open) el.close();
  }, [p]);

  const close = () => openPackageDetail(null);

  return (
    <dialog ref={ref} className="za-modal" aria-labelledby="za-pkg-modal-h" onClose={close} onClick={(e) => e.target === e.currentTarget && close()}>
      {p && (
        <div className="za-modal__inner">
          <div className="za-modal__media">
            <ZaMedia id={p.image} sizes="(min-width: 900px) 820px, 100vw" />
            <button type="button" className="za-modal__close" onClick={close} aria-label="Close">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="za-modal__body">
            <p className="asia-eyebrow">{p.duration} · {p.kind === "custom" ? "Fully custom" : "Customizable template"}</p>
            <h2 id="za-pkg-modal-h" className="za-modal__title">{p.title}</h2>
            <p className="za-modal__lede">{p.summary}</p>
            <dl className="za-modal__facts">
              <div><dt>Destinations</dt><dd>{p.destinations.map(saDestinationName).join(" → ")}</dd></div>
              {p.accommodationCategory && <div><dt>Accommodation</dt><dd>{p.accommodationCategory}</dd></div>}
              {p.safariType && <div><dt>Safari type</dt><dd>{p.safariType}</dd></div>}
              {p.transport && <div><dt>Transport</dt><dd>{p.transport}</dd></div>}
              <div><dt>Travel style</dt><dd>{p.styles.slice(0, 5).map((s) => styleById(s)?.label).join(", ")}</dd></div>
            </dl>
            <div className="za-modal__cols">
              <div>
                <h3 className="za-modal__h">Highlights</h3>
                <ul className="za-list">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              </div>
              {p.outline && (
                <div>
                  <h3 className="za-modal__h">Suggested outline</h3>
                  <ol className="za-outline">{p.outline.map((o, i) => <li key={i}><span>Day {i + 1}</span> {o}</li>)}</ol>
                </div>
              )}
            </div>
            {p.inclusionsSummary && (
              <p className="za-note"><Info size={16} aria-hidden="true" /> {p.inclusionsSummary}</p>
            )}
            {p.styles.includes("safari") && <p className="za-fine">{SIGHTINGS_NOTE}</p>}
            <p className="za-fine">{p.price ? `From ${p.price}.` : "Price on request: quoted for your dates, hotel category and group size."}</p>
            <div className="za-modal__actions">
              <button
                type="button"
                className="pkg-btn za-btn--earth"
                onClick={() => {
                  close();
                  customize({ title: packageLabel(p), destinations: p.destinations, styles: p.styles.slice(0, 2) });
                }}
              >
                Customize this trip <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </button>
              <a href={enquireSA(packageLabel(p))} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
                <MessageCircle size={16} aria-hidden="true" /> Enquire on WhatsApp<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
