"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { PageImage } from "../types";

type Item = { image: PageImage & { src: string }; caption: string };

/**
 * Masonry gallery + native <dialog> lightbox: focus is trapped by the
 * browser, Esc closes, arrow keys move between photos.
 */
export default function GalleryLightbox({ items }: { items: Item[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Return focus to the photo that opened the lightbox.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIndex((i) => {
        if (i !== null) triggerRefs.current[i]?.focus();
        return null;
      });
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = index === null ? null : items[index];

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((it, i) => (
          <motion.li
            key={it.caption}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="break-inside-avoid"
          >
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => open(i)}
              aria-label={`View larger: ${it.caption}`}
              className="group relative block w-full overflow-hidden rounded-[22px] bg-[#0B2942] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4A300]"
            >
              <Image
                src={it.image.src}
                alt={it.image.alt}
                width={it.image.width ?? 1600}
                height={it.image.height ?? 1067}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={it.image.objectPosition ? { objectPosition: it.image.objectPosition } : undefined}
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/75 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                <span className="text-[14.5px] font-medium leading-snug">{it.caption}</span>
                <Expand className="h-4 w-4 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label="Photo viewer"
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-[#071421]/92 backdrop:backdrop-blur-sm"
      >
        {current && index !== null && (
          <div className="pointer-events-none flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.caption}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative h-[70vh] w-full max-w-[1200px]"
              >
                <Image src={current.image.src} alt={current.image.alt} fill sizes="100vw" className="object-contain" />
              </motion.figure>
            </AnimatePresence>
            <p className="pointer-events-auto text-center text-[14.5px] text-white/85">
              {current.caption} <span className="text-white/50">· {index + 1} / {items.length}</span>
            </p>
          </div>
        )}
        <button type="button" onClick={close} aria-label="Close photo viewer" className="fixed right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8">
          <X className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="fixed left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next photo" className="fixed right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8">
          <ChevronRight className="h-6 w-6" />
        </button>
      </dialog>
    </>
  );
}
