import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CookieConsentRoot } from "@/components/cookie/CookieConsentRoot";
import { SEO_DEFAULTS, siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: SEO_DEFAULTS.title,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: SEO_DEFAULTS.description,
  applicationName: siteConfig.siteTitle,
  keywords: [...SEO_DEFAULTS.keywords],
  authors: [{ name: SEO_DEFAULTS.organizationName, url: siteConfig.url }],
  creator: SEO_DEFAULTS.organizationName,
  publisher: SEO_DEFAULTS.organizationName,
  category: "travel",
  openGraph: {
    type: "website",
    siteName: siteConfig.siteTitle,
    locale: "en_IN",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2942",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} grain`}>
        {children}
        <CookieConsentRoot />
      </body>
    </html>
  );
}
