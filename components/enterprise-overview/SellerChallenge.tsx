import Image from "next/image";

const A = "/images/enterprise-overview/seller-challenge";
const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type Card = {
  icon: string;
  title: string;
  /** Body copy split exactly as each Figma frame wraps it. */
  desktop: string[];
  mobile: string[];
  extraBottom: boolean;
};

const cards: Card[] = [
  {
    icon: "icon-fragmentation.svg",
    title: "Inventory fragmentation",
    desktop: ["Excess, returned and", "imperfect stock scattered", "across systems, with", "inconsistent condition and", "provenance data."],
    mobile: ["Excess, returned and imperfect stock", "scattered across systems, with inconsistent", "condition and provenance data."],
    extraBottom: false,
  },
  {
    icon: "icon-access-control.svg",
    title: "Access control",
    desktop: ["Pricing, brand and channels", "exposed when stock is listed", "openly, instead of to seller-", "approved audiences."],
    mobile: ["Pricing, brand and channels exposed when", "stock is listed openly, instead of to seller-", "approved audiences."],
    extraBottom: true,
  },
  {
    icon: "icon-route-ambiguity.svg",
    title: "Route ambiguity",
    desktop: ["Disposition options compared", "on headline bids rather than", "permitted, policy-filtered", "routes and expected net", "recovery."],
    mobile: ["Disposition options compared on headline", "bids rather than permitted, policy-filtered", "routes and expected net recovery."],
    extraBottom: false,
  },
  {
    icon: "icon-evidence-gaps.svg",
    title: "Evidence gaps",
    desktop: ["Decisions and outcomes that", "can’t be reconstructed later", "— no traceable record of", "what happened and why."],
    mobile: ["Decisions and outcomes that can’t be", "reconstructed later — no traceable record", "of what happened and why."],
    extraBottom: true,
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l}>
          {l}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function SellerChallenge() {
  return (
    <section
      aria-labelledby="seller-challenge-heading"
      className={`${hanken} w-full bg-[#fbf6ef] py-14 md:bg-[#fcfcff] md:p-24`}
    >
      <div className="flex w-full max-w-[1240px] flex-col gap-12 px-4 md:gap-14 md:px-0">
        <div className="flex w-full flex-col gap-4 pt-1.5 md:w-[1016px] md:max-w-full md:pt-0">
          {/* Eyebrow: desktop */}
          <div className="hidden w-[719.917px] max-w-full py-2 md:flex">
            <div className="relative -top-0.5 h-[21px] w-[75px] shrink-0">
              <span
                className={`${sora} absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]`}
              >
                01
              </span>
              <span aria-hidden className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <div className="relative -top-px flex items-baseline gap-1">
              <span className={`${sora} w-[86px] text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]`}>Industries</span>
              <span className={`${sora} text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase`}>we serve</span>
            </div>
          </div>
          {/* Eyebrow: mobile */}
          <div className="flex h-[20.14px] items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:hidden">
            <span className="text-[#0c2140] opacity-50">01</span>
            <span aria-hidden className="h-px w-7 bg-[#0f7a60] opacity-50" />
            <span className="text-[#0f7a60]">The seller challenge</span>
          </div>

          <h2
            id="seller-challenge-heading"
            className="pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]"
          >
            Surplus is valuable — but
            <br className="md:hidden" /> hard to govern.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]">
            Four recurring problems enterprise sellers
            <br className="md:hidden" /> face before a governed workflow exists.
          </p>
        </div>

        <ul className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex min-w-px flex-col gap-[6.8px] rounded-2xl border border-[#e6e8ec] bg-white p-[18px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:flex-1 md:gap-[7.1px] md:p-[26px] ${
                c.extraBottom ? "md:gap-[6.7px] md:pb-[calc(26px+24.79px)]" : ""
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#f4e7d6]">
                <Image src={`${A}/${c.icon}`} alt="" width={20} height={20} />
              </span>
              <h3 className="pt-[5.2px] text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] text-[#0c2140] md:pt-[4.9px]">
                {c.title}
              </h3>
              <p className="pb-[0.59px] text-[16px] leading-[24.8px] text-[#5a6b7b] md:pb-[0.885px]">
                <span className="md:hidden">
                  <Lines lines={c.mobile} />
                </span>
                <span className="hidden md:inline">
                  <Lines lines={c.desktop} />
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
