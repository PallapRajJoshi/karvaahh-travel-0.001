import type { Metadata } from "next";
import HelicopterCollection from "@/components/activities/helicopter-tours/HelicopterCollection";
import { SITE_URL } from "@/components/activities/experience/site";

const description =
  "Helicopter tours in Nepal and the Himalaya with Karvaahh: Upper Mustang, Muktinath, Everest, Annapurna, Langtang, Gosaikunda, Manaslu, Rara, Kailash and scenic mountain flights.";

export const metadata: Metadata = {
  title: { absolute: "Helicopter Tours in Nepal & the Himalaya | Karvaahh" },
  description,
  alternates: { canonical: `${SITE_URL}/activities/helicopter-tours` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/activities/helicopter-tours`,
    siteName: "Karvaahh",
    title: "Helicopter Tours in Nepal & the Himalaya",
    description,
    images: [{ url: `${SITE_URL}/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg`, width: 2048, height: 1365 }],
  },
};

export default function Page() {
  return <HelicopterCollection />;
}
