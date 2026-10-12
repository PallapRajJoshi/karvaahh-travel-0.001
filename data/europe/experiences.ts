// data/europe/experiences.ts
// "Top Europe Experiences". Each experience belongs to a country (for the flag,
// fallback and enquiry) and one or more categories (for the category filter).

import { img, type EuropeImage } from "./images";

export type ExperienceCategory =
  | "arts-culture"
  | "food-drinks"
  | "history-heritage"
  | "nature-outdoors"
  | "romance"
  | "adventure"
  | "shopping"
  | "winter";

export const experienceCategories: { id: ExperienceCategory; label: string }[] = [
  { id: "arts-culture", label: "Arts & Culture" },
  { id: "food-drinks", label: "Food & Drinks" },
  { id: "history-heritage", label: "History & Heritage" },
  { id: "nature-outdoors", label: "Nature & Outdoors" },
  { id: "romance", label: "Romance" },
  { id: "adventure", label: "Adventure" },
  { id: "shopping", label: "Shopping" },
  { id: "winter", label: "Winter" },
];

export interface EuropeExperience {
  id: string;
  title: string;
  /** Country id from countries.ts. */
  country: string;
  place: string;
  text: string;
  categories: ExperienceCategory[];
  image?: EuropeImage;
  /** Seasonal caveat shown on the card. */
  note?: string;
  active: boolean;
}

