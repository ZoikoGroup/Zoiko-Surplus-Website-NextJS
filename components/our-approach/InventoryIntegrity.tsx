import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const integrityCards = [
  {
    title: "Ownership",
    description: "Seller identity and ownership exclusion are reviewed before a lot can move.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    title: "Condition",
    description: "Condition and quantity are documented against the category's requirements.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    title: "Provenance & recall",
    description: "Origin and recall status are considered where the category requires it.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Category review",
    description: "Product-specific safety and handling evidence applies before any route is offered.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function InventoryIntegrity() {
  return (
    <section
      id="inventory-integrity"
      aria-labelledby="inventory-integrity-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              INVENTORY INTEGRITY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="inventory-integrity-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Condition, provenance and
            <br />
            category safety come first.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.
          </p>

          {/* Cards + Visual Split */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Left 2x2 Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {integrityCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs"
                >
                  <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#fbf4e6] text-[#926016]">
                    {card.icon}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-[14.5px] font-extrabold text-[#0c1e38]">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Visual (soa18.jpg) */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_8px_28px_rgba(12,30,56,0.08)]">
                <Image
                  src="/images/Zoiko-Surplus-Our-Approach/soa18.jpg"
                  alt="Inspector logging lot condition and provenance evidence on clipboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-semibold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    Illustrative imagery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Food Gate Warning */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf9ef] px-4.5 py-3 text-[12px] leading-relaxed text-[#7c5c2b]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              <strong className="font-bold text-[#6b4b1e]">Food is gated separately:</strong> Food and beverage surplus has own safety decision. No live food program is described or implied on this page. Qualification does not imply automatic acceptance of any product.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            INVENTORY INTEGRITY
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Condition, provenance and category safety come first.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.
          </p>

          {/* 4 Stacked Integrity Cards */}
          <div className="mt-6 flex flex-col gap-3">
            {integrityCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-4.5 shadow-2xs"
              >
                <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#fbf4e6] text-[#926016]">
                  {card.icon}
                </div>
                <h3 className="mt-3 text-[14.5px] font-extrabold text-[#0c1e38]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Visual Card (soa40.jpg) */}
          <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Zoiko-Surplus-Our-Approach/soa40.jpg"
              alt="Inspector logging lot condition and provenance evidence on clipboard"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </span>
            </div>
          </div>

          {/* Food Gate Warning Box */}
          <div className="mt-4 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf9ef] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              <strong className="font-bold text-[#6b4b1e]">Food is gated separately:</strong> Food and beverage surplus has own safety decision. No live food program is described or implied on this page. Qualification does not imply automatic acceptance of any product.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
