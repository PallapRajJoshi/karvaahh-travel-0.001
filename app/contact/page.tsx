import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

const TITLE = "Contact Karvaahh Tours & Travels | Plan Your Journey";
const DESCRIPTION =
  "Contact Karvaahh Tours & Travels for customized Nepal, India and international tours, pilgrimage journeys, adventure trips, family holidays and travel planning.";
const CANONICAL = "https://karvaahh.in/contact";

export const metadata: Metadata = {
  // `absolute` so a root title template can't append the brand a second time.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // Absolute canonical, independent of metadataBase (site audit flagged canonical issues).
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: "Karvaahh – Live to Travel",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ContactPage />;
}
