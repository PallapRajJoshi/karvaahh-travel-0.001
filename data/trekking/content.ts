import type { IconName, PageImage } from "@/components/activities/experience/types";
import type { RelatedTour } from "@/components/activities/experience/product-types";
import * as I from "./images";
import type { InfoBlock } from "./types";

export const PAGE_PATH = "/packages/nepal/trekking-hiking-packages";

export const SEO = {
  title: "Nepal Trekking & Hiking Packages | Himalayan Treks | Karvaahh",
  socialTitle: "Nepal Trekking & Hiking Adventures with Karvaahh",
  description:
    "Explore Nepal trekking and hiking packages with Karvaahh: Everest Base Camp, Annapurna and Manang, Langtang, Poon Hill, Mustang, Manaslu and remote trails, with seasons, permits and preparation tips.",
  keywords: [
    "Nepal trekking packages",
    "Nepal hiking tours",
    "Himalayan trekking",
    "Everest Base Camp trek",
    "Annapurna trekking",
    "Langtang Valley trek",
    "Poon Hill trek",
    "Manang Circuit trek",
    "best time to trek in Nepal",
    "beginner treks in Nepal",
  ],
  ogImage: I.hero,
};

/* ---------- Trekking experiences ---------- */

export type EditorialExperience = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: PageImage;
};

export const EDITORIAL: EditorialExperience[] = [
  {
    id: "panoramas",
    eyebrow: "Snow-Capped Panoramas",
    title: "Walk Beneath the World's Highest Peaks",
    text: "Nepal is home to eight of the world's fourteen mountains above 8,000 m. On the trail they are not a distant skyline but daily companions — Everest and Nuptse above the Khumbu, Annapurna and Dhaulagiri from the Gandaki ridges, Kanchenjunga and Makalu in the far east.",
    points: ["Glaciers and moraine valleys", "High passes and base camps", "Changing light from dawn to dusk"],
    image: I.everestBaseCamp,
  },
  {
    id: "villages",
    eyebrow: "Villages & Mountain Hospitality",
    title: "Stay Where the Mountains Are Home",
    text: "Many trails link villages rather than wilderness camps. Sherpa, Gurung, Tamang, Thakali and Limbu communities run teahouses and homestays along the way, and an evening by the stove over dal bhat is as memorable as any summit view.",
    points: ["Teahouses and village homestays", "Local food on the trail", "Festivals and everyday village life"],
    image: I.ghandruk,
  },
  {
    id: "lakes",
    eyebrow: "Alpine Lakes & Valleys",
    title: "Sacred Lakes and Hidden Valleys",
    text: "From the holy waters of Gosaikunda and Panch Pokhari to Tilicho, Phoksundo and Rara, Nepal's high lakes are some of its most rewarding destinations — reached through quiet valleys, yak pastures and alpine meadows.",
    points: ["Pilgrimage lakes", "Glacial and turquoise lakes", "Yak pastures and meadows"],
    image: I.gosaikunda,
  },
];

export const FEATURES: { icon: IconName; title: string; text: string; image?: PageImage; href?: string }[] = [
  {
    icon: "landmark",
    title: "Monasteries & Spiritual Trails",
    text: "Gompas, chortens and mani walls line the trails of Khumbu, Mustang, Tsum and Dolpo.",
    image: I.loManthangHeritage,
  },
  {
    icon: "sun",
    title: "Sunrise Viewpoints",
    text: "Pre-dawn walks to Poon Hill and similar ridges for the first light on the Himalaya.",
    image: I.poonHill,
  },
  {
    icon: "waves",
    title: "Bridges, Rivers & Waterfalls",
    text: "Long suspension bridges cross river gorges fed by glaciers and monsoon waterfalls.",
    image: I.kushmaBridge,
  },
  {
    icon: "leaf",
    title: "Rhododendron Forests",
    text: "In spring the mid-hill forests of Annapurna and Langtang bloom red, pink and white.",
  },
  {
    icon: "camera",
    title: "Landscape Photography",
    text: "Mountain reflections, prayer flags and village light — every day brings new frames.",
  },
  {
    icon: "mountain",
    title: "Camping & Wilderness",
    text: "Remote regions and meadows suited to camping-based adventures, arranged on request.",
    image: I.dhorpatanMeadows,
    href: "/activities/adventure/camping",
  },
];

