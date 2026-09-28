import type { ItineraryStage } from "../types";
import { IMG } from "../config/site";

/**
 * ILLUSTRATIVE itinerary framework — not a confirmed package itinerary.
 * Distances, walking times and accommodation are deliberately left as
 * placeholders. Elevations are commonly cited approximate figures.
 * Add, remove or reorder stages freely; the timeline renders whatever is here.
 */
const TBC = "To be confirmed";
const TEAHOUSE = "Teahouse lodge (to be confirmed)";

export const itineraryDisclaimer =
  "This is an illustrative route framework, not a fixed departure. Your confirmed itinerary — including overnight stops, acclimatisation days and total duration — is agreed with you before booking, and may change on the trail for weather, flights or health.";

export const itinerary: ItineraryStage[] = [
  {
    id: "d1", day: "Day 1", title: "Arrival in Kathmandu", kind: "arrival",
    description: "Arrive in Kathmandu, meet the Karvaahh team, complete permit paperwork and check gear before the mountain flight.",
    image: { src: `${IMG}/itinerary/kathmandu-arrival.jpg`, alt: "Kathmandu valley rooftops with stupa in the evening" },
    distance: "—", duration: "—", startElevation: "≈ 1,400 m", endElevation: "≈ 1,400 m", accommodation: "Hotel in Kathmandu (to be confirmed)",
  },
  {
    id: "d2", day: "Day 2", title: "Fly to Lukla · Trek to Phakding", kind: "flight",
    description: "An early mountain flight to Lukla, then a gentle descent through villages and mani walls to the Dudh Koshi at Phakding.",
    image: { src: `${IMG}/itinerary/lukla-flight.jpg`, alt: "Small aircraft on approach to the Lukla airstrip" },
    distance: TBC, duration: TBC, startElevation: "≈ 2,860 m", endElevation: "≈ 2,610 m", accommodation: TEAHOUSE,
    note: "Lukla flights are weather-dependent. In busy seasons, flights may operate from Ramechhap (Manthali) instead of Kathmandu.",
  },
  {
    id: "d3", day: "Day 3", title: "Phakding to Namche Bazaar", kind: "trek",
    description: "Cross high suspension bridges, enter Sagarmatha National Park at Monjo and climb steadily to Namche — with a first glimpse of Everest on a clear day.",
    image: { src: `${IMG}/itinerary/hillary-bridge.jpg`, alt: "Prayer-flag-draped suspension bridge high above the Dudh Koshi gorge" },
    distance: TBC, duration: TBC, startElevation: "≈ 2,610 m", endElevation: "≈ 3,440 m", accommodation: TEAHOUSE,
    note: "A significant climb — keep a slow, steady pace and drink plenty of water.",
  },
  {
    id: "d4", day: "Day 4", title: "Acclimatisation in Namche", kind: "acclimatization",
    description: "Climb high, sleep low: a short hike above town towards Everest viewpoints, then time to explore Namche's lanes and the Sherpa culture museum.",
    image: { src: `${IMG}/itinerary/namche-acclimatization.jpg`, alt: "View over Namche Bazaar from the ridge above town" },
    distance: TBC, duration: TBC, startElevation: "≈ 3,440 m", endElevation: "≈ 3,440 m", accommodation: TEAHOUSE,
    note: "Acclimatisation day — do not skip. Report headaches or nausea to your guide early.",
  },
  {
    id: "d5", day: "Day 5", title: "Namche to Tengboche", kind: "trek",
    description: "A panoramic balcony trail with Ama Dablam ahead, a descent to the river and a forested climb to Tengboche Monastery.",
    image: { src: `${IMG}/itinerary/trail-to-tengboche.jpg`, alt: "Balcony trail with Ama Dablam ahead on the way to Tengboche" },
    distance: TBC, duration: TBC, startElevation: "≈ 3,440 m", endElevation: "≈ 3,867 m", accommodation: TEAHOUSE,
  },
  {
    id: "d6", day: "Day 6", title: "Tengboche to Dingboche", kind: "trek",
    description: "Through rhododendron forest to Pangboche, then above the treeline into the wide Imja Valley and the stone-walled fields of Dingboche.",
    image: { src: `${IMG}/itinerary/imja-valley.jpg`, alt: "Open Imja valley above the treeline on the approach to Dingboche" },
    distance: TBC, duration: TBC, startElevation: "≈ 3,867 m", endElevation: "≈ 4,410 m", accommodation: TEAHOUSE,
  },
  {
    id: "d7", day: "Day 7", title: "Acclimatisation in Dingboche", kind: "acclimatization",
    description: "A hike up the ridge above the village (often towards Nangkartshang) for views of Makalu, Lhotse and Island Peak, then rest.",
    image: { src: `${IMG}/itinerary/dingboche-ridge.jpg`, alt: "Trekker on a ridge above Dingboche looking towards Lhotse" },
    distance: TBC, duration: TBC, startElevation: "≈ 4,410 m", endElevation: "≈ 4,410 m", accommodation: TEAHOUSE,
    note: "Second acclimatisation day. Above 4,000 m, ascend gradually and watch for symptoms of altitude sickness.",
  },
  {
    id: "d8", day: "Day 8", title: "Dingboche to Lobuche", kind: "trek",
    description: "Across the Pheriche plateau, up to the memorials at Thukla Pass and along the moraine to Lobuche beneath Nuptse.",
    image: { src: `${IMG}/itinerary/thukla-memorials.jpg`, alt: "Stone memorial cairns with prayer flags at Thukla Pass" },
    distance: TBC, duration: TBC, startElevation: "≈ 4,410 m", endElevation: "≈ 4,940 m", accommodation: TEAHOUSE,
  },
  {
    id: "d9", day: "Day 9", title: "Gorakshep & Everest Base Camp", kind: "summit",
    description: "Trek to Gorakshep, drop your bags and continue along the Khumbu Glacier to Everest Base Camp, returning to Gorakshep for the night.",
    image: { src: `${IMG}/itinerary/everest-base-camp-day.jpg`, alt: "Trekkers celebrating among prayer flags at Everest Base Camp" },
    distance: TBC, duration: TBC, startElevation: "≈ 4,940 m", endElevation: "≈ 5,364 m", accommodation: "Teahouse lodge in Gorakshep (to be confirmed)",
    note: "The longest, highest day. Your guide may adjust timing to weather and how the group is feeling.",
  },
  {
    id: "d10", day: "Day 10", title: "Kala Patthar Sunrise · Descend", kind: "summit",
    description: "An optional pre-dawn climb to Kala Patthar for sunrise on Everest, then a long descent to lower altitude — typically Pheriche.",
    image: { src: `${IMG}/itinerary/kala-patthar-dawn.jpg`, alt: "Headlamps of trekkers climbing Kala Patthar before dawn" },
    distance: TBC, duration: TBC, startElevation: "≈ 5,164 m", endElevation: "≈ 5,545 m (high point)", accommodation: TEAHOUSE,
    note: "Kala Patthar is optional. Very cold before sunrise — full down layers, gloves and a headlamp are essential.",
  },
  {
    id: "d11", day: "Days 11–12", title: "Return Trek to Lukla", kind: "return",
    description: "Retrace the valley via Namche to Lukla, with thicker air, warm lodges and time to celebrate with your trekking crew.",
    image: { src: `${IMG}/itinerary/return-trail.jpg`, alt: "Descending trail through pine forest towards Namche and Lukla" },
    distance: TBC, duration: TBC, startElevation: "≈ 4,370 m", endElevation: "≈ 2,860 m", accommodation: TEAHOUSE,
  },
  {
    id: "d13", day: "Day 13", title: "Fly to Kathmandu", kind: "flight",
    description: "A morning flight back to Kathmandu (or Ramechhap). Keep a buffer day in your plans in case weather delays the flight.",
    image: { src: `${IMG}/itinerary/flight-to-kathmandu.jpg`, alt: "Aircraft taking off from Lukla with green hills below" },
    distance: "—", duration: TBC, startElevation: "≈ 2,860 m", endElevation: "≈ 1,400 m", accommodation: "Hotel in Kathmandu (to be confirmed)",
    note: "We strongly recommend at least one contingency day before your international departure.",
  },
];

export const stageKindLabel: Record<ItineraryStage["kind"], string> = {
  arrival: "Arrival",
  flight: "Flight",
  trek: "Trek",
  acclimatization: "Acclimatisation",
  summit: "Highlight",
  return: "Return",
};
