"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Modal dialog / mobile bottom sheet built on the native <dialog>:
 * focus trap, Escape to close, inert background and focus return come for free.
 */
export default function Sheet({
  open,
  onClose,
  label,
  children,
  variant = "modal",
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  variant?: "modal" | "filters";
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`pkg-sheet pkg-sheet--${variant}`}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="pkg-sheet__panel">
        <button type="button" className="pkg-sheet__close" onClick={onClose} aria-label={`Close ${label}`}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {open ? children : null}
      </div>
    </dialog>
  );
}
