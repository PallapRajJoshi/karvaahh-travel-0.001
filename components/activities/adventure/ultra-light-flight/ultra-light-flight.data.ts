import type { AerialActivityData } from "@/components/activities/adventure/aerial/types";


const IMG = "/images/activities/ultra-light-flight";

export const ultraLightFlight: AerialActivityData = {
  slug: "ultra-light-flight",
  comparisonKey: "ultra-light",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Activities", href: "/activities" },
    { label: "Adventure", href: "/activities/adventure" },
    { label: "Ultra-Light Flight", href: "/activities/adventure/ultra-light-flight" },
  ],

  hero: {
    eyebrow: "ADVENTURE ACTIVITIES · POKHARA",
    title: "Ultra-Light Flight in Pokhara",
    subtitle: "See Pokhara, Phewa Lake and the Himalayan skyline from the sky.",
    body: "Pokhara is Nepal's single established ultra-light flight destination — offering a rare combination of mountain views, aerial photography and peaceful sightseeing above the valley.",
    location: "Pokhara, Nepal",
    badges: ["Pokhara Only", "15–60 Minutes", "From US$90"],
    primaryCta: { label: "Plan Your Flight", href: "#enquire" },
    secondaryCta: { label: "Explore Flight Options", href: "#flights" },
    image: {
      src: `${IMG}/pokhara-ultralight-flight.jpg`,
      alt: "Ultra-light aircraft flying above Pokhara valley with the Annapurna range in the distance",
    },
  },

  intro: {
    heading: "Fly Above Pokhara",
    body: "Ultra-light flights offer a quieter and more controlled aerial experience than high-adrenaline adventure sports. From Pokhara, flights rise above the valley to reveal Phewa Lake, Sarangkot, terraced hillsides and, on longer routes, the dramatic Himalayan ranges.",
    scarcityLabel: "Where it operates",
    scarcityValue: "Pokhara only",
    card: {
      title: "One destination. One unique experience.",
      body: "Pokhara is Nepal's established ultra-light flight hub. That limited availability makes the experience particularly distinctive for travelers looking for something beyond conventional sightseeing.",
    },
    image: {
      src: `${IMG}/pokhara-aerial-view.jpg`,
      alt: "Aerial view of Pokhara city and Phewa Lake seen from an ultra-light flight",
    },
  },

  options: {
    id: "flights",
    heading: "Choose Your Flight",
    subheading: "The main price driver is simple: minutes in the air.",
    options: [
      {
        id: "valley-circuit",
        title: "Pokhara Valley Circuit",
        duration: "15 min",
        minutes: [15, 15],
        sees: "Phewa Lake, Lakeside, Sarangkot ridge, the city grid",
        price: "US$90–110",
        status: "established",
        ctaLabel: "View Flight",
      },
      {
        id: "sarangkot-naudanda",
        title: "Sarangkot & Naudanda",
        duration: "30 min",
        minutes: [30, 30],
        sees: "Above the paragliding launch, terraced hillsides, Phewa end to end",
        price: "US$140–170",
        status: "established",
        ctaLabel: "View Flight",
      },
      {
        id: "annapurna-panorama",
        title: "Annapurna Panorama",
        duration: "60 min",
        minutes: [60, 60],
        sees: "Toward the range — Machhapuchhre, Annapurna South, Dhaulagiri and Fishtail's ridgeline",
        price: "US$220–280",
        status: "established",
        ctaLabel: "View Flight",
      },
      {
        id: "photo-flight",
        title: "Photo Flight",
        duration: "30–60 min",
        minutes: [30, 60],
        sees: "Booked for photographers, with seat and route chosen for shooting",
        price: "US$250–350",
        status: "seasonal",
        ctaLabel: "Ask About Photo Flights",
      },
    ],
    note: "Prices are indicative and may vary by operator, flight duration, season and availability. Confirm the current rate before booking.",
  },

  priceDriver: {
    heading: "What Determines the Price?",
    statement: "Minutes in the air.",
    body: "Ultra-light flight pricing is primarily driven by flight duration. Longer flights cover more of the Pokhara valley and Himalayan panorama, while specialized photography flights may have different pricing.",
    axisMax: 60,
  },

  season: {
    heading: "When Can You Fly?",
    summary: "Roughly September to May",
    body: "Ultra-light flights generally operate during the clearer flying season and are suspended through the monsoon period.",
    months: [
      { name: "September", open: true },
      { name: "October", open: true },
      { name: "November", open: true },
      { name: "December", open: true },
      { name: "January", open: true },
      { name: "February", open: true },
      { name: "March", open: true },
      { name: "April", open: true },
      { name: "May", open: true },
      { name: "June", open: false },
      { name: "July", open: false },
      { name: "August", open: false },
    ],
    openLabel: "FLIGHT SEASON",
    closedLabel: "GENERALLY SUSPENDED",
    note: "Always confirm operating conditions and availability before traveling.",
  },

  sights: {
    heading: "What You'll See From the Air",
    caveat: "Views are subject to route, weather and visibility.",
    sights: [
      {
        name: "Phewa Lake",
        body: "Watch the lake stretch across the Pokhara valley beneath you.",
        image: { src: `${IMG}/phewa-lake-ultralight.jpg`, alt: "Phewa Lake seen from above during an ultra-light flight" },
      },
      {
        name: "Sarangkot",
        body: "Fly above one of Pokhara's most famous mountain-view ridges.",
        image: { src: `${IMG}/sarangkot-ultralight-flight.jpg`, alt: "Sarangkot ridge above Pokhara seen from an ultra-light aircraft" },
      },
      {
        name: "Naudanda",
        body: "See terraced hillsides and rural landscapes beyond the city.",
        image: { src: `${IMG}/naudanda-ultralight-flight.jpg`, alt: "Terraced hillsides around Naudanda seen from an ultra-light flight" },
      },
      {
        name: "Machhapuchhre",
        body: "On suitable routes and conditions, view the distinctive Fishtail peak.",
        image: { src: `${IMG}/machhapuchhre-ultralight-flight.jpg`, alt: "Machhapuchhre (Fishtail) peak seen from an ultra-light flight" },
      },
      {
        name: "Annapurna South",
        body: "Longer panorama flights can open views toward the Annapurna range.",
        image: { src: `${IMG}/annapurna-ultralight-flight.jpg`, alt: "Annapurna range seen from an ultra-light aircraft over Pokhara" },
      },
      {
        name: "Dhaulagiri",
        body: "Extended mountain routes may include views toward Dhaulagiri.",
        image: { src: `${IMG}/dhaulagiri-ultralight-flight.jpg`, alt: "Dhaulagiri on the horizon seen from an ultra-light flight over Pokhara" },
      },
    ],
  },

  audience: {
    heading: "Is Ultra-Light Flight Right for You?",
    items: [
      { title: "Photography", body: "Aerial perspectives with time and flexibility for photographers.", icon: "camera" },
      { title: "Couples", body: "A peaceful way to share Pokhara from above.", icon: "couple" },
      { title: "Families", body: "A sightseeing-focused alternative to more intense aerial activities.", icon: "family" },
      { title: "Mountain Lovers", body: "A different perspective on the Annapurna landscape.", icon: "mountain" },
      { title: "First-Time Flyers", body: "A controlled sightseeing experience without the intensity of some adventure sports.", icon: "first-flight" },
    ],
  },

  facts: {
    heading: "Quick Facts",
    items: [
      { label: "Location", value: "Pokhara, Nepal" },
      { label: "Operating season", value: "Roughly September–May" },
      { label: "Flight time", value: "15–60 minutes" },
      { label: "Starting price", value: "From US$90" },
      { label: "Specialized option", value: "Photography flights" },
      { label: "Main experience", value: "Pokhara Valley + Himalayan Views" },
    ],
  },

  gallery: {
    heading: "Pokhara From the Air",
    images: [
      { src: `${IMG}/pokhara-ultralight-flight.jpg`, alt: "Ultra-light aircraft in flight over the Pokhara valley" },
      { src: `${IMG}/phewa-lake-ultralight.jpg`, alt: "Phewa Lake and Lakeside viewed from an ultra-light flight" },
      { src: `${IMG}/sarangkot-ultralight-flight.jpg`, alt: "Ultra-light flight passing the Sarangkot ridge" },
      { src: `${IMG}/annapurna-ultralight-flight.jpg`, alt: "Annapurna range from an ultra-light aircraft" },
      { src: `${IMG}/machhapuchhre-ultralight-flight.jpg`, alt: "Machhapuchhre peak rising above the Pokhara hills" },
      { src: `${IMG}/pokhara-aerial-view.jpg`, alt: "Aerial view of Pokhara city and surrounding hills" },
    ],
  },

  enquiry: {
    heading: "Ready to See Pokhara From Above?",
    body: "Tell us your preferred flight duration, travel dates and experience preferences. Karvaahh Tours & Travels can help you plan your aerial experience in Pokhara.",
    primaryLabel: "Enquire Now",
    whatsappLabel: "WhatsApp Us",
    whatsappMessage: "Hello Karvaahh, I'd like to plan an ultra-light flight in Pokhara.",
    brandLines: ["Karvaahh Tours & Travels", "Adventure Activities", "karvaahh.in"],
    image: {
      src: `${IMG}/machhapuchhre-ultralight-flight.jpg`,
      alt: "Machhapuchhre peak at sunrise above the Pokhara valley",
    },
  },

  faq: {
    heading: "Ultra-Light Flight FAQs",
    items: [
      {
        question: "Where does ultra-light flight operate in Nepal?",
        answer: "Pokhara is the established destination for ultra-light flights in Nepal.",
      },
      {
        question: "How long does an ultra-light flight last?",
        answer: "Available flights range from approximately 15 to 60 minutes, depending on the selected route.",
      },
      {
        question: "How much does ultra-light flight cost in Pokhara?",
        answer: "Indicative prices range from around US$90 for shorter flights to US$280 or more for longer or specialized experiences. Photography flights may range from US$250–350.",
      },
      {
        question: "When is ultra-light flight available?",
        answer: "Flights generally operate from roughly September to May and are suspended during the monsoon period.",
      },
      {
        question: "What can I see during an ultra-light flight?",
        answer: "Depending on the route and visibility, you may see Phewa Lake, Pokhara, Sarangkot, Naudanda, terraced hillsides and Himalayan peaks including Machhapuchhre, Annapurna South and Dhaulagiri.",
      },
      {
        question: "Is ultra-light flight the same as paragliding?",
        answer: "No. Ultra-light flights use a powered aircraft, while paragliding is an unpowered aerial activity involving a paraglider and pilot.",
      },
      {
        question: "Can photographers book a dedicated flight?",
        answer: "Photography flights can be arranged as specialized experiences, subject to operator availability, weather and season.",
      },
    ],
  },

  seo: {
    title: "Ultra-Light Flight in Pokhara, Nepal | Prices & Flight Options | Karvaahh",
    description:
      "Experience ultra-light flight in Pokhara, Nepal. Explore 15–60 minute flights over Phewa Lake, Sarangkot and Himalayan landscapes. View routes, indicative prices and seasonal information.",
    path: "/activities/adventure/ultra-light-flight",
    ogImage: {
      src: `${IMG}/pokhara-ultralight-flight.jpg`,
      alt: "Ultra-light flight above Pokhara, Nepal",
    },
    schemaName: "Ultra-Light Flight in Pokhara",
    place: { name: "Pokhara", country: "NP" },
    includeFaqSchema: true,
  },
};
