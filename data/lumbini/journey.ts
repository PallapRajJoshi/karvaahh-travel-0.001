export interface LumbiniJourneyStop {
  number: string;
  title: string;
  description: string;
}

export const lumbiniJourney: LumbiniJourneyStop[] = [
  {
    number: "01",
    title: "Lumbini",
    description: "Maya Devi Temple, Sacred Garden, monasteries and meditation.",
  },
  {
    number: "02",
    title: "Kapilvastu",
    description: "Tilaurakot, Kudan, Gotihawa and ancient Buddhist archaeology.",
  },
  {
    number: "03",
    title: "Tansen / Palpa",
    description: "Hill heritage, Rani Mahal, viewpoints and traditional culture.",
  },
  {
    number: "04",
    title: "Swargadwari / Western Hills",
    description: "Pilgrimage, forests, mountain landscapes and rural experiences.",
  },
  {
    number: "05",
    title: "Bardiya",
    description: "Jungle safari, rivers, wildlife and Tharu culture.",
  },
];

export interface LumbiniRoute {
  title: string;
  duration: string;
  stops: string[];
  bestFor: string;
}

export const lumbiniRoutes: LumbiniRoute[] = [
  {
    title: "Buddhist Heritage Trail",
    duration: "3–4 days",
    stops: ["Lumbini", "Devdaha", "Ramgram", "Tilaurakot", "Kudan", "Gotihawa"],
    bestFor: "Pilgrims, history lovers, families",
  },
  {
    title: "Heritage & Hills",
    duration: "5–6 days",
    stops: ["Lumbini", "Kapilvastu", "Butwal", "Tansen", "Rani Mahal", "Pokhara"],
    bestFor: "Culture, photography, onward to Pokhara",
  },
  {
    title: "Remote West Adventure",
    duration: "10+ days",
    stops: ["Nepalgunj", "Dang", "Rolpa · Jaljala", "Thawang", "Rukum East · Sisne Himal"],
    bestFor: "Trekkers, campers, offbeat explorers",
  },
];