/* ---------- Travel essentials ---------- */

export const WHY_NEPAL: InfoBlock[] = [
  { icon: "mountainSnow", title: "Himalayan scenery", text: "Eight of the world's 8,000 m peaks, with trails that bring you close to them on foot." },
  { icon: "route", title: "A trail for every traveller", text: "From gentle hill walks a few days long to remote high-altitude journeys of several weeks." },
  { icon: "users", title: "Living mountain culture", text: "Trails connect villages, monasteries and sacred sites, not just viewpoints." },
  { icon: "leaf", title: "Diverse landscapes", text: "Subtropical valleys, rhododendron forest, alpine lakes and trans-Himalayan desert in a single country." },
];

export const SEASONS: { name: string; months: string; tone: "best" | "good" | "care"; text: string }[] = [
  { name: "Spring", months: "Mar – May", tone: "best", text: "A popular season: warmer days and rhododendrons in bloom on the lower trails. Haze and afternoon cloud often build later in the season." },
  { name: "Autumn", months: "Oct – Nov", tone: "best", text: "The other popular season, often with settled weather and clear views after the monsoon. Trails and lodges are at their busiest." },
  { name: "Winter", months: "Dec – Feb", tone: "good", text: "Quieter trails and crisp views at lower altitude, but cold nights, snow on high passes and some lodges closed higher up." },
  { name: "Monsoon", months: "Jun – Sep", tone: "care", text: "Rain, leeches, landslides and cloud on many routes. Rain-shadow regions such as Mustang and Dolpo can be better suited." },
];

export const SEASON_NOTE =
  "Suitability varies by region and altitude, and no season guarantees clear skies or open passes. We help you match the route to your travel dates.";

export const DIFFICULTY: { level: string; text: string; tone: string }[] = [
  { level: "Easy", text: "Short days on well-used trails at lower altitude. Suits most reasonably active travellers, families and first-timers.", tone: "#2F8F6B" },
  { level: "Moderate", text: "Several consecutive days of 4–7 hours walking with steady climbs. Good fitness and some preparation needed.", tone: "#C98500" },
  { level: "Challenging", text: "Long days, steep ascents and descents, and remote terrain. Prior multi-day trekking experience is recommended.", tone: "#C2562E" },
  { level: "High-altitude", text: "Nights well above 3,500 m and passes or base camps higher still. Acclimatisation days and a flexible plan are essential.", tone: "#7A2E2E" },
];

export const DIFFICULTY_NOTE =
  "Where one of our trek pages states a grade, it appears on that trek's card. How hard a trek feels also depends on your pace, the season and the itinerary chosen.";

export const PREPARE: InfoBlock[] = [
  { icon: "footprints", title: "Fitness", text: "Build up with regular walks, stairs and hill hikes carrying a daypack in the weeks before you travel." },
  { icon: "luggage", title: "Footwear & layers", text: "Broken-in trekking boots, plus layers you can add or remove: base layer, fleece, down jacket and waterproof shell." },
  { icon: "waves", title: "Water", text: "Carry a reusable bottle and a way to purify water, and drink regularly — especially at altitude." },
  { icon: "cloud", title: "Weather", text: "Mountain weather changes fast. Pack sun protection, gloves and a warm hat in every season." },
  { icon: "mountainSnow", title: "Acclimatisation", text: "Gain altitude gradually, take rest days, and descend if symptoms of altitude sickness get worse." },
  { icon: "shield", title: "Travel insurance", text: "Choose cover for trekking at your route's maximum altitude, including emergency evacuation." },
  { icon: "heart", title: "Responsible trekking", text: "Carry out your waste, respect monasteries and village customs, and support local lodges and guides." },
];

export const PERMITS = {
  text: "Permit requirements depend on where you trek. National parks and conservation areas such as Sagarmatha, Langtang and Annapurna have their own entry permits, and some areas also have local fees. Restricted regions — including Upper Mustang, Manaslu, Tsum Valley, Dolpo and Kanchenjunga — need a special permit, and usually a licensed guide and a minimum group size.",
  note: "Rules and fees change from time to time, so always confirm current requirements before departure. Karvaahh confirms what your chosen route needs when you book.",
};

