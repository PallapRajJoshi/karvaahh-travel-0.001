// data/europe/content.ts
// Editorial content for /packages/international/europe, kept out of the JSX.
// Visa, Schengen and currency statements are general guidance current as of
// 2026; review them whenever membership or entry rules change.

import { img, type EuropeImage } from "./images";
import type { EuropeStyleId } from "./travel-styles";

export const europeHero = {
  eyebrow: "Karvaahh • Europe International Tours",
  title: "Discover Europe, One Journey at a Time",
  lede: "From romantic European capitals and Alpine landscapes to Mediterranean beaches, historic cities and unforgettable multi-country journeys, explore Europe with Karvaahh.",
  tagline: "One continent. Countless ways to travel.",
  /** Layered collage, back to front. */
  collage: [
    { label: "Swiss Alps", image: img.lauterbrunnen },
    { label: "Paris", image: img.parisSeine },
    { label: "Venice", image: img.veniceSalute },
    { label: "Santorini", image: img.santoriniDomes },
    { label: "London", image: img.bigBen },
    { label: "Amsterdam", image: img.amsterdam },
    { label: "Prague", image: img.pragueBridge },
    { label: "Vienna", image: img.belvedere },
    { label: "Amalfi Coast", image: img.amalfi },
  ] satisfies { label: string; image: EuropeImage }[],
};

/** Flagship Switzerland collection: the classic rail route plus signature experiences. */
export const switzerlandCollection = {
  route: [
    { name: "Zurich", text: "Lakefront old town and the gateway airport." },
    { name: "Lucerne", text: "Chapel Bridge, lake cruises and Mount Titlis." },
    { name: "Interlaken", text: "Between two lakes, below the Jungfrau." },
    { name: "Jungfraujoch", text: "Rack railway to the glaciers at 3,454 m." },
  ],
  experiences: [
    { name: "Mount Titlis", text: "Rotating cable car and the Titlis Cliff Walk.", image: undefined as EuropeImage | undefined },
    { name: "Grindelwald", text: "Mountain village with First Cliff Walk and alpine trails.", image: undefined },
    { name: "Lauterbrunnen", text: "Valley of 72 waterfalls framed by sheer rock.", image: img.lauterbrunnen },
    { name: "Zermatt & Matterhorn", text: "Car-free village and the Gornergrat railway.", image: img.matterhorn },
    { name: "Scenic trains", text: "Glacier Express, Bernina Express and GoldenPass routes.", image: undefined },
  ],
};

export type CollectionId = "honeymoon" | "family" | "luxury" | "budget";

export interface StyleCollection {
  id: CollectionId;
  style: EuropeStyleId;
  eyebrow: string;
  title: string;
  intro: string;
  /** Country ids featured as cards. */
  countries: string[];
  /** Extra featured places that are not countries (shown as cards with their own photo). */
  places?: { name: string; country: string; image?: EuropeImage }[];
  highlights: string[];
  footnote?: string;
}

