"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Info, MapPin } from "lucide-react";
import { NO_DIRECT_FLIGHTS, departureCities, journeyStages } from "@/data/antarctica/gateways";
import SectionHead from "./SectionHead";

/** Pick a departure city and watch the journey chain to Antarctica redraw. */
export default function TravelFromNepalIndia() {
  const [cityId, setCityId] = useState(departureCities[0].id);
  const city = departureCities.find((c) => c.id === cityId) ?? departureCities[0];
  const stages = journeyStages(city.id === "other" ? "Your city" : city.city);

  return (
    <section className="pkg-section an-from" id="gateways" aria-labelledby="from-h">
      <div className="pkg-container">
        <SectionHead
          id="from-h"
          eyebrow="Travel from Nepal + India"
          title="From the Himalaya to the Antarctic"
          lede="Choose your departure city. We plan the long-haul routing, South American connections and buffer nights, then share the options for your dates."
        />

        <div className="an-from__cities" role="group" aria-label="Departure city">
          {departureCities.map((c) => (
            <button key={c.id} type="button" className={`an-chip${c.id === cityId ? " is-active" : ""}`} aria-pressed={c.id === cityId} onClick={() => setCityId(c.id)}>
              <MapPin size={14} aria-hidden="true" /> {c.city}
              {c.country !== "Other" && <span className="an-chip__note">{c.country}</span>}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.ol key={city.id} className="an-journey" aria-label={`Journey from ${city.city} to Antarctica`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {stages.map((s, i) => (
              <motion.li key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.35 }}>
                <span className="an-journey__dot" aria-hidden="true" />
                <strong>{s.label}</strong>
                <span>{s.sub}</span>
                {i < stages.length - 1 && <ArrowRight className="an-journey__arrow" size={16} aria-hidden="true" />}
              </motion.li>
            ))}
          </motion.ol>
        </AnimatePresence>
        <p className="an-from__via" aria-live="polite"><strong>{city.city}:</strong> {city.via}.</p>
        <p className="an-note"><Info size={16} aria-hidden="true" /> {NO_DIRECT_FLIGHTS}</p>
      </div>
    </section>
  );
}
