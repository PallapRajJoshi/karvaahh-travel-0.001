/**
 * FAQs — rendered visibly AND emitted as FAQPage JSON-LD from the same
 * array, so structured data always matches what users can read.
 * Answers are plain text (no HTML) for that reason.
 */
import type { FaqEntry } from "../types";

export const faqHeading = {
  eyebrow: "Questions",
  heading: "Frequently Asked Questions",
};

export const faqs: FaqEntry[] = [
  {
    id: "what",
    question: "What is the Kailash Mansarovar Yatra?",
    answer:
      "It is a pilgrimage to Mount Kailash and Lake Mansarovar in western Tibet, usually including darshan of the mountain, prayers at the lake and the three-day Kailash Parikrama (Kora) around the mountain.",
  },
  {
    id: "where",
    question: "Where are Mount Kailash and Lake Mansarovar located?",
    answer:
      "Both are in the Ngari region of the Tibet Autonomous Region of China, north of Nepal's far-western border. Lake Mansarovar lies a short drive south of Mount Kailash.",
  },
  {
    id: "why-sacred",
    question: "Why is Mount Kailash sacred to different religions?",
    answer:
      "Hindus revere it as the abode of Lord Shiva; Buddhists as Kang Rinpoche, home of Demchok; Jains as Ashtapada, where Rishabhanatha attained liberation; and followers of Bon as Yungdrung Gutseg, the spiritual centre of their tradition. Each tradition honours it in its own way.",
  },
  {
    id: "kora",
    question: "What is the Kailash Parikrama or Kora?",
    answer:
      "It is the ritual walk around Mount Kailash, commonly cited as about 52 km over three days from Darchen, crossing Dolma La pass at roughly 5,600 m. Hindus, Buddhists and Jains walk clockwise; Bon pilgrims walk anticlockwise.",
  },
  {
    id: "days",
    question: "How many days are required for the Kailash Mansarovar Yatra?",
    answer:
      "Helicopter-assisted journeys via Nepal typically take around 9–12 days and overland journeys around 12–15 days, including acclimatisation. Your exact itinerary depends on the route, permits and your start city.",
  },
  {
    id: "routes",
    question: "What are the available overland and helicopter-assisted routes?",
    answer:
      "The main overland route drives from Kathmandu via the Rasuwagadhi–Kerung border and Saga to Mansarovar. The helicopter-assisted route flies via Nepalgunj and Simikot, with a helicopter to Hilsa and road via Purang. Availability depends on permits and seasonal conditions. The Government of India also runs a separate yatra with its own registration, which is not operated by Karvaahh.",
    requiresConfirmation: true,
  },
  {
    id: "difficulty",
    question: "Is the Kailash Parikrama physically demanding?",
    answer:
      "Yes. It involves long days of walking at high altitude in cold weather, and the Dolma La day is especially strenuous. Good fitness, gradual acclimatisation and a medical check-up are essential. Ponies and porters can often be hired in Darchen, subject to availability.",
  },
  {
    id: "permits",
    question: "What permits and travel documents are required?",
    answer:
      "You need a passport valid for at least six months, a Chinese group visa and Tibet permits arranged through an authorised operator; independent travel is not allowed. Indian citizens must use a passport even though other ID works for Nepal. Medical, age and document rules are set by the authorities and can change, so we confirm current requirements at booking.",
    requiresConfirmation: true,
  },
  {
    id: "best-time",
    question: "What is the best time to visit Kailash Mansarovar?",
    answer:
      "The pilgrimage season generally runs from about May to September, with June to August the busiest. Exact dates depend on weather and permit issuance each year; tours are generally not operated in winter.",
  },
  {
    id: "customize",
    question: "Can I customize my Kailash Mansarovar tour package?",
    answer:
      "Yes. We can plan private departures with your choice of route, extra acclimatisation days, puja arrangements, hotel standards and add-ons such as Muktinath or Kathmandu temple visits, subject to permits.",
  },
  {
    id: "heli-season",
    question: "Are helicopter-assisted journeys available throughout the season?",
    answer:
      "Not always. Flights to Simikot and helicopters to Hilsa depend on weather and visibility, and monsoon months bring frequent delays. Helicopter-assisted itineraries should include buffer days, and availability must be confirmed for your dates.",
    requiresConfirmation: true,
  },
  {
    id: "medical",
    question: "What medical and fitness preparation is recommended?",
    answer:
      "Get a full medical check-up and your doctor's advice before booking, start regular walking and breathing exercises two to three months ahead, and buy insurance covering high-altitude trekking and evacuation. On the trip, ascend slowly, stay hydrated and report any symptoms of altitude sickness immediately.",
  },
];
