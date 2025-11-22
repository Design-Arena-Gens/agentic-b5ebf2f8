"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import {
  StarIcon,
  ShoppingBagIcon,
  ShieldCheckIcon,
  TruckIcon,
  SparklesIcon,
  CheckBadgeIcon,
  ArrowLongRightIcon
} from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const productImages = [
  {
    id: "hero",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    alt: "Sculpted Aura Lamp on a marble side table"
  },
  {
    id: "detail",
    src: "https://images.unsplash.com/photo-1524758631624-3e6b5756da2f?auto=format&fit=crop&w=1600&q=80",
    alt: "Close up of lamp texture and sculpted glass"
  },
  {
    id: "workspace",
    src: "https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=1600&q=80",
    alt: "Lamp illuminating a modern workspace"
  },
  {
    id: "interior",
    src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1600&q=80",
    alt: "Lamp within a minimalist living room"
  }
];

const colorways = [
  {
    name: "Stellar White",
    description: "Soft matte ceramic with pearl undertones",
    value: "stellar-white",
    swatch: "bg-slate-100 border border-slate-200",
    accent: "from-slate-100/20 via-white to-slate-200/20"
  },
  {
    name: "Midnight Onyx",
    description: "Deep charcoal ceramic with satin finish",
    value: "midnight-onyx",
    swatch: "bg-slate-800",
    accent: "from-slate-900/20 via-slate-800/10 to-slate-600/20"
  },
  {
    name: "Aurora Clay",
    description: "Warm terracotta with subtle speckle",
    value: "aurora-clay",
    swatch: "bg-orange-300",
    accent: "from-orange-200/20 via-orange-300/10 to-orange-100/20"
  }
];

const highlights = [
  {
    name: "Hand-Finished",
    description: "Each lamp is sculpted and glazed by artisans over 38 hours of meticulous craftsmanship.",
    icon: SparklesIcon
  },
  {
    name: "Adaptive Glow",
    description: "Integrated lumen mapping offers 2700k - 4000k dynamic lighting tuned for circadian balance.",
    icon: StarIcon
  },
  {
    name: "Lifetime Assurance",
    description: "Backed by a lifetime studio guarantee with complimentary tune-ups and finish restoration.",
    icon: ShieldCheckIcon
  }
];

const whatsIncluded = [
  "Sculpted Aura Lamp",
  "Interchangeable opal glass halo",
  "Magnetic dimming talisman",
  "Lunaris Atelier provenance folio",
  "Braided fabric cord with inline smart dimmer"
];

const reviews = [
  {
    name: "Isla Navarro",
    role: "Interior Architect",
    rating: 5,
    quote:
      "The Aura Lamp introduces an ambient layer that transforms every vignette. It's luminous poetry—soft, diffused, and undeniably luxurious.",
    avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Morgan Ellis",
    role: "Design Director, Atelier Rue",
    rating: 5,
    quote:
      "An instant heirloom. Lunaris captured the balance of sculpture and utility better than any lighting studio I've worked with.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
  }
];

const lifestyleImages = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80"
];

const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

