import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cases = [
  {
    title: "Sign in",
    description: "For account-specific matters.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Secure request",
    description: "Evidence only via approved channels.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "No public lookup",
    description: "A reference is not a credential.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "No timeline",
    description: "Unless a policy states one.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function FollowUpAndAccountCases() {
  return (
    <section aria-label="Follow-up and Account Cases" className={`${hanken} w-full bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FOLLOW-UP AND ACCOUNT CASES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Account details need a secure route.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Sign in for account-specific offers, orders, invitations or case information.
            <br />
            Further information may be requested through an approved secure channel.
          </p>

          {/* Two Columns: Image on Left, 4 Cards on Right */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Image */}
            <div className="w-full lg:col-span-6">
              <div className="relative h-[320px] lg:h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                <Image
                  src="/images/Report-an-Issue/r18.png"
                  alt="Warehouse inventory specialist verifying case records on clipboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur-[2px] px-3.5 py-1 text-[11px] font-medium text-[#0c1e38] shadow-xs">
                  Illustrative imagery
                </div>
              </div>
            </div>

            {/* Right Column: 4 Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-6">
              {cases.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[135px]"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="mt-4">
                    <h3 className={`${sora} text-[16px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-10">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FOLLOW-UP AND ACCOUNT CASES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Account details need a secure route.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Sign in for account-specific offers, orders, invitations or case information. Further information may be requested through an approved secure channel.
          </p>

          {/* Photo Showcase: r49.jpg */}
          <div className="relative mt-6 h-[190px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
            <Image
              src="/images/Report-an-Issue/r49.jpg"
              alt="Two warehouse specialists consulting on digital records"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-[2px] px-2.5 py-0.5 text-[10px] font-medium text-[#0c1e38] shadow-xs">
              Illustrative imagery
            </div>
          </div>

          {/* 4 Stacked Cards */}
          <div className="mt-4 flex flex-col gap-3">
            {cases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15.5px] font-bold tracking-tight text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