export const europeExperiences: EuropeExperience[] = [
  { id: "swiss-alps", title: "Swiss Alps", country: "switzerland", place: "Bernese Oberland", text: "Glacier views, cogwheel trains and lake towns below snowy peaks.", categories: ["nature-outdoors", "adventure", "romance"], image: img.lauterbrunnen, active: true },
  { id: "jungfraujoch", title: "Jungfraujoch", country: "switzerland", place: "Interlaken", text: "A rack railway to Europe's highest railway station, with glacier and ice-palace views.", categories: ["nature-outdoors", "adventure"], active: true },
  { id: "titlis", title: "Mount Titlis", country: "switzerland", place: "Engelberg, near Lucerne", text: "A rotating cable car, a cliff walk and snow on the summit all year.", categories: ["nature-outdoors", "adventure", "winter"], active: true },
  { id: "matterhorn", title: "Matterhorn", country: "switzerland", place: "Zermatt", text: "The car-free village of Zermatt and the Gornergrat railway for the classic view.", categories: ["nature-outdoors", "adventure", "romance"], image: img.matterhorn, active: true },
  { id: "venice-gondola", title: "Venice Gondola Ride", country: "italy", place: "Venice", text: "Glide under bridges and past palazzi on the city's quieter canals.", categories: ["romance", "arts-culture"], image: img.veniceCanal, active: true },
  { id: "paris-city", title: "Paris City Tour", country: "france", place: "Paris", text: "Notre-Dame, the Louvre, Champs-Élysées and a Seine cruise at dusk.", categories: ["arts-culture", "history-heritage", "romance", "shopping"], image: img.parisBridge, active: true },
  { id: "eiffel", title: "Eiffel Tower", country: "france", place: "Paris", text: "Summit or second-floor tickets, with a sparkle show after dark.", categories: ["romance", "history-heritage"], image: img.eiffel, active: true },
  { id: "disneyland-paris", title: "Disneyland Paris", country: "france", place: "Marne-la-Vallée", text: "Two parks of rides, parades and fireworks, an easy train from central Paris.", categories: ["adventure"], active: true },
  { id: "london", title: "London Sightseeing", country: "united-kingdom", place: "London", text: "Westminster, the Tower, the London Eye and the Buckingham Palace area.", categories: ["history-heritage", "arts-culture", "shopping"], image: img.londonAerial, active: true },
  { id: "amsterdam-canals", title: "Amsterdam Canal Cruise", country: "netherlands", place: "Amsterdam", text: "Gabled houses and bridges from the water, with the museums a walk away.", categories: ["arts-culture", "romance"], image: img.amsterdam, active: true },
  { id: "austrian-alps", title: "Austrian Alps", country: "austria", place: "Tyrol & Salzburgerland", text: "Innsbruck's mountains, alpine lakes and some of Europe's best skiing.", categories: ["nature-outdoors", "adventure", "winter"], active: true },
  { id: "hallstatt", title: "Hallstatt", country: "austria", place: "Salzkammergut", text: "A lakeside village of painted houses beneath steep, forested mountains.", categories: ["nature-outdoors", "romance", "history-heritage"], active: true },
  { id: "prague-old-town", title: "Prague Old Town", country: "czechia", place: "Prague", text: "The Astronomical Clock, Charles Bridge and Prague Castle above the Vltava.", categories: ["history-heritage", "arts-culture", "romance"], image: img.pragueOldTown, active: true },
  { id: "danube-cruise", title: "Budapest Danube Cruise", country: "hungary", place: "Budapest", text: "The illuminated Parliament and Chain Bridge from an evening river cruise.", categories: ["romance", "history-heritage"], image: img.budapestAerial, active: true },
  { id: "rome-vatican", title: "Rome & Vatican", country: "italy", place: "Rome", text: "The Colosseum, Roman Forum, St Peter's Basilica and the Sistine Chapel.", categories: ["history-heritage", "arts-culture"], image: img.vatican, active: true },
  { id: "florence-tuscany", title: "Florence & Tuscany", country: "italy", place: "Florence", text: "Renaissance masterpieces, then hill towns and vineyards in Chianti.", categories: ["arts-culture", "food-drinks", "history-heritage"], image: img.florence, active: true },
  { id: "amalfi", title: "Amalfi Coast", country: "italy", place: "Positano, Amalfi, Ravello", text: "Cliffside villages, lemon groves and boat days on the Tyrrhenian Sea.", categories: ["romance", "nature-outdoors", "food-drinks"], image: img.amalfi, active: true },
  { id: "santorini-sunset", title: "Santorini Sunset", country: "greece", place: "Oia, Santorini", text: "The caldera turning gold from Oia's lanes or a catamaran on the water.", categories: ["romance", "nature-outdoors"], image: img.santoriniDusk, active: true },
  { id: "greek-islands", title: "Greek Islands", country: "greece", place: "Cyclades & Crete", text: "Ferries between Mykonos, Naxos, Santorini and Crete for beaches and tavernas.", categories: ["nature-outdoors", "food-drinks", "romance"], image: img.mykonos, active: true },
  { id: "barcelona", title: "Barcelona Architecture", country: "spain", place: "Barcelona", text: "Sagrada Família, Park Güell and Casa Batlló, then the beach at Barceloneta.", categories: ["arts-culture", "shopping"], image: img.barcelona, active: true },
  { id: "madrid", title: "Madrid Culture", country: "spain", place: "Madrid", text: "The Prado, the Royal Palace, tapas bars and late evenings on Gran Vía.", categories: ["arts-culture", "food-drinks", "shopping"], image: img.madrid, active: true },
  { id: "fjords", title: "Norwegian Fjords", country: "norway", place: "Sognefjord & Geirangerfjord", text: "Cruise between sheer cliffs and waterfalls, then ride the Flåm Railway.", categories: ["nature-outdoors", "adventure"], image: img.fjord, note: "Best June to August.", active: true },
  { id: "northern-lights", title: "Northern Lights", country: "norway", place: "Tromsø & Lofoten", text: "Guided aurora chases away from city lights in the Arctic winter.", categories: ["nature-outdoors", "winter", "adventure", "romance"], image: img.auroraSky, note: "Late September to March. Never guaranteed.", active: true },
  { id: "golden-circle", title: "Iceland Golden Circle", country: "iceland", place: "Þingvellir, Geysir, Gullfoss", text: "A rift valley, erupting geysers and a thundering two-tier waterfall in one day.", categories: ["nature-outdoors", "adventure"], active: true },
  { id: "lapland", title: "Lapland", country: "finland", place: "Rovaniemi & Saariselkä", text: "Huskies, reindeer, snowmobiles and Santa Claus Village above the Arctic Circle.", categories: ["winter", "adventure"], image: img.snowForest, note: "Best December to March.", active: true },
  { id: "croatia-coast", title: "Croatia Coast", country: "croatia", place: "Dubrovnik, Split & Hvar", text: "Walled old towns, island ferries and clear Adriatic water.", categories: ["nature-outdoors", "history-heritage", "romance"], image: img.dubrovnik, active: true },
  { id: "kotor", title: "Montenegro Bay of Kotor", country: "montenegro", place: "Kotor & Perast", text: "A fjord-like bay ringed by mountains, with a walled town to climb above.", categories: ["nature-outdoors", "history-heritage"], active: true },
  { id: "christmas-markets", title: "European Christmas Markets", country: "austria", place: "Vienna, Prague, Germany & more", text: "Mulled wine, crafts and lights in historic squares from late November.", categories: ["winter", "food-drinks", "shopping"], image: img.christmasLights, note: "Most run late November to late December.", active: true },
];

export const activeExperiences = europeExperiences.filter((e) => e.active);
