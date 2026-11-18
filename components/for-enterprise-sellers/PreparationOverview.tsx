import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const facts = [
  {
    tag: "FACT 1",
    title: "Product identity",
    description: "What the goods are, in terms a reviewer can check.",
    image: "/images/For-Enterprise-Sellers/fes2.jpg",
    alt: "Product identity - reviewing inventory records on laptop",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
      </svg>
    ),
  },
  {
    tag: "FACT 2",
    title: "Condition",
    description: "The state of the goods, as the seller records it.",
    image: "/images/For-Enterprise-Sellers/fes3.jpg",
    alt: "Condition - inspecting goods and lot state",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 14" />
      </svg>
    ),
  },
  {
    tag: "FACT 3",
    title: "Provenance",
    description: "Where the goods came from and the right to dispose of them.",
    image: "/images/For-Enterprise-Sellers/fes4.png",
    alt: "Provenance - documenting origin and title of goods",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    tag: "FACT 4",
    title: "Authority",
    description: "A legitimate decision maker who can approve a route.",
    image: "/images/For-Enterprise-Sellers/fes5.png",
    alt: "Authority - authorized commercial logistics decisions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    tag: "FACT 5",
    title: "Location and market",
    description: "Where the goods are and the intended destination market.",
    image: "/images/For-Enterprise-Sellers/fes6.png",
    alt: "Location and market - retail apparel inventory corridor",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    tag: "FACT 6",
    title: "Restrictions",
    description: "Brand, safety, resell and legal limits that apply.",
    image: "/images/For-Enterprise-Sellers/fes7.png",
    alt: "Restrictions - formal review stamps and compliance approval",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function PreparationOverview() {
  return (
    <section aria-label="Preparation Overview - Start with the facts" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PREPARATION OVERVIEW
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Start with the facts.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Product identity, condition, provenance, any restrictions, a legitimate decision maker and an intended destination market. This is a short cue. The full checklist lives in the Seller Readiness guide.
          </p>

          {/* 6 Cards Grid (3 columns, 2 rows) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {facts.map((item) => (
              <div
                key={item.tag}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  {/* Photo Container with floating top-right badge */}
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
                  <div className="p-6">
                    <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                      {item.tag}
                    </span>
                    <h3 className={`${sora} mt-1.5 text-[19px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
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
            PREPARATION OVERVIEW
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Start with the facts.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Product identity, condition, provenance, any restrictions, a legitimate decision maker and an intended destination market. This is a short cue. The full checklist lives in the Seller Readiness guide.
          </p>

          {/* 6 Mobile Cards in vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Fact 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/For-Enterprise-Sellers/fes30.jpg"
                  alt="Product identity - reviewing technical specifications"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    FACT 1
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Product identity
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    What the goods are, in terms a reviewer can check.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#926016]">DO NOT ENTER:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Generic brand names only.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/For-Enterprise-Sellers/fes31.jpg"
                  alt="Condition - inspecting physical item condition"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 14 14" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    FACT 2
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Condition
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    The state of the goods, as the seller records it.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#926016]">DO NOT ENTER:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Self-declared warranty defaults.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/For-Enterprise-Sellers/fes32.jpg"
                  alt="Provenance - verifying supply chain and custody records"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    FACT 3
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Provenance
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Where the goods came from and the right to dispose of them.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#926016]">DO NOT ENTER:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Single-party assertions of salvage.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 4 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/For-Enterprise-Sellers/fes33.jpg"
                  alt="Authority - authorized corporate representative approval"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    FACT 4
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Authority
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    A legitimate decision maker who can approve a route.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#926016]">DO NOT ENTER:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Speculative or unauthorized brokers.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 5 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/For-Enterprise-Sellers/fes34.jpg"
                  alt="Location and market - inventory origin and corridor"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    FACT 5
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Location and market
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Where the goods are and the intended destination market.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#926016]">DO NOT ENTER:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Hypothetical transit corridors.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 6 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/For-Enterprise-Sellers/fes35.jpg"
                  alt="Restrictions - brand, safety and legal constraints"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    FACT 6
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Restrictions
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Brand, safety, resell and legal limits that apply.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#926016]">DO NOT ENTER:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Assumed permit or license waivers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footnote / Disclaimer */}
          <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3.5 text-[#926016]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-[11.5px] leading-relaxed">
              Documents required, validated, and held confidential until authorized by signed agreement. Preparation is evaluating readiness, not confirming a transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
