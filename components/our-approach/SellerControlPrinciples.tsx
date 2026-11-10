import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const principles = [
  {
    title: "Seller-controlled markets",
    description: "Sellers decide which verified buyers ever see an opportunity.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Qualified participation",
    description: "Identity, role and eligibility are checked in context, not assumed.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Governed disposition",
    description: "Policy and safety rules apply before any route is offered or started.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Evidence & exceptions",
    description: "Outcomes are recorded, and disputes follow defined processes.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function SellerControlPrinciples() {
  return (
    <section
      id="seller-control-principles"
      aria-labelledby="seller-control-heading"
      className={`${hanken} w-full bg-[#0c1e38]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#009b72]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#009b72]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
              PRINCIPLES OF SELLER CONTROL
            </span>
          </div>

          {/* Heading */}
          <h2
            id="seller-control-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[46px]"
          >
            Four operating principles
            <br />
            behind every transaction.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[580px] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
            Sellers define what is offered, to whom and under which rules. Those settings can be changed.
          </p>

          {/* 4 Dark Navy Cards (2x2 Grid) */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[14px] border border-white/10 bg-[#122645] p-5 transition-colors hover:border-white/20"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[#009b72]/30 bg-[#0d3b3e]/60 text-[#10b981]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Feature Image (soa6.jpg) */}
          <div className="relative mt-8 h-[280px] w-full overflow-hidden rounded-[20px] border border-white/10 sm:h-[340px] lg:h-[380px]">
            <Image
              src="/images/Zoiko-Surplus-Our-Approach/soa6.jpg"
              alt="Executive reviewing recovery analytics and seller control parameters"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover"
            />
          </div>

          {/* Bottom Disclaimer */}
          <p className="mt-5 text-[11px] leading-relaxed text-slate-400">
            These are descriptions of how the platform is designed to operate. They are not certifications or third-party endorsements. Examples on this page are illustrative and non-operational.
          </p>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-[#0c1e38]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#94a3b8] uppercase`}>
            PRINCIPLES OF SELLER CONTROL
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-white">
            Four operating principles behind every transaction.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-slate-300">
            Sellers define what is offered, to whom and under which rules. Those settings can be changed.
          </p>

          {/* 4 Stacked Dark Principle Cards */}
          <div className="mt-6 flex flex-col gap-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[14px] border border-white/10 bg-[#122645] p-4"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-[#009b72]/30 bg-[#0d3b3e]/60 text-[#10b981]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Feature Photo (soa28.jpg) */}
          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[18px] border border-white/10">
            <Image
              src="/images/Zoiko-Surplus-Our-Approach/soa28.jpg"
              alt="Executive reviewing recovery analytics and seller control parameters"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Bottom Fine-Print Disclaimer */}
          <p className="mt-4 text-[10.5px] leading-relaxed text-slate-400">
            These are descriptions of how the platform is designed to operate. They are not certifications or third-party endorsements. Examples on this page are illustrative and non-operational.
          </p>
        </div>
      </div>
    </section>
  );
}
