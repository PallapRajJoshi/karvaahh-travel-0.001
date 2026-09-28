import type { Metadata } from "next";
import ApiNampaPage from "@/components/activities/adventure/api-nampa-base-camp/ApiNampaPage";
import { API_NAMPA_METADATA } from "@/components/activities/adventure/api-nampa-base-camp/data/seo";

export const metadata: Metadata = API_NAMPA_METADATA;

export default function Page() {
  return <ApiNampaPage />;
}
