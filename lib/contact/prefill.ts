import {
  BUDGET_VALUES,
  CONTACT_METHOD_VALUES,
  TRAVEL_TYPE_VALUES,
  type BudgetValue,
  type ContactMethodValue,
  type TravelTypeValue,
} from "./options";

/**
 * Lets any element on the page (category cards, "Call back" cards, links from
 * other pages) pre-fill the enquiry form without making those sections client
 * components.
 *
 *  - Elements carry data-prefill="true" plus data-prefill-type / -budget / -method.
 *    ContactInteractions delegates the click and calls requestPrefill().
 *  - Deep links work too:  /contact?type=spiritual-pilgrimage&destination=Kedarnath
 */

export type Prefill = {
  travelType?: TravelTypeValue;
  budget?: BudgetValue;
  contactMethod?: ContactMethodValue;
  destination?: string;
};

const EVENT = "karvaahh:contact-prefill";

export function requestPrefill(prefill: Prefill): void {
  window.dispatchEvent(new CustomEvent<Prefill>(EVENT, { detail: prefill }));
}

function isOneOf<T extends string>(list: readonly string[], value: string | null | undefined): value is T {
  return typeof value === "string" && list.includes(value);
}

export function parsePrefill(source: {
  type?: string | null;
  budget?: string | null;
  method?: string | null;
  destination?: string | null;
}): Prefill | null {
  const out: Prefill = {};
  if (isOneOf<TravelTypeValue>(TRAVEL_TYPE_VALUES, source.type)) out.travelType = source.type;
  if (isOneOf<BudgetValue>(BUDGET_VALUES, source.budget)) out.budget = source.budget;
  if (isOneOf<ContactMethodValue>(CONTACT_METHOD_VALUES, source.method)) out.contactMethod = source.method;
  const destination = source.destination?.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, 100);
  if (destination) out.destination = destination;
  return Object.keys(out).length > 0 ? out : null;
}

function readUrlPrefill(): Prefill | null {
  const params = new URLSearchParams(window.location.search);
  return parsePrefill({
    type: params.get("type"),
    budget: params.get("budget"),
    method: params.get("method"),
    destination: params.get("destination"),
  });
}

/**
 * Subscribe to prefill requests. A URL-based prefill (if any) is delivered
 * asynchronously right after subscribing, so subscribers never set state
 * during the subscribe call itself.
 */
export function subscribePrefill(callback: (prefill: Prefill) => void): () => void {
  let active = true;
  const handler = (event: Event) => {
    if (active) callback((event as CustomEvent<Prefill>).detail);
  };
  window.addEventListener(EVENT, handler);
  queueMicrotask(() => {
    if (!active) return;
    const fromUrl = readUrlPrefill();
    if (fromUrl) callback(fromUrl);
  });
  return () => {
    active = false;
    window.removeEventListener(EVENT, handler);
  };
}
