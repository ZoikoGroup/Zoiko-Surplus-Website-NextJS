"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Globe,
  Leaf,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { hanken, sora, img } from "./shared";
import { filterCatalog, formats } from "./catalog";

const tiles: { src: string; alt: string; badge: string; icon: LucideIcon; className: string; sizes: string }[] = [
  {
    src: img("hero-sellers.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse aisle",
    badge: "For sellers",
    icon: Building2,
    className: "row-span-2 aspect-[290/356]",
    sizes: "(min-width: 1024px) 290px, 50vw",
  },
  {
    src: img("hero-partners.webp"),
    alt: "Two colleagues planning at a desk with parcels and a laptop",
    badge: "For partners",
    icon: Users,
    className: "aspect-[290/172]",
    sizes: "(min-width: 1024px) 290px, 50vw",
  },
  {
    src: img("hero-checklists.webp"),
    alt: "Worker with a clipboard checking boxed goods",
    badge: "Checklists",
    icon: ClipboardCheck,
    className: "aspect-[290/172]",
    sizes: "(min-width: 1024px) 290px, 50vw",
  },
  {
    src: img("hero-buyers.webp"),
    alt: "Wide warehouse with tall racking",
    badge: "For verified buyers",
    icon: UserCheck,
    className: "col-span-2 aspect-[592/172]",
    sizes: "(min-width: 1024px) 592px, 100vw",
  },
];

const values: { icon: LucideIcon; label: string }[] = [
  { icon: Leaf, label: "Reduce waste" },
  { icon: ShieldCheck, label: "Govern with trust" },
  { icon: Globe, label: "Market-by-market" },
];

// "Explore guides ▾" — jumps to the catalog filtered by format.
function ExploreMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#926016] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
      >
        Explore guides
        <ChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={1.75}
        />
      </button>
      {open && (
        <ul
          id={menuId}
          className="absolute left-0 top-full z-20 mt-2 w-60 rounded-2xl border border-[#e6e9ef] bg-white p-2 shadow-[0_16px_40px_-16px_rgba(12,33,64,0.3)]"
        >
          {formats.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  filterCatalog({ format: f.id, topic: "all", query: "" });
                }}
                className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#0f1f3a] hover:bg-[#fbf0e0]"
              >
                {f.plural}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Hero() {
  const [query, setQuery] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    filterCatalog({ query: query.trim(), topic: "all", format: "all" });
  }

  return (
    <section
      aria-labelledby="kc-hero-heading"
      className={`${hanken} bg-[linear-gradient(160deg,#ffffff_0%,#fbf8f2_55%,#f8f1e6_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-16 lg:grid-cols-[minmax(0,592px)_minmax(0,592px)] lg:justify-between lg:px-24">
        <div className="flex flex-col gap-7">
          <h1
            id="kc-hero-heading"
            className={`${sora} text-[48px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0f1f3a] md:text-[72px]`}
          >
            Knowledge
            <br />
            <span className="text-[#1f9a7f]">Center</span>
          </h1>
          <p className="max-w-[592px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Understand surplus disposition, buyer qualification, and the controls that shape participation. Explore
            practical guidance; market and category availability depend on local activation and eligibility.
          </p>

          <div className="flex flex-wrap gap-3">
            <ExploreMenu />
            <Link
              href="/how-it-works"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#dfe5ed] bg-white px-5 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              How It Works
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
          </div>

          <form
            role="search"
            onSubmit={onSubmit}
            className="flex max-w-[540px] items-center gap-2 rounded-full border border-[#e6e9ef] bg-white py-1.5 pl-5 pr-1.5 shadow-[0_10px_30px_-14px_rgba(12,33,64,0.2)]"
          >
            <Search aria-hidden="true" className="size-5 shrink-0 text-[#556987]" strokeWidth={1.75} />
            <label htmlFor="kc-hero-search" className="sr-only">
              Search public guidance
            </label>
            <input
              id="kc-hero-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search public guidance"
              className="min-w-0 flex-1 bg-transparent text-base text-[#0f1f3a] outline-none placeholder:text-[#7b8aa3]"
            />
            <button
              type="submit"
              className="min-h-10 rounded-full bg-[#926016] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Search
            </button>
          </form>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[#ebe6dc] pt-5">
            {values.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-[#4b5b75]">
                <Icon aria-hidden="true" className="size-5 text-[#1f9a7f]" strokeWidth={1.5} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {tiles.map(({ src, alt, badge, icon: Icon, className, sizes }, i) => (
            <li key={src} className={`relative overflow-hidden rounded-[20px] bg-[#16263f] ${className}`}>
              <Image src={src} alt={alt} fill priority={i === 0} sizes={sizes} className="object-cover" />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#0f1f3a] shadow-sm">
                <Icon aria-hidden="true" className="size-3.5 text-[#8a5a14]" strokeWidth={1.75} />
                {badge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
