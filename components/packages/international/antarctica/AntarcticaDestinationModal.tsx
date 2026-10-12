"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { WILDLIFE_DISCLAIMER } from "@/data/antarctica/wildlife";
import type { AntarcticaDestination, AntarcticaExpedition } from "@/data/antarctica/types";
import { enquireExpedition } from "@/lib/antarctica/config";
import PolarMedia from "./PolarMedia";

/**
 * Destination detail in a native <dialog>: focus is trapped and Esc closes it
 * for free. Returns focus to the opener on close.
 */
export default function AntarcticaDestinationModal({
  d,
  expeditions,
  onClose,
  onCustomize,
}: {
  d: AntarcticaDestination | null;
  expeditions: AntarcticaExpedition[];
  onClose: () => void;
  onCustomize: (d: AntarcticaDestination) => void;
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

  return (
    <dialog
      ref={ref}
      className="an-modal"
      aria-labelledby="an-modal-h"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {d && (
        <div className="an-modal__inner">
          <div className="an-modal__media">
            <PolarMedia id={d.image} sizes="(min-width: 900px) 800px, 100vw" />
            <button type="button" className="an-modal__close" onClick={onClose} aria-label="Close">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="an-modal__body">
            <p className="asia-eyebrow">{d.area}</p>
            <h2 id="an-modal-h" className="an-modal__title">{d.name}</h2>
            <p className="an-modal__lede">{d.description}</p>

            <dl className="an-modal__facts">
              <div><dt>Expedition type</dt><dd>{d.expeditionType}</dd></div>
              {d.duration && <div><dt>Typical duration</dt><dd>{d.duration}</dd></div>}
              {d.recommendedSeason && <div><dt>Recommended season</dt><dd>{d.recommendedSeason}</dd></div>}
            </dl>

            <div className="an-modal__cols">
              <div>
                <h3 className="an-modal__h">Main experiences</h3>
                <ul className="an-list">{d.experiences.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <h3 className="an-modal__h">Possible encounters may include</h3>
                <ul className="an-list">{d.wildlife.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
            <p className="an-fine">{WILDLIFE_DISCLAIMER}</p>

            {expeditions.length > 0 && (
              <>
                <h3 className="an-modal__h">Expedition templates that include {d.name}</h3>
                <ul className="an-modal__trips">
                  {expeditions.map((e) => (
                    <li key={e.id}>
                      <span className="an-modal__dur">{e.duration}</span> {e.title}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="an-modal__actions">
              <button type="button" className="pkg-btn an-btn--ice" onClick={() => onCustomize(d)}>
                Customize an expedition <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </button>
              <a href={enquireExpedition(`Antarctica: ${d.name}`)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline">
                <MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
