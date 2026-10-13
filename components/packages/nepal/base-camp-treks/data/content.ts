import type { Faq, ImageAsset } from "../types";
import { anchors, enquiryHref } from "../config";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Himalayan Expeditions",
  title: "Nepal Base Camp Treks",
  titleAccent: "Journey to the Heart of the Himalayas",
  description:
    "Follow legendary Himalayan trails to the foot of some of the world’s most magnificent mountains. Discover breathtaking landscapes, remote mountain villages, ancient monasteries, and unforgettable high-altitude adventures with Karvaahh Travels.",
  image: {
    src: "/koshi/everest-base-camp.jpg",
    alt: "Panorama of Everest, Nuptse, Ama Dablam and the Khumbu Glacier at first light",
    focus: "30% 45%",
  } satisfies ImageAsset,
  primaryCta: { label: "Explore Base Camp Treks", href: `#${anchors.treks}` },
  secondaryCta: { label: "Plan Your Expedition", href: enquiryHref("Nepal base camp trek") },
  /** Each item is derivable from the trek data on this page. */
  facts: [
    { value: "8", label: "Base camp routes compared" },
    { value: "≈ 4,130–5,545 m", label: "Highest points on these routes" },
    { value: "Spring · Autumn", label: "Main trekking seasons" },
    { value: "Private", label: "Tailor-made departures" },
  ],
};

/* ------------------------------------------------------------------ */
/* Highlights                                                          */
/* ------------------------------------------------------------------ */

export const highlightPanels: { title: string; body: string; where: string; image: ImageAsset }[] = [
  {
    title: "Stand beneath giants",
    body: "Base camps sit where the trail meets the mountain — walls of rock and ice rising thousands of metres above you.",
    where: "Everest · Makalu · Kanchenjunga",
    image: {
      src: "/koshi/makalu-base-camp.jpg",
      alt: "Trekkers photographing Makalu from its base camp",
      focus: "60% 40%",
    },
  },
  {
    title: "Glacier valleys & alpine lakes",
    body: "Moraine ridges, turquoise lakes and the slow rivers of ice that carved these valleys.",
    where: "Khumbu · Dhaulagiri · Kanchenjunga",
    image: {
      src: "/images/home/solukhumbu-everest-region-nepal.webp",
      alt: "Gokyo Lake and village beside the Ngozumpa Glacier in the Everest region",
      focus: "50% 55%",
    },
  },
  {
    title: "Life in mountain villages",
    body: "Stone houses, terraced fields and teahouse kitchens run by families who have lived here for generations.",
    where: "Annapurna · Everest · Manaslu",
    image: {
      src: "/images/home/ghandruk-village.jpg",
      alt: "Stone houses of Ghandruk village in the Annapurna region",
      focus: "50% 50%",
    },
  },
];

export const highlightFeatures: { icon: HighlightIcon; title: string; body: string }[] = [
  {
    icon: "users",
    title: "Sherpa, Gurung & mountain cultures",
    body: "Sherpa communities in the Khumbu, Gurung villages around Annapurna, Limbu and Rai settlements in the east — each trail has its own people and customs.",
  },
  {
    icon: "landmark",
    title: "Monasteries & prayer flags",
    body: "Buddhist gompas, mani walls and chortens line the Khumbu, Manaslu and Kanchenjunga trails. Walk clockwise around them.",
  },
  {
    icon: "waves",
    title: "Suspension bridges & rivers",
    body: "Long steel bridges hung with prayer flags cross the Dudh Koshi, Modi Khola, Budhi Gandaki and Arun.",
  },
  {
    icon: "sunrise",
    title: "Sunrise & sunset panoramas",
    body: "Early starts to Kala Patthar or the Mardi Himal upper viewpoint reward you with first light on the peaks — weather permitting.",
  },
  {
    icon: "leaf",
    title: "Rhododendron forests",
    body: "Lower trails in the Annapurna, Makalu and Kanchenjunga regions pass through rhododendron forest that flowers in spring.",
  },
  {
    icon: "mountain",
    title: "The quiet of high places",
    body: "Remote routes like Makalu and Dhaulagiri can mean days with few other trekkers — just wind, water and stone.",
  },
];

export type HighlightIcon = "users" | "landmark" | "waves" | "sunrise" | "leaf" | "mountain";

/* ------------------------------------------------------------------ */
/* Packages                                                            */
/* ------------------------------------------------------------------ */

/**
 * Only treks with a dedicated Karvaahh page appear as packages. No prices,
 * durations or inclusions are asserted here — those are confirmed per quote.
 */
