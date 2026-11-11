import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const categories = [
  {
    title: "Electronics",
    image: "/images/Zoiko-Surplus-Our-Approach/soa7.jpg",
    href: "/consumer-electronics",
    badge: null,
  },
  {
    title: "Apparel",
    image: "/images/Zoiko-Surplus-Our-Approach/soa8.jpg",
    href: "/apparel-footwear",
    badge: null,
  },
  {
    title: "Home & Lifestyle",
    image: "/images/Zoiko-Surplus-Our-Approach/soa9.jpg",
    href: "/home-lifestyle",
    badge: null,
  },
  {
    title: "Industrial & Machinery",
    image: "/images/Zoiko-Surplus-Our-Approach/soa10.jpg",
    href: "#",
    badge: null,
  },
  {
    title: "Healthcare",
    image: "/images/Zoiko-Surplus-Our-Approach/soa11.jpg",
    href: "#",
    badge: "SEPARATE SAFETY REVIEW",
  },
  {
    title: "Food & Beverages",
    image: "/images/Zoiko-Surplus-Our-Approach/soa12.jpg",
    href: "#",
    badge: "SEPARATE SAFETY REVIEW",
  },
  {
    title: "Transport",
    image: "/images/Zoiko-Surplus-Our-Approach/soa13.jpg",
    href: "#",
    badge: null,
  },
  {
    title: "Construction Material",
    image: "/images/Zoiko-Surplus-Our-Approach/soa14.jpg",
    href: "#",
    badge: null,
  },
  {
    title: "Energy & Infrastructure",
    image: "/images/Zoiko-Surplus-Our-Approach/soa15.jpg",
    href: "#",
    badge: null,
  },
  {
    title: "Other Industries",
    image: "/images/Zoiko-Surplus-Our-Approach/soa16.jpg",
    href: "#",
    badge: null,
  },
];

export default function CategoryGovernance() {
  return (
    <section
      id="category-governance"
      aria-labelledby="category-governance-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CATEGORY GOVERNANCE
            </span>
          </div>

          {/* Heading */}
          <h2
            id="category-governance-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Different categories, different
            <br />
            rules.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[660px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Each category has its own condition, safety and handling evidence. Listing a category here does not mean it is live in your market. Food and healthcare are gated by separate safety review.
          </p>

          {/* 10 Category Cards (5x2 Grid) */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative aspect-[16/11] w-full overflow-hidden rounded-[12px] bg-slate-900 shadow-xs transition-all hover:shadow-md"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061121]/90 via-[#061121]/25 to-transparent" />

                {cat.badge && (
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex rounded-[4px] bg-white/95 px-2 py-0.5 text-[8.5px] font-extrabold tracking-[0.06em] text-[#926016] uppercase shadow-2xs">
                      {cat.badge}
                    </span>
                  </div>
                )}

                <div className="absolute inset-x-3.5 bottom-3 flex items-center justify-between text-white">
                  <span className="text-[12.5px] font-bold leading-tight">
                    {cat.title}
                  </span>
                  <span aria-hidden="true" className="text-[12px] opacity-85 transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            CATEGORY GOVERNANCE
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Different categories, different rules.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Each category has its own condition, safety and handling evidence. Listing a category here does not mean it is live in your market. Food and healthcare are gated by separate safety review.
          </p>

          {/* 2x5 Category Grid (soa29.jpg to soa38.jpg) */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {categories.map((cat, idx) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-slate-900 shadow-2xs"
              >
                <Image
                  src={`/images/Zoiko-Surplus-Our-Approach/soa${29 + idx}.jpg`}
                  alt={cat.title}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061121]/90 via-[#061121]/25 to-transparent" />

                {cat.badge && (
                  <div className="absolute top-2 left-2 right-2">
                    <span className="inline-flex rounded-[4px] bg-white/95 px-1.5 py-0.5 text-[7.5px] font-extrabold leading-tight tracking-[0.04em] text-[#926016] uppercase shadow-2xs">
                      {cat.badge}
                    </span>
                  </div>
                )}

                <div className="absolute inset-x-2.5 bottom-2.5 flex items-end justify-between gap-1 text-white">
                  <span className="text-[11.5px] font-bold leading-tight">
                    {cat.title}
                  </span>
                  <span aria-hidden="true" className="text-[11px] opacity-85 shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
