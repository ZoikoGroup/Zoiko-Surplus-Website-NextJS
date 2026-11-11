import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function CategoryDefinition() {
  return (
    <section
      id="category-definition"
      aria-labelledby="category-definition-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-24 md:px-8 md:pt-16 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (hl10.png) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/home-lifestyle/hl10.png"
                  alt="Home furnishings and lifestyle décor accessories on credenza"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Footnote */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  CATEGORY DEFINITION
                </span>
              </div>

              {/* Heading */}
              <h2
                id="category-definition-heading"
                className="mt-3.5 text-[36px] font-extrabold leading-[1.14] tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
              >
                What &ldquo;home &amp; lifestyle
                <br />
                surplus&rdquo; means.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Business surplus across home furnishings, d&eacute;cor, textiles, seasonal goods and housewares &mdash; overstock, returns, discontinued ranges and imperfect items &mdash; reviewed for controlled, seller-approved disposition rather than open resale.
              </p>

              {/* Footnote */}
              <div className="mt-8 flex items-start gap-2 pt-2">
                <p className="text-[11px] leading-relaxed text-[#718096]">
                  * A scope definition &mdash; not a claim of safety, compliance or guaranteed acceptance. Each lot is qualified individually against its subcategory rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Visual Image (hl22.jpg) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] shadow-xs">
            <Image
              src="/images/home-lifestyle/hl18.jpg"
              alt="Home lighting and lifestyle definition"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CATEGORY DEFINITION
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            What &ldquo;home &amp; lifestyle surplus&rdquo; means.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Business surplus across home furnishings, décor, textiles, seasonal goods and housewares &mdash; overstock, returns, discontinued ranges and imperfect items &mdash; reviewed for controlled, seller-approved disposition rather than open resale.
          </p>

          {/* Footnote */}
          <p className="mt-4 text-[10.5px] leading-relaxed text-[#718096]">
            * A scope definition &mdash; not a claim of safety, compliance or guaranteed acceptance. Each lot is qualified individually against its subcategory rules.
          </p>
        </div>
      </div>
    </section>
  );
}
