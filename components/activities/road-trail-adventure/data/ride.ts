import type { InfoBlock, RideExperience } from "./types";

export const RIDE_EXPERIENCES: RideExperience[] = [
  {
    id: "motorcycle",
    title: "Motorcycle Adventures",
    intro:
      "Nepal’s highways and mountain roads make for memorable riding when the route, season and rider are well matched. Each journey is shaped around your skill and the conditions on the day.",
    highlights: [
      "Scenic highway journeys",
      "Mountain road exploration",
      "Countryside and village rides",
      "Selected overland motorcycle routes",
      "Customized riding experiences based on skill and route conditions",
    ],
    image: {
      file: "ride-motorcycle.jpg",
      alt: "A motorcyclist riding a scenic mountain road in the Nepal Himalaya",
      label: "Large, cinematic motorcycle shot on a real Nepal road. Rider in full gear.",
    },
    ctaLabel: "Plan Your Ride",
    prefill: { adventureType: "Motorcycle Adventure" },
  },
  {
    id: "mountain-biking",
    title: "Mountain Biking",
    intro:
      "From village lanes to forest and hillside trails, cycling offers a slower, closer way to see the country. Routes are selected to suit the rider and the terrain.",
    highlights: [
      "Selected countryside cycling routes",
      "Mountain biking trails around Pokhara",
      "Forest and hillside trails",
      "Selected Himalayan foothill routes",
      "Guided cycling experiences where available",
    ],
    image: {
      file: "ride-mountain-biking.jpg",
      alt: "Mountain bikers on a forest and hillside trail near Pokhara",
      label: "Real MTB trail around Pokhara or a Himalayan foothill. Helmets visible.",
    },
    ctaLabel: "Plan Your Ride",
    prefill: { adventureType: "Mountain Biking" },
  },
];

/**
 * Off-road content blocks. Written as general guidance: no claims about
 * specific vehicles, drivers or guaranteed access.
 */
export const OFFROAD_BLOCKS: InfoBlock[] = [
  {
    title: "What makes off-road journeys unique",
    body: "Overland travel puts you inside the landscape. You pass through villages, valleys and high country at a pace that suits the road, with time to stop and look.",
  },
  {
    title: "Typical landscape experiences",
    body: "Expect river valleys, terraced hillsides, arid high-altitude terrain in some regions, and changing scenery as elevation shifts.",
  },
  {
    title: "Vehicle suitability and road conditions",
    body: "Some routes need a suitable four-wheel-drive vehicle, and not every road is open to every vehicle. Conditions change with weather and maintenance, so they are checked before you travel.",
  },
  {
    title: "Route planning and local guidance",
    body: "Planning around road status, daylight and altitude keeps a journey comfortable. Local travel guidance shapes the route and the pace.",
  },
  {
    title: "Seasonal considerations",
    body: "Access can differ widely between seasons, and some routes are not open all year. The right window depends on the destination.",
  },
  {
    title: "Customizable travel options",
    body: "Duration, stops, travel companions and comfort level can all be adjusted. Tell us what matters and we will build around it.",
  },
];

export const OFFROAD_EXPERIENCES = [
  "Upper Mustang overland exploration",
  "Muktinath and Jomsom mountain journeys",
  "Manang overland adventures",
  "Selected remote Himalayan road experiences",
  "Scenic countryside and mountain valley drives",
];
