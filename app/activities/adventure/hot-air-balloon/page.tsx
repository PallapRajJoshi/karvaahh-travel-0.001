import type { Metadata } from "next";
import HotAirBalloonPage from "@/components/activities/adventure/hot-air-balloon/HotAirBalloonPage";

const PATH = "/activities/adventure/hot-air-balloon";
const TITLE = "Hot Air Balloon in Nepal | Pokhara, Kathmandu & Chitwan | Karvaahh";
const DESCRIPTION =
  "Explore hot air balloon experiences in Nepal, including Pokhara, Kathmandu, Chitwan and Lumbini. Check seasonal availability, indicative prices and enquiry options.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "hot air balloon Nepal",
    "hot air balloon Pokhara",
    "Pokhara balloon ride",
    "hot air balloon Kathmandu",
    "hot air balloon Chitwan",
    "balloon ride Nepal",
    "Nepal adventure activities",
    "things to do in Pokhara",
    "aerial activities Nepal",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: PATH,
    siteName: "Karvaahh Tours & Travels",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/activities/hot-air-balloon/hot-air-balloon-nepal.jpg",
        width: 1600,
        height: 900,
        alt: "Hot air balloon above a Nepal valley at sunrise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/activities/hot-air-balloon/hot-air-balloon-nepal.jpg"],
  },
};

export default function Page() {
  return <HotAirBalloonPage />;
}
