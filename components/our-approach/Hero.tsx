import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const pillars = [
  {
    title: "Qualified",
    description: "Condition and eligibility reviewed first.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "Seller-controlled",
    description: "Sellers define who sees an opportunity.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Policy before matching",
    description: "Safety and category rules run early.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Market by market",
    description: "Activated only where approved.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      aria-label="A governed approach to surplus recovery"
      className={`${hanken} w-full bg-gradient-to-b from-[#fdfcf9] via-[#fbf9f5]/80 to-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-18 md:px-8 md:pt-20 md:pb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Copy, Actions, Notice */}
            <div className="flex flex-col lg:col-span-6">
              <h1 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0c1e38] lg:text-[58px]">
                A governed
                <br />
                approach
                <br />
                to <span className="text-[#009b72]">surplus recovery.</span>
              </h1>

              <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-[#556987] sm:text-[16px]">
                Zoiko Surplus connects inventory qualification, controlled business access, transaction workflows and outcome evidence in one configurable operating approach.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="/how-it-works"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13.5px] font-bold text-[#0c1e38] shadow-xs transition-colors hover:bg-slate-50"
                >
                  Explore How It Works
                </Link>
              </div>

              {/* Permission Notice */}
              <div className="mt-6 flex max-w-[520px] items-start gap-2.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009b72"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-[#009b72]"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <p className="text-[11.5px] leading-relaxed text-[#64748b]">
                  <strong className="font-bold text-[#0c1e38]">
                    Private inventory and buyer access are governed by approved permissions.
                  </strong>{" "}
                  Access to markets and categories depends on eligibility and local availability. Each market, category and pathway requires approval before activation.
                </p>
              </div>
            </div>

            {/* Right Column: Hero Visual (soa1.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative ml-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_14px_40px_rgba(12,30,56,0.1)]">
                <Image
                  src="/images/Zoiko-Surplus-Our-Approach/soa1.jpg"
                  alt="Enterprise specialists reviewing surplus inventory qualification on a laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold text-[#0c1e38] shadow-sm backdrop-blur-xs">
                    Illustrative imagery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Pillar Strip */}
        <div className="w-full border-y border-slate-100 bg-white">
          <div className="mx-auto grid w-full max-w-[1380px] grid-cols-2 gap-6 px-6 py-5 md:grid-cols-4 md:px-8">
            {pillars.map((item) => (
              <div key={item.title} className="flex items-center gap-3.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#cceee4] bg-[#eefaf6] text-[#009b72]">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-[12.5px] font-bold text-[#0c1e38]">{item.title}</h2>
                  <p className="text-[11.5px] text-[#64748b]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-gradient-to-b from-[#fbf7f0] to-[#fdfbf8]">
        <div className="w-full px-5 pt-4 pb-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#718096]">
            <Link href="/" className="hover:text-[#0c1e38]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#0c1e38]">Company</Link>
            <span>/</span>
            <span className="font-semibold text-[#0c1e38]">Our Approach</span>
          </nav>

          {/* Eyebrow */}
          <p className={`${sora} mt-5 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            OUR APPROACH
          </p>

          {/* Heading */}
          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38]">
            A governed
            <br />
            approach to
            <br />
            <span className="text-[#009b72]">surplus recovery.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#556987]">
            Zoiko Surplus connects inventory qualification, controlled business access, transaction workflows and outcome evidence in one configurable operating approach.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col items-start gap-2.5">
            <Link
              href="/contact"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs"
            >
              <span>Request Enterprise Demo</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13px] font-bold text-[#0c1e38] shadow-2xs"
            >
              Explore How It Works
            </Link>
          </div>

          {/* Permission Notice */}
          <div className="mt-5 flex items-start gap-2.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#009b72"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <p className="text-[11px] leading-relaxed text-[#64748b]">
              <strong className="font-bold text-[#0c1e38]">
                Private inventory and buyer access are governed by approved permissions.
              </strong>{" "}
              Access to markets and categories depends on eligibility and local availability. Each market, category and pathway requires approval before activation.
            </p>
          </div>

          {/* Mobile Visual Card (soa24.png) + Overlapping Seven-Stage Flow */}
          <div className="mt-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-sm">
              <Image
                src="/images/Zoiko-Surplus-Our-Approach/soa24.png"
                alt="Enterprise specialists collaborating on governed surplus recovery"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative z-10 -mt-[190px] ml-2.5 w-[84%] max-w-[270px] rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-[0_14px_34px_rgba(12,30,56,0.12)]">
              <p className={`${sora} text-[9.5px] font-bold tracking-[0.14em] text-[#64748b] uppercase`}>
                SEVEN-STAGE FLOW
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  { num: 1, label: "Qualify" },
                  { num: 2, label: "Govern" },
                  { num: 3, label: "Match" },
                  { num: 4, label: "Optimize" },
                  { num: 5, label: "Transact" },
                  { num: 6, label: "Prove" },
                  { num: 7, label: "Resolve", full: true },
                ].map((stage) => (
                  <div
                    key={stage.num}
                    className={`flex items-center gap-2 rounded-[8px] bg-[#fbf7f0] px-2.5 py-2 ${
                      stage.full ? "col-span-2" : ""
                    }`}
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] text-[10px] font-bold text-white">
                      {stage.num}
                    </span>
                    <span className="text-[11.5px] font-bold text-[#0c1e38]">{stage.label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[10px] text-[#718096]">
                Abstract. No listings, lots or prices.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile 4-Item Pillar Strip */}
        <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-5 py-6">
          {pillars.map((item) => (
            <div key={item.title} className="flex items-center gap-3.5">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#cceee4] bg-[#eefaf6] text-[#009b72]">
                {item.icon}
              </div>
              <div>
                <h2 className="text-[12.5px] font-bold text-[#0c1e38]">{item.title}</h2>
                <p className="text-[11.5px] text-[#64748b]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
