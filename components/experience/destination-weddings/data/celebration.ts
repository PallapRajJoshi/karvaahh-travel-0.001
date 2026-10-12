import type { TitledList, WeddingImage } from "./types";

const img = (file: string, alt: string): WeddingImage => ({ file, alt });

export const weddingFunctions: TitledList[] = [
  {
    id: "haldi",
    title: "Haldi",
    description: "Turmeric, marigolds and laughter in the morning light.",
    items: ["Yellow décor", "Floral installations", "Seating", "Music", "Photography", "Refreshments"],
    image: img("function-haldi.jpg", "Haldi ceremony with marigold décor and family applying turmeric"),
  },
  {
    id: "mehendi",
    title: "Mehendi",
    description: "An afternoon of henna, folk songs and slow conversation.",
    items: ["Mehendi artists", "Decorated seating", "Floral décor", "Folk entertainment", "Photography"],
    image: img("function-mehendi.jpg", "Bride's hands with fresh mehendi on a cushioned floral seat"),
  },
  {
    id: "sangeet",
    title: "Sangeet",
    description: "Both families, one stage, and the performances everyone will talk about.",
    items: ["Stage", "LED", "Sound", "Lighting", "DJ", "MC", "Choreography", "Family performances", "Couple performance"],
    image: img("function-sangeet.jpg", "Sangeet stage with warm lighting and family members dancing"),
  },
  {
    id: "cocktail",
    title: "Cocktail & Welcome Party",
    description: "The first evening together, set to music.",
    items: ["DJ", "Live music", "Bar arrangement", "Canapés", "Lounge seating", "Lighting"],
    note: "Where legally permitted.",
    image: img("function-cocktail.jpg", "Lounge seating and candlelight at a welcome party terrace"),
  },
  {
    id: "baraat",
    title: "Baraat",
    description: "The groom's arrival — loud, joyful and carefully choreographed.",
    items: ["Dhol", "Band", "Groom entry", "Decorated vehicle", "Baraat route", "Crowd coordination", "Welcome ceremony"],
    image: img("function-baraat.jpg", "Baraat procession with dhol players and a decorated vintage car"),
  },
];

export const mandaps: TitledList[] = [
  {
    id: "traditional",
    title: "Traditional",
    description: "Carved pillars, kalash, banana leaves and marigold garlands.",
    items: ["Carved wood or brass structure", "Marigold & mango-leaf florals", "Silk drapes", "Diya lighting"],
    image: img("mandap-traditional.jpg", "Traditional mandap with carved pillars and marigold garlands"),
  },
  {
    id: "himalayan",
    title: "Himalayan",
    description: "Open-sided and low, so the mountains stay in every photograph.",
    items: ["Timber frame", "Rhododendron & wildflower tones", "Handwoven textiles", "Lantern lighting"],
    image: img("mandap-himalayan.jpg", "Open timber mandap on a lawn facing Himalayan peaks"),
  },
  {
    id: "royal",
    title: "Royal",
    description: "Scaled to palace architecture — domes, jharokhas and rich fabric.",
    items: ["Domed canopy", "Rose & orchid florals", "Velvet & brocade", "Chandeliers"],
    image: img("mandap-royal.jpg", "Royal mandap with domed canopy in a palace courtyard"),
  },
  {
    id: "minimal",
    title: "Minimal",
    description: "Clean lines and restraint; the setting does the talking.",
    items: ["Slim frame", "Single-variety florals", "Sheer fabric", "Warm white lighting"],
    image: img("mandap-minimal.jpg", "Minimal white mandap with sheer drapes by a lake"),
  },
  {
    id: "floral",
    title: "Floral",
    description: "A canopy grown from flowers — every surface in bloom.",
    items: ["Floral canopy", "Seasonal blooms", "Hanging installations", "Candle clusters"],
    image: img("mandap-floral.jpg", "Floral mandap with hanging blooms and candle clusters"),
  },
  {
    id: "destination",
    title: "Destination-inspired",
    description: "Built from the place itself — Newari woodwork, Mithila motifs, beach driftwood.",
    items: ["Local craft structure", "Regional florals", "Local textiles", "Ambient lighting"],
    image: img("mandap-destination.jpg", "Mandap inspired by Newari woodcarving with local textiles"),
  },
];

/** What every mandap design brief covers. */
export const mandapElements = [
  "Structure",
  "Floral design",
  "Fabric",
  "Lighting",
  "Stage",
  "Seating",
  "Havan arrangement",
];

export const rites = [
  "Pandit / Purohit",
  "Muhurat",
  "Ganesh Puja",
  "Kalash",
  "Mandap Puja",
  "Vivah Sanskar",
  "Kanyadaan",
  "Mangal Phere",
  "Sindoor",
  "Mangalsutra",
  "Havan",
  "Vidaai",
];

