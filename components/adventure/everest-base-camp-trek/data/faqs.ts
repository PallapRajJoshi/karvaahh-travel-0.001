import type { AccordionEntry } from "../types";

/**
 * FAQs. These render visibly on the page AND feed FAQPage JSON-LD, so the
 * structured data always matches what users can see. Keep answers factual.
 */
export const faqs: AccordionEntry[] = [
  {
    id: "what-is",
    title: "What is the Everest Base Camp Trek?",
    body: ["It is a multi-day trek through Nepal's Khumbu region from Lukla to the base camp used by Everest expeditions, passing Sherpa villages such as Namche Bazaar and Tengboche. No technical climbing is required, but it is a demanding high-altitude journey."],
  },
  {
    id: "where",
    title: "Where is Everest Base Camp located?",
    body: ["The south base camp lies on the Khumbu Glacier in Sagarmatha National Park, in the Solukhumbu district of north-eastern Nepal, close to the border with Tibet (China)."],
  },
  {
    id: "height",
    title: "How high is Everest Base Camp?",
    body: ["Everest Base Camp is commonly cited at about 5,364 m (17,598 ft). Because the camp sits on a moving glacier, the exact figure varies slightly between sources."],
  },
  {
    id: "days",
    title: "How many days are required for the Everest Base Camp Trek?",
    body: ["Most itineraries take around 12–16 days including travel to and from Kathmandu, with the walking itself usually 11–13 days. We recommend adding at least one buffer day for possible Lukla flight delays."],
  },
  {
    id: "best-time",
    title: "What is the best time to visit Everest Base Camp?",
    body: ["Spring (March–May) and autumn (September–November) generally offer the most favourable trekking conditions and mountain views. Monsoon brings rain and flight disruptions, and winter brings severe cold and possible snow. Conditions vary every year."],
  },
  {
    id: "beginners",
    title: "Is the Everest Base Camp Trek suitable for beginners?",
    body: ["Fit beginners with no technical experience do complete the trek, but it is strenuous and high. Arrive in good cardiovascular shape, train with hill walks beforehand, and follow the acclimatisation schedule carefully. If you have any medical conditions, consult your doctor first."],
  },
  {
    id: "ebc-vs-kp",
    title: "What is the difference between Everest Base Camp and Kala Patthar?",
    body: ["Everest Base Camp (about 5,364 m) is the expedition camp on the Khumbu Glacier; Everest's summit is largely hidden from there. Kala Patthar (about 5,545 m) is a viewpoint above Gorakshep that offers the trek's finest view of Everest's summit, usually climbed early in the morning for sunrise."],
  },
  {
    id: "permits",
    title: "What permits are required for the Everest Base Camp Trek?",
    verify: true,
    body: ["You need a Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality entry permit. Permit fees and guide regulations are revised from time to time, so Karvaahh confirms the current requirements when you book."],
  },
  {
    id: "ams",
    title: "Is altitude sickness a concern during the trek?",
    body: ["Yes. Altitude sickness can affect anyone above roughly 2,500 m regardless of fitness. Gradual ascent, acclimatisation days, hydration and reporting symptoms early are essential. Serious symptoms require immediate descent and medical attention."],
  },
  {
    id: "customize",
    title: "Can I customize my Everest Base Camp Trek package?",
    body: ["Yes. We can adjust the pace, add rest days, upgrade accommodation where available, arrange private departures, or combine EBC with routes such as Gokyo Lakes. Share your dates and preferences and we will build a plan with you."],
  },
  {
    id: "helicopter",
    title: "Are helicopter-assisted return options available?",
    body: ["Helicopter returns from the upper Khumbu can often be arranged instead of trekking back to Lukla. They are weather-dependent, subject to operator availability, and quoted separately. The ascent is always made on foot for safe acclimatisation."],
  },
  {
    id: "packing",
    title: "What should I pack for the Everest Base Camp Trek?",
    body: ["Layered clothing including a down jacket and waterproof shell, broken-in trekking boots, a warm sleeping bag, gloves, hat, sunglasses, sunscreen, a headlamp, water purification, trekking poles and a personal first-aid kit. We share a detailed packing list after booking."],
  },
];
