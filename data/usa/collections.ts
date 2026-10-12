// data/usa/collections.ts
// Honeymoon, Family and Luxury collections. Packages are picked by id from
// ./packages.ts; destinations by id from ./destinations.ts.

import type { USAImageId } from "./images";

export interface USACollection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: USAImageId;
  secondaryImage?: USAImageId;
  destinations: string[];
  /** Feature list ("what makes it a honeymoon"). */
  features: { title: string; text: string }[];
  packageIds: string[];
  packagesTitle: string;
  tone: "rose" | "sand" | "noir";
  /** Configurable service tiers (luxury). */
  tiers?: { id: string; label: string; text: string; includes: string[] }[];
  note?: string;
}

export const honeymoonCollection: USACollection = {
  id: "honeymoon",
  eyebrow: "USA honeymoon collection",
  title: "Romance, American Style",
  intro: "Skyline dinners in New York, sunsets over the Pacific, desert stars above Las Vegas and Hawaiian beaches. We design every honeymoon around the two of you.",
  image: "couple",
  secondaryImage: "maui",
  destinations: ["new-york", "honolulu", "maui", "los-angeles", "san-francisco", "las-vegas", "miami", "orlando", "grand-canyon"],
  features: [
    { title: "Romantic hotels", text: "Rooms with a view, boutique stays and beach resorts, chosen for couples." },
    { title: "Private transfers", text: "No queues for shuttles; a driver meets you at each arrival." },
    { title: "Scenic experiences", text: "Helicopter and boat options where they operate, scenic drives and sunrise points." },
    { title: "Cruises", text: "Hudson River dinner cruises, Hawaiian sunset sails or a longer cruise." },
    { title: "Sunset moments", text: "Santa Monica, Key West, the Grand Canyon rim and Maui." },
    { title: "Premium dining", text: "Special dinners where applicable, booked subject to availability." },
  ],
  packageIds: ["nyc-niagara-honeymoon-6n", "la-lv-honeymoon-7n", "california-honeymoon-8n", "hawaii-honeymoon-7n", "nyc-miami-8n", "usa-romantic-10n", "hawaii-honeymoon-8n"],
  packagesTitle: "USA honeymoon packages",
  tone: "rose",
};

export const familyCollection: USACollection = {
  id: "family",
  eyebrow: "USA family holidays",
  title: "Big Adventures, Easy Pace",
  intro: "Theme parks, museums, beaches and national parks, planned so that children, parents and grandparents all enjoy the trip.",
  image: "family",
  secondaryImage: "central-park",
  destinations: ["orlando", "los-angeles", "san-diego", "new-york", "washington-dc", "niagara-falls", "honolulu", "yellowstone", "grand-canyon"],
  features: [
    { title: "Family-friendly hotels", text: "Connecting or family rooms, pools and convenient locations." },
    { title: "Manageable itineraries", text: "Fewer hotel changes, shorter touring days and built-in rest." },
    { title: "Theme parks", text: "Advice on parks, passes and timing; tickets only when you ask for them." },
    { title: "Attractions", text: "Museums, aquariums, space centres and ferry rides children remember." },
    { title: "Flexible pacing", text: "Free days, early nights and private transfers when energy runs low." },
    { title: "Grandparent-friendly", text: "Accessible options, step-free routes where available and slower days." },
  ],
  packageIds: ["orlando-family-5n", "nyc-family", "nyc-orlando-8n", "california-family", "nyc-dc-niagara-7n", "florida-family", "oahu-5n", "usa-family"],
  packagesTitle: "USA family packages",
  tone: "sand",
  note: "Theme-park and attraction admission is not included unless your quote lists it.",
};

export const luxuryCollection: USACollection = {
  id: "luxury",
  eyebrow: "USA luxury travel",
  title: "America, Beautifully Done",
  intro: "Landmark hotels in New York, resort suites in Las Vegas, oceanfront Hawaii, wilderness lodges in Alaska and private access to the national parks.",
  image: "nyc-empire",
  secondaryImage: "waikiki",
  destinations: ["new-york", "las-vegas", "los-angeles", "san-francisco", "miami", "honolulu", "maui", "anchorage", "grand-canyon"],
  features: [
    { title: "New York luxury hotels", text: "Iconic addresses on the park, in Midtown or downtown." },
    { title: "Las Vegas resorts", text: "Suites, spas and the best seats we can secure for shows." },
    { title: "California & Miami", text: "Beachfront hotels, wine country and design-led stays." },
    { title: "Hawaii & Alaska", text: "Oceanfront resorts and remote wilderness lodges." },
    { title: "Private park experiences", text: "Private guides and scenic flights where they operate." },
    { title: "Premium cruises & transfers", text: "Premium cruise lines and chauffeured transfers throughout." },
  ],
  packageIds: ["nyc-luxury", "usa-luxury", "hawaii-honeymoon-8n", "california-honeymoon-8n", "alaska-cruise", "usa-romantic-10n"],
  packagesTitle: "USA luxury journeys",
  tone: "noir",
  tiers: [
    {
      id: "premium", label: "Premium",
      text: "Polished four-star and select five-star hotels with private transfers.",
      includes: ["4★–5★ hotels", "Private airport transfers", "Guided highlights", "Good-category rooms"],
    },
    {
      id: "luxury", label: "Luxury",
      text: "Five-star stays, private guides and premium experiences.",
      includes: ["5★ hotels & resorts", "Private guides & cars", "Premium dining reservations", "Upgraded room categories"],
    },
    {
      id: "ultra", label: "Ultra Luxury",
      text: "Suites, iconic addresses and fully private, tailor-made days.",
      includes: ["Suites & signature properties", "Chauffeur throughout", "Private & exclusive experiences where offered", "Dedicated trip designer"],
    },
  ],
  note: "Specific hotels are proposed in your quote based on availability; tiers describe the level of service, not a fixed product.",
};
