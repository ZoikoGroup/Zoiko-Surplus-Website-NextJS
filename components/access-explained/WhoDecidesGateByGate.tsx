import React from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const tableRows = [
  {
    gate: "1. Application",
    decidedBy: "You submit",
    checks: "Starts a review",
    doesNotDo: "Prove identity or grant access",
  },
  {
    gate: "2. Organization",
    decidedBy: "Review processor",
    checks: "Business and representative authority",
    doesNotDo: "Open every market or pallet",
  },
  {
    gate: "3. Market",
    decidedBy: "Policy and location",
    checks: "Market, category, corridor, safety",
    doesNotDo: "Follow from another group or route",
  },
  {
    gate: "4. Invitation",
    decidedBy: "The seller",
    checks: "A specific closed audience",
    doesNotDo: "Override market policy",
  },
  {
    gate: "5. Action",
    decidedBy: "Party at action time",
    checks: "Valid offer or order constraints",
    doesNotDo: "Stay valid forever",
  },
];

export default function WhoDecidesGateByGate() {
  return (
    <section aria-label="Gate By Gate Summary Table" className={`${hanken} w-full bg-[#fbf9f6] py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              GATE BY GATE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Who decides, and what it checks.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            A summary of each gate. Review happens in protected workflows, not on this page.
          </p>

          {/* Table Container */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
            <table className="w-full text-left text-[13.5px]">
              {/* Header */}
              <thead>
                <tr className="bg-[#0c1e38] text-[11px] font-bold tracking-wider text-white uppercase">
                  <th scope="col" className="px-6 py-4">GATE</th>
                  <th scope="col" className="px-6 py-4">DECIDED BY</th>
                  <th scope="col" className="px-6 py-4">WHAT IT CHECKS</th>
                  <th scope="col" className="px-6 py-4">WHAT IT DOES NOT DO</th>
                </tr>
              </thead>
              {/* Body */}
              <tbody className="divide-y divide-slate-100 text-[#556987]">
                {tableRows.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-slate-50/70">
                    <td className="px-6 py-4.5 font-semibold text-[#0c1e38]">
                      {row.gate}
                    </td>
                    <td className="px-6 py-4.5">
                      {row.decidedBy}
                    </td>
                    <td className="px-6 py-4.5">
                      {row.checks}
                    </td>
                    <td className="px-6 py-4.5">
                      {row.doesNotDo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            GATE BY GATE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Who decides, and what it checks.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            A summary of each gate. Review happens in protected workflows, not on this page.
          </p>

          {/* Horizontal scrollable table */}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
            <table className="min-w-[520px] w-full text-left text-[12.5px]">
              <thead>
                <tr className="bg-[#0c1e38] text-[10.5px] font-bold tracking-wider text-white uppercase">
                  <th scope="col" className="px-4 py-3.5">GATE</th>
                  <th scope="col" className="px-4 py-3.5">DECIDED BY</th>
                  <th scope="col" className="px-4 py-3.5">WHAT IT CHECKS</th>
                  <th scope="col" className="px-4 py-3.5">WHAT IT DOES NOT DO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#556987]">
                {tableRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3.5 font-semibold text-[#0c1e38] whitespace-nowrap">
                      {row.gate}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {row.decidedBy}
                    </td>
                    <td className="px-4 py-3.5">
                      {row.checks}
                    </td>
                    <td className="px-4 py-3.5">
                      {row.doesNotDo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile-Only Section: WHAT VERIFICATION DOES NOT MEAN */}
          <div className="mt-14 pt-8 border-t border-slate-200/60">
            <div className="text-[11px] font-bold tracking-[0.14em] text-[#556987] uppercase">
              WHAT VERIFICATION DOES NOT MEAN
            </div>
            <h3 className={`${sora} mt-2 text-[22px] font-bold leading-tight text-[#0c1e38]`}>
              Verified is not &ldquo;can see everything.&rdquo;
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
              Negative examples, stated plainly.
            </p>

            <div className="mt-6 space-y-4">
              {/* Card 1: Verification is not (Red) */}
              <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-red-50 text-red-600 font-bold text-xs">
                    ✕
                  </div>
                  <h4 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    Verification is not
                  </h4>
                </div>

                <ul className="mt-4 space-y-2.5 text-[12.5px] text-[#556987]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Automatic access to inventory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Permission to make offers or orders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>An invitation from any seller</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Approval for every market or category</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Verification is (Teal) */}
              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-teal-50 text-teal-600 font-bold text-xs">
                    ✓
                  </div>
                  <h4 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    Verification is
                  </h4>
                </div>

                <ul className="mt-4 space-y-2.5 text-[12.5px] text-[#556987]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>One review of your business</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>A step that can be reassessed</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>Independent of the other gates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>Scoped and conditional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
