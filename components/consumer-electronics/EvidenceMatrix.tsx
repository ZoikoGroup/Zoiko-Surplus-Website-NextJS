import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface EvidenceRow {
  evidenceClass: string;
  whatItCovers: string;
  statusType: string;
}

const evidenceData: EvidenceRow[] = [
  {
    evidenceClass: "Identity & provenance",
    whatItCovers: "Source, ownership and right to dispose.",
    statusType: "Documented",
  },
  {
    evidenceClass: "Condition & function",
    whatItCovers: "Declared grade and functional status.",
    statusType: "Seller-declared",
  },
  {
    evidenceClass: "Data status",
    whatItCovers: "Sanitization and lock status for data-bearing units.",
    statusType: "Owner-led",
  },
  {
    evidenceClass: "Safety & recall",
    whatItCovers: "Battery class, electrical check, recall screen.",
    statusType: "Reviewed",
  },
  {
    evidenceClass: "Authenticity",
    whatItCovers: "Counterfeit and IP checks where relevant.",
    statusType: "Reviewed",
  },
  {
    evidenceClass: "Export & legal",
    whatItCovers: "Export control and category compliance.",
    statusType: "Where applicable",
  },
];

export default function EvidenceMatrix() {
  return (
    <section id="evidence-matrix" aria-labelledby="evidence-matrix-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-24 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              EVIDENCE MATRIX
            </span>
          </div>

          {/* Heading */}
          <h2
            id="evidence-matrix-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            What a qualified electronics lot documents.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[700px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            The evidence classes a lot would carry. These describe what can be recorded — not live data, serials or identities.
          </p>

          {/* Visual Banner (ce11.png) */}
          <div className="relative mt-10 aspect-[21/9] max-h-[460px] min-h-[300px] w-full overflow-hidden rounded-[20px] border border-[#e2e8f0]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/consumer-electronics/ce11.png"
              alt="Developer inspecting software code on screen representing evidence verification"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover object-center"
            />
          </div>

          {/* Evidence Class Table */}
          <div className="mt-8 overflow-hidden rounded-[14px] border border-[#e5e7eb] shadow-xs">
            {/* Header */}
            <div className="grid grid-cols-12 bg-[#0c1e38] px-6 py-4 text-[13px] font-semibold tracking-wide text-white">
              <div className="col-span-3">Evidence class</div>
              <div className="col-span-6">What it covers</div>
              <div className="col-span-3">Status type</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[#f1ede6]">
              {evidenceData.map((row, idx) => (
                <div
                  key={row.evidenceClass}
                  className={`grid grid-cols-12 items-center px-6 py-4 text-[13.5px] transition-colors ${
                    idx % 2 === 0 ? "bg-white hover:bg-slate-50/60" : "bg-[#fbf9f5] hover:bg-[#f6f2eb]"
                  }`}
                >
                  <div className="col-span-3 font-semibold text-[#0c1e38]">
                    {row.evidenceClass}
                  </div>
                  <div className="col-span-6 text-[#556987]">
                    {row.whatItCovers}
                  </div>
                  <div className="col-span-3 text-[13px] text-[#556987]">
                    {row.statusType}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full bg-[#faf7f2] px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              EVIDENCE MATRIX
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            What a qualified electronics lot documents.
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            The evidence classes a lot would carry. These describe what can be recorded — not live data, serials or identities.
          </p>

          {/* Visual Image (ce31.jpg) */}
          <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
            <Image
              src="/images/consumer-electronics/ce31.jpg"
              alt="Evidence documentation review"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Evidence Table on Mobile */}
          <div className="mt-5 overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white shadow-xs">
            <div className="grid grid-cols-12 bg-[#0c1e38] px-3.5 py-3 text-[11px] font-semibold text-white">
              <div className="col-span-5">Evidence class</div>
              <div className="col-span-7">What it covers</div>
            </div>

            <div className="divide-y divide-[#f1ede6]">
              {evidenceData.map((row, idx) => (
                <div
                  key={row.evidenceClass}
                  className={`grid grid-cols-12 items-center px-3.5 py-3 text-[12px] ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#fbf9f5]"
                  }`}
                >
                  <div className="col-span-5 font-bold text-[#0c1e38] pr-2">
                    {row.evidenceClass}
                  </div>
                  <div className="col-span-7 text-[#556987]">
                    {row.whatItCovers}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
