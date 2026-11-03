import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type GovernanceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const items: GovernanceItem[] = [
  {
    id: "audience-approval",
    title: "Audience approval",
    description: "Sellers decide which qualified audiences may ever see an opportunity.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    id: "policy-controls",
    title: "Policy controls",
    description: "Category, brand and conduct policies apply to every audience and opportunity.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "tiered-visibility",
    title: "Tiered visibility",
    description: "Different audiences can see different levels of detail — nothing more than granted.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    id: "withdrawn-entitlements",
    title: "Withdrawn entitlements",
    description: "Access can be revoked at any time, and the change is recorded.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    id: "non-disclosure",
    title: "Non-disclosure",
    description: "Confidential terms, prices and identities stay protected throughout.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "need-to-know",
    title: "Need-to-know",
    description: "Participants see only what their role and entitlement require.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function SellerGovernance() {
  return (
    <section id="seller-governance" aria-labelledby="seller-governance-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <Image
                  src="/images/solution-private-marketplaces/spm6.png"
                  alt="Two executives collaborating over private marketplace governance on mobile and laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Headings & 6 Governance Controls */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  SELLER GOVERNANCE
                </span>
              </div>

              {/* Heading */}
              <h2
                id="seller-governance-heading"
                className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
              >
                The seller governs the whole market.
              </h2>

              {/* Subtitle */}
              <p className="mt-3 max-w-[580px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Audience, policy, visibility and entitlement are all seller-controlled — and revocable at any time.
              </p>

              {/* 6 Feature Rows */}
              <div className="mt-8 flex flex-col gap-5">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12.5px] leading-[1.55] text-[#556987]">
                        {item.description}
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
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Photo on Top */}
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/solution-private-marketplaces/spm16.jpg"
            alt="Seller setting commercial rules and private audience criteria"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Eyebrow */}
        <div className="mt-6 flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            SELLER GOVERNANCE
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          The seller governs the
          <br />
          whole market.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Audience, policy, visibility and entitlement are all seller-controlled — and revocable at any time.
        </p>

        {/* 6 Feature Rows */}
        <div className="mt-7 flex flex-col gap-4.5">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-3.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
