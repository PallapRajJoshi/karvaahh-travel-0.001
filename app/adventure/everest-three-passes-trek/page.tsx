import type { Metadata } from "next";
import EverestThreePassesPage from "@/components/adventure/everest-three-passes-trek/EverestThreePassesPage";
import { buildJsonLd } from "@/data/adventure/everest-three-passes-trek/seo";
import { CANONICAL_URL, PAGE_PATH } from "@/data/adventure/everest-three-passes-trek/config";
import { hero } from "@/data/adventure/everest-three-passes-trek/content";
import { imageSrc } from "@/data/adventure/everest-three-passes-trek/format";

const title = "Everest Three Passes Trek, Nepal | Karvaahh Himalayan Adventures";
const description =
  "Explore the Everest Three Passes Trek in Nepal with Karvaahh. Cross Kongma La, Cho La, and Renjo La, discover Everest Base Camp and Gokyo Lakes, and experience the spectacular Khumbu Himalayas.";

// Social previews only reference the hero once the real photo exists.
const ogImages = hero.image.ready
  ? [{ url: imageSrc(hero.image), width: 1600, height: 900, alt: hero.image.alt }]
  : undefined;

export const metadata: Metadata = {
  // `absolute` stops a layout-level title template from appending the brand twice.
  title: { absolute: title },
  description,
  alternates: { canonical: CANONICAL_URL },
  keywords: [
    "Everest Three Passes Trek",
    "Kongma La",
    "Cho La",
    "Renjo La",
    "Everest Base Camp",
    "Gokyo Lakes",
    "Khumbu trek",
    "Nepal trekking",
  ],
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Karvaahh",
    title,
    description,
    locale: "en_IN",
    images: ogImages,
  },
  twitter: {
    card: ogImages ? "summary_large_image" : "summary",
    title,
    description,
    images: ogImages?.map((i) => i.url),
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const jsonLd = buildJsonLd();
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={`${PAGE_PATH}-ld-${i}`}
          type="application/ld+json"
          // JSON.stringify output with "<" escaped — safe for inline script.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <EverestThreePassesPage />
    </>
  );
}
