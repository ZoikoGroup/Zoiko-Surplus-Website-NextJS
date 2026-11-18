import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const outcomeItems = [
  {
    title: "Source evidence",
    description: "Records of where goods came from.",
  },
  {
    title: "Transfer acknowledgments",
    description: "Delivery or custody records, where they apply.",
  },
  {
    title: "Outcome definitions",
    description: "What each term represents/how it is used.",
  },
  {
    title: "Corrective records",
    description: "What was done when something went wrong.",
  },
];

export default function EvidenceAndOutcomes() {
  return (
    <section aria-label="Evidence and Outcomes - What proved means" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">10</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              EVIDENCE AND OUTCOMES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            What &ldquo;proved&rdquo; means.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Outcome records are defined by method, date and source. No counts, savings or impact figures are shown, because none are verified.
          </p>

          {/* Two-Column Grid: Image on Left, 4 Items on Right */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Image */}
            <div className="w-full lg:col-span-6">
              <div className="relative h-[360px] lg:h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                <Image
                  src="/images/For-Enterprise-Sellers/fes25.jpg"
                  alt="Quality assurance specialist verifying chain of custody documentation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/85 backdrop-blur-[2px] px-3.5 py-1 text-[11px] font-medium text-[#0c1e38] shadow-xs">
                  Illustrative imagery
                </div>
              </div>
            </div>

            {/* Right Column: 4 Items */}
            <div className="flex flex-col gap-6 lg:col-span-6">
              {outcomeItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <h3 className={`${sora} text-[18px] font-bold tracking-tight text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#926016] uppercase">
            EVIDENCE AND OUTCOMES
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            What &ldquo;proved&rdquo; means.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Outcome records are defined by method, date and source. No counts, savings or impact figures are shown, because none are verified.
          </p>

          {/* Photo */}
          <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 shadow-xs">
            <Image
              src="/images/For-Enterprise-Sellers/fes31.jpg"
              alt="Quality assurance specialist verifying chain of custody documentation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-[2px] px-3 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs">
              Illustrative imagery
            </div>
          </div>

          {/* 4 Outcome Items with circular badges */}
          <div className="mt-6 space-y-4">
            {outcomeItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#faedd8] text-[#926016] mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#926016]" />
                </div>
                <div>
                  <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
