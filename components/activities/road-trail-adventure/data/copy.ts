import type { ImageSpec } from "./types";

/** Hero copy, section headings, and other editorial text. */

export const HERO = {
  eyebrow: "ROAD & TRAIL ADVENTURE",
  /** Split into words for the staggered reveal. Keep as one sentence. */
  heading: "Discover Nepal, One Road and Trail at a Time",
  text: "From thrilling Himalayan off-road journeys to scenic mountain drives and unforgettable trekking trails, explore Nepal’s extraordinary landscapes with Karvaahh.",
  primaryCta: "Explore Adventures",
  secondaryCta: "Plan Your Adventure",
  image: {
    file: "hero-himalayan-highway.jpg",
    alt: "A winding mountain road climbing through a Himalayan valley toward snow-capped peaks",
    label:
      "Wide landscape, ideally a real Nepal mountain road (e.g. Kali Gandaki or Marsyangdi valley) leading into the distance. Keep the top 55% calm for the headline. Min 2400px wide.",
  } satisfies ImageSpec,
};

export const HIGHLIGHT = {
  eyebrow: "Overview",
  heading: "Road & Trail Adventure – Destination Highlight",
  /**
   * SUPPLIED COPY. Must stay exactly as provided in the brief:
   * do not shorten, rewrite, re-punctuate or remove anything.
   */
  text: "Road & Trail Adventure Experiences offer an exhilarating journey through Nepal’s breathtaking landscapes, combining scenic road trips, thrilling off-road exploration, and unforgettable trekking adventures. From winding Himalayan highways and rugged mountain passes to peaceful countryside roads and hidden trails, discover the diverse beauty of Nepal through extraordinary journeys. Experience the thrill of 4x4 off-road adventures to Upper Mustang, Muktinath, and Manang, explore the scenic mountain routes of Pokhara, Jomsom, and Ghandruk, and embark on unforgettable trails through the Annapurna, Langtang, and Everest regions. Drive through dramatic river valleys, lush forests, terraced hillsides, traditional villages, and spectacular high-altitude landscapes while enjoying panoramic views of snow-capped Himalayan peaks. Whether you seek adventurous motorcycle rides, thrilling jeep safaris, scenic road trips, mountain biking, or immersive trekking experiences, Nepal’s road and trail adventures promise excitement, cultural discovery, and unforgettable memories for every adventure enthusiast.",
  image: {
    file: "highlight-mountain-road.jpg",
    alt: "A road cutting through terraced hillsides and a river valley with Himalayan peaks beyond",
    label:
      "Portrait or 4:5 crop. Terraced hills + valley road + peaks in one frame. Must be a real Nepal location.",
  } satisfies ImageSpec,
};

export const HEADINGS = {
  categories: {
    eyebrow: "Experiences",
    title: "Choose Your Way to Explore Nepal",
    intro:
      "Six ways to see the country. Suitability depends on the route, the season and your experience, so we plan each journey around you.",
  },
  destinations: {
    eyebrow: "Destinations",
    title: "Explore Nepal’s Most Extraordinary Mountain Routes",
    intro:
      "Eight regions, each explored differently. Some are reached by road, others on foot. Access and route conditions vary by season.",
  },
  roadTrips: {
    eyebrow: "Road trips",
    title: "Road Trips That Take You Beyond the Ordinary",
    intro:
      "Five scenic journeys as starting points. Duration, stops and pace are shaped with you, and route information is confirmed before you travel.",
  },
  trails: {
    eyebrow: "On foot",
    title: "Find Your Trail in the Himalayas",
    intro:
      "Trekking routes are walked, not driven. They are separate from the road journeys above, and trail status and suitability are checked against current conditions before any plan is made.",
    cta: "Explore Trekking Adventures",
  },
  ride: {
    eyebrow: "Two wheels",
    title: "Ride Through the Heart of the Himalayas",
    safety:
      "Safety note: choose routes and equipment that match your experience and the current conditions. Motorcycles, bicycles, guides and equipment are not assumed to be included in any journey unless confirmed in your plan.",
  },
  offRoad: {
    eyebrow: "4x4",
    title: "Take the Road Less Traveled",
    intro:
      "Nepal’s remote mountain regions reward slow, well-planned overland travel. Not every destination can be reached by a standard vehicle, and routes are not open all year.",
    cta: "Plan Your 4x4 Adventure",
    vehiclesTitle: "Featured experiences",
    image: {
      file: "offroad-4x4-mountain-road.jpg",
      alt: "A four-wheel-drive vehicle travelling carefully along a rugged Himalayan mountain road",
      label:
        "A suitable 4x4 on a real mountain road (Mustang / Kali Gandaki / Manang). No river crossings, no risky driving, no stunts.",
    } satisfies ImageSpec,
  },
  styles: {
    eyebrow: "Travel style",
    title: "Find the Adventure That Matches Your Travel Style",
    intro:
      "Tell us how you like to travel. Suitability is confirmed per route, altitude, duration and conditions.",
  },
  itineraries: {
    eyebrow: "Sample journeys",
    title: "Choose Your Next Himalayan Adventure",
    intro:
      "These are sample concepts to start a conversation, not confirmed packages. Travel times, road access, trail conditions, accommodation and permits are confirmed with you before anything is finalised.",
    badge: "Sample concept",
  },
  prepare: {
    eyebrow: "Plan ahead",
    title: "Prepare for Your Himalayan Adventure",
    intro:
      "General guidance only. Conditions change, and no route is right for everyone. We will go through specifics for your plan.",
  },
  why: {
    eyebrow: "Why Karvaahh",
    title: "Your Adventure, Thoughtfully Planned",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Through the Roads and Trails of Nepal",
    intro: "Select a photograph to view it larger.",
  },
  responsible: {
    eyebrow: "Travel well",
    title: "Explore Responsibly. Travel Thoughtfully.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently Asked Questions",
    intro:
      "Conditions, access, permits and suitability vary by destination and season, so treat these answers as a starting point.",
  },
  inquiry: {
    eyebrow: "Plan with us",
    title: "Plan Your Road & Trail Adventure",
    text: "Tell us how you want to explore Nepal — scenic road trips, 4x4 off-road journeys, motorcycle adventures, mountain biking, or Himalayan trekking. Let’s create a journey around your interests, travel dates, and preferred adventure style.",
    submit: "Plan My Adventure",
  },
};

export const FINAL_CTA = {
  heading: "Your Next Great Adventure Begins in Nepal",
  text: "From scenic mountain roads to remote Himalayan trails, discover extraordinary journeys with Karvaahh – Live to Travel.",
  primary: "Explore Adventures",
  secondary: "Customize Your Journey",
  image: {
    file: "final-cta-road-into-distance.jpg",
    alt: "A Himalayan mountain road disappearing into a dramatic valley at dusk",
    label:
      "Cinematic landscape, road or trail leading away from camera. Dark, low-key tones so white text stays legible.",
  } satisfies ImageSpec,
};
