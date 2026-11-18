import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const categories = [
  {
    title: "Apparel & Footwear",
    description: "Seasonal, returned, excess and imperfect apparel or shoes.",
    href: "/categories-apparel-footwear",
    image: "/images/For-Enterprise-Sellers/fes13.jpg",
    alt: "Apparel & Footwear - apparel racks and footwear",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
      </svg>
    ),
  },
  {
    title: "Food & Grocery",
    description: "Sealed ambient grocery and pantry inventory, only as a separately gated candidate.",
    href: "#",
    image: "/images/For-Enterprise-Sellers/fes14.jpg",
    alt: "Food & Grocery - sealed fresh and ambient inventory",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Consumer Electronics",
    description: "Unused, returned or refurbished eligible devices and accessories.",
    href: "/categories-consumer-electronics",
    image: "/images/For-Enterprise-Sellers/fes15.jpg",
    alt: "Consumer Electronics - headphones and accessories",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: "Home & Lifestyle",
    description: "Homewares, small furnishings, textiles and household goods.",
    href: "/home-lifestyle",
    image: "/images/For-Enterprise-Sellers/fes16.jpg",
    alt: "Home & Lifestyle - living room furniture and homewares",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Industrial & Business Goods",
    description: "Commercial spares, tools, equipment and business stock.",
    href: "#",
    image: "/images/For-Enterprise-Sellers/fes17.jpg",
    alt: "Industrial & Business Goods - commercial machinery and parts",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function CategoryConsiderations() {
  return (
    <section aria-label="Category Considerations - Editorial categories, not open trading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">05</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CATEGORY CONSIDERATIONS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Editorial categories, not open trading.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Each category has its own gate. Listing one here does not mean it is available.
          </p>

          {/* Cards Grid: 3 on top row, 2 on second row */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-[200px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-[2px]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 pb-3">
                    <h3 className={`${sora} text-[19px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#926016] hover:text-[#784f12] transition-colors"
                  >
                    <span>See qualifying controls</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            CATEGORY CONSIDERATIONS
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Editorial categories, not open trading.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Each category has its own gate. Listing one here does not mean it is available.
          </p>

          {/* 5 Mobile Cards in vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Category 1 */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/For-Enterprise-Sellers/fes47.jpg"
                alt="Apparel & Footwear category"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  CATEGORY 1
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Apparel & Footwear
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Seasonal, returned, excess and imperfect apparel or shoes.
                </p>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/For-Enterprise-Sellers/fes48.jpg"
                alt="Electronics category"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  CATEGORY 2
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Electronics
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Unused, returned or refurbished eligible devices and accessories.
                </p>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/For-Enterprise-Sellers/fes49.jpg"
                alt="Food category"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
                  <path d="M12 9v1" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  CATEGORY 3
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Food
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Sealed ambient grocery and pantry inventory, only as a separately gated candidate.
                </p>
              </div>
            </div>

            {/* Category 4 */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/For-Enterprise-Sellers/fes50.jpg"
                alt="Industrial category"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  CATEGORY 4
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Industrial
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Commercial spares, tools, equipment and business stock.
                </p>
              </div>
            </div>

            {/* Category 5 */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/For-Enterprise-Sellers/fes51.jpg"
                alt="Household category"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  CATEGORY 5
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Household
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Homewares, small furnishings, textiles and household goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
