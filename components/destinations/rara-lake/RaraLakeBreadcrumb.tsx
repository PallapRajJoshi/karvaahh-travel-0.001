/**
 * Thin wrapper around the shared Breadcrumb component, feeding it the
 * Rara Lake trail. If the project's real breadcrumb component has a
 * different prop shape, adapt this wrapper rather than the data file.
 */
import Breadcrumb from "@/components/shared/Breadcrumb";
import { breadcrumbTrail } from "@/data/destinations/rara-lake/content";

export default function RaraLakeBreadcrumb() {
  return <Breadcrumb trail={breadcrumbTrail} />;
}
