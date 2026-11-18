import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const categories = [
  {
    category: "Food",
    description: "Documented cold chain, food safe handling, expiry rule.",
    image: "/images/How-the-Platform-Works/htpw9.jpg",
    alt: "Food inventory - fresh fruit requiring cold chain controls",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
        <path d="M12 9v1" />
      </svg>
    ),
  },
  {
    category: "Electronics",
    description: "Data wipe and serialization checks apply.",
    image: "/images/How-the-Platform-Works/htpw10.jpg",
    alt: "Consumer electronics - headphones requiring data wipe and serialization checks",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    category: "Regulated goods",
    description: "Special permits and performance retention checks.",
    image: "/images/How-the-Platform-Works/htpw11.jpg",
    alt: "Industrial machinery and regulated goods requiring special permits",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    category: "Recalled goods",
    description: "Quarantine execution. Never to retail.",
    image: "/images/How-the-Platform-Works/htpw12.jpg",
    alt: "Pharmacy and recalled items under strict quarantine protocols",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function SafetyCategoryGating() {
  return (
    <section aria-label="Safety and Category Gating" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">04</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              SAFETY AND CATEGORY GATING
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Some goods follow different rules.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Special controls apply before any goods are exposed.
          </p>

          {/* 4 Cards Grid with Photo Backgrounds & Overlays */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((item) => (
              <div
                key={item.category}
                className="group relative aspect-[4/5] min-h-[300px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay for bottom text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />

                {/* Floating Top-Right Circular Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-[2px]">
                  {item.icon}
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                    CATEGORY
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold tracking-tight text-white`}>
                    {item.category}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#cbd5e1]">
                    {item.description}
                  </p>
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
            SAFETY AND CATEGORY GATING
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Some goods follow different rules.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Special controls apply before any goods are exposed.
          </p>

          {/* 4 Mobile Cards in a vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: Food */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw40.jpg"
                alt="Food category - documented cold chain"
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
                  CATEGORY
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Food
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Documented cold chain, food safe handling, expiry rule.
                </p>
              </div>
            </div>

            {/* Card 2: Electronics */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw41.jpg"
                alt="Electronics category - data wipe and serialization checks"
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
                  CATEGORY
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Electronics
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Data wipe and serialization checks apply.
                </p>
              </div>
            </div>

            {/* Card 3: Regulated goods */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw42.jpg"
                alt="Regulated goods - special permits"
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
                  CATEGORY
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Regulated goods
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Special permits and performance retention checks.
                </p>
              </div>
            </div>

            {/* Card 4: Recalled goods */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw43.jpg"
                alt="Recalled goods - quarantine execution"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  CATEGORY
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Recalled goods
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Quarantine execution. Never to retail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
