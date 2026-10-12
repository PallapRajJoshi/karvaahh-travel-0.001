import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { buildAboutMetadata } from "@/lib/about/metadata";

export const metadata: Metadata = buildAboutMetadata();

export default function Page() {
  return <AboutPage />;
}
