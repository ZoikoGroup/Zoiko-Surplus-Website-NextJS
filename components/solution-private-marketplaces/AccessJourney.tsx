import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const journeySteps = [
  {
    id: "public-page",
    title: "Public page (here)",
    description: "A visitor reads how private markets work — no confidential data, no opportunities shown.",
  },
  {
    id: "application",
    title: "Application",
    description: "An organization applies and completes verification for its categories and markets.",
  },
  {
    id: "seller-invitation",
    title: "Seller invitation",
    description: "A seller approves the profile into a specific private audience.",
  },
  {
    id: "authorized-sign-in",
    title: "Authorized sign-in",
    description: "The entitled user signs in to the protected experience, where enabled.",
  },
  {
    id: "scoped-visibility",
    title: "Scoped visibility",
    description: "Only granted opportunities, at the granted tier, become visible.",
  },
];

export default function AccessJourney() {
  return (
    <section id="access-journey" aria-labelledby="access-journey-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              ACCESS JOURNEY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="access-journey-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            From public page to protected
            <br />
            view — anonymized.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            An explicitly illustrative walkthrough of how a participant crosses from public information to a protected, entitled view. No real data is shown.
          </p>

          {/* 2-Column Layout */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_2px_16px_rgba(15,23,42,0.04)] sm:aspect-[4/3]">
                <Image
                  src="/images/solution-private-marketplaces/spm10.png"
                  alt="Authorized participant signing verified private marketplace access agreement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Step Journey Table/Card */}
            <div className="overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] lg:col-span-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#f5e6d0] bg-[#fbf5eb] px-6 py-3.5">
                <span className="text-[13.5px] font-bold text-[#0f172a]">
                  Access journey
                </span>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f6ebdc] px-3 py-1 text-[10.5px] font-bold tracking-wider text-[#926016] uppercase">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>Illustrative • Anonymized • No live data</span>
                </div>
              </div>

              {/* 5 Steps */}
              <div className="divide-y divide-[#f1f5f9]">
                {journeySteps.map((step) => (
                  <div key={step.id} className="flex items-start gap-4 p-5 sm:px-6">
                    <div className="relative mt-1 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-[#009b72]/40 ring-4 ring-[#d5f5eb]" />
                    <div>
                      <h3 className="text-[14px] font-bold text-[#0f172a]">
                        {step.title}
                      </h3>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#556987]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ACCESS JOURNEY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          From public page to
          <br />
          protected view —
          <br />
          anonymized.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          An explicitly illustrative walkthrough of how a participant crosses from public information to a protected, entitled view. No real data is shown.
        </p>

        {/* Mobile Photo */}
        <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/solution-private-marketplaces/spm20.jpg"
            alt="Collaborative meeting reviewing private market verified participants"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Access Journey Card */}
        <div className="mt-6 overflow-hidden rounded-[18px] border border-[#eef2f6] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-[#f5e6d0] bg-[#fbf5eb] p-4">
            <span className="text-[13px] font-bold text-[#0f172a]">
              Access journey
            </span>
            <div className="inline-flex items-center gap-1 rounded-full bg-[#f6ebdc] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016] uppercase">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Illustrative • Anonymized • No live data</span>
            </div>
          </div>

          {/* 5 Steps */}
          <div className="divide-y divide-[#f1f5f9]">
            {journeySteps.map((step) => (
              <div key={step.id} className="flex items-start gap-3 p-4">
                <div className="relative mt-1 flex size-3 shrink-0 items-center justify-center rounded-full bg-[#009b72]/40 ring-4 ring-[#d5f5eb]" />
                <div>
                  <h3 className="text-[13px] font-bold text-[#0f172a]">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#556987]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
