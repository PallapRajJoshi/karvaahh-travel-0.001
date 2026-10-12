"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { provinceName, styleById } from "@/data/south-africa/styles";
import type { SouthAfricaDestination, SouthAfricaPackage } from "@/data/south-africa/types";
import { enquireSA, liveHref } from "@/lib/south-africa/config";
import { ZaMedia } from "./ZaPrimitives";

/** Destination detail in a native <dialog>: focus trap and Esc for free. */
export default function SouthAfricaDestinationModal({
  d,
  packages,
  onClose,
  onCustomize,
}: {
  d: SouthAfricaDestination | null;
  packages: SouthAfricaPackage[];
  onClose: () => void;
  onCustomize: (d: SouthAfricaDestination) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (d && !el.open) {
      const opener = document.activeElement as HTMLElement | null;
      el.showModal();
      // preventScroll: "Customize" closes the dialog and scrolls to the builder.
      return () => opener?.focus({ preventScroll: true });
    }
    if (!d && el.open) el.close();
  }, [d]);

  const live = liveHref(d?.href);

  return (
    <dialog ref={ref} className="za-modal" aria-labelledby="za-modal-h" onClose={onClose} onClick={(e) => e.target === e.currentTarget && onClose()}>
      {d && (
        <div className="za-modal__inner">
          <div className="za-modal__media">
            <ZaMedia id={d.image} label={d.name} sizes="(min-width: 900px) 820px, 100vw" />
            <button type="button" className="za-modal__close" onClick={onClose} aria-label="Close">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="za-modal__body">
            <p className="asia-eyebrow">{d.area ?? provinceName(d.region)}</p>
            <h2 id="za-modal-h" className="za-modal__title">{d.name}</h2>
            <p className="za-modal__lede">{d.description}</p>
            <dl className="za-modal__facts">
              {d.duration && <div><dt>Recommended duration</dt><dd>{d.duration}</dd></div>}
              {d.idealSeason && <div><dt>Ideal season</dt><dd>{d.idealSeason}</dd></div>}
              <div><dt>Travel styles</dt><dd>{d.travelStyles.slice(0, 5).map((s) => styleById(s)?.label).join(", ")}</dd></div>
            </dl>
            <h3 className="za-modal__h">Major attractions</h3>
            <ul className="za-list za-list--cols">{d.attractions.map((a) => <li key={a}>{a}</li>)}</ul>
            {packages.length > 0 && (
              <>
                <h3 className="za-modal__h">Packages that include {d.name}</h3>
                <ul className="za-modal__trips">
                  {packages.map((p) => <li key={p.id}><span className="za-modal__dur">{p.duration}</span> {p.title}</li>)}
                </ul>
              </>
            )}
            <div className="za-modal__actions">
              <button type="button" className="pkg-btn za-btn--earth" onClick={() => onCustomize(d)}>
                Customize a trip <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </button>
              {live && <Link href={live} className="pkg-btn pkg-btn--outline">Full {d.name} guide</Link>}
              <a href={enquireSA(d.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
                <MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
