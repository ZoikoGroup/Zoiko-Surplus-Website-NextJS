import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const learningCards = [
  {
    title: "Categories",
    description: "Category-by-category rules.",
    href: "/categories-apparel-footwear",
    image: "/images/How-the-Platform-Works/htpw19.png",
    alt: "Categories - retail apparel rules and specifications",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
      </svg>
    ),
  },
  {
    title: "Trust & Safety",
    description: "Controls and limits.",
    href: "/trust-and-safety",
    image: "/images/How-the-Platform-Works/htpw20.png",
    alt: "Trust & Safety - verification and governance limits",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Surplus Network",
    description: "Partner participation.",
    href: "/partner-participation",
    image: "/images/How-the-Platform-Works/htpw21.png",
    alt: "Surplus Network - authorized logistics and partner capabilities",
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
    title: "Buyer Qualification",
    description: "What verification means.",
    href: "/become-a-verified-buyer",
    image: "/images/How-the-Platform-Works/htpw22.jpg",
    alt: "Buyer Qualification - business counterparty verification review",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function RelatedLearning() {
  return (
    <section aria-label="Related Learning - Where to go next" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RELATED LEARNING
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Where to go next.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            These links go live only when each destination is approved.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningCards.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-[190px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-[2px]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 pb-3">
                    <h3 className={`${sora} text-[18px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="p-5 pt-1">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#926016] hover:text-[#784f12] transition-colors"
                  >
                    <span>Pending</span>
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
            RELATED LEARNING
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Where to go next.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            These links go live only when each destination is approved.
          </p>

          {/* 4 Mobile Cards in a vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: Categories */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw50.jpg"
                  alt="Categories - category rules"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
              </div>
              <div className="p-5 pb-3">
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Categories
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  Category-by-category rules.
                </p>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/categories-apparel-footwear"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Pending</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Trust & Safety */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw51.jpg"
                  alt="Trust & Safety - controls and limits"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
              </div>
              <div className="p-5 pb-3">
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Trust & Safety
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  Controls and limits.
                </p>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/trust-and-safety"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Pending</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Surplus Network */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw52.jpg"
                  alt="Surplus Network - partner participation"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </div>
              <div className="p-5 pb-3">
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Surplus Network
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  Partner participation.
                </p>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/partner-participation"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Pending</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Buyer Qualification */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw53.jpg"
                  alt="Buyer Qualification - what verification means"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                  </svg>
                </div>
              </div>
              <div className="p-5 pb-3">
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Buyer Qualification
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  What verification means.
                </p>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/become-a-verified-buyer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Pending</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
