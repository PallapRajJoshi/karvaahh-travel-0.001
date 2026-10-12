// data/russia/content.ts
// Editorial content for /packages/international/russia, kept out of the JSX.

import type { SeasonId } from "./destinations";
import type { RussiaExperienceId } from "./experiences";
import type { RussiaImageId } from "./images";

export const russiaHero = {
  eyebrow: "Karvaahh • Russia International Tours",
  title: "Discover Russia",
  titleAccent: "Where History, Culture & Winter Magic Meet",
  lede: "Explore imperial palaces, grand cities, historic landmarks, museums, rivers, lakes and spectacular winter landscapes through thoughtfully designed journeys from Karvaahh.",
  positioning: "A Nepal & India-based international travel partner for customized Russia journeys.",
  /** Collage tiles, image ids in layer order. */
  collage: ["moscow", "saint-petersburg", "moscow-winter", "lake-baikal", "aurora"] as RussiaImageId[],
  ribbons: ["Moscow • St. Petersburg • Baikal • Arctic", "City • Culture • Winter • Adventure"],
};

export type PackageTab = { label: string; style?: RussiaExperienceId; season?: SeasonId };

export interface FeatureSectionConfig {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  images: RussiaImageId[];
  highlightsTitle: string;
  highlights: string[];
  packageIds: string[];
  /** Heading above the package carousel. */
  packagesTitle: string;
  /** Optional chips that filter this section's packages. */
  tabs?: PackageTab[];
  notes?: string[];
  /** A callout box, e.g. White Nights. */
  callout?: { title: string; text: string };
  tone: "light" | "sand" | "dark" | "arctic";
  /** Bigger layout for the flagship destination. */
  flagship?: boolean;
}

const OPENING_NOTE = "Opening hours, access restrictions and ticket availability should be confirmed for the selected travel date.";

