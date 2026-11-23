import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shirt, Utensils, Headphones, Home, Factory } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const primaryCategory = {
  badge: "★ Proposed first pilot",
  title: "Apparel & Footwear",
  description: "UK-focused B2B apparel and footwear resale marketplace.",
  image: "/images/Product-Safety/ps7.png",
  href: "/categories-apparel-footwear",
};

const secondaryCategories = [
  {
    badge: "• Not yet activated",
    title: "Consumer Goods",
    description: "Household and lifestyle goods with verified resale compliance.",
    image: "/images/Product-Safety/ps8.png",
    href: "#",
  },
  {
    badge: "• Separate approval",
    title: "Food & Grocery",
    description: "Ensure food safety, shelf-life, and traceability compliance.",
    image: "/images/Product-Safety/ps9.png",
    href: "#",
  },
  {
    badge: "• Planned, if approved",
    title: "Further Categories",
    description: "Expand into industrial and business goods upon approval.",
    image: "/images/Product-Safety/ps10.png",
    href: "#",
  },
];

const mobileCategories = [
  {
    tag: "CATEGORY 1",
    title: "Apparel and footwear",
    description: "Non-complex second-hand and overstock surplus items.",
    note: "NOTE: Basic packaging only; cannot be modified.",
    image: "/images/Product-Safety/ps34.jpg",
    icon: <Shirt className="size-3.5" strokeWidth={2} />,
  },
  {
    tag: "CATEGORY 2",
    title: "Food and grocery",
    description: "Food must never be disposed without separate approval.",
    note: "NOTE: Special packaging and date limits apply.",
    image: "/images/Product-Safety/ps35.jpg",
    icon: <Utensils className="size-3.5" strokeWidth={2} />,
  },
  {
    tag: "CATEGORY 3",
    title: "Consumer electronics",
    description: "Functional and cosmetic state verification for power and battery.",
    note: "NOTE: Clear device memory before delivery.",
    image: "/images/Product-Safety/ps36.jpg",
    icon: <Headphones className="size-3.5" strokeWidth={2} />,
  },
  {
    tag: "CATEGORY 4",
    title: "Home and lifestyle",
    description: "Hard goods, non-regulated everyday items.",
    note: "NOTE: Pre-assembled and sealed units are preferred.",
    image: "/images/Product-Safety/ps37.jpg",
    icon: <Home className="size-3.5" strokeWidth={2} />,
  },
  {
    tag: "CATEGORY 5",
    title: "Industrial and business goods",
    description: "Machinery and operating parts. Professional instruction.",
    note: "NOTE: Heavy handling and inspection protocols.",
    image: "/images/Product-Safety/ps38.jpg",
    icon: <Factory className="size-3.5" strokeWidth={2} />,
  },
];

export default function CategoryOverview() {
  return (
    <section aria-label="Category Overview - Requirements vary by product and market" className={`${hanken} w-full bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">03</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CATEGORY OVERVIEW
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Requirements vary by
            <br />
            product and market.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Five educational overviews. No filters, counts or availability scores.
          </p>

          {/* Cards Layout */}
          <div className="mt-10 flex flex-col gap-5">
            {/* Top Wide Card: Apparel & Footwear */}
            <Link
              href={primaryCategory.href}
              className="group relative h-[250px] lg:h-[280px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md block"
            >
              <Image
                src={primaryCategory.image}
                alt="Apparel and footwear showroom inventory"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1400px) 100vw, 1380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/45 to-transparent" />

              {/* Top-Left Pill Badge */}
              <div className="absolute top-4 left-4 z-10 rounded-full border border-[#fef3c7] bg-[#fffbeb]/95 backdrop-blur-[2px] px-3.5 py-1 text-[11px] font-semibold text-[#926016] shadow-xs">
                {primaryCategory.badge}
              </div>

              {/* Top-Right Arrow Button */}
              <div className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-[2px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" strokeWidth={2.5} />
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <h3 className={`${sora} text-[22px] font-bold text-white tracking-tight`}>
                  {primaryCategory.title}
                </h3>
                <p className="mt-1 text-[13px] text-slate-200">
                  {primaryCategory.description}
                </p>
              </div>
            </Link>

            {/* Bottom 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {secondaryCategories.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-[210px] lg:h-[230px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/45 to-transparent" />

                  {/* Top-Left Pill Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 rounded-full border border-white/20 bg-white/85 backdrop-blur-[2px] px-3 py-0.5 text-[10.5px] font-medium text-[#0c1e38] shadow-xs">
                    {item.badge}
                  </div>

                  {/* Top-Right Indicator */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-[2px]">
                    <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h3 className={`${sora} text-[18px] font-bold text-white tracking-tight`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            CATEGORY OVERVIEW
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Requirements vary by product and market.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Five educational overviews. No filters, counts or availability scores.
          </p>

          {/* 5 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {mobileCategories.map((item) => (
              <div
                key={item.tag}
                className="group relative h-[210px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d] via-[#08182d]/65 to-transparent" />

                {/* Top-Right Badge */}
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#00c48c] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-snug text-slate-200">
                    {item.description}
                  </p>
                  <div className="mt-2 inline-block rounded-lg border border-[#fef3c7] bg-[#fff8eb]/90 px-2.5 py-1 text-[10.5px] font-medium text-[#926016] backdrop-blur-xs">
                    {item.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
