const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function ExceptionsEscalation() {
  return (
    <section
      id="exceptions-escalation"
      aria-labelledby="exceptions-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              EXCEPTIONS &amp; ESCALATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="exceptions-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            When a lot is held.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Recall, rights disputes, missing documentation and safety signals have defined routes.
          </p>

          {/* Callout Card */}
          <div className="mt-8 flex items-start gap-4 rounded-[14px] border border-[#f4deb4] bg-[#fdfcf9] p-5 shadow-xs">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3] text-[#926016]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-[#0c1e38]">
                Hold, reject, escalate
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                A recall, rights dispute, missing documentation or safety signal holds, rejects or escalates the lot to a named accountable role before any exposure. Unknown or disputed condition is never resolved silently, and no safety or outcome guarantee is made on this page.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>12</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              EXCEPTIONS &amp; ESCALATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            When a lot is held.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Recall, rights disputes, missing documentation and safety signals have defined routes.
          </p>

          {/* Notice Card */}
          <div className="mt-4 flex items-start gap-3 rounded-[14px] border border-[#f5dfb8] bg-[#fcfbf9] p-4 shadow-2xs">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3] text-[#926016]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[13px] font-bold text-[#0c1e38]">Hold, reject, escalate</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#718096]">
                A recall, rights dispute, missing documentation or safety signal holds, rejects or escalates the lot to a named accountable role before any exposure. Unknown or disputed condition is never resolved silently, and no safety or outcome guarantee is made on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
