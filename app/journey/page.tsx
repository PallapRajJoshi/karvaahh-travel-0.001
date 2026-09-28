import type { Metadata } from 'next';

import NepalJourneyMap from '@/components/journey/NepalJourneyMap';
import { NEPAL_JOURNEY } from '@/data/journey/nepalJourney';
import { JSX } from 'react/jsx-runtime';

const PAGE_PATH = '/journey';
const SITE_URL = 'https://karvaahh.in';

export const metadata: Metadata = {
  title: 'The Nepal journey, stop by stop | Karvaahh',
  description:
    'Follow the classic Nepal route on an interactive map — Kathmandu, Nagarkot, Bandipur, Pokhara, Ghandruk, Chitwan and Lumbini, with what to do at each stop.',
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'The Nepal journey, stop by stop',
    description:
      'An interactive map of the classic Nepal route, from the Kathmandu Valley to the Terai plains.',
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'article',
  },
};

export default function JourneyPage(): JSX.Element {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'The Nepal journey', item: `${SITE_URL}${PAGE_PATH}` },
    ],
  };

  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'The classic Nepal journey',
    description:
      'A seven-stop route across Nepal, from the Kathmandu Valley through Gandaki to the Terai plains.',
    url: `${SITE_URL}${PAGE_PATH}`,
    touristType: 'Cultural and adventure travellers',
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: NEPAL_JOURNEY.length,
      itemListElement: NEPAL_JOURNEY.map((stop, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristAttraction',
          name: stop.name,
          description: stop.blurb,
          address: {
            '@type': 'PostalAddress',
            addressRegion: stop.region,
            addressCountry: 'NP',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: stop.lat,
            longitude: stop.lng,
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <NepalJourneyMap />
    </>
  );
}
