import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const lifecycleStates = [
  {
    id: "under-review",
    title: "Under review",
    description: "Applied and being assessed; no visibility yet.",
    iconBg: "bg-[#fbf2e3]",
    iconColor: "#926016",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    id: "invited",
    title: "Invited",
    description: "Approved by a seller into a specific audience.",
    iconBg: "bg-[#d5f5eb]",
    iconColor: "#009b72",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "active-entitlement",
    title: "Active entitlement",
    description: "Entitled and able to see granted opportunities where the market is live.",
    iconBg: "bg-[#d5f5eb]",
    iconColor: "#009b72",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "rejected",
    title: "Rejected",
    description: "Not eligible for this audience, with a recorded reason.",
    iconBg: "bg-[#f1f5f9]",
    iconColor: "#64748b",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    id: "expired",
    title: "Expired",
    description: "An entitlement lapsed and must be renewed to continue.",
    iconBg: "bg-[#fbf2e3]",
    iconColor: "#926016",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "withdrawn",
    title: "Withdrawn / offboarded",
    description: "Access removed by the seller; the change is recorded.",
    iconBg: "bg-[#f1f5f9]",
    iconColor: "#64748b",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <polyline points="23 20 23 14 17 14" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
      </svg>
    ),
  },
];

export default function InvitationAndOffboarding() {
  return (
    <section id="invitation-and-offboarding" aria-labelledby="invitation-offboarding-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              INVITATION &amp; OFFBOARDING
            </span>
          </div>

          {/* Heading */}
          <h2
            id="invitation-offboarding-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Entitlement has a lifecycle.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Access can be granted, declined, expire or be withdrawn — each state is explicit and recorded, never ambiguous.
          </p>

          {/* 6 Lifecycle Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lifecycleStates.map((state) => (
              <div
                key={state.id}
                className="flex items-start gap-4 rounded-[16px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                <div
                  style={{ color: state.iconColor }}
                  className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${state.iconBg}`}
                >
                  {state.icon}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                    {state.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                    {state.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Split Banner CTA Card */}
          <div className="mt-12 overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-[0_4px_24px_rgba(12,30,56,0.12)]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              {/* Left Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-6 lg:p-12">
                <h3 className="text-[28px] font-extrabold tracking-[-0.02em] text-white sm:text-[34px]">
                  Nothing private is ever
                  <br />
                  shown publicly.
                </h3>
                <p className="mt-3.5 max-w-[480px] text-[14px] leading-relaxed text-[#94a3b8]">
                  Private opportunities live behind authorized sign-in, scoped to entitlement — not on public pages, search or analytics.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#a66e1b]"
                  >
                    <span>Apply to Become a Buyer</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>

                  <Link
                    href="/solution-surplus-network"
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Surplus Exchange
                  </Link>
                </div>
              </div>

              {/* Right Photo */}
              <div className="relative min-h-[260px] w-full overflow-hidden sm:min-h-[320px] lg:col-span-6 lg:min-h-full">
                <Image
                  src="/images/solution-private-marketplaces/spm9.png"
                  alt="Executive carefully reviewing confidential private marketplace documents at computer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
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
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            INVITATION &amp; OFFBOARDING
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Entitlement has a
          <br />
          lifecycle.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Access can be granted, declined, expire or be withdrawn — each state is explicit and recorded, never ambiguous.
        </p>

        {/* 6 Lifecycle Cards Stacked */}
        <div className="mt-7 flex flex-col gap-3.5">
          {lifecycleStates.map((state) => (
            <div
              key={state.id}
              className="flex items-start gap-3.5 rounded-[16px] border border-[#eef2f6] bg-white p-4.5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]"
            >
              <div
                style={{ color: state.iconColor }}
                className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${state.iconBg}`}
              >
                {state.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#0f172a]">
                  {state.title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Banner CTA Card */}
        <div className="relative mt-8 overflow-hidden rounded-[22px] bg-[#0c1e38] shadow-[0_4px_24px_rgba(12,30,56,0.14)]">
          {/* Background image spm19 */}
          <div className="absolute inset-0">
            <Image
              src="/images/solution-private-marketplaces/spm19.jpg"
              alt="High-angle view of enterprise facility and private marketplace operations"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38] via-[#0c1e38]/85 to-[#0c1e38]/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-7">
            <div className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-wider text-[#009b72] uppercase">
              <span>——</span>
              <span>CONFIDENTIAL BY DESIGN</span>
              <span>——</span>
            </div>

            <h3 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] text-white">
              Nothing private is ever
              <br />
              shown publicly.
            </h3>

            <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300">
              Private opportunities live behind authorized sign-in, scoped to entitlement — not on public pages, search or analytics.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
              >
                <span>Apply to Become a Buyer</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link
                href="/solution-surplus-network"
                className="flex h-[44px] w-full items-center justify-center rounded-full border border-white/20 bg-white/5 text-[13.5px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Surplus Exchange
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
