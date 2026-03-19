// @author Cursor - home single page candle website

import Image from "next/image";
import { GalleryCarousel } from "@/components/GalleryCarousel";

type HighlightCardProps = {
  title: string;
  description: string;
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

/** @author Cursor - feature card with centered icon, title and description */
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-zinc-900/90 p-6 sm:p-7 text-center ring-1 ring-zinc-800 dark:bg-zinc-900 dark:ring-zinc-700">
      <div className="mb-3 text-amber-500">{icon}</div>
      <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 sm:p-6 shadow-sm ring-1 ring-amber-100 backdrop-blur-sm dark:bg-zinc-900/80 dark:ring-zinc-800">
      <h3 className="text-base font-semibold text-amber-800 sm:text-lg dark:text-amber-300">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 px-4 py-8 text-zinc-900 sm:px-6 sm:py-10 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 sm:gap-20">
        {/* Hero section */}
        {/* @author Cursor - candle business hero section */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wide text-amber-800 ring-1 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-900">
              Handcrafted with love ✨💫
            </span>
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
              We are{" "}
              <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                candle manufacturers
              </span>{" "}
              illuminate your special moments.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
              At Royal Flame Candle, we believe in the power of handcrafted
              artistry. Each candle and decorative piece is meticulously
              created to bring joy, warmth, and elegance to your life. Our
              collection features unique designs perfect for celebrations,
              gifts, or simply adding a touch of luxury to your space. We are
              the{" "}
              <span className="font-semibold text-amber-700 dark:text-amber-300">
                manufacturer of candles
              </span>{" "}
              and we also deal in{" "}
              <span className="font-semibold">retail</span> as well as{" "}
              <span className="font-semibold">customised candles</span> for
              birthdays, weddings, gifting, decor and every special occasion.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/917428709623?text=Hi%2C%20I%20want%20to%20order%20candles"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50 dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus-visible:ring-offset-zinc-950"
              >
                Order on WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-amber-200 px-5 py-2.5 text-sm sm:text-base font-medium text-amber-800 transition hover:bg-amber-50 dark:border-amber-900 dark:text-amber-200 dark:hover:bg-amber-950"
              >
                Ask for custom candle
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                  Small batches, fresh pour
                </div>
                <div>Separately poured candles for every order.</div>
              </div>
              <div>
                <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                  Retail & bulk both
                </div>
                <div>Available from single piece to bulk quantity.</div>
              </div>
            </div>
          </div>

          {/* Simple visual placeholder for candles */}
          {/* @author Cursor - visual candle illustration */}
          <div className="relative mx-auto flex h-80 w-full max-w-sm items-end justify-center rounded-3xl bg-gradient-to-tr from-amber-100 via-rose-100 to-white p-8 shadow-lg ring-1 ring-amber-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 dark:ring-zinc-800">
            <div className="absolute inset-x-8 top-6 flex justify-between text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-amber-700/80 dark:text-amber-200/70">
              <span>Home Poured</span>
              <span>Handmade</span>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="h-32 w-16 rounded-2xl bg-gradient-to-t from-amber-500 to-amber-200 shadow-md dark:from-amber-700 dark:to-amber-300" />
                <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Scented
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-40 w-16 rounded-3xl bg-gradient-to-t from-rose-500 to-rose-200 shadow-md dark:from-rose-700 dark:to-rose-300" />
                <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Custom
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-28 w-16 rounded-2xl bg-gradient-to-t from-orange-500 to-orange-200 shadow-md dark:from-orange-700 dark:to-orange-300" />
                <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Gift Sets
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        {/* @author Cursor - candle offering section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-50">
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
          {/* @author Cursor - feature highlights: handcrafted, premium quality, unique designs */}
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
                  <path d="M8 14l.75 2.25L11 17l-2.25.75L8 20l-.75-2.25L5 17l2.25-.75L8 14z" />
                  <path d="M16 14l.75 2.25L19 17l-2.25.75L16 20l-.75-2.25L13 17l2.25-.75L16 14z" />
                </svg>
              }
              title="Handcrafted"
              description="Every piece is made with care and attention to detail"
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              }
              title="Premium Quality"
              description="Using only the finest materials for lasting beauty"
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M2 17h20" />
                  <path d="M4 17V9l4 2 4-4 4 4 4-2v8" />
                </svg>
              }
              title="Unique Designs"
              description="Distinctive pieces that stand out and impress"
            />
          </div>
        </section>

        {/* @author Cursor - candle image gallery section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-50">
            Our candle gallery
          </h2>
          <GalleryCarousel />
        </section>

        {/* How to order */}
        {/* @author Cursor - how to order section */}
        <section id="contact" className="space-y-6 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-amber-100 sm:p-8 dark:bg-zinc-900/90 dark:ring-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-50">
            How to order
          </h2>
          <p className="text-base text-zinc-700 sm:text-lg dark:text-zinc-300">
            Our process is simple – just send your requirements via WhatsApp or
            call:
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
            <li>
              Tell us the candle type – normal, scented, jar, pillar, custom
              shape, etc.
            </li>
            <li>
              Share quantity, colour, fragrance and occasion (birthday, wedding,
              festive, corporate, etc.).
            </li>
            <li>
              We will share the price, design suggestions and estimated delivery
              time with you.
            </li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-amber-50 px-4 py-3 sm:px-5 sm:py-4 text-amber-900 ring-1 ring-amber-100 dark:bg-amber-950/40 dark:text-amber-100 dark:ring-amber-900">
              <div className="text-sm font-semibold uppercase tracking-wide">
                Retail & bulk both
              </div>
              <div className="mt-1 text-sm sm:text-base">
                Single piece orders are welcome too; special pricing is
                available for bulk orders.
              </div>
            </div>
          </div>
        </section>

        {/* Contact details */}
        {/* @author Cursor - contact section */}
        <footer className="border-t border-amber-100 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Royal Flame Candle
              </div>
              <div className="mt-0.5 sm:text-base">
                Home-based candle manufacturer • Retail & customised candles
              </div>
            </div>
            <div className="space-y-1 text-right text-sm sm:text-base">
              <div>WhatsApp / Call: +91-74287-09623</div>
              <div>Email: info@royalflamecandle.in</div>
              <div>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/royalflamecandel"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-amber-700 underline underline-offset-2 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-200"
                >
                  @royalflamecandel
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