export const featureSections: Record<string, FeatureSectionConfig> = {
  moscow: {
    id: "moscow",
    eyebrow: "Flagship destination",
    title: "Moscow — The Heart of Russia",
    intro: "Red Square at dawn, gilded domes, palatial metro stations and a river that runs through it all. Most Russia journeys start here, and Moscow rewards a few unhurried days.",
    images: ["moscow", "moscow-winter", "moscow-night"],
    highlightsTitle: "Moscow highlights",
    highlights: ["Red Square", "Saint Basil's Cathedral", "Kremlin", "Moscow Metro", "GUM", "Bolshoi Theatre", "Lenin's Mausoleum area", "Cathedral of Christ the Saviour", "Arbat Street", "Zaryadye Park", "Sparrow Hills", "Moscow River experiences"],
    packageIds: ["moscow-city-3n", "moscow-highlights-4n", "moscow-winter-4n", "moscow-family-4n", "moscow-luxury-4n"],
    packagesTitle: "Moscow packages",
    notes: [OPENING_NOTE],
    tone: "light",
    flagship: true,
  },
  "saint-petersburg": {
    id: "saint-petersburg",
    eyebrow: "Imperial Russia",
    title: "Saint Petersburg — Imperial Russia",
    intro: "Built as a window on Europe, Saint Petersburg is palaces, canals and one of the world's great art collections, with day trips to the summer palaces outside the city.",
    images: ["saint-petersburg", "spb-bridge"],
    highlightsTitle: "Saint Petersburg highlights",
    highlights: ["Hermitage Museum", "Winter Palace", "Palace Square", "Church of the Savior on Spilled Blood", "Peter and Paul Fortress", "Nevsky Prospect", "St Isaac's Cathedral", "Kazan Cathedral", "Peterhof Palace", "Catherine Palace", "Tsarskoye Selo"],
    packageIds: ["spb-3n", "spb-cultural-4n", "msp-6n", "russia-luxury-7n"],
    packagesTitle: "Saint Petersburg packages",
    callout: {
      title: "White Nights Experience",
      text: "Around early summer the sun barely sets and the city stays light late into the night, with bridges raised over the Neva after dark. Exact dates, events and conditions vary each year and should be verified for your travel year.",
    },
    notes: [OPENING_NOTE],
    tone: "sand",
  },
  classic: {
    id: "classic-journey",
    eyebrow: "Moscow + Saint Petersburg",
    title: "Russia's Classic First Journey",
    intro: "The two capitals together are the natural first trip to Russia. The fast train between them is a highlight in itself: optional, comfortable and city centre to city centre.",
    images: ["spb-bridge", "red-square"],
    highlightsTitle: "Every package can include",
    highlights: ["Moscow ⇄ Saint Petersburg rail (optional)", "Hotels in central locations", "Guided sightseeing", "Airport & station transfers", "Visa / document assistance where offered", "Customizable inclusions"],
    packageIds: ["msp-5n", "msp-6n", "russia-premium-7n", "russia-cultural-8n", "russia-grand-9n"],
    packagesTitle: "Moscow + Saint Petersburg packages",
    tone: "dark",
  },
  "golden-ring": {
    id: "golden-ring",
    eyebrow: "Historic towns",
    title: "Golden Ring of Russia",
    intro: "A loop of old towns north-east of Moscow: white-stone kremlins, monasteries, onion domes and wooden houses. The best place to see traditional Russian architecture and Orthodox heritage.",
    images: ["red-square"],
    highlightsTitle: "Golden Ring towns",
    highlights: ["Suzdal", "Vladimir", "Sergiev Posad", "Yaroslavl", "Rostov Veliky", "Kostroma", "Pereslavl-Zalessky"],
    packageIds: ["golden-ring-3n", "moscow-golden-ring-4n", "moscow-golden-ring-5n"],
    packagesTitle: "Golden Ring packages",
    notes: ["Monasteries are active places of worship; dress codes and visiting hours apply."],
    tone: "light",
  },
  kazan: {
    id: "kazan",
    eyebrow: "Tatarstan",
    title: "Kazan — Where Cultures Meet",
    intro: "On the Volga, Kazan is where Russian, Tatar and Islamic cultural traditions meet: a mosque and an Orthodox cathedral stand inside the same kremlin walls.",
    images: [],
    highlightsTitle: "Kazan highlights",
    highlights: ["Kazan Kremlin", "Kul Sharif Mosque", "Bauman Street", "Palace of Agriculture", "Tatar culture & cuisine", "Volga-region experiences"],
    packageIds: ["kazan-3n", "moscow-kazan-5n", "msp-kazan-8n"],
    packagesTitle: "Kazan packages",
    notes: [OPENING_NOTE],
    tone: "sand",
  },
  sochi: {
    id: "sochi",
    eyebrow: "Black Sea & Caucasus",
    title: "Sochi & the Black Sea",
    intro: "Russia's summer coast and winter mountains in one place: Black Sea beaches below, and the ski resorts of Krasnaya Polyana and Rosa Khutor up in the Caucasus.",
    images: ["winter-mountains"],
    highlightsTitle: "Sochi highlights",
    highlights: ["Sochi", "Krasnaya Polyana", "Rosa Khutor", "Black Sea coastline", "Caucasus mountains"],
    packageIds: ["sochi-summer-5n", "sochi-winter-5n", "sochi-family-5n"],
    packagesTitle: "Sochi packages",
    tabs: [
      { label: "All" },
      { label: "Beach", style: "beach" },
      { label: "Mountains & Adventure", style: "nature" },
      { label: "Skiing", style: "ski" },
      { label: "Family", style: "family" },
    ],
    notes: ["Ski conditions and lift operations depend on snowfall and the resort's season."],
    tone: "light",
  },
  murmansk: {
    id: "murmansk",
    eyebrow: "Arctic Russia",
    title: "Chase the Northern Lights",
    intro: "Above the Arctic Circle, Murmansk is the base for dark-sky outings across the Kola Peninsula and to Teriberka on the Barents Sea coast.",
    images: ["aurora", "aurora-hills"],
    highlightsTitle: "Arctic experiences",
    highlights: ["Murmansk", "Kola Peninsula", "Teriberka", "Northern Lights outings", "Arctic landscapes", "Snow activities where operationally available", "Snowmobile experiences where operationally available", "Coastal landscapes"],
    packageIds: ["murmansk-nl-3n", "arctic-russia-4n", "moscow-murmansk-7n"],
    packagesTitle: "Northern Lights packages",
    callout: {
      title: "Aurora sightings are natural phenomena and cannot be guaranteed.",
      text: "Visibility depends on the season (dark winter months), the weather, cloud cover and solar activity. Longer stays improve your chances.",
    },
    tone: "arctic",
  },
  baikal: {
    id: "lake-baikal",
    eyebrow: "Siberia",
    title: "Lake Baikal & Siberian Wilderness",
    intro: "The oldest and deepest lake on Earth, ringed by taiga and mountains. Summer brings boat trips and island hikes; winter brings famously clear ice.",
    images: ["lake-baikal", "winter-forest"],
    highlightsTitle: "Baikal & Siberia",
    highlights: ["Irkutsk", "Lake Baikal", "Listvyanka", "Olkhon Island", "Siberian landscapes", "Local cultural experiences"],
    packageIds: ["baikal-4n", "baikal-winter-5n", "irkutsk-baikal-6n", "moscow-baikal-7n", "trans-siberian-baikal"],
    packagesTitle: "Lake Baikal & Siberia packages",
    tabs: [
      { label: "All" },
      { label: "Summer", season: "summer" },
      { label: "Winter", season: "winter" },
    ],
    callout: {
      title: "Plan extra travel time",
      text: "Siberian itineraries require significantly more travel time than Moscow or Saint Petersburg city breaks. Irkutsk is a long domestic flight from Moscow, and ice activities depend on ice conditions.",
    },
    tone: "dark",
  },
  honeymoon: {
    id: "honeymoon",
    eyebrow: "For couples",
    title: "Russia Honeymoon Packages",
    intro: "Palaces lit up at night, canal evenings during the White Nights, snowy winter walks and the quiet of Lake Baikal.",
    images: ["spb-bridge"],
    highlightsTitle: "Experiences offered where your package supports them",
    highlights: ["Moscow", "Saint Petersburg", "Sochi", "Lake Baikal", "Winter Russia", "White Nights", "Private transfers", "Romantic dinners", "Scenic experiences", "Premium hotels", "Private sightseeing"],
    packageIds: ["russia-honeymoon-6n", "russia-premium-7n", "moscow-murmansk-7n", "sochi-summer-5n"],
    packagesTitle: "Honeymoon packages",
    notes: ["Romantic add-ons are optional and only available where the selected package supports them."],
    tone: "sand",
  },
  family: {
    id: "family",
    eyebrow: "For families",
    title: "Russia Family Holidays",
    intro: "Flexible pacing, family rooms and a mix of parks, selected museums, shows and beach time.",
    images: ["red-square"],
    highlightsTitle: "Family focus",
    highlights: ["Moscow", "Saint Petersburg", "Sochi", "Selected museums", "Family attractions", "Flexible pacing"],
    packageIds: ["russia-family-6n", "moscow-family-4n", "sochi-family-5n", "msp-6n"],
    packagesTitle: "Family packages",
    tone: "light",
  },
};

