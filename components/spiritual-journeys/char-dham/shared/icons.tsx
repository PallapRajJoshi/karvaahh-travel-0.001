/** Inline SVG icons (project convention: no icon library). All decorative. */
type P = { className?: string };
const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const IconCheck = ({ className }: P) => (<svg {...base} className={className}><path d="M5 12.5l4.2 4L19 7" /></svg>);
export const IconMinus = ({ className }: P) => (<svg {...base} className={className}><path d="M6 12h12" /></svg>);
export const IconArrowDown = ({ className }: P) => (<svg {...base} className={className}><path d="M12 5v14M6 13l6 6 6-6" /></svg>);
export const IconInfo = ({ className }: P) => (<svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>);
export const IconAlert = ({ className }: P) => (<svg {...base} className={className}><path d="M12 4l9 16H3z" /><path d="M12 10v4M12 17h.01" /></svg>);
export const IconPlus = ({ className }: P) => (<svg {...base} className={className}><path d="M12 5v14M5 12h14" /></svg>);
export const IconMountain = ({ className }: P) => (<svg {...base} className={className}><path d="M3 19l6-10 4 6 2-3 6 7z" /><path d="M9 9l1.6 2.6" /></svg>);
export const IconDrop = ({ className }: P) => (<svg {...base} className={className}><path d="M12 3s6 6.4 6 11a6 6 0 01-12 0c0-4.6 6-11 6-11z" /></svg>);
