"use client";

import type { RefObject } from "react";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { useReveal } from "@/components/shared/useReveal";
import { howToReach } from "@/data/panch-pokhari/content";
import "./how-to-reach.css";

type RouteStep = { title: string; body: string };

function RouteStepCard({
  step,
  index,
  isLast,
}: {
  step: RouteStep;
  index: number;
  isLast: boolean;
}) {
  const [ref, revealClassName, style] = useReveal({ variant: "fade-up", delay: index * 90 });

  return (
    <li
      ref={ref as RefObject<HTMLLIElement>}
      className={`pp-route__step ${revealClassName}`}
      style={style}
    >
      <span className="pp-route__step-number">{index + 1}</span>
      <h3 className="pp-route__step-title">{step.title}</h3>
      <p className="pp-route__step-body">{step.body}</p>
      {!isLast && (
        <span className="pp-route__step-connector" aria-hidden="true">
          <Icon name="arrow-right" />
        </span>
      )}
    </li>
  );
}

export default function HowToReach() {
  return (
    <section className="pp-route" aria-labelledby="route-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Getting There"
          title={howToReach.heading}
          description={howToReach.intro}
        />

        <Reveal className="pp-route__banner" variant="fade-in">
          <Icon name="route" className="pp-route__banner-icon" />
          <span>{howToReach.mainRoute}</span>
        </Reveal>

        <ol className="pp-route__steps">
          {howToReach.steps.map((step, index) => (
            <RouteStepCard
              key={step.title}
              step={step}
              index={index}
              isLast={index === howToReach.steps.length - 1}
            />
          ))}
        </ol>

        <p className="pp-route__note">
          Exact road distances, driving durations, trekking hours, and GPS
          coordinates are not listed here and should be verified with a
          current, reliable source before travel.
        </p>
      </div>
    </section>
  );
}
