import { IMAGES } from "./images";
import type { ItineraryDay, ItineraryPhase } from "./types";

/**
 * SAMPLE PLANNING FRAMEWORK — not a fixed, verified itinerary.
 *
 * Stops are deliberately generic. Before publishing named overnight stops,
 * walking times or elevations, confirm them on the ground and set
 * `verified: true` for that day. Unverified numeric fields are never rendered.
 * Commonly reported stops from operator itineraries are listed in the README.
 */
export const ITINERARY_META = {
  title: "Your Journey into the Api Himal Wilderness",
  intro:
    "A sample 12-day framework showing how a typical Api Nampa journey unfolds. Every trip is planned around current road access, weather, group fitness and acclimatisation — so treat this as the shape of the adventure, not a fixed timetable.",
  disclaimer:
    "Remote trekking destination: route, overnight stops, walking hours and elevations are confirmed during planning and may change on the trail for weather, landslides or acclimatisation.",
};

export const PHASES: Record<ItineraryPhase, { label: string; description: string }> = {
  approach: { label: "Approach", description: "Kathmandu to the far west" },
  "trek-in": { label: "Trek in", description: "Valley to high country" },
  "base-camp": { label: "Base camp", description: "Api Himal" },
  return: { label: "Return", description: "Back to Kathmandu" },
};

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    phase: "approach",
    from: "Arrival",
    to: "Kathmandu",
    summary: "Arrive in Kathmandu, meet the Karvaahh team and complete your trip briefing.",
    details: [
      "Airport pick-up and hotel check-in.",
      "Gear check and final permit paperwork where required.",
    ],
    verified: false,
  },
  {
    day: 2,
    phase: "approach",
    from: "Kathmandu",
    to: "Toward Darchula",
    summary: "Travel to the far-western region and continue toward Darchula, depending on transport arrangements.",
    details: [
      "Usually a flight or long drive to Dhangadhi, then onward by road.",
      "Overnight stop depends on flight times and road conditions.",
    ],
    verified: false,
  },
  {
    day: 3,
    phase: "approach",
    from: "Darchula region",
    to: "Trailhead",
    summary: "Drive toward the selected trailhead and prepare for the trek.",
    details: [
      "Trailhead chosen on current road and trail access.",
      "Meet local crew, pack loads and confirm the route plan.",
    ],
    verified: false,
    image: IMAGES.chameliya,
  },
  {
    day: 4,
    phase: "trek-in",
    from: "Trailhead",
    to: "Chameliya valley",
    summary: "Begin trekking up the Chameliya River valley to a suitable overnight stop.",
    details: [
      "River trail with suspension bridge crossings and forest sections.",
      "Overnight in a village or camp depending on progress.",
    ],
    verified: false,
    image: IMAGES.chameliya,
  },
  {
    day: 5,
    phase: "trek-in",
    from: "Chameliya valley",
    to: "Mountain settlements",
    summary: "Continue through forest trails and traditional mountain settlements.",
    details: [
      "Steady climbing through mixed forest.",
      "A chance for a homestay evening, where available.",
    ],
    verified: false,
    image: IMAGES.forestTrail,
  },
  {
    day: 6,
    phase: "trek-in",
    from: "Upper villages",
    to: "Alpine meadows",
    summary: "Trek toward open alpine meadows and higher mountain landscapes.",
    details: [
      "The treeline gives way to pasture and the first big views.",
      "Pace kept deliberately gentle for acclimatisation.",
    ],
    verified: false,
    image: IMAGES.meadows,
  },
  {
    day: 7,
    phase: "base-camp",
    from: "High pastures",
    to: "Api Himal Base Camp region",
    summary: "Continue toward the Api Himal Base Camp region.",
    details: [
      "Rougher ground toward the moraine below the Api massif.",
      "Camp or shelter as conditions allow.",
    ],
    verified: false,
    image: IMAGES.baseCamp,
  },
  {
    day: 8,
    phase: "base-camp",
    from: "Base camp",
    to: "Base camp",
    summary: "Explore the base camp surroundings and nearby scenic viewpoints, subject to conditions.",
    details: [
      "Optional walk toward Kalidhunga Lake if weather and fitness allow.",
      "Also serves as a buffer day for weather or acclimatisation.",
    ],
    verified: false,
    image: IMAGES.kalidhunga,
  },
  {
    day: 9,
    phase: "return",
    from: "Base camp",
    to: "Lower valley",
    summary: "Begin the return journey on the same route or an approved alternative.",
    details: ["Long descent — knees appreciate trekking poles."],
    verified: false,
  },
  {
    day: 10,
    phase: "return",
    from: "Lower valley",
    to: "Trailhead",
    summary: "Continue trekking back toward the trailhead.",
    details: ["Final night with the local crew."],
    verified: false,
  },
  {
    day: 11,
    phase: "return",
    from: "Trailhead",
    to: "Darchula or onward stop",
    summary: "Travel back toward Darchula or another suitable overnight location.",
    details: ["Road time depends heavily on conditions."],
    verified: false,
  },
  {
    day: 12,
    phase: "return",
    from: "Far west",
    to: "Kathmandu",
    summary: "Return toward Kathmandu.",
    details: ["We recommend at least one spare day in Kathmandu before international flights."],
    verified: false,
  },
];
