import type { AustraliaPackage } from "@/data/australia/packages";
import Carousel from "../../Carousel";
import AustraliaPackageCard from "./AustraliaPackageCard";

/** Swipeable package row used inside destination and collection sections. */
export default function PackageRail({
  title,
  packages,
  dark = false,
  id,
}: {
  title: string;
  packages: AustraliaPackage[];
  dark?: boolean;
  id: string;
}) {
  if (!packages.length) return null;
  return (
    <div className="us-rail">
      <h3 id={id} className={`us-rail__h${dark ? " us-rail__h--light" : ""}`}>{title}</h3>
      <Carousel label={title} tone={dark ? "dark" : "light"}>
        {packages.map((p) => (
          <AustraliaPackageCard key={p.id} p={p} scope={id} />
        ))}
      </Carousel>
    </div>
  );
}