export const winterItems: { title: string; text: string; destination: string }[] = [
  { title: "Moscow snow season", text: "Red Square under snow and festive lights.", destination: "moscow" },
  { title: "Saint Petersburg winter", text: "Frozen canals and palaces in winter light.", destination: "saint-petersburg" },
  { title: "Murmansk Northern Lights", text: "Dark Arctic skies, sightings never guaranteed.", destination: "murmansk" },
  { title: "Sochi mountains", text: "Skiing at Krasnaya Polyana and Rosa Khutor.", destination: "sochi" },
  { title: "Lake Baikal winter", text: "Clear ice, when ice conditions allow.", destination: "lake-baikal" },
  { title: "Siberia", text: "Snowbound taiga and wooden towns.", destination: "irkutsk" },
];

export const whyRussia = [
  { icon: "compass", title: "Nepal & India Travel Assistance", text: "Planning, documents and departures handled from Kathmandu and Delhi." },
  { icon: "route", title: "Customized Itineraries", text: "Cities, pace and season chosen around you." },
  { icon: "hotel", title: "Hotel Selection", text: "From well-located 3★ to five-star palaces." },
  { icon: "car", title: "Airport Transfers", text: "Meet-and-greet on arrival and departure where included." },
  { icon: "camera", title: "Sightseeing", text: "Guided visits with tickets arranged where available." },
  { icon: "users", title: "Private & Group Options", text: "Private guides and cars, or shared group touring." },
  { icon: "passport", title: "Visa / Document Guidance", text: "Help with the paperwork where offered; approval rests with the authorities." },
  { icon: "plane", title: "Flight Assistance", text: "International and domestic flight planning." },
  { icon: "local", title: "Local Coordination", text: "Ground partners coordinating transfers, guides and timings." },
  { icon: "headset", title: "Support Throughout the Journey", text: "A contact to reach from planning until you are home." },
] as const;

export const essentials = {
  requirementsDependOn: ["Nationality", "Passport", "Purpose of travel", "Duration of stay", "Current immigration rules"],
  documents: [
    { title: "Passport validity", text: "Check the minimum validity and blank pages required beyond your return date." },
    { title: "Travel insurance", text: "Insurance meeting current entry requirements, plus cover for your activities." },
    { title: "Hotel confirmation", text: "Confirmed accommodation for every night, matching your itinerary." },
    { title: "Flight documentation", text: "Confirmed onward/return flight bookings." },
    { title: "Transport documentation", text: "Rail and domestic flight tickets in the names on your passports." },
    { title: "Supporting documents", text: "Any invitation, financial or employment documents requested for your application." },
  ],
};