export const styleCollections: StyleCollection[] = [
  {
    id: "honeymoon",
    style: "honeymoon",
    eyebrow: "For two",
    title: "Europe Honeymoon Packages",
    intro: "Sunsets over the caldera, gondolas under Venetian bridges and Alpine suites with mountain views, planned at a pace that leaves room for each other.",
    countries: ["france", "switzerland", "greece", "austria", "czechia", "iceland"],
    places: [
      { name: "Paris", country: "france", image: img.eiffel },
      { name: "Switzerland", country: "switzerland", image: img.matterhorn },
      { name: "Venice", country: "italy", image: img.veniceRialto },
      { name: "Santorini", country: "greece", image: img.santoriniDusk },
      { name: "Amalfi Coast", country: "italy", image: img.amalfi },
      { name: "Austria", country: "austria", image: img.belvedere },
      { name: "Prague", country: "czechia", image: img.pragueBridge },
      { name: "Greece", country: "greece", image: img.mykonos },
      { name: "Iceland", country: "iceland", image: img.icelandVestrahorn },
    ],
    highlights: ["Private cruises", "Scenic trains", "Alpine stays", "Eiffel Tower experiences", "Gondola rides", "Santorini sunset", "Luxury resorts", "Private transfers"],
  },
  {
    id: "family",
    style: "family",
    eyebrow: "All ages",
    title: "Family Europe",
    intro: "Theme parks, castles, snow in summer and easy train days, with time to rest built in.",
    countries: ["france", "united-kingdom", "switzerland", "italy", "netherlands", "austria", "germany"],
    places: [
      { name: "Disneyland Paris", country: "france" },
      { name: "London", country: "united-kingdom", image: img.londonAerial },
      { name: "Switzerland", country: "switzerland", image: img.lauterbrunnen },
      { name: "Italy", country: "italy", image: img.colosseum },
      { name: "Netherlands", country: "netherlands", image: img.tulips },
      { name: "Austria", country: "austria", image: img.belvedere },
      { name: "Germany", country: "germany", image: img.neuschwanstein },
    ],
    highlights: ["Child-friendly sightseeing", "Flexible pacing", "Family-room accommodation", "Family attractions", "Fewer hotel changes", "Rail over long drives"],
  },
  {
    id: "luxury",
    style: "luxury",
    eyebrow: "Premium",
    title: "Luxury Europe",
    intro: "Premium hotels, private guides and the great scenic railways, with every transfer arranged.",
    countries: ["switzerland", "france", "italy", "greece", "austria", "norway"],
    highlights: ["Premium hotels", "Private transfers", "Private sightseeing", "Luxury trains", "Alpine resorts", "Mediterranean resorts", "Business-class flight assistance on request"],
    footnote: "Flights, including business class, are arranged only on request and quoted separately. They are not included by default.",
  },
  {
    id: "budget",
    style: "budget",
    eyebrow: "Great value",
    title: "Affordable Europe",
    intro: "Central Europe and the Balkans offer historic cities, lakes and coastlines at noticeably gentler prices than the big Western capitals.",
    countries: ["czechia", "hungary", "poland", "romania", "bulgaria", "slovakia", "albania", "montenegro", "bosnia-herzegovina", "north-macedonia", "serbia"],
    highlights: ["Affordable accommodation", "Public transport-friendly itineraries", "Short city breaks", "Value multi-country routes"],
    footnote: "Costs depend on season, hotel category and group size. Ask for a quote; we don't publish fixed prices we can't honour.",
  },
];

export const northernLights = {
  countries: ["norway", "finland", "iceland", "sweden"],
  places: ["Tromsø", "Lofoten", "Lapland", "Rovaniemi", "Iceland winter landscapes", "Abisko"],
  season: "Roughly late September to late March, on dark, clear nights.",
  disclaimer: "Northern Lights visibility depends on season, weather and solar activity. It cannot be guaranteed.",
};

export const winterEurope = {
  items: [
    { title: "Christmas Markets", text: "Vienna, Prague, Budapest and German cities from late November.", image: img.christmasLights },
    { title: "Swiss Winter", text: "Snow-covered villages, ski slopes and panoramic trains.", image: img.matterhorn },
    { title: "Austrian Alps", text: "Innsbruck, Salzburg and alpine chalets." },
    { title: "Germany", text: "Bavarian castles and some of the oldest Christmas markets.", image: img.neuschwanstein },
    { title: "Prague & Budapest", text: "Gothic squares, mulled wine and thermal baths in the cold.", image: img.budapestParliament },
    { title: "Lapland", text: "Santa Claus Village, huskies and Arctic cabins.", image: img.snowForest },
    { title: "Northern Lights", text: "Norway, Finland, Iceland and Sweden in the long nights.", image: img.auroraRidge },
    { title: "Iceland in Winter", text: "Ice caves, frozen waterfalls and short golden days.", image: img.icelandVestrahorn },
    { title: "Winter City Breaks", text: "Museums, cafés and festive lights without summer crowds.", image: img.snowyPromenade },
  ] satisfies { title: string; text: string; image?: EuropeImage }[],
  note: "Market dates vary by city and year; most run from late November to around Christmas, and a few continue into early January.",
};

