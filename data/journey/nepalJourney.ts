export interface JourneyStop {
  /** Stable id, also used as the anchor for the progress rail. */
  id: string;
  /** Place name, shown as the panel headline. */
  name: string;
  /** District / province line shown under the headline. */
  region: string;
  /** Short scene-setting paragraph. Keep to ~180 characters. */
  blurb: string;
  /** Two or three concrete details a traveller actually wants. */
  notes: string[];
  /** Nights typically spent here on the classic route. */
  nights: number;
  /** Metres above sea level, used in the panel meta line. */
  elevation: number;
  lat: number;
  lng: number;
  /** Fractional Leaflet zoom the camera settles on for this stop. */
  zoom: number;
  /**
   * Optional. If the file is missing or 404s the panel falls back to a plain
   * tinted frame rather than breaking, so the section can ship before the
   * photography does.
   */
  image?: {
    src: string;
    alt: string;
  };
}

export const NEPAL_JOURNEY: JourneyStop[] = [
  {
    id: 'kathmandu',
    name: 'Kathmandu',
    region: 'Kathmandu Valley, Bagmati',
    blurb:
      'The journey opens in the old city, where courtyards, carved windows and morning bells sit a few streets away from the traffic.',
    notes: [
      'Patan Durbar Square is quietest before 8am',
      'Boudhanath at dusk, when the kora fills up',
    ],
    nights: 2,
    elevation: 1400,
    lat: 27.7089,
    lng: 85.3206,
    zoom: 11.4,
    image: {
      src: '/images/journey/kathmandu.jpg',
      alt: 'Carved wooden windows above a courtyard in old Kathmandu',
    },
  },
  {
    id: 'nagarkot',
    name: 'Nagarkot',
    region: 'Bhaktapur, Bagmati',
    blurb:
      'An hour east of the valley floor, the ridge line clears the haze and the first full Himalayan horizon appears at sunrise.',
    notes: [
      'Clear-sky odds are highest October to early December',
      'Walk the ridge down to Changunarayan in the morning',
    ],
    nights: 1,
    elevation: 2175,
    lat: 27.7154,
    lng: 85.5208,
    zoom: 11.8,
    image: {
      src: '/images/journey/nagarkot.jpg',
      alt: 'Sunrise over layered Himalayan ridges seen from Nagarkot',
    },
  },
  {
    id: 'bandipur',
    name: 'Bandipur',
    region: 'Tanahun, Gandaki',
    blurb:
      'A Newar trading town on a saddle above the Marsyangdi, kept whole because the highway passed it by. No cars on the main street.',
    notes: [
      'Siddha Gufa, one of the largest caves in Nepal, is a two-hour round trip',
      'Best broken as a lunch-to-lunch stop on the drive west',
    ],
    nights: 1,
    elevation: 1030,
    lat: 27.9376,
    lng: 84.4128,
    zoom: 12.2,
    image: {
      src: '/images/journey/bandipur.jpg',
      alt: 'Stone-paved car-free main street in Bandipur at dusk',
    },
  },
  {
    id: 'pokhara',
    name: 'Pokhara',
    region: 'Kaski, Gandaki',
    blurb:
      'Phewa Tal holds the reflection of Machhapuchhre on a still morning. This is where the walking starts, or where the flying does.',
    notes: [
      'Paragliding launches from Sarangkot through the morning thermals',
      'Row out to Tal Barahi before the wind picks up',
    ],
    nights: 3,
    elevation: 822,
    lat: 28.2096,
    lng: 83.9856,
    zoom: 11.6,
    image: {
      src: '/images/journey/pokhara.jpg',
      alt: 'Machhapuchhre reflected in the still water of Phewa Lake',
    },
  },
  {
    id: 'ghandruk',
    name: 'Ghandruk',
    region: 'Annapurna Conservation Area, Gandaki',
    blurb:
      'A stone-built Gurung village at the mouth of the Modi Khola, with Annapurna South filling the whole northern sky.',
    notes: [
      'Reachable in a day from Nayapul, or two at an easy pace',
      'ACAP and TIMS permits are checked on the trail',
    ],
    nights: 2,
    elevation: 1940,
    lat: 28.3762,
    lng: 83.8106,
    zoom: 12.4,
    image: {
      src: '/images/journey/ghandruk.jpg',
      alt: 'Slate-roofed stone houses in Ghandruk below Annapurna South',
    },
  },
  {
    id: 'chitwan',
    name: 'Chitwan',
    region: 'Chitwan National Park, Bagmati',
    blurb:
      'Down into the Terai. Sal forest, elephant grass and the Rapti river, with greater one-horned rhino grazing the floodplain at first light.',
    notes: [
      'Canoe and walk beats a jeep for birds and gharial',
      'Tharu villages on the park edge run their own guided walks',
    ],
    nights: 2,
    elevation: 415,
    lat: 27.5291,
    lng: 84.354,
    zoom: 11.2,
    image: {
      src: '/images/journey/chitwan.jpg',
      alt: 'A greater one-horned rhino in tall grassland at Chitwan',
    },
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    region: 'Rupandehi, Lumbini',
    blurb:
      'The journey closes at the birthplace of the Buddha, where a walled garden, the Ashoka pillar and a long water axis hold the noise out.',
    notes: [
      'Cycle the monastic zone rather than driving it',
      'Maya Devi Temple opens early and is calmest then',
    ],
    nights: 1,
    elevation: 150,
    lat: 27.4692,
    lng: 83.2757,
    zoom: 12.0,
    image: {
      src: '/images/journey/lumbini.jpg',
      alt: 'The Maya Devi Temple and sacred pond at Lumbini',
    },
  },
];
