import type { FaqItem } from "./types";

/**
 * FAQ — rendered visibly AND emitted as FAQPage JSON-LD from the same data,
 * so structured data always matches what users see. Keep answers plain text.
 */
export const faqs: FaqItem[] = [
  {
    id: "what",
    question: "What is the Mustang Circuit Trek?",
    answer: [
      "It is a journey through Nepal’s Mustang region, linking the villages of Lower Mustang — Jomsom, Marpha, Kagbeni and Muktinath — with the restricted Upper Mustang area and the walled city of Lo Manthang. It can be done as a trek, by road, or as a mix of both.",
    ],
  },
  {
    id: "where",
    question: "Where is the Mustang region located?",
    answer: [
      "Mustang is in Gandaki Province in north-central Nepal, along the upper Kali Gandaki valley and bordering Tibet. It lies north of the Annapurna and Dhaulagiri ranges, and Pokhara is the usual starting point.",
    ],
  },
  {
    id: "lower-vs-upper",
    question: "What is the difference between Lower Mustang and Upper Mustang?",
    answer: [
      "Lower Mustang covers the valley from around Jomsom to Kagbeni and Muktinath. It needs only the ACAP permit and has more lodges and road access.",
      "Upper Mustang lies north of Kagbeni and includes Lo Manthang, Tsarang, Ghami and Chhosar. It is a restricted area requiring a special permit, and it is drier, more remote and more strongly Tibetan in culture.",
    ],
  },
  {
    id: "days",
    question: "How many days are required for the Mustang Circuit Trek?",
    answer: [
      "It depends on how far north you go and how you travel. A Jomsom–Muktinath trip can be relatively short, while a full trek to Lo Manthang and back needs considerably longer, often around two weeks including travel and acclimatization. We plan the exact length around your route and dates.",
    ],
  },
  {
    id: "best-time",
    question: "What is the best time to visit Mustang?",
    answer: [
      "Spring (March to May) and autumn (September to November) are the most popular seasons. Upper Mustang lies in a rain shadow and can also be visited during the monsoon, though getting there can be disrupted. Winter is very cold and many services close.",
    ],
  },
  {
    id: "beginners",
    question: "Is the Mustang Circuit suitable for beginners?",
    answer: [
      "It is a non-technical trek, so reasonably fit beginners can do it with good preparation. The main challenges are altitude, wind, dust and several consecutive walking days. A road-based or shorter Lower Mustang itinerary is a gentler introduction.",
    ],
  },
  {
    id: "permits",
    question: "What permits are required for Upper Mustang?",
    answer: [
      "Non-Nepali visitors need the Upper Mustang Restricted Area Permit, issued through a registered agency, plus the Annapurna Conservation Area (ACAP) permit. Current rules also require a licensed guide. Fees and conditions change, so we confirm them at the time of booking.",
    ],
  },
  {
    id: "customized",
    question: "Can I visit Lo Manthang and Chhosar on a customized tour?",
    answer: [
      "Yes. Lo Manthang and the Chhosar valley can be built into a custom trek or a road-based trip with day hikes. Both are within the restricted area, so the Upper Mustang permit applies.",
    ],
  },
  {
    id: "culture",
    question: "What are the main cultural attractions of Mustang?",
    answer: [
      "Highlights include the walled city of Lo Manthang and its monasteries, Muktinath Temple, Kagbeni’s old village, the monasteries of Tsarang and Ghar Gompa, the cave cliffs of Chhosar, and long mani walls and chortens along the trail.",
    ],
  },
  {
    id: "road",
    question: "Can the Mustang Circuit be explored by road?",
    answer: [
      "Much of Mustang is now reachable by jeep, which makes road-based tours possible for travellers who prefer not to trek. Roads are rough and can be affected by weather and landslides, so conditions are checked close to travel.",
    ],
  },
  {
    id: "difficulty",
    question: "What is the approximate difficulty of the Mustang Circuit Trek?",
    answer: [
      "Most travellers find it moderate: trails are generally not steep for long, but altitude, strong afternoon winds and remote conditions make it demanding. Good fitness and gradual acclimatization make a big difference.",
    ],
  },
  {
    id: "packing",
    question: "What should I pack for a Mustang trekking adventure?",
    answer: [
      "Pack warm layers, a windproof jacket, trekking boots, sun protection, a dust scarf, a warm sleeping bag, water purification and a basic first-aid kit. We share a full packing list once your trip is planned.",
    ],
  },
];
