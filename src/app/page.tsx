// @author Cursor - home single page candle website

import Image from "next/image";
import { GalleryCarousel } from "@/components/GalleryCarousel";

type HighlightCardProps = {
  title: string;
  description: string;
};

function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-amber-100 backdrop-blur-sm dark:bg-zinc-900/80 dark:ring-zinc-800">
      <h3 className="text-base font-semibold text-amber-800 dark:text-amber-300">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 px-6 py-10 text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-20">
        {/* Hero section */}
        {/* @author Cursor - candle business hero section */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-800 ring-1 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-900">
              Handmade from Home • Since 2026
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              We are{" "}
              <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                candle manufacturers
              </span>{" "}
              from our room.
            </h1>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
              Ye ek home-based start up hai jahan se main apne room se hi{" "}
              <span className="font-semibold text-amber-700 dark:text-amber-300">
                candles manufacture
              </span>{" "}
              karti hoon. Hum directly{" "}
              <span className="font-semibold">candles ke manufacturer</span>{" "}
              hain, isliye aapko factory se seedha best quality milti hai. We
              are the{" "}
              <span className="font-semibold">manufacturer of candles</span>{" "}
              and we also deal in{" "}
              <span className="font-semibold">retail</span> as well as{" "}
              <span className="font-semibold">customised candles</span> for
              birthdays, weddings, gifting, decor aur har special occasion ke
              liye.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/918527634790?text=Hi%2C%20I%20want%20to%20order%20candles"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50 dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus-visible:ring-offset-zinc-950"
              >
                Order on WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-amber-200 px-5 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-50 dark:border-amber-900 dark:text-amber-200 dark:hover:bg-amber-950"
              >
                Ask for custom candle
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-zinc-600 dark:text-zinc-400">
              <div>
                <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                  Small batches, fresh pour
                </div>
                <div>Har order ke liye separately poured candles.</div>
              </div>
              <div>
                <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                  Retail & bulk both
                </div>
                <div>Single piece se lekar bulk quantity tak available.</div>
              </div>
            </div>
          </div>

          {/* Simple visual placeholder for candles */}
          {/* @author Cursor - visual candle illustration */}
          <div className="relative mx-auto flex h-80 w-full max-w-sm items-end justify-center rounded-3xl bg-gradient-to-tr from-amber-100 via-rose-100 to-white p-8 shadow-lg ring-1 ring-amber-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 dark:ring-zinc-800">
            <div className="absolute inset-x-8 top-6 flex justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-amber-700/80 dark:text-amber-200/70">
              <span>Home Poured</span>
              <span>Handmade</span>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="h-32 w-16 rounded-2xl bg-gradient-to-t from-amber-500 to-amber-200 shadow-md dark:from-amber-700 dark:to-amber-300" />
                <span className="text-[11px] font-medium text-zinc-800 dark:text-zinc-100">
                  Scented
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-40 w-16 rounded-3xl bg-gradient-to-t from-rose-500 to-rose-200 shadow-md dark:from-rose-700 dark:to-rose-300" />
                <span className="text-[11px] font-medium text-zinc-800 dark:text-zinc-100">
                  Custom
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-28 w-16 rounded-2xl bg-gradient-to-t from-orange-500 to-orange-200 shadow-md dark:from-orange-700 dark:to-orange-300" />
                <span className="text-[11px] font-medium text-zinc-800 dark:text-zinc-100">
                  Gift Sets
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        {/* @author Cursor - candle offering section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            What we do
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <HighlightCard
              title="Candle manufacturing"
              description="We are the manufacturer of candles, hand-poured in small batches directly from our room setup, ensuring quality and freshness in every piece."
            />
            <HighlightCard
              title="Retail & gifting"
              description="We also deal in retail – perfect for home decor, self use, return gifts, hampers, festivals and everyday mood lighting."
            />
            <HighlightCard
              title="Customised candles"
              description="Custom colours, names, initials, themes and fragrances – get personalised candles for birthdays, weddings, baby showers and corporate events."
            />
          </div>
        </section>

        {/* @author Cursor - candle image gallery section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Our candle gallery
          </h2>
          <GalleryCarousel />
        </section>

        {/* How to order */}
        {/* @author Cursor - how to order section */}
        <section id="contact" className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-amber-100 dark:bg-zinc-900/90 dark:ring-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            How to order
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Abhi hamara simple process hai – bas WhatsApp ya call par apni
            requirement bhejiye:
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>
              Candle type bataiye – normal, scented, jar, pillar, custom shape
              etc.
            </li>
            <li>
              Quantity, colour, fragrance aur occasion share kijiye (birthday,
              wedding, festive, corporate, etc.).
            </li>
            <li>
              Hum aapko price, design suggestions aur time estimate share
              karenge.
            </li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="rounded-2xl bg-amber-50 px-4 py-3 text-amber-900 ring-1 ring-amber-100 dark:bg-amber-950/40 dark:text-amber-100 dark:ring-amber-900">
              <div className="text-xs font-semibold uppercase tracking-wide">
                Retail & bulk both
              </div>
              <div className="text-xs">
                Single piece orders bhi welcome hain, bulk orders ke liye
                special pricing available hai.
              </div>
            </div>
          </div>
        </section>

        {/* Contact details */}
        {/* @author Cursor - contact section */}
        <footer className="border-t border-amber-100 pt-6 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                Royal Flame Candle
              </div>
              <div>Home-based candle manufacturer • Retail & customised candles</div>
            </div>
            <div className="space-y-1 text-right text-xs sm:text-sm">
              <div>WhatsApp / Call: +91-85276-34790</div>
              <div>Email: info@royalflamecandle.in</div>
              {/* <div>Instagram: @yourcandlebrand</div> */}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
