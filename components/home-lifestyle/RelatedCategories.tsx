import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const categories = [
  {
    title: "Apparel & Footwear",
    description: "Overstock, returns, end-of-line and imperfect goods.",
    image: "/images/home-lifestyle/hl15.jpg",
    badge: "Proposed pilot",
    badgeType: "green",
    href: "/categories#apparel",
  },
  {
    title: "Home & Lifestyle",
    description: "Furnishings, textiles, seasonal and housewares.",
    image: "/images/home-lifestyle/hl16.png",
    badge: "Conditional overview",
    badgeType: "neutral",
    href: "/home-lifestyle",
  },
  {
    title: "All categories",
    description: "Browse every surplus category.",
    image: "/images/home-lifestyle/hl17.png",
    badge: "Overview",
    badgeType: "green",
    href: "/categories",
  },
];

export default function RelatedCategories() {
  return (
    <section id="related-categories" aria-labelledby="related-categories-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>13</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              RELATED CATEGORIES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="related-categories-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Explore other categories.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Home &amp; Lifestyle is one of several source-defined categories, each governed to its own rules.
          </p>

          {/* 3 Category Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Photo with badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top-Left Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-semibold tracking-wide backdrop-blur-xs ${
                        card.badgeType === "green"
                          ? "bg-white/95 text-[#009b72] shadow-xs"
                          : "bg-white/95 text-[#475569] shadow-xs"
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          card.badgeType === "green" ? "bg-[#009b72]" : "bg-[#475569]"
                        }`}
                      />
                      {card.badge}
                    </span>
                  </div>

                  {/* Top-Right Arrow button */}
                  <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs transition-transform group-hover:scale-110">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                {/* Card text */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#0c1e38] group-hover:text-[#926016] transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-[13px] font-bold text-[#926016]">
                    <span>Explore</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-[#FAF6F0]">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              RELATED CATEGORIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            Explore other categories.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Home &amp; Lifestyle is one of several source-defined categories, each governed to its own rules.
          </p>

          {/* 3 Category Cards */}
          <div className="mt-5 flex flex-col gap-4">
            {/* Card 1: Apparel & Footwear */}
            <Link
              href="/categories#apparel"
              className="group overflow-hidden rounded-[16px] border border-[#f0ece4] bg-white shadow-2xs"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src="/images/home-lifestyle/hl15.jpg" alt="Apparel & Footwear" fill sizes="100vw" className="object-cover" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[9.5px] font-semibold text-[#009b72] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#009b72]" />
                    Proposed pilot
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-bold text-[#0c1e38]">Apparel &amp; Footwear</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-[#556987]">
                  Overstock, returns, end-of-line and imperfect goods.
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[11.5px] font-bold text-[#926016]">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Consumer Electronics */}
            <Link
              href="/consumer-electronics"
              className="group overflow-hidden rounded-[16px] border border-[#f0ece4] bg-white shadow-2xs"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src="/images/consumer-electronics/ce1.png" alt="Consumer Electronics" fill sizes="100vw" className="object-cover" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[9.5px] font-semibold text-[#475569] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#475569]" />
                    Conditional overview
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-bold text-[#0c1e38]">Consumer Electronics</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-[#556987]">
                  Data security, battery safety and serial screening.
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[11.5px] font-bold text-[#926016]">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Card 3: All categories */}
            <Link
              href="/categories"
              className="group overflow-hidden rounded-[16px] border border-[#f0ece4] bg-white shadow-2xs"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src="/images/home-lifestyle/hl17.png" alt="All categories" fill sizes="100vw" className="object-cover" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[9.5px] font-semibold text-[#009b72] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#009b72]" />
                    Overview
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-bold text-[#0c1e38]">All categories</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-[#556987]">
                  Browse every surplus category.
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[11.5px] font-bold text-[#926016]">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
