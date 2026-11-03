import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type GateItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const gateItems: GateItem[] = [
  {
    id: "mandate",
    title: "Seller mandate",
    description: "A route runs only within the seller's approved mandate for the goods and audience.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    id: "market",
    title: "Market & corridor",
    description: "The pathway must be permitted for the market, category and transaction corridor.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "category",
    title: "Category rules",
    description: "Category-specific safety and handling rules apply — food is gated separately.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "partner",
    title: "Partner eligibility",
    description: "Only qualified, contracted partners may perform a coordinated service.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "legal",
    title: "Legal & regulatory",
    description: "Licensing, permits and regulatory conditions must be satisfied for the route.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    id: "evidence",
    title: "Evidence requirements",
    description: "The evidence a route must produce is defined before it proceeds.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 14 11 16 15 12" />
      </svg>
    ),
  },
];

export default function EligibilityMandates() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="eligibility-mandates-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-20 md:px-8 md:pt-10 md:pb-28">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Portrait hallway image */}
            <div className="lg:col-span-5">
              <div className="relative h-[480px] w-full overflow-hidden rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:h-[580px] lg:h-[640px]">
                <Image
                  src="/images/solution-surplus-network/sn6.png"
                  alt="Market arcade and shoppers clearing regulatory corridor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Eyebrow, Heading, Subhead & 6 Gates */}
            <div className="flex flex-col lg:col-span-7">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  ELIGIBILITY & MANDATES
                </span>
              </div>

              {/* Section Heading */}
              <h2
                id="eligibility-mandates-desktop-heading"
                className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
              >
                A route needs a mandate
                <br /> and must clear the gates.
              </h2>

              {/* Section Subheading */}
              <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Coordination is permitted only where the seller&apos;s mandate, the market, the category and the partner all qualify.
              </p>

              {/* 6 Gates List */}
              <div className="mt-8 flex flex-col gap-5">
                {gateItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f7f2]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12.5px] leading-[1.5] text-[#556987]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="eligibility-mandates-mobile-heading" className={`block md:hidden ${hanken} w-full bg-white px-4 py-8`}>
        {/* Top Rounded Image Banner */}
        <div className="relative mb-6 h-[200px] w-full overflow-hidden rounded-[20px] shadow-xs">
          <Image
            src="/images/solution-surplus-network/sn17.jpg"
            alt="Inspection and compliance paperwork"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>03</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            ELIGIBILITY & MANDATES
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="eligibility-mandates-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          A route needs a mandate
          <br /> — and must clear the gates.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Coordination is permitted only where the seller&apos;s mandate, the market, the category and the partner all qualify.
        </p>

        {/* 6 Gates List */}
        <div className="mt-6 flex flex-col gap-4">
          {gateItems.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f7f2]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#0c2140]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-[1.5] text-[#556987]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
