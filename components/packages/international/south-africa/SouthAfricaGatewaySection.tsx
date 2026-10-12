"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Info, MapPin, Plane } from "lucide-react";
import { FLIGHTS_NOTE, arrivalGateways, departureCities } from "@/data/south-africa/gateways";
import { ZaHead } from "./ZaPrimitives";

/** Travel from Nepal + India: pick a departure city and arrival gateway. */
export default function SouthAfricaGatewaySection() {
  const [city, setCity] = useState(departureCities[0].id);
  const [arrive, setArrive] = useState(arrivalGateways[0].id);
  const c = departureCities.find((x) => x.id === city) ?? departureCities[0];
  const a = arrivalGateways.find((x) => x.id === arrive) ?? arrivalGateways[0];
  const from = c.id === "other" ? "Your city" : c.city;

  return (
    <section className="pkg-section za-gateway" id="gateways" aria-labelledby="gateway-h">
      <div className="pkg-container">
        <ZaHead
          id="gateway-h"
          eyebrow="Travel from Nepal + India"
          title="From the Himalaya to the Cape"
          lede="Choose where you're flying from and where you'd like to land. We'll plan the connections, then share options for your dates."
        />
        <div className="za-gateway__pickers">
          <div className="za-chiprow za-chiprow--light" role="group" aria-label="Departure city">
            {departureCities.map((x) => (
              <button key={x.id} type="button" className={`za-chip${x.id === city ? " is-active" : ""}`} aria-pressed={x.id === city} onClick={() => setCity(x.id)}>
                <MapPin size={14} aria-hidden="true" /> {x.city}
                {x.country && <span className="za-chip__note">{x.country}</span>}
              </button>
            ))}
          </div>
          <div className="za-chiprow za-chiprow--light" role="group" aria-label="Arrival gateway">
            {arrivalGateways.map((x) => (
              <button key={x.id} type="button" className={`za-chip za-chip--soft${x.id === arrive ? " is-active" : ""}`} aria-pressed={x.id === arrive} onClick={() => setArrive(x.id)}>
                <Plane size={14} aria-hidden="true" /> Arrive {x.name}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.ol key={`${city}-${arrive}`} className="za-journey" aria-label={`Journey from ${from} to ${a.name}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[
              { k: from, v: "Departure city" },
              { k: "International hub", v: "One or more connections" },
              { k: a.name, v: a.text },
              { k: "Your South Africa", v: "Domestic flights & road transfers" },
            ].map((s, i, arr) => (
              <motion.li key={s.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.3 }}>
                <span className="za-journey__dot" aria-hidden="true" />
                <strong>{s.k}</strong>
                <span>{s.v}</span>
                {i < arr.length - 1 && <ArrowRight className="za-journey__arrow" size={16} aria-hidden="true" />}
              </motion.li>
            ))}
          </motion.ol>
        </AnimatePresence>
        <p className="za-note"><Info size={16} aria-hidden="true" /> {FLIGHTS_NOTE}</p>
      </div>
    </section>
  );
}
