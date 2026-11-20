import React from "react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function ContractualBoundaries() {
  return (
    /* Strictly mobile-only: hidden on desktop (md:hidden) so desktop remains completely unaffected */
    <section
      aria-label="Contractual Boundaries"
      className={`${hanken} block md:hidden w-full bg-[#FAF7F2] py-10`}
    >
      <div className="px-4">
        {/* Eyebrow */}
        <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
          CONTRACTUAL BOUNDARIES
        </span>

        {/* Heading & Subtitle */}
        <h2
          className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
        >
          What this page does and does not say.
        </h2>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
          Roles vary by approved arrangement.
        </p>

        {/* Card 1: Zoiko Surplus */}
        <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-[#0d9488]">
              <CheckCircle2 className="size-4" />
            </div>
            <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>Zoiko Surplus</h3>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-relaxed text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 font-bold text-[#0d9488]">✓</span>
              <span>Coordinates governed execution</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 font-bold text-[#0d9488]">✓</span>
              <span>Works within approved arrangements</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Not assumed by default */}
        <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-500">
              <AlertTriangle className="size-4" />
            </div>
            <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
              Not assumed by default
            </h3>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-relaxed text-slate-600">
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 size-4 shrink-0 text-rose-500" strokeWidth={2.5} />
              <span>Ownership of goods</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 size-4 shrink-0 text-rose-500" strokeWidth={2.5} />
              <span>A fixed asset network</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 size-4 shrink-0 text-rose-500" strokeWidth={2.5} />
              <span>Physical custody</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
