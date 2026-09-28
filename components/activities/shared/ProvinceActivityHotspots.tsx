import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ACTIVITY_ROUTES } from "@/data/activities/activityRoutes";
import {
  hotspotsByProvince,
  provinceActivityHotspots,
  provinceOrder,
  type HotspotActivity,
  type ProvinceHotspot,
  type ProvinceName,
} from "@/data/activities/provinceActivityHotspots";
import "./ProvinceActivityHotspots.css";

interface ProvinceActivityHotspotsProps {
  /** Omit to render all seven provinces (atlas view). */
  province?: ProvinceName;
  heading?: string;
  lead?: string;
  id?: string;
}

function ActivityTag({ activity }: { activity: HotspotActivity }) {
  const route = activity.key ? ACTIVITY_ROUTES[activity.key] : undefined;

  if (route?.available) {
    return (
      <Link className="hotspots__activity hotspots__activity--link" href={route.href}>
        {activity.name}
      </Link>
    );
  }

  return <span className="hotspots__activity">{activity.name}</span>;
}

function HotspotItem({ hotspot }: { hotspot: ProvinceHotspot }) {
  return (
    <li className="hotspots__item">
      <h4 className="hotspots__location">{hotspot.location}</h4>
      {hotspot.description ? (
        <p className="hotspots__description">{hotspot.description}</p>
      ) : null}
      <p className="hotspots__activities">
        {hotspot.activities.map((activity, index) => (
          <span key={`${activity.name}-${index}`}>
            {index > 0 ? (
              <span className="hotspots__sep" aria-hidden="true">
                ·
              </span>
            ) : null}
            <ActivityTag activity={activity} />
          </span>
        ))}
      </p>
    </li>
  );
}

export default function ProvinceActivityHotspots({
  province,
  heading = "Explore Adventure Hotspots",
  lead,
  id = "adventure-hotspots",
}: ProvinceActivityHotspotsProps) {
  const provinces: ProvinceName[] = province ? [province] : provinceOrder;
  const single = Boolean(province);

  const resolvedLead =
    lead ??
    (single
      ? undefined
      : "Where each activity actually runs, province by province. Activity names link through to their own page where one exists.");

  return (
    <section className="hotspots" aria-labelledby={id}>
      <SectionHeading title={heading} lead={resolvedLead} id={id} />

      {provinces.map((name) => {
        const hotspots = single
          ? hotspotsByProvince(name)
          : provinceActivityHotspots.filter((h) => h.province === name);

        if (hotspots.length === 0) return null;

        return (
          <div className="hotspots__province" key={name}>
            {single ? null : <h3 className="hotspots__province-name">{name}</h3>}
            <ul className="hotspots__grid">
              {hotspots.map((hotspot) => (
                <HotspotItem
                  hotspot={hotspot}
                  key={`${hotspot.province}-${hotspot.location}`}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
