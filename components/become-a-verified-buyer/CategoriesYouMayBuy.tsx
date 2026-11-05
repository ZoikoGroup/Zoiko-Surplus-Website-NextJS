import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const categories = [
  {
    id: "apparel-footwear",
    title: "Apparel & Footwear",
    description: "UK-focused B2B apparel and footwear resale market.",
    badge: "Proposed first pilot",
    badgeType: "pilot", // amber pill
    hasArrow: true,
    image: "/images/become-a-verified-buyer/vb2.png",
    alt: "Apparel and footwear showroom inventory for B2B resale",
  },
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description: "Condition, data wiping, electrical/regulatory and recall controls; no implied live trade.",
    badge: "Not yet activated",
    badgeType: "inactive", // slate pill
    hasArrow: false,
    image: "/images/become-a-verified-buyer/vb3.jpg",
    alt: "Consumer electronics surplus including laptops and headphones",
  },
  {
    id: "food-grocery",
    title: "Food & Grocery",
    description: "Ensure food safety, shelf-life, and traceability compliance.",
    badge: "Separate approval",
    badgeType: "approval", // neutral pill
    hasArrow: true,
    image: "/images/become-a-verified-buyer/vb4.png",
    alt: "Packaged grocery and sealed ambient food goods",
  },
];

export default function CategoriesYouMayBuy() {
  return (
    <section id="categories-you-may-buy" aria-labelledby="categories-heading" className={`${hanken} w-full bg-white order-6 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CATEGORIES YOU MAY BUY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="categories-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Categories, with honest status.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            What you could be considered for depends on category and market. A category shown here is not, by itself, access.
          </p>

          {/* 3 Category Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group relative flex aspect-[16/11] flex-col justify-between overflow-hidden rounded-[20px] bg-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all hover:shadow-[0_12px_32px_rgba(15,23,42,0.14)]"
              >
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between p-4">
                  {/* Status Pill */}
                  {cat.badgeType === "pilot" && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fef3c7] px-3 py-1 text-[11px] font-bold text-[#92400e] shadow-xs">
                      <span className="size-1.5 rounded-full bg-[#d97706]" />
                      <span>{cat.badge}</span>
                    </div>
                  )}

                  {cat.badgeType === "inactive" && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1 text-[11px] font-bold text-[#475569] shadow-xs">
                      <span className="size-1.5 rounded-full bg-[#64748b]" />
                      <span>{cat.badge}</span>
                    </div>
                  )}

                  {cat.badgeType === "approval" && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#1e293b] shadow-xs backdrop-blur-xs">
                      <span className="size-1.5 rounded-full bg-[#0f172a]" />
                      <span>{cat.badge}</span>
                    </div>
                  )}

                  {/* Top-Right Arrow Action */}
                  {cat.hasArrow && (
                    <div className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xs transition-colors group-hover:bg-white group-hover:text-[#0f172a]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-5">
                  <h3 className="text-[17px] font-bold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Full-width callout */}
          <div className="mt-6 flex items-center gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] px-5 py-3.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[12px] font-medium text-[#78350f]">
              An overview or pilot is not a live market or a grant of access. Food is gated independently.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            CATEGORIES YOU MAY BUY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Categories, with honest status.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          What you could be considered for depends on category and market. A category shown here is not, by itself, access.
        </p>

        {/* 3 Stacked Image Cards */}
        <div className="mt-7 flex flex-col gap-4">
          {/* Card 1: Apparel & Footwear */}
          <div className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-slate-900 shadow-[0_4px_16px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/become-a-verified-buyer/vb12.jpg"
              alt="Apparel & Footwear"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            <div className="relative z-10 flex items-center justify-between p-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#d5f5eb] px-3 py-1 text-[11px] font-bold text-[#009b72]">
                <span className="size-1.5 rounded-full bg-[#009b72]" />
                <span>Proposed pilot</span>
              </div>
              <div className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="relative z-10 p-5 text-white">
              <h3 className="text-[17px] font-bold text-white">Apparel &amp; Footwear</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
                UK-focused B2B apparel &amp; footwear resale market.
              </p>
            </div>
          </div>

          {/* Card 2: Consumer Electronics */}
          <div className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-slate-900 shadow-[0_4px_16px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/become-a-verified-buyer/vb13.jpg"
              alt="Consumer Electronics"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            <div className="relative z-10 flex items-center justify-between p-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1 text-[11px] font-bold text-[#475569]">
                <span className="size-1.5 rounded-full bg-[#64748b]" />
                <span>Overview</span>
              </div>
            </div>
            <div className="relative z-10 p-5 text-white">
              <h3 className="text-[17px] font-bold text-white">Consumer Electronics</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
                Condition, data wipes and recall controls apply.
              </p>
            </div>
          </div>

          {/* Card 3: Food & Grocery */}
          <div className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-slate-900 shadow-[0_4px_16px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/become-a-verified-buyer/vb14.jpg"
              alt="Food & Grocery"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            <div className="relative z-10 flex items-center justify-between p-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#78350f]">
                <span className="size-1.5 rounded-full bg-[#d97706]" />
                <span>Safety gated</span>
              </div>
              <div className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="relative z-10 p-5 text-white">
              <h3 className="text-[17px] font-bold text-white">Food &amp; Grocery</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
                Ensure food safety, shelf-life, and traceability compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Footnote Banner */}
        <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] p-3.5 text-[11.5px] leading-relaxed text-[#78350f]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#926016"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-[#926016]"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            An overview or pilot is not a live market or a grant of access. Food is gated independently.
          </span>
        </div>
      </div>
    </section>
  );
}