export const trekPackages: {
  id: string;
  title: string;
  destination: string;
  highlights: string[];
  difficulty: string;
  altitude: string;
  href: string;
  cta: string;
}[] = [
  {
    id: "ebc",
    title: "Everest Base Camp Trek",
    destination: "Khumbu, Everest region",
    highlights: ["Namche Bazaar & Tengboche Monastery", "Everest Base Camp & optional Kala Patthar", "Classic, helicopter-return, luxury-lodge & private options"],
    difficulty: "Strenuous",
    altitude: "≈ 5,545 m (Kala Patthar)",
    href: "/adventure/everest-base-camp-trek#packages",
    cta: "View Package",
  },
  {
    id: "three-passes",
    title: "Everest Three Passes Trek",
    destination: "Khumbu, Everest region",
    highlights: ["Kongma La, Cho La & Renjo La", "Everest Base Camp, Kala Patthar & Gokyo Lakes", "For experienced high-altitude trekkers"],
    difficulty: "Challenging",
    altitude: "≈ 5,535 m (Kongma La)",
    href: "/adventure/everest-three-passes-trek",
    cta: "View Package",
  },
  {
    id: "api-nampa",
    title: "Api Nampa Base Camp Trek",
    destination: "Darchula, far-western Nepal",
    highlights: ["Api Nampa Conservation Area", "Chameliya River valley & alpine pastures", "Privately planned around current access"],
    difficulty: "Challenging",
    altitude: "≈ 3,900–4,100 m (base camp area)",
    href: "/adventure/api-nampa-base-camp-trek",
    cta: "View Package",
  },
  {
    id: "saipal",
    title: "Saipal Base Camp Trek",
    destination: "Far-western Nepal",
    highlights: ["Views of Mount Saipal (7,031 m)", "Remote villages and wild valleys", "Off-the-beaten-path expedition"],
    difficulty: "Challenging",
    altitude: "Confirmed with your itinerary",
    href: "/offbeat-unexplored/saipal-base-camp",
    cta: "View Package",
  },
];

/* ------------------------------------------------------------------ */
/* Preparation guide                                                   */
/* ------------------------------------------------------------------ */

export const seasons: { id: string; name: string; months: string; tone: "best" | "good" | "hard"; body: string }[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    tone: "best",
    body: "Popular on most routes. Rhododendrons bloom on lower trails; haze and afternoon cloud build as the season warms.",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    tone: "best",
    body: "Often the clearest mountain views after the monsoon, which also makes it the busiest time on classic trails.",
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    tone: "good",
    body: "Some lower and mid-altitude routes stay possible, but cold, snow and closed high passes make high-altitude trekking much harder.",
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "June – August",
    tone: "hard",
    body: "Rain, leeches, landslides and cloud affect most base camp routes. Rain-shadow areas behave differently but are not base camp treks.",
  },
];

export const seasonNote =
  "Every region, elevation and year is different. We check weather, trail and flight conditions for your specific route before confirming dates.";

