import React from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const rows = [
  {
    stated: '"Good condition"',
    tells: "Appearance and function, as described",
    notEstablish: "Conformity or safety",
  },
  {
    stated: '"Original packaging"',
    tells: "Presentation of the goods",
    notEstablish: "Lawful ownership or provenance",
  },
  {
    stated: '"Tested"',
    tells: "Something was checked",
    notEstablish: "What, by whom or to what standard",
  },
  {
    stated: '"Brand new"',
    tells: "Unused status",
    notEstablish: "That no recall applies",
  },
];

export default function ConditionVersusSafety() {
  return (
    <section aria-label="Condition Versus Safety - A grade is not a safety finding" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">05</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CONDITION VERSUS SAFETY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            A grade is not a safety finding.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            A stated condition or grade does not establish conformity, safety or lawful ownership. Generic examples only.
          </p>

          {/* Comparison Table */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
            <div className="grid grid-cols-12 bg-[#0a1d37] px-6 py-4 text-[12px] font-bold tracking-[0.08em] text-white uppercase">
              <div className="col-span-3">WHAT IS STATED</div>
              <div className="col-span-5">WHAT IT MAY TELL YOU</div>
              <div className="col-span-4">WHAT IT DOES NOT ESTABLISH</div>
            </div>

            <div className="divide-y divide-slate-100">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center px-6 py-4 text-[14.5px] transition-colors hover:bg-slate-50/60">
                  <div className="col-span-3 font-semibold text-[#0c1e38]">
                    {row.stated}
                  </div>
                  <div className="col-span-5 text-[#556987]">
                    {row.tells}
                  </div>
                  <div className="col-span-4 text-[#556987]">
                    {row.notEstablish}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-3 text-[12.5px] text-[#718096]">
            Generic text only. No real item, grade or result is shown.
          </p>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            CONDITION VERSUS SAFETY
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            A grade is not a safety finding.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            A stated condition or grade does not establish conformity, safety or lawful ownership. Generic examples only.
          </p>

          {/* Mobile Comparison Table */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
            <div className="grid grid-cols-12 bg-[#0a1d37] px-4 py-3 text-[11px] font-bold tracking-[0.06em] text-white uppercase">
              <div className="col-span-5">WHAT IS STATED</div>
              <div className="col-span-7">WHAT IT MAY TELL YOU</div>
            </div>

            <div className="divide-y divide-slate-100">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-start px-4 py-3 text-[13px]">
                  <div className="col-span-5 font-semibold text-[#0c1e38]">
                    {row.stated}
                  </div>
                  <div className="col-span-7 text-[#556987] leading-snug">
                    {row.tells}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-3 text-[11.5px] leading-relaxed text-[#718096]">
            Generic text only. No real item, grade or result is shown.
          </p>
        </div>
      </div>
    </section>
  );
}