/** Visa explainer. Never refers to a single "Europe visa". */
export const visaFactors = ["Nationality", "Destination", "Travel history", "Duration of stay", "Purpose of travel"];

export const membershipCompare = [
  {
    id: "eu",
    title: "European Union (EU)",
    text: "A political and economic union of 27 countries. Membership alone doesn't decide which visa you need.",
    examples: "Includes Ireland and Cyprus, which are outside Schengen.",
  },
  {
    id: "schengen",
    title: "Schengen Area",
    text: "29 countries with no routine internal border checks and a shared short-stay visa: up to 90 days in any 180-day period.",
    examples: "Includes non-EU Switzerland, Norway and Iceland.",
  },
  {
    id: "region",
    title: "Europe as a tourism region",
    text: "Everything travellers think of as Europe, including countries outside both the EU and Schengen with their own entry rules.",
    examples: "United Kingdom, the non-Schengen Balkans, Turkey and the Caucasus.",
  },
];

export const visaDisclaimer =
  "Travelers should verify current visa and immigration requirements for their nationality and destination before applying or traveling.";

export const documentChecklist = [
  { title: "Valid passport", text: "Signed, in good condition, with blank pages for visas and stamps." },
  { title: "Passport validity", text: "For Schengen, usually at least 3 months beyond your departure date and issued within the last 10 years. Other countries set their own rules." },
  { title: "Visa application", text: "Apply to the right authority for your route: Schengen, UK, Ireland or a specific country." },
  { title: "Travel insurance", text: "Schengen visas require medical cover of at least €30,000 valid for the whole trip." },
  { title: "Flight reservation", text: "A return or onward itinerary matching your application dates." },
  { title: "Hotel confirmation", text: "Accommodation for every night of the stay." },
  { title: "Day-by-day itinerary", text: "Showing countries, cities and dates, consistent with bookings." },
  { title: "Passport photographs", text: "Where required, to the exact size and background specification." },
  { title: "Financial & supporting documents", text: "Where required: bank statements, employment or business proof, leave letters or invitations." },
  { title: "Destination-specific documents", text: "Anything a particular embassy or entry system asks for." },
];

export const currencyIntro =
  "The euro is used in many European destinations, but not all of them. Several countries keep their own currency, so check before you travel and carry a card that works abroad.";

export const howItWorks = [
  { title: "Consultation", text: "Tell us your dates, departure city, travellers, budget and interests." },
  { title: "Destination Selection", text: "We suggest countries and cities that suit the season and your visa situation." },
  { title: "Itinerary Design", text: "A day-by-day plan you can adjust until the pace feels right." },
  { title: "Visa / Document Guidance", text: "Checklists and support for the visas your route needs." },
  { title: "International Flight Assistance", text: "Help choosing practical routings from Nepal or India." },
  { title: "Hotels & Transfers", text: "Accommodation by comfort level, with airport and station transfers." },
  { title: "Sightseeing & Experiences", text: "Tickets, guides, scenic trains and cruises booked in advance." },
  { title: "Local Support", text: "A contact to reach while you're travelling." },
  { title: "Return Journey", text: "Departure transfers and flights home, then feedback for next time." },
];

export const tourFormats = [
  { title: "Private Tours", text: "Your own guide and vehicle on your dates." },
  { title: "Group Tours", text: "Shared itineraries with fellow travellers." },
  { title: "Fixed Departures", text: "Set dates and routes, announced when available." },
  { title: "Tailor-Made Packages", text: "Built from scratch around your wish list." },
];

export const whyKarvaahh = [
  { icon: "route", title: "Customized Itineraries", text: "Every plan starts from your dates, interests and budget." },
  { icon: "map", title: "Multi-Country Planning", text: "Sensible routes, rail links and border logistics across countries." },
  { icon: "hotel", title: "Hotel Selection", text: "Stays chosen for location and comfort level, not just price." },
  { icon: "car", title: "Airport Transfers", text: "Arrival and departure transfers where included in your quote." },
  { icon: "camera", title: "Sightseeing Planning", text: "Timed tickets, guides, cruises and scenic trains arranged ahead." },
  { icon: "plane", title: "International Flight Assistance", text: "Support with routings from Kathmandu, Delhi and other gateways." },
  { icon: "passport", title: "Visa Guidance", text: "Document checklists and application support. Approval rests with the authorities." },
  { icon: "shield", title: "Travel Insurance Assistance", text: "Help choosing cover that meets visa requirements." },
  { icon: "users", title: "Private & Group Tours", text: "Travel privately or join a group, whichever suits you." },
  { icon: "headset", title: "Support From Booking to Return", text: "One team from the first call to your flight home." },
] as const;

