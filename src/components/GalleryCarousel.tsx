// @author Cursor - candle image carousel using public/candleImg assets
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AUTO_ADVANCE_MS = 4000;

/** Light gray blur placeholder shown while image loads. */
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQD/2Q==";

/** Filenames under public/candleImg — add new photos here when uploading. */
const CANDLE_IMAGE_FILES = [
  "IMG-20260310-WA0067.jpg",
  "IMG-20260317-WA0035.jpg",
  "IMG-20260317-WA0036.jpg",
  "IMG-20260317-WA0037.jpg",
  "IMG-20260317-WA0038.jpg",
  "IMG-20260317-WA0039.jpg",
  "IMG-20260317-WA0040.jpg",
  "IMG-20260317-WA0041.jpg",
  "IMG-20260317-WA0042.jpg",
  "IMG-20260317-WA0044.jpg",
  "IMG-20260317-WA0045.jpg",
  "IMG-20260317-WA0046.jpeg",
  "IMG-20260317-WA0047.jpg",
  "IMG-20260317-WA0048.jpg",
  "IMG-20260317-WA0049.jpg",
  "IMG-20260317-WA0050.jpg",
  "IMG-20260317-WA0051.jpg",
  "IMG-20260317-WA0052.jpg",
  "IMG-20260317-WA0053.jpg",
  "IMG-20260317-WA0054.jpg",
  "IMG-20260317-WA0055.jpeg",
  "IMG-20260317-WA0056.jpeg",
  "IMG-20260317-WA0057.jpeg",
  "IMG-20260317-WA0058.jpeg",
  "IMG-20260317-WA0059.jpeg",
] as const;

const IMAGES = CANDLE_IMAGE_FILES.map((file, i) => ({
  id: i + 1,
  src: `/candleImg/${file}`,
  alt: `Royal Flame Candle product photo ${i + 1}`,
}));

function getVisibleTriplet(startIndex: number) {
  const len = IMAGES.length;
  return [
    IMAGES[startIndex % len],
    IMAGES[(startIndex + 1) % len],
    IMAGES[(startIndex + 2) % len],
  ];
}

export function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const isPausedRef = useRef(false);

  const showPrev = () => {
    setIndex((current) => (current === 0 ? IMAGES.length - 1 : current - 1));
  };

  const showNext = () => {
    setIndex((current) =>
      current === IMAGES.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        setIndex((current) =>
          current === IMAGES.length - 1 ? 0 : current + 1,
        );
      }
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const visible = getVisibleTriplet(index);

  return (
    <div
      className="relative mx-auto flex w-full max-w-6xl items-stretch gap-2 sm:gap-4"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      <button
        type="button"
        onClick={showPrev}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full border border-amber-300 bg-white/80 text-lg font-semibold text-amber-800 shadow-sm transition hover:bg-amber-50 sm:h-11 sm:w-11 dark:border-amber-800 dark:bg-zinc-900/80 dark:text-amber-200 dark:hover:bg-zinc-800"
        aria-label="Previous candle images"
      >
        ‹
      </button>
      <div className="grid min-w-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4 overflow-hidden">
        {visible.map((item, slot) => (
          <div
            key={`${index}-${item.id}-${slot}`}
            className={`relative aspect-square min-h-0 min-w-0 overflow-hidden rounded-xl bg-zinc-200/80 ring-1 ring-amber-100/40 dark:bg-zinc-800 dark:ring-zinc-700
              ${slot > 0 ? "hidden sm:block" : ""}
            `}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 360px"
              className="object-cover object-center transition-opacity duration-300"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              priority={index === 0 && slot === 0}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={showNext}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full border border-amber-300 bg-white/80 text-lg font-semibold text-amber-800 shadow-sm transition hover:bg-amber-50 sm:h-11 sm:w-11 dark:border-amber-800 dark:bg-zinc-900/80 dark:text-amber-200 dark:hover:bg-zinc-800"
        aria-label="Next candle images"
      >
        ›
      </button>
    </div>
  );
}
