import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface CategoryCard {
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
  badge: string;
  badgeType: "green" | "amber";
  href: string;
}

const categories: CategoryCard[] = [
  {
    title: "Apparel & Footwear",
    description: "Overstock, returns, end-of-line and imperfect goods.",
    imageDesktop: "/images/consumer-electronics/ce18.jpg",
    imageMobile: "/images/consumer-electronics/ce30.jpg",
    badge: "Proposed pilot",
    badgeType: "green",
    href: "/categories#apparel",
  },
  {
    title: "Food & Grocery",
    description: "Independently gated; safety, shelf-life and traceability.",
    imageDesktop: "/images/consumer-electronics/ce19.jpg",
    imageMobile: "/images/consumer-electronics/ce31.jpg",
    badge: "Safety gated",
    badgeType: "amber",
    href: "/food-and-grocery",
  },
  {
    title: "All categories",
    description: "Browse every surplus category.",
    imageDesktop: "/images/consumer-electronics/ce20.jpg",
    imageMobile: "/images/consumer-electronics/ce32.jpg",
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
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              RELATED CATEGORIES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="related-categories-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Explore other categories.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Consumer Electronics is one of several source-defined categories, each governed to its own rules.
          </p>

          {/* 3 Category Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Photo container with top pills */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.imageDesktop}
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
                          : "bg-white/95 text-[#926016] shadow-xs"
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          card.badgeType === "green" ? "bg-[#009b72]" : "bg-[#926016]"
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

                {/* Card body */}
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
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full bg-[#faf7f2] px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              RELATED CATEGORIES
            </span>
          </div>

          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Explore other categories.
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Consumer Electronics is one of several source-defined categories, each governed to its own rules.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            {categories.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-white shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image src={card.imageMobile} alt={card.title} fill sizes="100vw" className="object-cover" />
                  
                  {/* Top-Left Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold shadow-xs ${
                        card.badgeType === "green"
                          ? "bg-white/95 text-[#009b72]"
                          : "bg-white/95 text-[#926016]"
                      }`}
                    >
                      <span className={`size-1 rounded-full ${card.badgeType === "green" ? "bg-[#009b72]" : "bg-[#926016]"}`} />
                      {card.badge}
                    </span>
                  </div>

                  {/* Top-Right Arrow button */}
                  <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-[#0c1e38]">{card.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">{card.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-bold text-[#926016]">
                    Explore →
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
