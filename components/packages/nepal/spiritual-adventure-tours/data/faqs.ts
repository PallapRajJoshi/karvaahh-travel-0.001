import type { AccordionEntry } from "../types";

/**
 * FAQ. This same data renders the visible accordion AND the FAQPage JSON-LD,
 * so the structured data always matches what visitors see (a Google requirement).
 * Plain text only: no HTML or markdown in `body`.
 */
export const faqs: AccordionEntry[] = [
  {
    id: "popular-spiritual-destinations",
    title: "What are the most popular spiritual destinations in Nepal?",
    body: [
      "Pashupatinath in Kathmandu, Muktinath in Mustang, Janaki Mandir in Janakpur and Manakamana in Gorkha are among the most visited Hindu pilgrimage sites. For Buddhist travellers, Lumbini (the Buddha’s birthplace) and the great stupas of Swayambhunath and Boudhanath are essential. Gosainkunda Lake is sacred to both traditions.",
    ],
  },
  {
    id: "best-time-pilgrimage",
    title: "What is the best time to visit Nepal for pilgrimage tours?",
    body: [
      "Spring (March–May) and autumn (September–November) are the most comfortable seasons for most pilgrimages, including Muktinath. Kathmandu and Lumbini can be visited year-round. Many pilgrims also plan around festivals such as Maha Shivaratri at Pashupatinath, Vivah Panchami in Janakpur or Janai Purnima at Gosainkunda.",
    ],
  },
  {
    id: "combine-spiritual-adventure",
    title: "Can I combine spiritual tours with Himalayan adventures?",
    body: [
      "Yes. That is what this collection is built around. Popular combinations include Kathmandu’s temples with a short Annapurna-region trek, Muktinath with a stay in Pokhara, or Gosainkunda with the Langtang Valley. We balance travel time, altitude and rest days so both parts of the trip are enjoyable.",
    ],
  },
  {
    id: "customized-packages",
    title: "Are customized Nepal tour packages available?",
    body: [
      "Yes. Every package can be tailored to your dates, group size, pace, hotel preferences and interests, or we can design a journey from scratch. Share your plans through our enquiry form and we will send a suggested itinerary and quote.",
    ],
  },
  {
    id: "days-required",
    title: "How many days are required for a Nepal spiritual tour?",
    body: [
      "A focused Kathmandu Valley pilgrimage can be done in 3–4 days. Adding Pokhara and Muktinath typically needs 7–9 days, and a wider circuit including Lumbini or Janakpur usually takes 9–12 days. Treks add their own time, from about 5 days for Mardi Himal to two weeks or more for Everest Base Camp.",
    ],
  },
  {
    id: "muktinath-access",
    title: "Is Muktinath accessible throughout the year?",
    body: [
      "Muktinath is open year-round and can be reached by road via Jomsom or by a short flight from Pokhara to Jomsom followed by a drive. Access is easiest from March to June and September to November. In winter, snow and cold can disrupt roads, and flights to Jomsom are weather-dependent in every season, so buffer days are recommended.",
    ],
  },
  {
    id: "packing-pilgrimage",
    title: "What should I pack for a Himalayan pilgrimage?",
    body: [
      "Pack warm layers and a windproof jacket, comfortable walking shoes, modest clothing for temples, sun protection, a reusable water bottle and any personal medicines. For high-altitude sites like Muktinath and Gosainkunda, add a warm hat, gloves and a down jacket even in spring and autumn.",
    ],
  },
  {
    id: "international-booking",
    title: "Can international tourists book Nepal tour packages?",
    body: [
      "Yes. Travellers from any country can book with Karvaahh. Most nationalities can obtain a Nepal tourist visa on arrival or apply online, while Indian citizens do not need a visa. We will guide you on documents and arrange any trekking or restricted-area permits your itinerary needs.",
    ],
  },
];