export default function Page() {
  const [selectedColor, setSelectedColor] = useState(colorways[0]);
  const [quantity, setQuantity] = useState(1);

  const shippingEstimate = useMemo(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
    const end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);
    return `${start.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric"
    })} – ${end.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric"
    })}`;
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-32 -z-10 h-[420px] bg-gradient-to-b from-brand-100/60 via-white to-transparent blur-3xl" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-content-center rounded-2xl bg-brand-500/10 text-brand-600 shadow-sm backdrop-blur">
            <SparklesIcon className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Lunaris Atelier</p>
            <p className="text-lg font-semibold text-slate-900">Sculpted Aura Collection</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#highlights" className="transition hover:text-slate-900">
            Highlights
          </a>
          <a href="#specs" className="transition hover:text-slate-900">
            Specifications
          </a>
          <a href="#reviews" className="transition hover:text-slate-900">
            Reviews
          </a>
          <a href="#lifestyle" className="transition hover:text-slate-900">
            Gallery
          </a>
        </nav>
        <button className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-800 shadow-sm transition hover:border-brand-400 hover:text-brand-600 md:inline-flex">
          Reserve Studio Visit
        </button>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-16 px-6 pb-24 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-20">
        <section className="space-y-12">
          <div className="rounded-3xl bg-white/60 p-6 shadow-lg shadow-brand-900/5 ring-1 ring-slate-200 backdrop-blur">
            <Tab.Group>
              <Tab.Panels>
                {productImages.map((image) => (
                  <Tab.Panel key={image.id} className="overflow-hidden rounded-3xl">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={image.id === "hero"}
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
              <Tab.List className="mt-6 flex gap-3">
                {productImages.map((image) => (
                  <Tab
                    key={image.id}
                    className={({ selected }) =>
                      clsx(
                        "relative h-20 w-24 overflow-hidden rounded-2xl border transition",
                        selected ? "border-brand-500" : "border-transparent"
                      )
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={clsx(
                            "pointer-events-none absolute inset-0 rounded-2xl border",
                            selected ? "border-brand-500" : "border-slate-200"
                          )}
                        />
                        <Image src={image.src} alt="" fill className="object-cover" sizes="96px" />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>

          <div className="grid gap-6 rounded-3xl bg-white/70 p-8 shadow-lg shadow-brand-900/5 ring-1 ring-slate-200 backdrop-blur md:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500" id="highlights">
                Highlights
              </h2>
              <p className="mt-3 text-3xl font-semibold text-slate-900">Crafted light, sculpted for immersive atmospheres</p>
            </div>
            <dl className="grid gap-6">
              {highlights.map((highlight) => (
                <div key={highlight.name} className="flex gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600">
                    <highlight.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <dt className="text-base font-semibold text-slate-900">{highlight.name}</dt>
                    <dd className="mt-1 text-sm text-slate-600">{highlight.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl bg-white/70 p-8 shadow-lg shadow-brand-900/5 ring-1 ring-slate-200 backdrop-blur" id="specs">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Specifications</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">Dimensions</p>
                <p className="mt-2 text-sm text-slate-600">16&quot; height × 8&quot; diameter × 9&quot; base width</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Materiality</p>
                <p className="mt-2 text-sm text-slate-600">Glazed ceramic base, opal blown glass halo, brushed brass cadence ring</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Illumination</p>
                <p className="mt-2 text-sm text-slate-600">Smart dimmer 50–900 lumens, tunable 2700k–4000k with ambient sensor</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Certification</p>
                <p className="mt-2 text-sm text-slate-600">ETL listed, energy star compliant, WhisperCool thermal core</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">In the Atelier Edition</p>
              <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <SparklesIcon className="mt-0.5 h-4 w-4 text-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand-50 via-white to-brand-100/40 p-6 ring-1 ring-brand-200/70">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <TruckIcon className="h-6 w-6 text-brand-500" />
                <span className="font-semibold text-slate-900">Complimentary white-glove delivery</span>
                <span className="hidden h-3 w-px bg-slate-200 md:inline" aria-hidden="true" />
                <span>Dispatched from the Lunaris studio within 48 hours</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="rounded-3xl bg-white/90 p-10 shadow-xl shadow-brand-900/10 ring-1 ring-slate-200 backdrop-blur">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
              Limited Release <CheckBadgeIcon className="h-4 w-4" />
            </p>
            <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">Sculpted Aura Lamp</h1>
            <p className="mt-4 text-base text-slate-600">
              Designed in the Lunaris atelier, this luminous sculpture layers artisanal glazing with adaptive, cloud-synced lighting intelligence. Harmonize intimate gatherings, focused ritual, and restorative evenings alike.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-1 text-brand-500">
                <StarIcon className="h-5 w-5" />
                <span className="font-semibold text-slate-900">{averageRating}</span>
              </div>
              <span className="text-slate-400">/</span>
              <span>{reviews.length} collector reviews</span>
              <span className="hidden h-3 w-px bg-slate-200 md:inline" aria-hidden="true" />
              <span className="flex items-center gap-2 text-slate-500">
                <ShieldCheckIcon className="h-5 w-5 text-brand-500" /> Lifetime studio care included
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <p className="text-4xl font-semibold tracking-tight text-slate-900">$1,280</p>
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                Ships {shippingEstimate}
              </span>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Colorway</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {colorways.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color)}
                      className={clsx(
                        "relative flex h-28 flex-col justify-between rounded-3xl border bg-gradient-to-br p-5 text-left transition",
                        selectedColor.value === color.value
                          ? "border-brand-400 shadow-lg shadow-brand-900/10"
                          : "border-slate-200 hover:border-brand-200"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className={clsx("h-8 w-8 rounded-full border border-white shadow-inner", color.swatch)} />
                        <span className="text-sm font-semibold text-slate-900">{color.name}</span>
                      </span>
                      <span className="text-xs text-slate-500">{color.description}</span>
                      <span
                        className={clsx(
                          "pointer-events-none absolute inset-0 -z-10 rounded-3xl border border-brand-200/70 bg-white/60 opacity-0 transition",
                          selectedColor.value === color.value && "opacity-100"
                        )}
                      />
                      <span
                        className={clsx(
                          "pointer-events-none absolute inset-0 -z-20 rounded-3xl",
                          `bg-gradient-to-br ${color.accent}`
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <label className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500" htmlFor="quantity">
                  Quantity
                </label>
                <div className="flex items-center rounded-full border border-slate-200 bg-white p-2 shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="mx-4 w-10 text-center text-lg font-semibold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-900/20 transition hover:translate-y-[-1px] hover:shadow-brand-900/25">
                  <ShoppingBagIcon className="h-5 w-5" /> Add to Cart
                </button>
                <button className="group flex flex-1 items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:text-brand-600">
                  <PlayIcon className="h-5 w-5 transition group-hover:translate-x-0.5" />
                  View Story Film
                </button>
              </div>

              <ul className="grid gap-4 text-sm text-slate-500">
                <li className="flex items-start gap-3">
                  <ShieldCheckIcon className="mt-0.5 h-5 w-5 text-brand-500" />
                  Studio guarantee with annual finish detailing
                </li>
                <li className="flex items-start gap-3">
                  <TruckIcon className="mt-0.5 h-5 w-5 text-brand-500" />
                  White-glove installation available in 120+ cities
                </li>
                <li className="flex items-start gap-3">
                  <SparklesIcon className="mt-0.5 h-5 w-5 text-brand-500" />
                  Complimentary luminescence consultation with every order
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-white/80 p-8 shadow-lg shadow-brand-900/10 ring-1 ring-slate-200 backdrop-blur" id="reviews">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Collector reviews</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">Celebrated by design visionaries</p>
              </div>
              <div className="rounded-2xl border border-brand-200/60 bg-brand-50/60 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-brand-600">{averageRating} / 5.0</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Average rating</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <article key={review.name} className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">{review.name}</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{review.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-brand-500">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <StarIcon key={index} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{review.quote}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white/80 ring-1 ring-slate-200" id="lifestyle">
            <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Lifestyle narrative</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">Curate luminous scenes</p>
                <p className="mt-2 text-sm text-slate-600">
                  From slow mornings steeped in warmth to ambient evenings, the Sculpted Aura Lamp orchestrates immersive lighting across every ritual.
                </p>
              </div>
              <button className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/15 transition hover:bg-brand-600">
                Explore Styling Guide
                <ArrowLongRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>
            <div className="grid gap-2 p-2 sm:grid-cols-3">
              {lifestyleImages.map((image, index) => (
                <div key={image} className="relative h-48 overflow-hidden rounded-2xl sm:h-64">
                  <Image src={image} alt="Lifestyle setting" fill className="object-cover" sizes={index === 0 ? "(min-width: 640px) 33vw" : "(min-width: 640px) 33vw"} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 p-10 text-white shadow-xl shadow-brand-900/30">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Lunaris Private Release</p>
                <p className="mt-3 text-3xl font-semibold">Secure your edition of the Sculpted Aura Lamp today</p>
                <p className="mt-2 max-w-xl text-sm text-white/80">
                  Each piece is serialized and accompanied by a provenance folio signed by the artisans. Secure your lamp and unlock access to the Lunaris collector circle.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-base font-semibold text-brand-600 shadow-lg shadow-brand-900/20 transition hover:bg-slate-100">
                  <ShoppingBagIcon className="h-5 w-5" /> Add to Cart
                </button>
                <button className="flex items-center justify-center gap-3 rounded-full border border-white/40 bg-transparent px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                  Reserve Atelier Viewing
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16 pt-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Lunaris Atelier. Handcrafted in Montréal.</p>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-slate-900">
            Journal
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Care Guide
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Studio Appointments
          </a>
        </div>
      </footer>
    </div>
  );
}