export const guideBlocks: { id: string; icon: "heart" | "backpack" | "file" | "shield"; title: string; intro: string; points: string[] }[] = [
  {
    id: "fitness",
    icon: "heart",
    title: "Fitness & acclimatisation",
    intro: "Endurance matters more than speed. Expect several hours of walking a day, often on steep stone steps.",
    points: [
      "Train with long hikes, stairs and a loaded daypack for 2–3 months before you go.",
      "Ascend gradually, take the planned rest days and sleep lower when you can.",
      "Drink plenty of water, eat well and keep a slow, steady pace.",
      "Know the signs of altitude sickness — headache, nausea, dizziness, breathlessness at rest — and descend if they worsen.",
      "Being fit does not prevent altitude illness. Anyone can be affected.",
    ],
  },
  {
    id: "gear",
    icon: "backpack",
    title: "Trekking gear",
    intro: "Pack light but complete. Your confirmed itinerary comes with a detailed kit list.",
    points: [
      "Broken-in waterproof trekking boots and good socks.",
      "Layers: base layers, fleece, down jacket and waterproof shell.",
      "Warm hat, sun hat, gloves, sunglasses and high-SPF sunscreen.",
      "A comfortable daypack; your duffel is usually carried by porters.",
      "Water bottles and a purification method.",
      "Headlamp, personal medication and a small first-aid kit.",
      "Sleeping bag rated for the altitude — and a tent where the route requires camping.",
    ],
  },
  {
    id: "permits",
    icon: "file",
    title: "Permits & trekking rules",
    intro: "Requirements differ by region and change from time to time, so we confirm the current rules when you book.",
    points: [
      "National parks and conservation areas — such as Sagarmatha, Annapurna and Makalu Barun — charge entry permits.",
      "Restricted areas, including Kanchenjunga and Manaslu, need a special permit arranged through a registered agency, usually for a minimum group size with a licensed guide.",
      "Some areas also levy local municipality fees.",
      "Carry your passport and permits on the trail; they are checked at checkpoints.",
    ],
  },
  {
    id: "safety",
    icon: "shield",
    title: "Safety & responsible trekking",
    intro: "Good planning keeps the mountains safe for you and the people who live there.",
    points: [
      "Get travel insurance that covers trekking at your planned maximum altitude and helicopter evacuation.",
      "Build buffer days for weather and mountain flights.",
      "Trek with qualified local guides and porters where required or advised.",
      "Carry out your rubbish, avoid single-use plastic and use refillable bottles.",
      "Dress modestly, ask before photographing people and walk clockwise around stupas and mani walls.",
      "Follow local regulations and your guide’s decisions on weather and route.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Itinerary concepts                                                  */
/* ------------------------------------------------------------------ */

/**
 * Route CONCEPTS: the main waypoints only. No days, walking times or overnight
 * stops are claimed — those are set in a confirmed itinerary.
 */
export const routeConcepts: { id: string; title: string; style: string; waypoints: string[] }[] = [
  {
    id: "abc",
    title: "Annapurna Base Camp",
    style: "Teahouse trek from Pokhara",
    waypoints: ["Pokhara", "Ghandruk", "Chhomrong", "Bamboo", "Deurali", "Machhapuchhre Base Camp", "Annapurna Base Camp"],
  },
  {
    id: "mardi",
    title: "Mardi Himal",
    style: "Short ridge trek from Pokhara",
    waypoints: ["Pokhara", "Forest Camp", "Low Camp", "High Camp", "Upper Viewpoint", "Mardi Himal Base Camp"],
  },
  {
    id: "makalu",
    title: "Makalu Base Camp",
    style: "Remote expedition from Tumlingtar",
    waypoints: ["Tumlingtar", "Num", "Seduwa", "Tashigaon", "Khongma", "Shipton La", "Langmale", "Makalu Base Camp"],
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs: Faq[] = [
  {
    q: "Which base camp treks are available in Nepal?",
    a: "The best-known are Everest Base Camp and Annapurna Base Camp. Others include Mardi Himal, Ama Dablam, Makalu, Kanchenjunga and Dhaulagiri base camps, plus a side trip to Manaslu Base Camp on the Manaslu Circuit. Karvaahh also runs remote far-western treks to Api Nampa and Saipal base camps.",
  },
  {
    q: "Which base camp trek is suitable for beginners?",
    a: "For fit first-timers, Mardi Himal and Annapurna Base Camp are usually the most approachable: they are shorter and reach lower maximum altitudes. They still involve long days, steep steps and altitude, so preparation matters. Remote routes such as Makalu, Kanchenjunga and Dhaulagiri are not beginner treks.",
  },
  {
    q: "How many days does Everest Base Camp trekking take?",
    a: "Most itineraries take around 12–16 days, including the Lukla flights and at least two acclimatisation days. The exact length depends on your route, pace, whether you add Kala Patthar or a helicopter return, and buffer days for weather.",
  },
  {
    q: "How difficult is Annapurna Base Camp trekking?",
    a: "It is generally considered moderate. The highest point is about 4,130 m, and the main challenge is the many stone staircases between villages such as Chhomrong and Bamboo. Good stamina and a gradual ascent are important.",
  },
  {
    q: "What is the best season for Himalayan base camp treks?",
    a: "Spring (March–May) and autumn (September–November) are the most popular seasons on most routes. Winter is possible on some trails but is much colder, and the monsoon (June–August) brings rain, landslides and cloud to most regions. Conditions vary by region and year.",
  },
  {
    q: "Do base camp treks require previous trekking experience?",
    a: "Moderate routes such as Mardi Himal and Annapurna Base Camp can be done without prior high-altitude experience if you are fit and well prepared. Long or remote routes — Everest Three Passes, Makalu, Kanchenjunga, Manaslu and Dhaulagiri — are best attempted after earlier multi-day treks.",
  },
  {
    q: "Are trekking permits required?",
    a: "Yes. Nearly all base camp treks pass through a national park or conservation area that requires a permit, and restricted areas such as Kanchenjunga and Manaslu need a special permit arranged through a registered agency. Rules change, so we confirm the current requirements for your route when you book.",
  },
  {
    q: "How should I prepare for high-altitude trekking?",
    a: "Build endurance over a few months with long hikes, stairs and carrying a daypack. On the trail, ascend gradually, take rest days, stay hydrated and tell your guide about any symptoms early. Remember that fitness does not prevent altitude sickness.",
  },
  {
    q: "What equipment should I bring?",
    a: "Broken-in boots, layered clothing with a warm down jacket and waterproof shell, gloves, hats, sunglasses and sunscreen, a daypack, water bottles with purification, a headlamp, personal medication and a sleeping bag suited to the altitude. We share a detailed kit list with your itinerary.",
  },
  {
    q: "How can I enquire about a base camp trekking package with Karvaahh Travels?",
    a: "Use the enquiry form on our contact page and tell us which trek interests you, your preferred dates, group size and trekking experience. We will reply with a suggested itinerary and quote tailored to you.",
  },
];
