"use client";

import { motion } from "motion/react";

/** Journey timeline whose connecting line draws itself as it scrolls into view. */
export default function ZaRouteLine({ stops, light = false, label }: { stops: { stop: string; note: string }[]; light?: boolean; label: string }) {
  return (
    <div className={`za-routeline${light ? " is-light" : ""}`}>
      <motion.span
        className="za-routeline__track"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <ol aria-label={label}>
        {stops.map((s, i) => (
          <motion.li
            key={s.stop}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.2 + i * (1.6 / stops.length) }}
          >
            <span className="za-routeline__dot" aria-hidden="true" />
            <strong>{s.stop}</strong>
            <span>{s.note}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
