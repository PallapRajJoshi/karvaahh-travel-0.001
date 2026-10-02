"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/destinations/khaptad/khaptad-faq";

interface KhaptadFaqAccordionProps {
  items: FaqItem[];
}

export default function KhaptadFaqAccordion({ items }: KhaptadFaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="khaptad-faq">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div className="khaptad-faq__item" data-open={isOpen} key={item.id}>
            <button
              type="button"
              className="khaptad-faq__question"
              aria-expanded={isOpen}
              aria-controls={`khaptad-faq-answer-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="khaptad-faq__icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className="khaptad-faq__answer" id={`khaptad-faq-answer-${item.id}`} role="region">
              <div className="khaptad-faq__answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
