const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const entitledItems = [
  "Opportunities inside audiences they're entitled to.",
  "The detail tier the seller has granted them.",
  "Terms and conditions that apply to that opportunity.",
];

const restrictedItems = [
  "Confidential inventory, manifests or quantities.",
  "Prices, bids or other buyers' identities.",
  "Anything outside their granted entitlement.",
];

export default function ProtectedDiscoveryModel() {
  return (
    <section id="protected-discovery-model" aria-labelledby="protected-discovery-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PROTECTED DISCOVERY MODEL
            </span>
          </div>

          {/* Heading */}
          <h2
            id="protected-discovery-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            What approved users may — and
            <br />
            may not — see.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Discovery is bounded by entitlement. Even an authorized user sees only what they&apos;ve been granted.
          </p>

          {/* Comparison Dual-Card / Matrix */}
          <div className="mt-10 overflow-hidden rounded-[20px] border border-[#e2e8f0] shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Entitled Users */}
              <div className="flex flex-col border-b border-[#e2e8f0] bg-white md:border-b-0 md:border-r">
                {/* Header */}
                <div className="flex items-center gap-2.5 bg-[#e4f6ef] px-6 py-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[14px] font-bold text-[#007f5d]">
                    An entitled user may see
                  </span>
                </div>

                {/* Rows */}
                <div className="divide-y divide-[#f1f5f9]">
                  {entitledItems.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-6 py-4.5">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#009b72"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13px] font-medium text-[#334155]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: No One Sees Publicly */}
              <div className="flex flex-col bg-[#0c1e38]">
                {/* Header */}
                <div className="flex items-center gap-2.5 border-b border-[#1b2f4f] bg-[#0c1e38] px-6 py-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                  <span className="text-[14px] font-bold text-white">
                    No one sees publicly
                  </span>
                </div>

                {/* Rows */}
                <div className="divide-y divide-[#182c49]">
                  {restrictedItems.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-6 py-4.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span className="text-[13px] font-medium text-[#cbd5e1]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note Callout */}
          <div className="mt-4 flex items-center gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] px-5 py-3.5">
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
              No confidential data appears on public pages, in search results or in analytics.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            PROTECTED DISCOVERY MODEL
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          What approved users
          <br />
          may — and may not —
          <br />
          see.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Discovery is bounded by entitlement. Even an authorized user sees only what they&apos;ve been granted.
        </p>

        {/* Mobile Stacked Matrix */}
        <div className="mt-7 overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          {/* Header 1: Entitled Users */}
          <div className="flex items-center gap-2 bg-[#e4f6ef] px-4.5 py-3 border-b border-[#d1ede1]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-[12.5px] font-bold text-[#007f5d]">
              An entitled user may see
            </span>
          </div>

          {/* Header 2: Publicly Hidden */}
          <div className="flex items-center gap-2 bg-[#0c1e38] px-4.5 py-3 border-b border-[#1b2f4f]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
            <span className="text-[12.5px] font-bold text-white">
              No one sees publicly
            </span>
          </div>

          {/* 3 White Entitled Items */}
          <div className="divide-y divide-[#f1f5f9] bg-white">
            {entitledItems.map((text, idx) => (
              <div key={idx} className="flex items-start gap-2.5 px-4.5 py-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009b72"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[12px] font-medium leading-relaxed text-[#334155]">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* 3 Dark Navy Restricted Items */}
          <div className="divide-y divide-[#182c49] bg-[#0c1e38]">
            {restrictedItems.map((text, idx) => (
              <div key={idx} className="flex items-start gap-2.5 px-4.5 py-3">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span className="text-[12px] font-medium leading-relaxed text-[#cbd5e1]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note Callout */}
        <div className="mt-4 flex items-center gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] px-4 py-3">
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
          <span className="text-[11.5px] font-medium leading-normal text-[#78350f]">
            No confidential data appears on public pages, in search results or in analytics.
          </span>
        </div>
      </div>
    </section>
  );
}
