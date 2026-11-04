const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    step: 1,
    title: "Public",
    description: "Browse information only — nothing confidential, no opportunities.",
  },
  {
    step: 2,
    title: "Verified",
    description: "Your organization passed KYB; eligible to be invited, but shown nothing yet.",
  },
  {
    step: 3,
    title: "Entitled",
    description: "A seller approves your profile for a specific private audience.",
  },
  {
    step: 4,
    title: "Active",
    description: "In a live market, approved opportunities become visible to you.",
  },
];

export default function WhatVerificationUnlocks() {
  return (
    <section id="what-verification-unlocks" aria-labelledby="what-unlocks-heading" className={`${hanken} w-full bg-[#fbf9f5] md:bg-[#fbf9f5] order-5 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHAT VERIFICATION UNLOCKS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="what-unlocks-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Public → Verified → Entitled →
            <br />
            Active.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Access is earned in stages. Being verified is not access — a seller still has to entitle you, and the market has to be active.
          </p>

          {/* 4-Step Stepper Card */}
          <div className="mt-10 overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
            <div className="grid grid-cols-1 divide-y divide-[#f1f5f9] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="p-7">
                  <div className="flex size-7 items-center justify-center rounded-full bg-[#0c1e38] text-[12px] font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="mt-4 text-[16px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-[1.65] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-5 flex items-center gap-2">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[11.5px] text-[#64748b]">
              Each state is a separate decision; reaching one never guarantees the next.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#f8fafc] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHAT VERIFICATION UNLOCKS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Public → Verified → Entitled → Active.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Access is earned in stages. Being verified is not access — a seller still has to entitle you, and the market has to be active.
        </p>

        {/* 4 Stacked Step Cards */}
        <div className="mt-7 flex flex-col gap-3.5">
          {steps.map((item) => (
            <div
              key={`m-step-${item.step}`}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]"
            >
              <div className="flex size-7 items-center justify-center rounded-full bg-[#0c1e38] text-[12px] font-bold text-white">
                {item.step}
              </div>

              <h3 className="mt-3 text-[15px] font-bold text-[#0f172a]">
                {item.title}
              </h3>

              <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-5 flex items-start gap-2">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span className="text-[11px] leading-relaxed text-[#64748b]">
            Each state is a separate decision; reaching one never guarantees the next.
          </span>
        </div>
      </div>
    </section>
  );
}