export const traditions = [
  "Traditional Hindu",
  "Nepali",
  "North Indian",
  "South Indian",
  "Mithila",
  "Buddhist-influenced",
  "Intercultural",
  "Interfaith",
];

export const atelier: {
  id: string;
  kicker: string;
  heading: string;
  intro: string;
  groups: TitledList[];
  image: WeddingImage;
}[] = [
  {
    id: "feast",
    kicker: "The Feast",
    heading: "A wedding feast as memorable as the ceremony",
    intro:
      "Menus built around your families and your destination — from a Mithila thali to a Rajasthani spread or a continental plated dinner.",
    image: img("atelier-feast.jpg", "Wedding feast with live counters and brass serving ware"),
    groups: [
      {
        id: "cuisine",
        title: "Cuisine",
        items: ["Indian", "Nepali", "Rajasthani", "Punjabi", "South Indian", "Bengali", "Gujarati", "Mithila", "Continental", "Asian", "International"],
      },
      {
        id: "dietary",
        title: "Dietary care",
        items: ["Vegetarian", "Vegan", "Jain", "Halal where available", "Allergy-aware", "Child-friendly"],
      },
      {
        id: "formats",
        title: "Service formats",
        items: ["Buffet", "Plated", "Live counters", "Traditional thali", "Cocktail canapés", "Midnight snacks"],
      },
    ],
  },
  {
    id: "canvas",
    kicker: "Décor & Florals",
    heading: "Turn the destination into your wedding canvas",
    intro:
      "Décor that works with the venue rather than covering it — and lighting that carries the celebration from dusk to late night.",
    image: img("atelier-decor.jpg", "Floral arch entrance and ceiling installation at a reception"),
    groups: [
      {
        id: "decor",
        title: "Décor",
        items: ["Entrance", "Floral arches", "Welcome boards", "Ceiling installations", "Table décor", "Lounge furniture", "Mandap", "Reception stage", "LED backdrop", "Photo booth", "Directional signage"],
      },
      {
        id: "lighting",
        title: "Lighting",
        items: ["Fairy lights", "Architectural lighting", "Ambient lighting", "Stage lighting", "Moving heads", "Spotlights", "Candles", "LED installations"],
      },
    ],
  },
  {
    id: "soundtrack",
    kicker: "Entertainment",
    heading: "Give your celebration its own soundtrack",
    intro:
      "From a dhol at the baraat to a Nepali cultural evening for guests who have never seen one.",
    image: img("atelier-entertainment.jpg", "Live band performing at an outdoor wedding evening"),
    groups: [
      {
        id: "entertainment",
        title: "Artists & hosts",
        items: ["DJ", "Live band", "Folk artists", "Nepali cultural performances", "Rajasthani folk", "Bollywood performances", "Dhol", "Choreographer", "MC / Host", "Celebrity artists where contracted"],
      },
    ],
  },
];

export const photographyServices = [
  "Pre-wedding",
  "Candid",
  "Traditional",
  "Cinematic",
  "Couple portraits",
  "Family portraits",
  "Wedding film",
  "Teaser",
  "Social media reels",
  "Live streaming",
  "Drone photography where legally permitted",
];

export const gallery: (WeddingImage & { caption: string; shape: "tall" | "wide" | "square" })[] = [
  { file: "gallery-01.jpg", alt: "Couple portrait on a lakeside jetty at sunrise", caption: "Pre-wedding · Pokhara", shape: "tall" },
  { file: "gallery-02.jpg", alt: "Wide view of guests during the Mangal Phere", caption: "Ceremony", shape: "wide" },
  { file: "gallery-03.jpg", alt: "Close-up of the bride's mehendi and bangles", caption: "Mehendi details", shape: "square" },
  { file: "gallery-04.jpg", alt: "Family laughing during the haldi ceremony", caption: "Candid · Haldi", shape: "square" },
  { file: "gallery-05.jpg", alt: "Couple silhouetted against Himalayan peaks", caption: "Couple portrait", shape: "tall" },
  { file: "gallery-07.jpg", alt: "Family gathered around the couple during the vidaai", caption: "Vidaai", shape: "tall" },
  { file: "gallery-06.jpg", alt: "Reception stage lit with warm fairy lights", caption: "Reception", shape: "wide" },
];

export const coupleCare = {
  bride: {
    title: "For the Bride",
    items: ["Makeup", "Hair", "Draping", "Styling", "Mehendi", "Bridal room", "Dressing room"],
    image: img("couple-bride.jpg", "Bride being dressed in a red lehenga in a sunlit suite"),
  },
  groom: {
    title: "For the Groom",
    items: ["Styling", "Grooming", "Turban / Safa", "Sherwani assistance", "Groom entry"],
    image: img("couple-groom.jpg", "Groom's safa being tied before the baraat"),
  },
};
