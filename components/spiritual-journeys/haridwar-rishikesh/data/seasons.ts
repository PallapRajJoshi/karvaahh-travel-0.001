import type { CrowdAdvisory, Season } from "./types";

export const SEASONS: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – April",
    summary: "Generally pleasant for sightseeing and temple visits, though temperatures vary.",
    plan: "Light layers; mornings can still be cool.",
    icon: "flower",
  },
  {
    id: "summer",
    name: "Summer",
    months: "May – June",
    summary: "Warm to hot days in the plains and river valley. School holidays bring more visitors.",
    plan: "Plan temple visits early, carry water and wear breathable cotton.",
    icon: "sun",
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "July – September",
    summary:
      "Heavy rain is possible, with landslides on hill roads and disruption to plans. River levels rise.",
    plan: "Keep buffer time. Hill excursions such as Neelkanth may be postponed.",
    icon: "rain",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "October – November",
    summary: "Often comfortable and clear after the rains, subject to year-to-year variation.",
    plan: "A popular window — enquire early for your preferred hotels.",
    icon: "leaf",
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    summary: "Cold mornings and evenings, milder afternoons. Fog can slow road travel.",
    plan: "Warm layers for the evening aarti by the river.",
    icon: "snow",
  },
];

/**
 * Dated advisories. Review this list each quarter; remove entries once past.
 * Ardh Kumbh 2027 dates were announced by the Mela administration (verified Sep 2026).
 */
export const CROWD_ADVISORIES: CrowdAdvisory[] = [
  {
    id: "ardh-kumbh-2027",
    title: "Haridwar Ardh Kumbh 2027",
    period: "14 January – 20 April 2027",
    text: "Haridwar hosts the Ardh Kumbh, with major bathing days spread across these months. Expect very large crowds, traffic diversions near the ghats and early hotel sell-outs. Check the official Mela bathing calendar before fixing dates.",
  },
  {
    id: "kanwar-yatra",
    title: "Kanwar Yatra",
    period: "Shravan month, usually July – August",
    text: "Lakhs of Shiva devotees carry Ganga water from Haridwar, leading to heavy crowds and road restrictions around Haridwar, Rishikesh and Neelkanth.",
  },
];

export const SEASON_NOTE =
  "Weather, temple access, road conditions and crowd levels change every year. We check current conditions with you before confirming dates.";
