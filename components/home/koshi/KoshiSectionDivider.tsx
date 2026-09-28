type KoshiSectionDividerProps = {
  number?: string;
  label?: string;
  dark?: boolean;
};

export default function KoshiSectionDivider({
  number = "03",
  label = "KOSHI CULTURE",
  dark = false,
}: KoshiSectionDividerProps) {
  return (
    <div
      className={`koshi-divider ${
        dark ? "koshi-divider--dark" : ""
      }`}
      aria-hidden="true"
    >
      <span className="koshi-divider__line" />

      <span className="koshi-divider__number">
        {/* {number} */}
      </span>

      <span className="koshi-divider__diamond" />

      <span className="koshi-divider__label">
        {label}
      </span>

      <span className="koshi-divider__line" />
    </div>
  );
}