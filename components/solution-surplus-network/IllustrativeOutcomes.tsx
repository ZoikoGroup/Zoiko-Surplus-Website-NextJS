import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type WalkthroughStep = {
  id: string;
  title: string;
  description: string;
};

const steps: WalkthroughStep[] = [
  {
    id: "step1",
    title: "A seller approves a route",
    description: "For a qualified lot, the seller approves a donation route within its mandate — no brands or figures shown here.",
  },
  {
    id: "step2",
    title: "Gates clear the route",
    description: "Category, market and partner checks confirm the route is permitted.",
  },
  {
    id: "step3",
    title: "A partner is coordinated",
    description: "An authorized recipient and a logistics partner are assigned to the route.",
  },
  {
    id: "step4",
    title: "The handover is evidenced",
    description: "Condition, authorization, transfer and acknowledgment are recorded.",
  },
  {
    id: "step5",
    title: "The route is closed",
    description: "The outcome is documented and any exceptions are resolved.",
  },
];

export default function IllustrativeOutcomes() {
  return (
    <section aria-labelledby="illustrative-outcomes-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-10 pb-28">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>13</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              ILLUSTRATIVE OUTCOMES
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="illustrative-outcomes-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            How a coordinated route could run
            <br className="hidden sm:inline" /> — anonymized.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            An explicitly illustrative, non-operational walkthrough. It contains no real partners, brands, figures or live data.
          </p>

          {/* 2-Column Layout */}
          <div className="mt-9 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Woman in plaid shirt at laptop with boxes */}
            <div className="lg:col-span-6">
              <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:h-[360px] lg:h-full lg:min-h-[420px]">
                <Image
                  src="/images/solution-surplus-network/sn10.png"
                  alt="Seller inspecting inventory outcomes and route coordination on laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Walkthrough Card */}
            <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-xs lg:col-span-6">
              {/* Dark Navy Header with Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0c1e38] px-6 py-4">
                <h3 className="text-[13.5px] font-bold text-white">
                  Coordinated route walkthrough
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3e3ca] bg-[#fcf3e6] px-3 py-0.5 text-[10px] font-bold tracking-[0.06em] text-[#926016] uppercase">
                  <span className="size-1.5 rounded-full bg-[#926016]" />
                  ILLUSTRATIVE · ANONYMIZED · NO LIVE DATA
                </span>
              </div>

              {/* 5 Stacked Steps */}
              <div className="divide-y divide-[#f1f5f9]">
                {steps.map((st) => (
                  <div key={st.id} className="p-4.5 transition-colors hover:bg-slate-50/60 sm:p-5">
                    <h4 className="text-[13.5px] font-bold text-[#0f172a]">
                      {st.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-[1.55] text-[#556987]">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-12">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>13</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ILLUSTRATIVE OUTCOMES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-[23px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          How a coordinated route could run — anonymized.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[12px] leading-[1.55] text-[#556987]">
          An explicitly illustrative, non-operational walkthrough. It contains no real partners, brands, figures or live data.
        </p>

        {/* Hero Image (Mario/Peach/Luigi figurines) */}
        <div className="relative mt-5 h-[175px] w-full overflow-hidden rounded-[16px] shadow-sm">
          <Image
            src="/images/solution-surplus-network/sn12.jpg"
            alt="Retail inventory figurines"
            fill
            className="object-cover"
          />
        </div>

        {/* Walkthrough Card */}
        <div className="mt-4 overflow-hidden rounded-[16px] border border-[#e8edf2] bg-white shadow-sm">
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-[#f1f5f9] bg-[#fbfbfb] px-4 py-3">
            <span className="text-[12.5px] font-bold text-[#0f172a]">
              Coordinated route walkthrough
            </span>
            <span className="inline-flex items-center rounded-full bg-[#fbf2e3] px-2.5 py-1 text-[8.5px] font-bold tracking-[0.04em] text-[#926016] uppercase">
              ILLUSTRATIVE · ANONYMIZED · NO LIVE DATA
            </span>
          </div>

          {/* 5 Steps */}
          <div className="divide-y divide-[#f1f5f9] px-4">
            {steps.map((st) => (
              <div key={st.id} className="flex items-start gap-3 py-3">
                <span className="mt-0.5 size-4 shrink-0 rounded-full bg-[#d5f5eb]" />
                <div className="flex-1">
                  <h4 className="text-[12.5px] font-bold text-[#0f172a]">
                    {st.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] leading-[1.5] text-[#556987]">
                    {st.description}
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
