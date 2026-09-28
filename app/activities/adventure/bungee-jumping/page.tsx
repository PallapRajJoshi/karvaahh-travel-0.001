import type { Metadata } from "next";
import BungeeJumpingPage from "@/components/activities/adventure/bungee-jumping/BungeeJumpingPage";
import {
  PAGE_PATH,
  breadcrumbs,
  bungeeSites,
  faqs,
  hero,
} from "@/components/activities/adventure/bungee-jumping/data/bungeeJumpingData";

const SITE_URL = "https://karvaahh.in";
const TITLE = "Bungee Jumping in Nepal | Kushma, Pokhara & Last Resort | Karvaahh";
const DESCRIPTION =
  "Explore bungee jumping in Nepal, led by Kushma's ~228 m gorge jump. Compare Kushma, Pokhara and The Last Resort, including canyon swing, sky cycling and adventure combos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "bungee jumping Nepal",
    "Kushma bungee jumping",
    "Kushma bungee",
    "bungee jumping Pokhara",
    "Nepal bungee jump",
    "The Last Resort bungee",
    "Kushma canyon swing",
    "Kushma sky cycling",
    "adventure activities Nepal",
    "things to do in Pokhara",
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Karvaahh Tours & Travels",
    images: [{ url: `${SITE_URL}${hero.image.src}`, alt: hero.image.alt }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}${hero.image.src}`] },
};

const pageUrl = `${SITE_URL}${PAGE_PATH}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Karvaahh Tours & Travels", url: SITE_URL },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${hero.image.src}` },
      mainEntity: { "@id": `${pageUrl}#kushma` },
    },
    ...bungeeSites.map((s) => ({
      "@type": "TouristAttraction",
      "@id": `${pageUrl}#${s.id}`,
      name: s.subtitle ? `${s.name} — ${s.subtitle}` : `${s.name} Bungee`,
      description: s.description,
      touristType: "Adventure travelers",
      image: `${SITE_URL}${s.image.src}`,
      address: {
        "@type": "PostalAddress",
        addressRegion: `${s.region.split(" / ")[0]} Province`,
        addressLocality: s.region.split(" / ")[1],
        addressCountry: "NP",
      },
    })),
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.href === "/" ? "" : b.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BungeeJumpingPage />
    </>
  );
}
