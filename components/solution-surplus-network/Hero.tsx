import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Coordinate the right disposition pathway" className={`${hanken} w-full bg-white`}>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] p-4 sm:p-6 lg:p-8">
          <div className="relative min-h-[540px] overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-[0_12px_36px_rgba(10,25,50,0.18)]">
            {/* Background warehouse photo */}
            <Image
              src="/images/solution-surplus-network/sn1.png"
              alt="Warehouse inventory inspection"
              fill
              priority
              className="pointer-events-none object-cover object-right"
            />

            {/* Deep navy atmospheric gradient overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#0a1b35_0%,rgba(10,27,53,0.94)_46%,rgba(10,27,53,0.42)_100%)]"
            />

            {/* Inner content grid */}
            <div className="relative z-10 flex min-h-[540px] flex-col items-center justify-between gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:flex-row lg:px-14 lg:py-14">
              {/* Left Column: Heading, intro, CTAs & note */}
              <div className="flex w-full max-w-[580px] flex-col items-start">
                <h1 className="text-[38px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px]">
                  Coordinate the
                  <br />
                  right <span className="text-[#18a884]">disposition</span>
                  <br />
                  <span className="text-[#18a884]">pathway</span>
                </h1>

                <p className="mt-4 max-w-[490px] text-[15px] leading-[1.55] text-white/85 sm:text-[16.5px]">
                  Explore how seller-approved inventory can be directed toward permitted third-party services — with qualification, oversight and evidence at every applicable step.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#"
                    className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[14.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                  >
                    Request Enterprise Demo
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/50 bg-[#0c2140]/30 px-6 text-[14.5px] font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/80 hover:bg-white/10"
                  >
                    Explore Partner Participation
                  </a>
                </div>

                {/* Footnote with info circle */}
                <div className="mt-7 flex items-center gap-2 text-[12px] text-white/70">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-white/60"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span>Market and category access is subject to eligibility and local availability.</span>
                </div>
              </div>

              {/* Right Column: Floating white card */}
              <div className="w-full max-w-[390px] shrink-0 rounded-[20px] border border-white/30 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] lg:p-7">
                {/* Category subhead / caption */}
                <div className="mb-4 flex items-center gap-1.5 text-[11px] font-bold tracking-[0.06em] text-[#18a884] uppercase">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  <span>A QUALIFIED ROUTE, COORDINATED</span>
                </div>

                {/* Lot identity item */}
                <div className="mb-5 flex items-center gap-3.5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#009b72] text-white shadow-sm">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold leading-tight text-gray-900">Seller-approved lot</h3>
                    <p className="mt-0.5 text-[12px] text-gray-500">Qualified · permitted · governed</p>
                  </div>
                </div>

                {/* 2x2 Grid of pathway options */}
                <div className="mb-4 grid grid-cols-2 gap-2.5">
                  {/* Resale */}
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200/90 bg-white px-3 py-2.5 text-[13px] font-medium text-gray-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                      <path d="M3 21v-5h5" />
                    </svg>
                    <span>Resale</span>
                  </div>

                  {/* Recycling */}
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200/90 bg-white px-3 py-2.5 text-[13px] font-medium text-gray-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.77l3.9-6.84a1.83 1.83 0 0 1 1.57-.91H12" />
                      <path d="M11 5l3-3 3 3" />
                      <path d="M14 2v6" />
                      <path d="M17 19h2.185a1.83 1.83 0 0 0 1.57-2.77l-3.9-6.84a1.83 1.83 0 0 0-1.57-.91H13" />
                    </svg>
                    <span>Recycling</span>
                  </div>

                  {/* Donation */}
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200/90 bg-white px-3 py-2.5 text-[13px] font-medium text-gray-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>Donation</span>
                  </div>

                  {/* Logistics */}
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200/90 bg-white px-3 py-2.5 text-[13px] font-medium text-gray-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    <span>Logistics</span>
                  </div>
                </div>

                {/* Bottom explanatory note */}
                <div className="flex items-start gap-1.5 text-[11px] leading-[1.4] text-gray-500">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span>Illustrative — partners are authorized and separately contracted, not operated by Zoiko.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <div className="flex flex-col bg-white md:hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 px-4 pt-4 text-[12px] text-[#5a6b7b]">
          <a href="/" className="hover:underline">Home</a>
          <span className="text-[#a0aec0]">/</span>
          <a href="#" className="hover:underline">Solutions</a>
          <span className="text-[#a0aec0]">/</span>
          <span className="font-semibold text-[#0c2140]">Surplus Network</span>
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 px-4 pt-4">
          <span className="h-[1.5px] w-5 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            SOLUTIONS · SURPLUS NETWORK
          </span>
        </div>

        {/* Heading */}
        <h1 className="px-4 pt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0c2140]">
          Coordinate the
          <br />
          right <span className="text-[#18a884]">disposition</span>
          <br />
          <span className="text-[#18a884]">pathway</span>.
        </h1>

        {/* Description */}
        <p className="px-4 pt-3 text-[14px] leading-[1.55] text-[#556987]">
          Explore how seller-approved inventory can be directed toward permitted third-party services — with qualification, oversight and evidence at every applicable step.
        </p>

        {/* Action Buttons & Links */}
        <div className="flex flex-col gap-3 px-4 pt-5">
          <a
            href="#"
            className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[14px] font-semibold text-white shadow-sm"
          >
            Request Enterprise Demo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="flex h-[46px] w-full items-center justify-center rounded-full border border-gray-300 bg-white text-[14px] font-semibold text-[#0c2140] shadow-2xs"
          >
            Explore Partner Participation
          </a>

          <a
            href="#"
            className="flex items-center gap-1.5 pt-1 text-[13.5px] font-semibold text-[#009b72]"
          >
            How It Works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Footnote */}
          <p className="pt-1 text-[11px] leading-[1.5] text-[#718096]">
            <span className="mr-1 inline-block text-[8px] text-gray-400">●</span>
            Pathway eligibility, partners and service availability vary by market, category, mandate and approval. Zoiko coordinates — it does not own goods, warehouses or fleets.
          </p>
        </div>

        {/* Mobile Graphic Card with sn12.jpg background */}
        <div className="relative mx-4 mt-6 overflow-hidden rounded-[22px] p-5 shadow-[0_12px_36px_rgba(10,25,50,0.18)]">
          <Image
            src="/images/solution-surplus-network/sn12.jpg"
            alt="Retail inventory figurines"
            fill
            className="pointer-events-none object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,30,56,0.85)_0%,rgba(12,30,56,0.65)_50%,rgba(12,30,56,0.92)_100%)]"
          />

          <div className="relative z-10 flex flex-col gap-4">
            {/* Tag */}
            <div className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.06em] text-[#18a884] uppercase">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span>A QUALIFIED ROUTE, COORDINATED</span>
            </div>

            {/* Lot identity item */}
            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#009b72] text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-white">Seller-approved lot</h3>
                <p className="text-[11px] text-white/70">Qualified · permitted · governed</p>
              </div>
            </div>

            {/* 2x2 Translucent Pills */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-medium text-white backdrop-blur-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18a884" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
                <span>Resale</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-medium text-white backdrop-blur-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18a884" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.77l3.9-6.84a1.83 1.83 0 0 1 1.57-.91H12" />
                  <path d="M11 5l3-3 3 3" />
                  <path d="M14 2v6" />
                  <path d="M17 19h2.185a1.83 1.83 0 0 0 1.57-2.77l-3.9-6.84a1.83 1.83 0 0 0-1.57-.91H13" />
                </svg>
                <span>Recycling</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-medium text-white backdrop-blur-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18a884" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span>Donation</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-medium text-white backdrop-blur-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18a884" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span>Logistics</span>
              </div>
            </div>

            {/* Footnote */}
            <p className="flex items-center gap-1.5 text-[10px] text-white/70">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/50">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Illustrative — partners are authorized and separately contracted, not operated by Zoiko.
            </p>
          </div>
        </div>

        {/* Mobile Horizontal Sub-Navigation Strip */}
        <div className="mt-7 w-full border-y border-gray-100 bg-white px-5 py-3 shadow-2xs">
          <div className="flex items-center justify-between text-[12.5px] font-medium text-[#4a5568]">
            <span className="font-semibold text-[#0c2140]">Where it fits</span>
            <span>Coordination</span>
            <span>Eligibility</span>
            <span>Lifecycle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
