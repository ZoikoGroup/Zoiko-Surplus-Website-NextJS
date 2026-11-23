import React from "react";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function InitialConfiguration() {
  return (
    /* Strictly mobile-only: hidden on desktop (md:hidden) so desktop remains completely unaffected */
    <section
      aria-label="Initial Configuration"
      className={`${hanken} block md:hidden w-full bg-[#FAF7F2] py-10`}
    >
      <div className="px-4">
        {/* Eyebrow */}
        <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
          INITIAL CONFIGURATION
        </span>

        {/* Heading & Subtitle */}
        <h2
          className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
        >
          A proposed first configuration, not live.
        </h2>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
          Shown as a placeholder. Publish only when a second working prototype issue is verified.
        </p>

        {/* Card 1: What this is not */}
        <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-500">
              <AlertTriangle className="size-4" />
            </div>
            <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>What this is not</h3>
          </div>

          <ul className="mt-4 flex flex-col gap-3 text-[13px] leading-relaxed text-slate-600">
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 size-4 shrink-0 text-rose-500" strokeWidth={2.5} />
              <span>Not active market or launch date</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 size-4 shrink-0 text-rose-500" strokeWidth={2.5} />
              <span>Not a promise of trading rights</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="mt-0.5 size-4 shrink-0 text-rose-500" strokeWidth={2.5} />
              <span>
                Not a verified quotation (10 open slots and initial $400k are not tested as
                equivalents)
              </span>
            </li>
          </ul>
        </div>

        {/* Card 2: What is proposed */}
        <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-[#0d9488]">
              <CheckCircle2 className="size-4" />
            </div>
            <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>What is proposed</h3>
          </div>

          <ul className="mt-4 flex flex-col gap-3 text-[13px] leading-relaxed text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 font-bold text-[#0d9488]">✓</span>
              <span>
                6 seller-promise B2B placeholders (Technical configuration for &apos;Direct&apos;
                forms)
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 font-bold text-[#0d9488]">✓</span>
              <span>Food and grocery kept under separate controls</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 font-bold text-[#0d9488]">✓</span>
              <span>Subject to Market Operations and Legal approval</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
