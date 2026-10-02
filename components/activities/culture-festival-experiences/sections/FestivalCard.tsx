"use client";

import { useId, useState } from "react";
import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import { ChevronIcon } from "../shared/Icons";
import type { Festival } from "../types";

interface FestivalCardProps {
  festival: Festival;
  index: number;
}

export default function FestivalCard({ festival, index }: FestivalCardProps) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const panelId = `${uid}-panel`;

  return (
    <Reveal as="li" delay={(index % 4) * 90} className="festival-card">
      <article className="festival-card__inner">
        <div className="festival-card__media">
          <CultureImage id={festival.media} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
          <span className="festival-card__season">{festival.season}</span>
        </div>

        <div className="festival-card__body">
          <h3 className="festival-card__name">{festival.name}</h3>
          <p className="festival-card__desc">{festival.description}</p>
          <p className="festival-card__sig">
            <span className="festival-card__sig-label">Cultural significance</span>
            {festival.significance}
          </p>

          <button
            type="button"
            className="festival-card__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span>Explore Festival</span>
            <ChevronIcon className="festival-card__chevron" />
            <span className="cx-sr"> {festival.name}</span>
          </button>

          <div id={panelId} className="festival-card__panel" data-open={open} role="region" aria-label={`${festival.name} details`}>
            <div className="festival-card__panel-inner">
              <p className="festival-card__exp">
                <span className="festival-card__sig-label">What to expect</span>
                {festival.experience}
              </p>
              <CtaLink variant="text" prefill={festival.prefill} ariaLabel={`Plan a trip around ${festival.name}`}>
                Plan around {festival.name}
              </CtaLink>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
