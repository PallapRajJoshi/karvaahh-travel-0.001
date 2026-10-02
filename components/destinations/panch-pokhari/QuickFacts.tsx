"use client";

import type { RefObject } from "react";
import Icon from "@/components/shared/Icon";
import { useReveal } from "@/components/shared/useReveal";
import { quickFacts, type QuickFact } from "@/data/panch-pokhari/quickFacts";
import "./quick-facts.css";

function FactCard({ fact, delay }: { fact: QuickFact; delay: number }) {
  const [ref, revealClassName, style] = useReveal({ variant: "fade-up", delay });

  return (
    <dl
      ref={ref as RefObject<HTMLDListElement>}
      className={`pp-facts__card ${revealClassName}`}
      style={style}
    >
      <div className="pp-facts__icon">
        <Icon name={fact.icon} />
      </div>
      <dt className="pp-facts__label">{fact.label}</dt>
      <dd className="pp-facts__value">{fact.value}</dd>
    </dl>
  );
}

export default function QuickFacts() {
  return (
    <section className="pp-facts" aria-labelledby="quick-facts-heading">
      <div className="pp-container">
        <h2 id="quick-facts-heading" className="pp-sr-only">
          Panch Pokhari quick facts
        </h2>
        <div className="pp-facts__grid">
          {quickFacts.map((fact, index) => (
            <FactCard key={fact.id} fact={fact} delay={index * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
