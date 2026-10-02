export type ItineraryDay = {
  day: number;
  title: string;
  body: string;
};

/**
 * Illustrative sample itinerary only — explicitly NOT a confirmed
 * operational itinerary. Actual duration, overnight locations, route
 * accessibility, and walking hours must be verified before this is used
 * for booking or marketing claims. See ItineraryTimeline's disclaimer copy.
 */
export const itineraryDays: ItineraryDay[] = [
  {
    day: 1,
    title: "Kathmandu to Melamchi / Bhotang Region",
    body: "Travel toward the trekking starting region, depending on road conditions and the selected route.",
  },
  {
    day: 2,
    title: "Trek Through Mountain Villages and Forest Trails",
    body: "Begin the trek through the selected trail and stay at an available local lodge or campsite.",
  },
  {
    day: 3,
    title: "Ascend Toward Panch Pokhari",
    body: "Continue through higher-altitude landscapes with appropriate acclimatization and overnight arrangements.",
  },
  {
    day: 4,
    title: "Explore Panch Pokhari",
    body: "Visit the sacred lakes and surrounding viewpoints, subject to weather and safety conditions.",
  },
  {
    day: 5,
    title: "Begin the Return Trek",
    body: "Descend along the selected route.",
  },
  {
    day: 6,
    title: "Return Toward Kathmandu",
    body: "Travel back through the access region, depending on road and trail conditions.",
  },
];

export const itineraryDisclaimer =
  "This is a sample itinerary, not a confirmed operational schedule. Trek duration, overnight locations, route accessibility, and actual walking hours must be verified before publishing or booking, and the itinerary can be customized to your fitness, weather conditions, and acclimatization needs.";