export const GETTING_THERE: InfoBlock[] = [
  { icon: "plane", title: "Kathmandu", text: "Nepal's international gateway and the usual start for Everest, Langtang, Manaslu and eastern routes — by domestic flight or road depending on the trek." },
  { icon: "mapPin", title: "Pokhara", text: "The lakeside base for Annapurna-region treks such as Poon Hill, Ghandruk and the Manang side, and for flights towards Jomsom and Mustang." },
  { icon: "car", title: "From India by road", text: "Travellers from India can also enter overland via border points such as Sunauli or Raxaul. Karvaahh can plan the onward connection to your trailhead." },
  { icon: "route", title: "Onward to the trailhead", text: "Mountain flights, jeeps or buses complete the journey. The best option depends on your route, season and budget." },
];

/* ---------- FAQ ---------- */

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Which Nepal treks are suitable for beginners?",
    answer:
      "Short, lower-altitude treks such as Ghorepani Poon Hill and Ghandruk are good first treks. The Langtang Valley is also a rewarding first Himalayan trek for reasonably fit walkers who prepare well.",
  },
  {
    question: "How many days do I need for a trek in Nepal?",
    answer:
      "It depends on the route. Short hikes can take a few days, Langtang typically takes 7–10 days, and longer treks such as the Manang Circuit (16 days on our itinerary) or Everest Three Passes need two weeks or more, including acclimatisation and buffer days.",
  },
  {
    question: "What is the best season for trekking in Nepal?",
    answer:
      "Spring (March–May) and autumn (October–November) are the most popular seasons. Winter suits some lower routes, while the monsoon brings rain to most regions except rain-shadow areas such as Mustang and Dolpo. Suitability varies by region and altitude.",
  },
  {
    question: "How should I prepare physically?",
    answer:
      "Start training several weeks ahead with regular walks, hill hikes and stair climbing, ideally carrying a daypack. For high-altitude or challenging treks, prior multi-day hiking experience helps a great deal.",
  },
  {
    question: "Do I need permits to trek in Nepal?",
    answer:
      "Most trekking regions need at least one permit, such as a national park or conservation-area entry permit. Restricted areas like Upper Mustang, Manaslu and Dolpo need special permits and a licensed guide. Requirements change, so we confirm current rules for your route when you book.",
  },
  {
    question: "What should I pack for a Nepal trek?",
    answer:
      "Broken-in trekking boots, layered clothing including a warm jacket and waterproof shell, sun protection, a reusable water bottle with purification, a headtorch and a basic first-aid kit. Your packing list will vary with season and altitude.",
  },
  {
    question: "Can Karvaahh customise a trekking itinerary?",
    answer:
      "Yes. We can adjust the pace, add acclimatisation or rest days, combine routes, arrange private departures and plan your travel to and from Nepal around the trek.",
  },
  {
    question: "How do I enquire about a trekking package?",
    answer:
      "Use any Enquire button on this page to send your dates and preferences on WhatsApp, call us, or visit our contact page. We confirm the itinerary, inclusions and price with you before booking.",
  },
];

/* ---------- Related ---------- */

export const RELATED: RelatedTour[] = [
  { title: "Helicopter Tours", text: "Fly to Everest, Annapurna, Gosaikunda and more when time or fitness is short.", href: "/activities/helicopter-tours", image: I.annapurna },
  { title: "Camping in Nepal", text: "Lakeside, village and Himalayan camping across Nepal.", href: "/activities/adventure/camping", image: I.dhorpatanMeadows },
  { title: "Spiritual & Pilgrimage Tours", text: "Temples, monasteries and sacred lakes from Kathmandu to Muktinath.", href: "/packages/nepal/spiritual-pilgrimage-tours", image: I.loManthangHeritage },
  { title: "Gandaki Province Guide", text: "Pokhara, Annapurna, Mustang and Manaslu in one region.", href: "/destinations/gandaki-province", image: I.poonHill },
];
