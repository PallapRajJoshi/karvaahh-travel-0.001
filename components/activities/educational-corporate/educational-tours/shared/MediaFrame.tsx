import Image from "next/image";
import { resolveMedia, type MediaKey } from "../data/media";

type MediaFrameProps = {
  mediaKey: MediaKey;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
  /** Override the registry alt text */
  alt?: string;
};

function Ridges() {
  return (
    <>
      <svg className="et-media__ridge et-media__ridge--back" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M0 200V110l50-40 40 28 70-70 60 60 45-30 70 60 65-35v117z" />
      </svg>
      <svg className="et-media__ridge" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M0 200v-60l60-30 50 30 80-50 70 50 60-30 80 40v50z" />
      </svg>
    </>
  );
}

/** Renders a real photo when its key is in READY, otherwise a labeled editorial placeholder. */
export function MediaFrame({ mediaKey, sizes = "(min-width: 900px) 40vw, 100vw", priority = false, showCaption = true, alt }: MediaFrameProps) {
  const media = resolveMedia(mediaKey);
  const label = alt ?? media.alt;

  if (media.src) {
    return (
      <div className="et-media" data-media-key={mediaKey}>
        <Image src={media.src} alt={label} fill sizes={sizes} priority={priority} className="et-media__img" />
        {showCaption ? <span className="et-media__caption">{media.caption}</span> : null}
      </div>
    );
  }

  return (
    <div className={`et-media et-media--tone-${media.tone}`} role="img" aria-label={label} data-media-key={mediaKey}>
      <Ridges />
      {showCaption ? <span className="et-media__caption">{media.caption}</span> : null}
    </div>
  );
}
