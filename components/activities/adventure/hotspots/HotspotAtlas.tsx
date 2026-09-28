import ActivityBreadcrumbs from "@/components/activities/shared/ActivityBreadcrumbs";
import ProvinceActivityHotspots from "@/components/activities/shared/ProvinceActivityHotspots";
import "./hotspot-atlas.css";

export default function HotspotAtlas() {
  return (
    <div className="hotspot-atlas">
      <div className="hotspot-atlas__inner">
        <ActivityBreadcrumbs
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Activities", href: "/activities" },
            { name: "Adventure", href: "/activities/adventure" },
            { name: "Hotspot Atlas", href: "/activities/adventure/hotspots" },
          ]}
        />
        <h1 className="hotspot-atlas__title">Adventure Hotspot Atlas</h1>
        <p className="hotspot-atlas__intro">
          Every adventure activity Karvaahh plans in Nepal, mapped to the places
          it actually happens — seven provinces, from Bhedetar in the east to the
          Mahakali on the far-western border.
        </p>
        <ProvinceActivityHotspots
          heading="Explore Adventure Hotspots"
          id="atlas-hotspots"
        />
        <footer className="hotspot-atlas__footer">
          <p>Karvaahh Tours &amp; Travels · Adventure Activities</p>
          <p>Hotspot Atlas · karvaahh.in</p>
        </footer>
      </div>
    </div>
  );
}