export const builderOptions = {
  durations: ["5–7 days", "8–10 days", "11–14 days", "15+ days", "Not sure yet"],
  budgets: ["Budget", "Mid-range", "Premium", "Luxury"],
  tripTypes: ["Honeymoon", "Family", "Group", "Private"],
  accommodation: ["3-star", "4-star", "5-star", "Boutique / unique stays"],
  transport: ["Trains", "Private car", "Coach", "Flights between countries", "Mixed"],
  experiences: ["Scenic trains", "Jungfraujoch / Titlis", "Disneyland Paris", "Gondola ride", "Seine / Danube cruise", "Northern Lights", "Christmas markets", "Island hopping", "Food & wine tours", "Shopping time"],
  departures: ["Kathmandu", "Other Nepal gateway", "Delhi", "Mumbai", "Other India gateway", "Elsewhere"],
};

export const europeFaqs: { question: string; answer: string }[] = [
  {
    question: "What Europe tour packages does Karvaahh offer?",
    answer: "Single-country trips such as Switzerland, Italy, Greece, Spain, Norway and Iceland; multi-country routes such as Paris–Switzerland–Italy and London–Paris–Amsterdam; and themed trips for honeymoons, families, Northern Lights, Christmas markets and budget travel. Every package is a starting template that can be customized.",
  },
  {
    question: "Can I customize my Europe tour?",
    answer: "Yes. You can change the countries, cities, number of nights, hotel category, transport and sightseeing, or start from a blank page and build the trip around your wish list.",
  },
  {
    question: "Can I visit multiple European countries in one trip?",
    answer: "Yes. Fast trains and short flights make multi-country trips practical. As a guide, allow at least two or three nights per stop so the trip doesn't become all travel and no time.",
  },
  {
    question: "What is a Schengen visa?",
    answer: "A Schengen short-stay visa lets eligible travellers visit the 29 Schengen countries for up to 90 days in any 180-day period for tourism or business. You normally apply to the country where you'll spend the most time, or where you first enter if stays are equal.",
  },
  {
    question: "Is a Schengen visa valid for every European country?",
    answer: "No. It doesn't cover the United Kingdom, Ireland, Cyprus, Turkey, the Caucasus or several Balkan countries, which have their own entry rules. Some non-Schengen countries admit holders of a valid Schengen visa under their own conditions, so check each country on your route.",
  },
  {
    question: "Do the UK and Ireland have separate visa requirements?",
    answer: "Yes. Both are outside Schengen and set their own visa rules. Depending on your nationality, you may need a UK visa, an Irish visa or both. For some nationalities, schemes such as the British-Irish Visa Scheme let one visa cover both, so check your eligibility.",
  },
  {
    question: "What passport validity is required?",
    answer: "For Schengen countries your passport generally needs to be valid for at least three months after you plan to leave and must have been issued within the last 10 years. Other countries set their own rules, and many airlines expect six months' validity, so renew early if you're close.",
  },
  {
    question: "Can Karvaahh assist with visa documentation?",
    answer: "Yes. We provide document checklists, itineraries, hotel and flight reservations for your application, and guidance on appointments. Visa decisions are made only by the embassy or consulate, so approval can never be guaranteed.",
  },
  {
    question: "Can Karvaahh arrange international flights?",
    answer: "Yes, on request. We can suggest practical routings from Kathmandu, Delhi and other gateways and quote flights alongside the land package. Flights are only included when they appear in your quote.",
  },
  {
    question: "Is travel insurance included?",
    answer: "Not by default. Schengen visas require medical insurance of at least €30,000 for the whole trip, and we can help you choose suitable cover. It's included only when listed in your quote.",
  },
  {
    question: "What are the best honeymoon destinations in Europe?",
    answer: "Popular choices include Santorini and the Greek islands, Venice and the Amalfi Coast, Paris, Switzerland's Alpine resorts, Austria's lakes, Prague and Iceland. The right one depends on your season and whether you prefer beaches, mountains or cities.",
  },
  {
    question: "Which European destinations are best for families?",
    answer: "Disneyland Paris, London, Switzerland, Italy, the Netherlands, Austria and Germany work well for families, thanks to good trains, kid-friendly sights and family rooms. We keep the pace gentle with fewer hotel changes.",
  },
  {
    question: "Which European countries are more budget-friendly?",
    answer: "Czechia, Hungary, Poland, Slovakia, Romania and Bulgaria, plus Balkan countries such as Albania, Montenegro, Serbia and North Macedonia, are generally better value than Western Europe and Scandinavia. Costs still vary by season and hotel category.",
  },
  {
    question: "What are the best luxury destinations in Europe?",
    answer: "Switzerland's Alpine resorts and scenic trains, the French Riviera and Paris, Lake Como and the Amalfi Coast, Santorini and the Norwegian fjords are classic luxury choices, especially with private transfers and guides.",
  },
  {
    question: "How many days are ideal for a Europe tour?",
    answer: "Seven to ten days suits one or two countries, or three at a brisk pace. Twelve to sixteen days lets you enjoy four or more countries without rushing. Add a day either side for long-haul flights from Nepal or India.",
  },
  {
    question: "Can I combine France, Switzerland and Italy?",
    answer: "Yes, it's the most popular first-time route. A typical plan is Paris, then Lucerne and Interlaken, then Venice, Florence and Rome, over about 9 to 11 nights.",
  },
  {
    question: "Can I combine London, Paris and Amsterdam?",
    answer: "Yes. Trains link all three easily. Remember that London needs a UK visa while Paris and Amsterdam fall under Schengen, so you may need two separate visas.",
  },
  {
    question: "When is the best time to visit Switzerland?",
    answer: "June to September is best for lakes, hiking and mountain passes. December to March is best for snow and skiing. Spring and autumn are quieter, though some high-altitude excursions can be affected by weather or maintenance.",
  },
  {
    question: "When can I see the Northern Lights?",
    answer: "In Arctic Norway, Finland, Sweden and Iceland, the season runs roughly from late September to late March, on dark, clear nights. Visibility depends on weather and solar activity, so sightings can never be guaranteed.",
  },
  {
    question: "Are Christmas markets available throughout winter?",
    answer: "Not all winter. Most markets run from late November to around 23 or 24 December, and only some continue into early January. Dates vary by city and year, so plan late November to mid-December to be safe.",
  },
  {
    question: "Can I book private Europe tours?",
    answer: "Yes. Private tours give you your own transfers, guides and schedule, and suit honeymooners, families and anyone who wants more flexibility.",
  },
  {
    question: "Are group Europe tours available?",
    answer: "Yes. We arrange group tours for families, friends, associations and corporate groups, and share fixed-departure group dates when they're available.",
  },
  {
    question: "Can senior travelers visit Europe comfortably?",
    answer: "Yes. We plan senior-friendly trips with fewer hotel changes, train travel, private transfers, step-light sightseeing and rest time. Tell us about any mobility or medical needs so we can plan around them.",
  },
  {
    question: "What currencies are used in Europe?",
    answer: "The euro is used in many countries, including France, Italy, Spain, Germany, Austria, Greece and the Netherlands. Others keep their own currency: Switzerland uses the Swiss franc, the UK the pound sterling, Czechia the koruna, Hungary the forint, Poland the złoty, and Sweden, Denmark and Norway their own krona or krone.",
  },
  {
    question: "Can Karvaahh create a completely customized Europe itinerary?",
    answer: "Yes. Tell us your dates, departure city, travellers, budget and the experiences you care about, and we'll design a route from scratch. Use the trip builder on this page or message us on WhatsApp.",
  },
];
