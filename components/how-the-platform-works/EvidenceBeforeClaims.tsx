import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const records = [
  {
    step: "01",
    title: "Source records",
    description: "Where goods came from.",
  },
  {
    step: "02",
    title: "Decision records",
    description: "Who approved what.",
  },
  {
    step: "03",
    title: "Handoff evidence",
    description: "Transfer chain of custody.",
  },
  {
    step: "04",
    title: "Exception records",
    description: "What was held or cancelled.",
  },
  {
    step: "05",
    title: "No fake metrics",
    description: "No assertions on high return.",
  },
];

export default function EvidenceBeforeClaims() {
  return (
    <section aria-label="Evidence Before Claims" className={`${hanken} w-full bg-[#071322] text-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-22">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#d4a359] uppercase">
              EVIDENCE BEFORE CLAIMS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[42px] font-bold tracking-[-0.025em] text-white`}>
            Records support accountability. They
            <br />
            do not promise results.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#94a3b8]">
            A documented outcome is not a guarantee of financial return or preservation results.
          </p>

          {/* 5 Cards Row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {records.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1c31] p-4 transition-all duration-200 hover:border-white/20 hover:bg-[#10223b]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#009b72] text-[11px] font-bold text-white shadow-xs">
                  {item.step}
                </span>
                <div className="mt-4">
                  <h3 className={`${sora} text-[14.5px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#94a3b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Photo Showcase */}
          <div className="relative mt-8 h-[340px] lg:h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-xl">
            <Image
              src="/images/How-the-Platform-Works/htpw18.png"
              alt="Retail and warehouse inventory chain of custody and evidence audit"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1380px"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#d4a359] uppercase">
            EVIDENCE BEFORE CLAIMS
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-[1.2] tracking-[-0.025em] text-white`}>
            Records support accountability. They do not promise results.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#94a3b8]">
            A documented outcome is not a guarantee of financial return or preservation results.
          </p>

          {/* 5 Mobile Cards in vertical stack */}
          <div className="mt-6 flex flex-col gap-3">
            {records.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1c31] p-4"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#009b72] text-[10.5px] font-bold text-white shadow-xs">
                  {item.step}
                </span>
                <div className="mt-3">
                  <h3 className={`${sora} text-[14.5px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#94a3b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Showcase below cards */}
          <div className="relative mt-6 h-[170px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-lg">
            <Image
              src="/images/How-the-Platform-Works/htpw49.jpg"
              alt="Inventory tracking and evidence review in retail facility"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
