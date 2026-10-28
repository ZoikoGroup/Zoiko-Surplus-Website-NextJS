import { hankenGrotesk } from "./hankenGrotesk";

const items: { n: string; title: string; lines: string[] }[] = [
  {
    n: "01",
    title: "A governed disposition system",
    lines: ["Qualification, audience, policy, economics,", "transaction and evidence are connected —", "beyond posting listings."],
  },
  {
    n: "02",
    title: "Seller-private access",
    lines: ["Verified eligible buyers see only seller-", "authorized, policy-approved opportunities."],
  },
  {
    n: "03",
    title: "Policy before optimization",
    lines: ["Prohibited, recalled or ineligible routes are", "excluded before economic ranking."],
  },
  {
    n: "04",
    title: "Asset-light neutrality",
    lines: ["Seller goods remain with accountable", "economic actors; Zoiko is not an assumed", "warehouse owner."],
  },
  {
    n: "05",
    title: "Verified participation",
    lines: ["KYB, audience rights, category qualification", "and transaction access are distinct checks."],
  },
  {
    n: "06",
    title: "Seller-focused net recovery",
    lines: ["Fees, timing, transport, failure risk and", "recovery choices are evaluated explicitly."],
  },
  {
    n: "07",
    title: "Category-specific safety",
    lines: ["Versioned qualification packs distinguish", "apparel, food, electronics and more."],
  },
  {
    n: "08",
    title: "Evidence-led outcomes",
    lines: ["Records support auditable status, claims,", "exceptions and responsible decisions."],
  },
  {
    n: "09",
    title: "Global backbone, activated markets",
    lines: ["Currency, locale, corridor and legal role are", "configuration, not UK defaults."],
  },
];

const hanken = hankenGrotesk.className;

export default function Differentiators() {
  return (
    <section
      aria-labelledby="differentiators-heading"
      className={`w-full bg-[#fcfcff] font-[family-name:var(--font-sora)] md:px-8 md:py-24 lg:px-24`}
    >
      <div className="mx-auto flex max-w-[1248px] flex-col gap-12 px-4 pt-[112.01px] md:gap-14 md:px-0 md:pt-0">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4 pt-1.5 md:max-w-[624.96px]">
          {/* eyebrow: mobile */}
          <div className={`${hanken} relative h-[20.14px] w-[252.64px] md:hidden`}>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase opacity-50">
              10
            </span>
            <span className="absolute top-[calc(50%-0.01px)] left-[28.2px] h-px w-7 -translate-y-1/2 bg-[#0f7a60] opacity-50" />
            <span className="absolute top-[calc(50%-0.57px)] left-[66.2px] -translate-y-1/2 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase">
              Why we are different
            </span>
          </div>
          {/* eyebrow: desktop */}
          <div className="hidden items-start py-2 md:flex">
            <div className="relative h-[21px] w-[75px] shrink-0">
              <span className="absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                09
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <div className="flex items-end gap-1 leading-0">
              <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Why</span>
              <span className="text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
                we are different
              </span>
            </div>
          </div>

          <h2
            id="differentiators-heading"
            className={`${hanken} pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140] md:pt-0 md:pb-[0.585px] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:whitespace-nowrap`}
          >
            Nine meaningful
            <br className="md:hidden" /> differentiators.
          </h2>
          <p className={`${hanken} text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]`}>
            Defensible advantages with evidence and <br className="md:hidden" />
            boundaries.
          </p>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <li
              key={it.n}
              className="rounded-2xl border border-[#e6e8ec] bg-white p-[18px] drop-shadow-[0_1px_1px_rgba(12,33,64,0.06)] drop-shadow-[0_1px_1.5px_rgba(12,33,64,0.08)] md:p-[26px]"
            >
              <div className={`${hanken} flex flex-col gap-[5.7px]`}>
                <span className="text-[24px] leading-[37.2px] font-extrabold text-[#18a884] opacity-40">{it.n}</span>
                <h3 className="text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] text-[#0c2140]">
                  {it.title}
                </h3>
                <p className="pt-[1.1px] pb-[0.6px] text-[16px] leading-[24.8px] text-[#5a6b7b]">
                  {it.lines.map((l, i) => (
                    <span key={l}>
                      {l}
                      {i < it.lines.length - 1 && (
                        <>
                          {" "}
                          <br className="md:hidden lg:block" />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
