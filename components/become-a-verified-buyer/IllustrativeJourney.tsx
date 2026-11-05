import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    id: "step-1",
    title: "An organization applies",
    description: "A business submits an application for a market where intake is open — no brands or figures shown here.",
  },
  {
    id: "step-2",
    title: "Review & verification",
    description: "A reviewer assesses the application and verifies identity, role and status.",
  },
  {
    id: "step-3",
    title: "Approved to be considered",
    description: "The organization becomes eligible to receive seller invitations.",
  },
  {
    id: "step-4",
    title: "Seller entitlement",
    description: "A seller entitles the profile for a specific private audience.",
  },
  {
    id: "step-5",
    title: "Active access",
    description: "In a live market, approved opportunities become visible.",
  },
];

export default function IllustrativeJourney() {
  return (
    <section id="illustrative-journey" aria-labelledby="illustrative-journey-heading" className={`${hanken} w-full bg-white order-11 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              ILLUSTRATIVE JOURNEY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="illustrative-journey-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            From application to access —
            <br />
            anonymized.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            An explicitly illustrative, non-operational walkthrough. It contains no real organizations, brands, figures or live data.
          </p>

          {/* 2-Column Section */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Photo: vb6.png */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/become-a-verified-buyer/vb6.png"
                  alt="Enterprise procurement manager reviewing verified inventory delivery boxes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Step Journey Table/Card */}
            <div className="overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] lg:col-span-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#f5e6d0] bg-[#fbf5eb] px-6 py-3.5">
                <div>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">
                    Buyer journey
                  </span>
                  <span className="ml-1.5 text-[13.5px] font-normal text-[#556987]">
                    walkthrough
                  </span>
                </div>
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
                {steps.map((st) => (
                  <div key={st.id} className="p-5 sm:px-6">
                    <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                      {st.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                      {st.description}
                    </p>
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
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ILLUSTRATIVE JOURNEY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          From application to access — anonymized.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          An explicitly illustrative, non-operational walkthrough. It contains no real organizations, brands, figures or live data.
        </p>

        {/* Image */}
        <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden rounded-[20px] shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
          <Image
            src="/images/become-a-verified-buyer/vb16.jpg"
            alt="Illustrative journey meeting"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Walkthrough Card */}
        <div className="mt-5 overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
          {/* Card Header */}
          <div className="flex flex-col gap-2 border-b border-[#f1f5f9] bg-[#faf6ef] p-4">
            <h3 className="text-[13.5px] font-bold text-[#0f172a]">
              Buyer journey walkthrough
            </h3>
            <div className="inline-flex self-start items-center gap-1.5 rounded-full bg-[#fbf2e3] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016]">
              <span>ILLUSTRATIVE · ANONYMIZED · NO LIVE DATA</span>
            </div>
          </div>

          {/* 5 Steps */}
          <div className="divide-y divide-[#f1f5f9]">
            {steps.map((st) => (
              <div key={`m-step-${st.id}`} className="flex items-start gap-3.5 p-4">
                <div className="mt-0.5 size-5 shrink-0 rounded-full bg-[#d5f5eb]" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0f172a]">
                    {st.title}
                  </h4>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">
                    {st.description}
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
