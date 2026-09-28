import type { FaqItem } from "./types";

/**
 * Visible FAQ content — also drives FAQPage JSON-LD, so the two can never drift.
 * Answers avoid hard-coded fees and rules; review every season.
 */
export const FAQ_TITLE = "Frequently Asked Questions About Api Nampa Base Camp Trek";

export const FAQS: FaqItem[] = [
  {
    id: "location",
    question: "Where is Api Nampa Base Camp located?",
    answer:
      "Api Himal Base Camp lies below Mount Api (7,132 m) inside the Api Nampa Conservation Area in Darchula district, Sudurpashchim Province, in the far north-western corner of Nepal near the borders with India and Tibet (China).",
  },
  {
    id: "duration",
    question: "How many days are required for the Api Nampa Base Camp Trek?",
    answer:
      "Most journeys take around 11–14 days from Kathmandu and back, including travel to the far west, several trekking days each way and buffer time for weather and acclimatisation. The exact length depends on your trailhead and current road access.",
  },
  {
    id: "season",
    question: "What is the best season for trekking in the Api Nampa region?",
    answer:
      "Spring (March–May) and autumn (September–November) usually offer the most suitable conditions. Winter brings heavy cold and snow, and the monsoon (June–August) brings landslides and transport disruption. Weather varies every year, so dates are always confirmed against current conditions.",
  },
  {
    id: "difficulty",
    question: "How difficult is the trek?",
    answer:
      "It is a challenging trek: long days on steep and sometimes rough trails, basic facilities, altitudes around 4,000 m and a long way from medical help. Good fitness and previous multi-day trekking experience are strongly recommended.",
  },
  {
    id: "elevation",
    question: "What is the approximate elevation of Api Himal Base Camp?",
    answer:
      "Api Himal Base Camp is generally reported at roughly 3,900–4,100 m, with nearby viewpoints and Kalidhunga Lake at a similar or slightly higher altitude. Published figures vary, so we confirm elevations for your exact route.",
  },
  {
    id: "permits",
    question: "Do I need permits for Api Nampa Conservation Area?",
    answer:
      "Yes. Trekkers need a conservation area entry permit, and other authorisations or local fees may also apply depending on current rules. Because fees and requirements change, we confirm the latest permits when you book and can arrange them for you.",
  },
  {
    id: "guide",
    question: "Is a trekking guide required?",
    answer:
      "Guide rules in Nepal change from time to time, so we confirm the current regulation for your dates. Regardless of the rules, we strongly recommend a licensed local guide on this remote route for safety, navigation and village logistics.",
  },
  {
    id: "beginners",
    question: "Is the trek suitable for beginners?",
    answer:
      "It is not a good first trek. Beginners are better served by a shorter, better-supported Himalayan trek first. Fit walkers with some multi-day experience can take it on with proper preparation and support.",
  },
  {
    id: "accommodation",
    question: "What type of accommodation is available?",
    answer:
      "Expect a mix of simple tea houses and village homestays in the lower valley, with very basic shelters or organised camping higher up. Availability and facilities vary by route and season.",
  },
  {
    id: "camping",
    question: "Is camping required during the trek?",
    answer:
      "Camping may be needed on some nights, especially near base camp or when lodges are closed. Whether your trip needs full or partial camping support is confirmed when we plan your route and dates.",
  },
  {
    id: "packing",
    question: "What should I pack for the trek?",
    answer:
      "Broken-in waterproof boots, a full layering system, waterproof shell, insulated jacket, a sleeping bag rated well below freezing, headlamp, water treatment, personal first-aid kit, power bank and enough cash for the whole trek. We share a full kit list after booking.",
  },
  {
    id: "altitude",
    question: "Is altitude sickness a concern?",
    answer:
      "Yes. At around 4,000 m altitude illness can affect anyone, regardless of fitness. A gradual ascent, rest days, hydration and a willingness to descend reduce the risk but never remove it. Speak to your doctor before travelling.",
  },
  {
    id: "highlights",
    question: "What are the major highlights of the Api Nampa region?",
    answer:
      "Close views of Mount Api, Api Himal Base Camp, Kalidhunga Lake, Dhauli Odar, the Chameliya River valley, alpine pastures, traditional Darchula villages and quiet wilderness camps under dark skies.",
  },
  {
    id: "customise",
    question: "Can I customize the Api Nampa Base Camp Trek itinerary?",
    answer:
      "Yes. We plan every Api Nampa trip privately around your dates, fitness, group size and preferred pace, and can add extra acclimatisation, lake visits or cultural time.",
  },
  {
    id: "access",
    question: "How can I reach the trekking starting point?",
    answer:
      "Travellers usually fly or drive from Kathmandu to Dhangadhi, then continue by road for one or more days into Darchula district, finishing with local jeep transport toward the trailhead. Road conditions change quickly after rain, so we confirm the route close to departure.",
  },
];
