interface DevPlaceholderProps {
  what: string;
  file: string;
}

/**
 * Shown only in `next dev` while a data file is empty, so the layout slot is visible
 * to the team. Production builds render null instead (see AboutTeam / AboutTestimonials).
 */
export function DevPlaceholder({ what, file }: DevPlaceholderProps) {
  return (
    <div className="ab-devslot" role="note">
      <strong>Development only:</strong> this section is hidden in production until real {what} are added in{" "}
      <code>{file}</code>. Nothing is invented.
    </div>
  );
}
