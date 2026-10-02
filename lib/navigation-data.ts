// lib/navigation-data.ts
// Central data source for the Karvaah navigation system.
// Update links/labels here — no JSX changes required.

export type NavLinkItem = {
  label: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  href?: string; // optional link for the column heading itself
  items: NavLinkItem[];
  /** "gold" is reserved for pilgrimage / spiritual categories — keep it rare. */
  accent?: "emerald" | "gold";
};

export type MegaMenuFeatured = {
  title: string;
  subtitle: string;
  href: string;
  /** Alt text for the eventual real photo — swap the placeholder in MegaMenuFeatured.tsx */
  imageAlt: string;
};

export type MainNavItem = {
  label: string;
  href: string;
  megaMenu?: {
    columns: MegaMenuColumn[];
    /** Layout hint for the grid — keeps columns from stretching awkwardly. */
    density?: "comfortable" | "compact";
    featured?: MegaMenuFeatured;
  };
};

export const siteInfo = {
  brand: "Karvaah",
  tagline: "Explore Nepal. Experience Adventure. Discover Spirituality.",
};

export const contactInfo = {
  india: {
    label: "India",
    city: "Delhi",
    phone: "+91-8178438408",
    phoneHref: "tel:+918178438408",
    email: "karvaahofficial@gmail.com",
  },
  nepal: {
    label: "Nepal",
    city: "Kathmandu",
    phone: "+977-9766861547",
    phoneHref: "tel:+9779766861547",
    email: "info@karvaahh.in",
  },
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/karvaahh", icon: "facebook" as const },
  { label: "LinkedIn", href: "https://linkedin.com/company/karvaahh", icon: "linkedin" as const },
  { label: "Instagram", href: "https://instagram.com/karvaahh", icon: "instagram" as const },
  { label: "WhatsApp", href: "https://wa.me/9779766861547", icon: "whatsapp" as const },
];

