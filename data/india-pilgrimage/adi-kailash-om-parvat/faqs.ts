import type { FaqItem } from "./types";

/**
 * FAQs. The `answer` string feeds both the visible accordion and FAQPage
 * JSON-LD, so the structured data always matches what users see.
 * Separate paragraphs with a blank line.
 */
export const faqs: FaqItem[] = [
  {
    id: "what-is",
    question: "What is the Adi Kailash & Om Parvat Yatra?",
    answer:
      "It is a Himalayan pilgrimage in the Kumaon region to two sacred sites: Adi Kailash, revered as Chhota Kailash and associated with Lord Shiva and Goddess Parvati, and Om Parvat, known for the ॐ-like snow pattern on its face. The journey also includes Parvati Sarovar, Gauri Kund, traditional mountain villages and temples along the way.",
  },
  {
    id: "where",
    question: "Where are Adi Kailash and Om Parvat located?",
    answer:
      "Both lie in the high Vyas Valley of the Kumaon Himalaya, in the Pithoragarh district of Uttarakhand, close to the Tibet border. Adi Kailash rises above the Jolingkong valley; Om Parvat is viewed from near Nabidhang in the upper Kali valley. Dharchula is the last major town before the restricted high-altitude area.",
  },
  {
    id: "chhota-kailash",
    question: "Why is Adi Kailash known as Chhota Kailash?",
    answer:
      "Adi Kailash is called Chhota Kailash, or “Little Kailash”, because devotees regard it as a sacred counterpart to Mount Kailash in Tibet, honoured as an abode of Lord Shiva and Goddess Parvati. It is also counted among the Panch Kailash, the five sacred Kailash peaks.",
  },
  {
    id: "om-significance",
    question: "What is the spiritual significance of Om Parvat?",
    answer:
      "Snow settles on the mountain's face in a pattern that resembles ॐ, the sacred syllable regarded as the primordial sound in Hindu tradition. Pilgrims view the mountain itself as a natural symbol of the divine, and seeing it is considered a form of darshan.",
  },
  {
    id: "sarovar-kund",
    question: "What are Parvati Sarovar and Gauri Kund?",
    answer:
      "Both are sacred high-altitude waters near Adi Kailash associated with Goddess Parvati. Parvati Sarovar is a lake at the foot of the peak where pilgrims offer prayers and the mountain is often reflected. Gauri Kund is a glacial lake beneath the snow slopes nearby. Access to each depends on weather and ground conditions on the day.",
  },
  {
    id: "days",
    question: "How many days are required for the yatra?",
    answer:
      "It depends on where you start, your pace and — most importantly — the acclimatisation stops built into the itinerary. Road-based journeys from the plains take noticeably longer than those starting from Dharchula, and buffer days for weather are strongly advised.\n\nKarvaahh confirms the duration of each itinerary when you enquire.",
    needsVerification: true,
  },
  {
    id: "best-time",
    question: "What is the best time to visit Adi Kailash and Om Parvat?",
    answer:
      "The pilgrimage season generally runs through the warmer months, from late spring into autumn. The period after the monsoon often brings clearer skies, while the monsoon itself can cause landslides and road closures. Winter is generally not accessible. Exact dates depend on weather, road access and when the authorities open the route, so they are confirmed each year.",
    needsVerification: true,
  },
  {
    id: "permits",
    question: "Are permits required for the journey?",
    answer:
      "Yes. The route beyond Dharchula lies in a restricted border area, and an Inner Line Permit issued through the SDM office in Dharchula is required. It is widely reported to be available to Indian citizens only, and the process typically involves ID, photographs, a medical fitness certificate and verification.\n\nRules change, so Karvaahh confirms current eligibility and requirements for every booking. Please do not make travel plans until eligibility is confirmed.",
    needsVerification: true,
  },
  {
    id: "difficulty",
    question: "Is the Adi Kailash Yatra physically demanding?",
    answer:
      "Much of the route is now covered by road, so it is not a long trek. The main challenge is altitude: parts of the journey are above 4,000 m, with cold temperatures and long travel days on mountain roads. Short walks at altitude can feel strenuous. A reasonable level of fitness and a medical check-up before booking are essential.",
  },
  {
    id: "customize",
    question: "Can I customize my Adi Kailash tour package?",
    answer:
      "Yes. Dates, pace, start point, accommodation style and group size can be tailored — within the limits set by the season, road conditions and permit rules. Tell us what you need and we'll suggest an itinerary.",
  },
  {
    id: "om-visible",
    question: "Is the ॐ symbol on Om Parvat always visible?",
    answer:
      "No. The pattern is formed by snow on the rock face, so how clearly it shows depends on snow conditions, weather and cloud cover. On some days it is sharp, on others faint or hidden. It cannot be guaranteed on any given day.",
  },
  {
    id: "packing",
    question: "What should I pack for the pilgrimage?",
    answer:
      "Warm layers (thermals, fleece and an insulated jacket), a waterproof shell, cap, gloves, woollen socks and sturdy shoes. Add sunglasses, sunscreen, lip balm, a torch, a power bank, a reusable water bottle, personal medicines, original photo ID with copies, and passport-size photographs.",
  },
];
