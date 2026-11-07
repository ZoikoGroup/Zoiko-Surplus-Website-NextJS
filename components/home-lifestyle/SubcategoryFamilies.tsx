import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface SubcategoryCard {
  id: string;
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
  tags: string[];
  isHazard?: boolean;
}

const subcategories: SubcategoryCard[] = [
  {
    id: "furniture-furnishings",
    title: "Furniture & furnishings",
    description: "Size, material, assembly and movement constraints.",
    imageDesktop: "/images/home-lifestyle/hl3.jpg",
    imageMobile: "/images/home-lifestyle/hl19.jpg",
    tags: ["Structural", "Recall", "Logistics"],
    isHazard: false,
  },
  {
    id: "home-decor-accessories",
    title: "Home décor & accessories",
    description: "Fragility, composition, completeness and condition.",
    imageDesktop: "/images/home-lifestyle/hl4.png",
    imageMobile: "/images/home-lifestyle/hl20.png",
    tags: ["Fragile", "Rights", "Origin"],
    isHazard: false,
  },
  {
    id: "household-textiles",
    title: "Household textiles",
    description: "Fiber/label, hygiene, contamination and condition.",
    imageDesktop: "/images/home-lifestyle/hl5.jpg",
    imageMobile: "/images/home-lifestyle/hl21.jpg",
    tags: ["Hygiene", "Labeling", "Sanitation"],
    isHazard: false,
  },
  {
    id: "seasonal-home-goods",
    title: "Seasonal home goods",
    description: "Storage, ageing, completeness and restricted components.",
    imageDesktop: "/images/home-lifestyle/hl6.png",
    imageMobile: "/images/home-lifestyle/hl22.jpg",
    tags: ["Flammability", "Electrical", "Hazard"],
    isHazard: false,
  },
  {
    id: "kitchenware-housewares",
    title: "Kitchenware & housewares",
    description: "Material and food-contact suitability when relevant.",
    imageDesktop: "/images/home-lifestyle/hl7.jpg",
    imageMobile: "/images/home-lifestyle/hl23.jpg",
    tags: ["Food contact", "Defects", "Regulation"],
    isHazard: false,
  },
  {
    id: "small-household-appliances",
    title: "Small household appliances",
    description: "Electrical condition, plug region, batteries, recalls.",
    imageDesktop: "/images/home-lifestyle/hl8.jpg",
    imageMobile: "/images/home-lifestyle/hl24.jpg",
    tags: ["Electrical", "Batteries", "Recall"],
    isHazard: true,
  },
];

export default function SubcategoryFamilies() {
  return (
    <section id="subcategory-families" aria-labelledby="subcategories-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              SUBCATEGORY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="subcategories-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Six families, six rule sets.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Each subcategory carries its own safety, hygiene and handling considerations. Tags are considerations — not a checklist that grants acceptance, and small appliances aren&apos;t covered by default.
          </p>

          {/* 6 Cards Grid (3 columns, 2 rows) */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((card) => (
              <div
                key={card.id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                {/* Photo container with floating icon */}
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={card.imageDesktop}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 z-10 flex size-7 items-center justify-center rounded-full bg-white text-[#0f172a] shadow-md">
                    {card.isHazard ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="3" />
                        <circle cx="7" cy="15" r="3" />
                        <circle cx="17" cy="15" r="3" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0c1e38]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#fbf2e3] px-2.5 py-0.5 text-[10.5px] font-medium text-[#926016]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              SUBCATEGORIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Six families, six rule sets.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Each subcategory carries its own safety, hygiene and handling considerations. Tags are considerations — not a checklist that grants acceptance, and small appliances aren&apos;t covered by default.
          </p>

          {/* 6 Stacked Cards */}
          <div className="mt-5 flex flex-col gap-4">
            {subcategories.map((card) => (
              <div key={card.id} className="overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-white shadow-xs">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image src={card.imageMobile} alt={card.title} fill sizes="100vw" className="object-cover" />
                  <div className="absolute bottom-2.5 left-2.5 z-10 flex size-7 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.isHazard ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="3" />
                        <circle cx="7" cy="15" r="3" />
                        <circle cx="17" cy="15" r="3" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-[#0c1e38]">{card.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">{card.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {card.tags.map((t) => (
                      <span key={t} className="rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-2.5 py-0.5 text-[10px] font-semibold text-[#926016]">
                        {t}
                      </span>
                    ))}
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