export const mainNav: MainNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destinations",
    href: "/destinations",
    megaMenu: {
      density: "comfortable",
      featured: {
        title: "Everest Base Camp Heli Tour",
        subtitle: "The Himalaya, without the two-week trek",
        href: "/activities/helicopter-tours/everest-base-camp",
        imageAlt: "Helicopter over the Everest region",
      },
      columns: [
        {
          title: "Timeless Provinces of Nepal",
          href: "/destinations/provinces",
          items: [
            { label: "Koshi Province", href: "/destinations/koshi-province" },

            { label: "Madhesh Province", href: "/destinations/madhesh-province" },

            { label: "Bagmati Province", href: "/destinations/bagmati-province" },

            { label: "Gandaki Province", href: "/destinations/gandaki-province" },

            { label: "Lumbini Province", href: "/destinations/lumbini-province" },

            { label: "Karnali Province", href: "/destinations/karnali-province" },

            { label: "Sudurpaschim Province", href: "/destinations/sudurpaschim-province" },
          ],
        },
        {
          title: "SPIRITUAL JOURNEYS",
          href: "/destinations/spritual-nepal",
          items: [
              { label: "Kailash Mansarovar Yatra", href: "/spiritual-journeys/kailash-mansarovar" },
            { label: "Pashupatinath & Muktinath Yatra", href: "/spiritual-journeys/pashupatinath" },

            { label: "Chardham Yatra Uttarakhand", href: "/spiritual-journeys/char-dham-yatra-uttarakhand" },

            { label: "Bada Chardham India", href: "/spiritual-journeys/bada-char-dham-yatra" },

            { label: "12 Jyotirlinga Yatra", href: "/spiritual-journeys/12-jyotirlinga-yatra" },

            { label: "Amarnath & Vaishno Devi Yatra", href: "/spiritual-journeys/amarnath-vaishno-devi-yatra" },
             { label: "Haridwar & Rishikesh", href: "/spiritual-journeys/haridwar-rishikesh-yatra" },
          ],
        },
        {
          title: "ADVENTURE",
          href: "/destinations/adventure-nepal",
          items: [
            
            { label: "Manang Circuit", href: "/packages/manang-circuit-trek" },
                { label: "Mustang Circuit", href: "/adventure/mustang-circuit-trek" },
            { label: "Everest Base Camp", href: "/adventure/everest-base-camp-trek" },

            { label: "Langtang Valley", href: "/adventure/langtang-valley-trek" },

            { label: "Three Pass Trek", href: "/adventure/everest-three-passes-trek" },

            { label: "Tsum Valley", href: "/adventure/tsum-valley-trek" },

            { label: "Api-Nampa Base Camp", href: "/adventure/api-nampa-base-camp-trek" },

        
          ],
        },
        {
          title: "OFFBEAT & UNEXPLORED",
          href: "/destinations/offbeat-nepal",
          accent: "gold",
          items: [
            { label: "Rara Lake", href: "/offbeat-unexplored/rara-lake" },

            { label: "Dhorpatan", href: "/offbeat-unexplored/dhorpatan-hunting-reserve" },

            // { label: "Tsum Valley", href: "/offbeat-unexplored/tsum-valley" },

            // { label: "Nar Phu Valley", href: "/offbeat-unexplored/nar-phu-valley" },

            { label: "Dolpo Shey Phoksundo", href: "/offbeat-unexplored/shey-phoksundo" },

            { label: "Tsho Rolpa", href: "/offbeat-unexplored/tsho-rolpa-lake" },

            { label: "Khaptad National Park", href: "/offbeat-unexplored/khaptad-national-park" },

            { label: "Panch Pokhari Trek", href: "/offbeat-unexplored/panch-pokhari" },

            { label: "Saipal Base Camp", href: "/offbeat-unexplored/saipal-base-camp" },

            // { label: "Sailung", href: "/offbeat-unexplored/sailung" },
          ],
        },
      ],
    },
  },
  {
    label: "Packages",
    href: "/packages",
    megaMenu: {
      density: "comfortable",
      featured: {
        title: "Kailash Mansarovar Yatra",
        subtitle: "The pilgrimage of a lifetime, fully arranged",
        href: "/packages/international-pilgrimage/kailash-mansarovar-yatra",
        imageAlt: "Mount Kailash",
      },
      columns: [
        {
          title: "Nepal Packages",
          href: "/packages/nepal",
          items: [
            { label: "Nepal Spiritual & Adventure Tours", href: "/packages/nepal/spiritual-adventure-tours" },
          ],
        },
        {
          title: "India Pilgrimage",
          href: "/packages/india-pilgrimage",
          accent: "gold",
          items: [
            { label: "Adi Kailash & Om Parvat – Uttarakhand", href: "/packages/india-pilgrimage/adi-kailash-om-parvat" },
          ],
        },
        {
          title: "International Pilgrimage",
          href: "/packages/international-pilgrimage",
          accent: "gold",
          items: [
            { label: "Kailash Mansarovar Yatra – Tibet", href: "/packages/kailash-mansarovar-yatra" },
          ],
        },
      ],
    },
  },
  {
    label: "Experiences",
    href: "/experiences",
    megaMenu: {
      density: "compact",
      columns: [
        {
          title: "Adventure Activities",
          href: "/activities/adventure",
          items: [
            { label: "Camping", href: "/activities/adventure/camping" },
            { label: "Paragliding (Pokhara)", href: "/activities/adventure/paragliding" },
            { label: "Ultra-Light Flight", href: "/activities/adventure/ultra-light-flight" },
            { label: "Hot Air Balloon", href: "/activities/adventure/hot-air-balloon" },
            { label: "Bungee Jumping", href: "/activities/adventure/bungee-jumping" },
            { label: "Skydiving", href: "/activities/adventure/skydiving" },
            // { label: "Zip Flying / Zip Flyer", href: "/activities/adventure/zip-flying" },
            { label: "Rafting", href: "/activities/adventure/rafting" },
            { label: "Boating", href: "/activities/adventure/boating" },
          ],
        },
        {
          title: "Helicopter Tours",
          href: "/activities/helicopter-tours",
          items: [
            { label: "Kailash Mansarovar Heli Tour", href: "/activities/helicopter-tours/kailash-mansarovar" },
            { label: "Everest Base Camp Heli Tour", href: "/activities/helicopter-tours/everest-base-camp" },
            { label: "Annapurna Heli Tour", href: "/activities/helicopter-tours/annapurna" },
            { label: "Mardi Himal Heli Tour", href: "/activities/helicopter-tours/mardi-himal" },
            { label: "Gosaikunda Heli Tour", href: "/activities/helicopter-tours/gosaikunda" },
            { label: "Muktinath Temple Heli Tour", href: "/activities/helicopter-tours/muktinath-temple" },
            { label: "Upper Mustang Heli Tour", href: "/activities/helicopter-tours/upper-mustang" },
             { label: "Char Dham Heli Tour", href: "/activities/helicopter-tours/upper-mustang" },
          ],
        },
        // {
        //   title: "Wildlife & Nature",
        //   href: "/activities/wildlife-nature",
        //   items: [
        //     { label: "Chitwan Safari Programs", href: "/activities/wildlife-nature/chitwan-safari" },
        //     { label: "Jeep Safari Discovery Tours", href: "/activities/wildlife-nature/jeep-safari" },
        //     { label: "Canoe Ride & Bird Watching", href: "/activities/wildlife-nature/canoe-bird-watching" },
        //     { label: "Cultural Experiences", href: "/activities/wildlife-nature/cultural-experiences" },
        //     { label: "Nature Photography Tours", href: "/activities/wildlife-nature/photography-tours" },
        //     { label: "Elephant Safari", href: "/activities/wildlife-nature/elephant-safari" },
        //   ],
        // },
        // {
        //   title: "Yoga & Wellness",
        //   href: "/activities/yoga-wellness",
        //   accent: "gold",
        //   items: [
        //     { label: "Meditation Retreats", href: "/activities/yoga-wellness/meditation-retreats" },
        //     { label: "Sound Meditation Sessions", href: "/activities/yoga-wellness/sound-meditation" },
        //     { label: "Spiritual Retreat Programs", href: "/activities/yoga-wellness/spiritual-retreats" },
        //     { label: "Ayurveda Therapy", href: "/activities/yoga-wellness/ayurveda-therapy" },
        //     { label: "Panchakarma Treatment", href: "/activities/yoga-wellness/panchakarma" },
        //     { label: "Monastery Stay Experiences", href: "/activities/yoga-wellness/monastery-stay" },
        //   ],
        // },
        {
          title: "Domestic Flights",
          href: "/activities/domestic-flights",
          items: [
            { label: "Mountain Scenic Flights", href: "/activities/domestic-flights/mountain-scenic" },
            { label: "Kathmandu ↔ Pokhara", href: "/activities/domestic-flights/kathmandu-pokhara" },
            { label: "Pokhara ↔ Jomsom", href: "/activities/domestic-flights/pokhara-jomsom" },
            { label: "Kathmandu ↔ Bharatpur", href: "/activities/domestic-flights/kathmandu-bharatpur" },
            { label: "Kathmandu ↔ Nepalgunj", href: "/activities/domestic-flights/kathmandu-nepalgunj" },
            { label: "Kathmandu ↔ Lukla", href: "/activities/domestic-flights/kathmandu-lukla" },
            { label: "Kathmandu ↔ Janakpur", href: "/activities/domestic-flights/kathmandu-janakpur" },
            { label: "Kathmandu ↔ Bhairahawa", href: "/activities/domestic-flights/kathmandu-bhairahawa" },
          ],
        },
        {
          title: "Other Experiences",
          href: "/activities/educational-corporate",
          items: [
            { label: "Educational Tours", href: "/activities/educational-corporate/educational-tours" },
            { label: "Corporate Tours & Retreats", href: "/activities/educational-corporate/corporate-tours-retreats" },
            { label: "Cruise Experiences", href: "/activities/educational-corporate/cultural-exchange" },
            { label: "Destination Weddings", href: "/activities/educational-corporate/corporate-meetings" },
            { label: "Yoga & Wellness", href: "/activities/wellness/yoga-wellness" },
            { label: "Wildlife & Nature", href: "/activities/wildlife-nature" },
            { label: "Cultural & Festival Experiences", href: "/activities/culture-festival-experiences" },
            { label: "Road & Trail Adventure Experiences", href: "/activities/road-trail-adventure" },
          ],
        },
      ],
    },
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const ctaLink: NavLinkItem = {
  label: "Plan Your Journey",
  href: "/contact",
};
