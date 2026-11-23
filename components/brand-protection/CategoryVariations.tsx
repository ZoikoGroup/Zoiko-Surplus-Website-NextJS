import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const subCategories = [
  {
    badge: "Not yet onboarded",
    badgeColor: "bg-slate-900/60 text-slate-200 border-white/20",
    title: "Consumer Goods",
    desc: "Household and lifestyle goods with partner resale conditions.",
    image: "/images/Brand-Protection/b15.png",
    href: "/categories-consumer-goods",
  },
  {
    badge: "Requires approval",
    badgeColor: "bg-teal-900/70 text-teal-200 border-teal-400/30",
    title: "Food & Grocery",
    desc: "Assured continuity, shelf-life, and traceability compliance.",
    image: "/images/Brand-Protection/b16.png",
    href: "/categories-food-grocery",
  },
  {
    badge: "Planned / Exploratory",
    badgeColor: "bg-indigo-900/70 text-indigo-200 border-indigo-400/30",
    title: "Further Categories",
    desc: "Expand into mixed-surplus business goods upon approval.",
    image: "/images/Brand-Protection/b17.png",
    href: "/categories-further",
  },
];

export default function CategoryVariations() {
  return (
    <section aria-label="Category Variations" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CATEGORY VARIATIONS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Brand rules differ by category.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Five categories, each with its own considerations. Category pages own the details.
          </p>

          {/* Top Wide Feature Card: Apparel & Footwear */}
          <div className="mt-10">
            <div className="group relative flex h-[280px] lg:h-[320px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 p-7 shadow-sm transition-all hover:shadow-md">
              <Image
                src="/images/Brand-Protection/b14.png"
                alt="Apparel & Footwear category brand protection"
                fill
                sizes="(max-width: 1400px) 100vw, 1380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/40 to-transparent" />

              {/* Top Row: Pill Badge + Arrow Button */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-500/80 px-3.5 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  <Star className="size-3 fill-current" />
                  <span>Proposed first pilot</span>
                </span>

                <div className="flex size-9 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="size-4" />
                </div>
              </div>

              {/* Bottom Row: Title + Description */}
              <div className="relative z-10">
                <h3 className={`${sora} text-[22px] lg:text-[24px] font-bold text-white`}>
                  Apparel & Footwear
                </h3>
                <p className="mt-1 text-[14px] text-slate-200">
                  UK-focused B2B apparel and footwear closed-market pilot.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom 3 Cards Grid */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {subCategories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative flex h-[230px] lg:h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/40 to-transparent" />

                {/* Top Badge + Arrow Button */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold backdrop-blur-xs ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>

                  <div className="flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <h3 className={`${sora} text-[17px] font-bold text-white`}>
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            CATEGORY VARIATIONS
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Brand rules differ by category.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Five categories, each with its own considerations. Category pages own the details.
          </p>

          {/* 5 Stacked Category Cards */}
          <div className="mt-6 space-y-4">
            {[
              {
                categoryNum: "CATEGORY 1",
                title: "Apparel and footwear",
                desc: "Brand asset disclosure and condition profile.",
                image: "/images/Brand-Protection/b45.jpg",
              },
              {
                categoryNum: "CATEGORY 2",
                title: "Food and grocery",
                desc: "Shelf life and traceability requirements.",
                image: "/images/Brand-Protection/b46.jpg",
              },
              {
                categoryNum: "CATEGORY 3",
                title: "Consumer electronics",
                desc: "Serial / IMEI and brand warranty criteria.",
                image: "/images/Brand-Protection/b47.jpg",
              },
              {
                categoryNum: "CATEGORY 4",
                title: "Home and lifestyle",
                desc: "Vendor restrictions and packaging checks.",
                image: "/images/Brand-Protection/b48.jpg",
              },
              {
                categoryNum: "CATEGORY 5",
                title: "Industrial and business goods",
                desc: "Equipment provenance and asset tracking.",
                image: "/images/Brand-Protection/b49.jpg",
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-2xs"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/50 to-transparent" />

                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                  <ArrowRight className="size-3.5" />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
                    {cat.categoryNum}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[17px] font-bold text-white`}>
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