export const russiaFaqs: { question: string; answer: string }[] = [
  { question: "What Russia tour packages does Karvaahh offer?", answer: "Moscow and Saint Petersburg city tours, the classic Moscow–Saint Petersburg journey, Golden Ring, Kazan, Sochi, Murmansk Northern Lights, Lake Baikal and winter itineraries, plus honeymoon, family, luxury and fully customized trips. Some regions are offered subject to current operating conditions." },
  { question: "Can I customize a Russia tour?", answer: "Yes. Cities, duration, hotels, transport, sightseeing and pace can all be adjusted." },
  { question: "Can I travel to Russia from Nepal?", answer: "Yes. We plan trips starting from Kathmandu. International routings usually involve a connection and are confirmed when you book." },
  { question: "Can I travel to Russia from India?", answer: "Yes. We plan departures from Delhi, Mumbai and other Indian cities, with routings confirmed for your dates." },
  { question: "What visa is required for Russia?", answer: "It depends on your nationality, passport, purpose and length of travel, and on current rules. Check the latest official requirements; we can guide you on what applies to you." },
  { question: "Does Karvaahh provide visa assistance?", answer: "Visa and document assistance is available where offered. Approval is decided by the relevant authority and cannot be guaranteed by Karvaahh." },
  { question: "Can Karvaahh arrange international flights?", answer: "We can help plan and book international and domestic flights as part of your trip, subject to availability." },
  { question: "What is the best time to visit Russia?", answer: "Late spring to early autumn suits city sightseeing; winter suits snow, the Northern Lights and frozen Lake Baikal. The right time depends on the region and what you want to do." },
  { question: "When can I see the Northern Lights in Russia?", answer: "Around Murmansk, the dark months from roughly autumn to early spring offer the best chances, depending on weather and solar activity." },
  { question: "Is Northern Lights visibility guaranteed?", answer: "No. The aurora is a natural phenomenon. Sightings depend on cloud cover, weather and solar activity and cannot be guaranteed." },
  { question: "What is the best time to visit Lake Baikal?", answer: "Summer for boat trips and island hiking; mid to late winter for the clear ice, when ice conditions allow." },
  { question: "Can I combine Moscow and Saint Petersburg?", answer: "Yes. It is the most popular combination, usually 5–8 nights with rail travel between the cities." },
  { question: "Is there a train between Moscow and Saint Petersburg?", answer: "Yes. High-speed and overnight trains connect the two cities. Timings and classes are confirmed for your travel date." },
  { question: "Can I travel on the Trans-Siberian Railway?", answer: "It can be arranged as a specialist journey, usually in stages with hotel stops. Schedules and availability are verified before booking and some sections depend on operating conditions." },
  { question: "Is Russia suitable for families?", answer: "Yes. Moscow, Saint Petersburg and Sochi have parks, shows, museums and beaches, and we can keep touring days short." },
  { question: "Is Russia good for honeymoon?", answer: "Yes. Couples enjoy the White Nights, palace evenings, winter scenery and Lake Baikal. Romantic add-ons depend on the package." },
  { question: "Which Russia destinations are best in winter?", answer: "Moscow and Saint Petersburg in snow, Murmansk for the Northern Lights, Sochi's ski resorts and frozen Lake Baikal." },
  { question: "What is the White Nights experience?", answer: "Around early summer, Saint Petersburg stays light late into the night. Exact dates and events vary each year." },
  { question: "How long should I spend in Russia?", answer: "4–5 days for one city, 6–8 days for Moscow with Saint Petersburg, and 9 days or more if you add Kazan, the Arctic or Siberia." },
  { question: "Can I visit Kazan with Moscow?", answer: "Yes. Kazan is reachable by train or a short flight and fits well into a 5–9 night trip." },
  { question: "Can I visit Murmansk and Moscow together?", answer: "Yes. A domestic flight connects them; winter itineraries often pair Moscow sightseeing with Arctic aurora nights." },
  { question: "Can I visit Lake Baikal on a short trip?", answer: "Baikal is a long flight from Moscow, so allow at least 4–5 nights for the lake alone, more if you also visit Moscow." },
  { question: "Are private Russia tours available?", answer: "Yes. Private guides, cars and fully tailored itineraries are available." },
  { question: "Are group tours available?", answer: "Yes. We can plan group itineraries for families, friends and organisations." },
  { question: "What happens if a destination becomes operationally unavailable?", answer: "We will tell you as soon as we know, and suggest alternative dates or destinations. What happens to payments depends on the terms of your booking and our suppliers, which are shared before you pay." },
];

export const russiaInternalLinks: { label: string; href: string }[] = [
  { label: "International Packages", href: "/packages/international" },
  { label: "Asia Tour Packages", href: "/packages/international/asia" },
  { label: "All Travel Packages", href: "/packages" },
  { label: "Domestic Flights", href: "/activities/domestic-flights" },
  { label: "Domestic Mountain Flights", href: "/activities/domestic-flights/mountain-scenic" },
  { label: "Helicopter Tours", href: "/activities/helicopter-tours" },
];
