import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function CorporateIdentityLegal() {
  return (
    <section
      id="corporate-identity-legal"
      aria-labelledby="corporate-identity-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CORPORATE IDENTITY, PRIVACY AND LEGAL
            </span>
          </div>

          {/* Heading */}
          <h2
            id="corporate-identity-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Who you are contacting, and
            <br />
            how your data is handled.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Only approved legal entity details and verified channels are published.
          </p>

          {/* 2 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Corporate Identity Card */}
            <div className="flex flex-col rounded-[18px] border border-slate-200/90 bg-white p-7 shadow-2xs">
              <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#fbf4e6] text-[#926016]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="6" x2="9.01" y2="6" />
                  <line x1="15" y1="6" x2="15.01" y2="6" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <line x1="9" y1="14" x2="9.01" y2="14" />
                  <line x1="15" y1="14" x2="15.01" y2="14" />
                </svg>
              </div>

              <h3 className="mt-4 text-[17px] font-extrabold text-[#0c1e38]">
                Corporate Identity
              </h3>

              <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
                <strong className="font-bold text-[#0c1e38]">Zoiko Surplus</strong> operates within Zoiko Supply Group Inc., a Zoiko Group company. Office addresses, phone numbers and email addresses appear here only after Legal confirms them and the channels are tested.
              </p>
            </div>

            {/* Privacy and legal notices Card */}
            <div className="flex flex-col rounded-[18px] border border-slate-200/90 bg-white p-7 shadow-2xs">
              <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#fbf4e6] text-[#926016]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" />
                  <path d="M5 7h14" />
                  <path d="M5 7l-2 7h4l-2-7z" />
                  <path d="M19 7l-2 7h4l-2-7z" />
                </svg>
              </div>

              <h3 className="mt-4 text-[17px] font-extrabold text-[#0c1e38]">
                Privacy and legal notices
              </h3>

              <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
                A general inquiry is not formal legal service. Rights requests and formal notices use the approved notice channels once published.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                {["Privacy Notice", "Terms of Use", "Legal Center"].map((pill) => (
                  <Link
                    key={pill}
                    href="#"
                    className="inline-flex h-[34px] items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-[11.5px] font-bold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
                  >
                    {pill}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            CORPORATE IDENTITY, PRIVACY AND LEGAL
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Who you are contacting, and how your data is handled.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Only approved legal entity details and verified channels are published.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {/* Corporate Identity Card */}
            <div className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs">
              <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#fbf4e6] text-[#926016]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="6" x2="9.01" y2="6" />
                  <line x1="15" y1="6" x2="15.01" y2="6" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <line x1="9" y1="14" x2="9.01" y2="14" />
                  <line x1="15" y1="14" x2="15.01" y2="14" />
                </svg>
              </div>

              <h3 className="mt-3.5 text-[16px] font-extrabold text-[#0c1e38]">
                Corporate Identity
              </h3>

              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                <strong className="font-bold text-[#0c1e38]">Zoiko Surplus</strong> operates within Zoiko Supply Group Inc., a Zoiko Group company. Office addresses, phone numbers and email addresses appear here only after Legal confirms them and the channels are tested.
              </p>
            </div>

            {/* Privacy and legal notices Card */}
            <div className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs">
              <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#fbf4e6] text-[#926016]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" />
                  <path d="M5 7h14" />
                  <path d="M5 7l-2 7h4l-2-7z" />
                  <path d="M19 7l-2 7h4l-2-7z" />
                </svg>
              </div>

              <h3 className="mt-3.5 text-[16px] font-extrabold text-[#0c1e38]">
                Privacy and legal notices
              </h3>

              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                A general inquiry is not formal legal service. Rights requests and formal notices use the approved notice channels once published.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {["Privacy Notice", "Terms of Use", "Legal Center", "Accessibility Statement"].map((pill) => (
                  <Link
                    key={pill}
                    href="#"
                    className="inline-flex h-[34px] items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-[11px] font-bold text-[#0c1e38] shadow-2xs"
                  >
                    {pill}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
