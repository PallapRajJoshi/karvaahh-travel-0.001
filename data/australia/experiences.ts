// data/australia/experiences.ts
// "Top Australia Experiences" carousel. Each card carries travel styles and
// destinations, so it follows the page filters and "See packages" can apply them.

import type { AUImageId } from "./images";
import type { AustraliaTravelStyle } from "./travel-styles";

export interface AustraliaExperience {
  id: string;
  title: string;
  place: string;
  text: string;
  image?: AUImageId;
  styles: AustraliaTravelStyle[];
  destinations: string[];
  /** Filter applied by "See packages". */
  filter: { destination?: string; style?: AustraliaTravelStyle };
}

export const australiaExperiences: AustraliaExperience[] = [
  { id: "harbour", title: "Sydney Harbour", place: "Sydney", text: "Ferries, cruises and harbourside walks between the Bridge and the Opera House.", image: "sydney-aerial", styles: ["city-break", "cruise", "honeymoon", "family"], destinations: ["sydney"], filter: { destination: "sydney" } },
  { id: "opera", title: "Sydney Opera House", place: "Bennelong Point", text: "A guided tour or a night at a performance (tickets on request).", image: "sydney-opera", styles: ["city-break", "educational", "luxury"], destinations: ["sydney"], filter: { destination: "sydney" } },
  { id: "gor", title: "Great Ocean Road", place: "Victoria", text: "Clifftop lookouts and the Twelve Apostles on a classic coastal drive.", image: "twelve-apostles", styles: ["road-trip", "nature", "honeymoon"], destinations: ["great-ocean-road"], filter: { destination: "great-ocean-road" } },
  { id: "gbr", title: "Great Barrier Reef", place: "Queensland", text: "Snorkel, dive or fly over the world's largest coral reef system.", image: "coral-garden", styles: ["reef", "diving", "adventure", "family"], destinations: ["great-barrier-reef", "cairns"], filter: { destination: "great-barrier-reef" } },
  { id: "gc-beaches", title: "Gold Coast Beaches", place: "Queensland", text: "Patrolled surf beaches below the towers of Surfers Paradise.", image: "gold-coast", styles: ["beach", "family", "adventure"], destinations: ["gold-coast"], filter: { destination: "gold-coast" } },
  { id: "whitsundays", title: "Whitsunday Islands", place: "Queensland", text: "Silica-white Whitehaven Beach and swirling Hill Inlet.", image: "whitehaven", styles: ["island", "beach", "honeymoon", "cruise"], destinations: ["whitsundays"], filter: { destination: "whitsundays" } },
  { id: "wildlife", title: "Wildlife Encounters", place: "Across Australia", text: "Kangaroos, koalas and more, in the wild or at accredited sanctuaries.", image: "kangaroo", styles: ["wildlife", "family", "educational"], destinations: ["kangaroo-island", "phillip-island", "brisbane"], filter: { style: "wildlife" } },
  { id: "uluru", title: "Uluru", place: "Northern Territory", text: "Watch the great rock change colour from sunrise to sunset.", image: "uluru", styles: ["outback", "nature", "educational", "honeymoon"], destinations: ["uluru"], filter: { destination: "uluru" } },
  { id: "tas-wild", title: "Tasmania Wilderness", place: "Tasmania", text: "Alpine lakes, ancient forest and long, empty beaches.", image: "cradle-walk", styles: ["nature", "adventure", "road-trip"], destinations: ["cradle-mountain", "freycinet"], filter: { destination: "cradle-mountain" } },
  { id: "quokkas", title: "Rottnest Quokkas", place: "Western Australia", text: "Cycle a car-free island and meet its famous residents from a respectful distance.", image: "quokka", styles: ["wildlife", "island", "family"], destinations: ["rottnest-island"], filter: { destination: "rottnest-island" } },
  { id: "ningaloo", title: "Ningaloo Reef", place: "Western Australia", text: "Beach-access snorkelling and seasonal whale shark tours.", image: "whale-shark", styles: ["reef", "diving", "adventure", "wildlife"], destinations: ["ningaloo-reef"], filter: { destination: "ningaloo-reef" } },
  { id: "mr", title: "Margaret River", place: "Western Australia", text: "Wineries, gourmet producers and wild surf coast.", image: "vineyard-terrace", styles: ["food-wine", "honeymoon", "luxury"], destinations: ["margaret-river"], filter: { destination: "margaret-river" } },
  { id: "blue-mountains", title: "Blue Mountains", place: "New South Wales", text: "The Three Sisters and eucalyptus valleys near Sydney.", image: "blue-mountains", styles: ["nature", "adventure", "family"], destinations: ["blue-mountains"], filter: { destination: "blue-mountains" } },
  { id: "penguins", title: "Phillip Island Penguins", place: "Victoria", text: "Little penguins waddling ashore at dusk.", image: "penguins", styles: ["wildlife", "family", "educational"], destinations: ["phillip-island"], filter: { destination: "phillip-island" } },
  { id: "outback", title: "Outback Adventures", place: "Red Centre & Top End", text: "Gorges, waterholes and starry desert nights.", image: "kings-canyon", styles: ["outback", "adventure", "road-trip"], destinations: ["kings-canyon", "alice-springs", "kakadu"], filter: { style: "outback" } },
  { id: "islands", title: "Luxury Island Escapes", place: "Whitsundays & beyond", text: "Resort islands with reef on the doorstep.", image: "seaplane", styles: ["luxury", "island", "honeymoon"], destinations: ["hamilton-island", "whitsundays"], filter: { style: "island" } },
  { id: "food-wine", title: "Australian Food & Wine", place: "Barossa, Yarra, Hunter & more", text: "Cellar doors, farm-gate produce and long lunches.", image: "wine-food", styles: ["food-wine", "luxury", "honeymoon"], destinations: ["barossa-valley", "yarra-valley", "hunter-valley", "margaret-river"], filter: { style: "food-wine" } },
  { id: "road-trips", title: "Scenic Road Trips", place: "Coast & country", text: "Self-drive or chauffeured journeys on Australia's great routes.", image: "coastal-drive", styles: ["road-trip", "nature", "adventure"], destinations: ["great-ocean-road", "margaret-river", "cradle-mountain"], filter: { style: "road-trip" } },
];
