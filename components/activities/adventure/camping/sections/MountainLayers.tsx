/** Three layered ridge silhouettes that move at different scroll speeds. */
export default function MountainLayers({ className = "" }: { className?: string }) {
  return (
    <div className={`cmp-ridges ${className}`} aria-hidden="true">
      <svg className="cmp-ridges__layer cmp-ridges__layer--back" data-parallax="0.12" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 230 L120 150 L200 190 L310 90 L400 170 L520 60 L610 150 L700 110 L820 40 L930 150 L1040 100 L1150 170 L1260 80 L1360 150 L1440 120 V320 H0Z" />
        <path className="cmp-ridges__snow" d="M520 60 L545 90 L530 88 L515 100 L500 82Z M820 40 L850 78 L832 74 L815 92 L796 70Z M1260 80 L1285 108 L1270 106 L1255 118 L1240 100Z" />
      </svg>
      <svg className="cmp-ridges__layer cmp-ridges__layer--mid" data-parallax="0.07" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 260 L160 190 L260 230 L380 160 L500 230 L640 170 L780 240 L900 180 L1040 250 L1180 190 L1320 240 L1440 200 V320 H0Z" />
      </svg>
      <svg className="cmp-ridges__layer cmp-ridges__layer--front" data-parallax="0.03" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 290 L180 250 L340 280 L520 240 L700 285 L880 255 L1060 290 L1240 250 L1440 280 V320 H0Z" />
        <path className="cmp-ridges__tent" d="M1010 272 L1036 238 L1062 272Z" />
      </svg>
    </div>
  );
}
