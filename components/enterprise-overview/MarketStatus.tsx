import Image from "next/image";

const BASE = "/images/enterprise-overview/market-status";

const statuses = [
  {
    title: ["United Kingdom — Apparel & Footwear", "United Kingdom — Apparel &", "Footwear"],
    desc: [
      "A suggested initial seller-private B2B pilot — a proposal, not evidence of launch.",
      "A suggested initial seller-private B2B pilot — a",
      "proposal, not evidence of launch.",
    ],
    badge: "Proposed pilot",
    badgeBg: "bg-[#dcf3ed]",
    mobileExtra: "pb-[7.3px]",
  },
  {
    title: ["Other regions", "Other regions", ""],
    desc: [
      "Informational content is available; trading is not implied.",
      "Informational content is available; trading is not",
      "implied.",
    ],
    badge: "Informational",
    badgeBg: "bg-[#eef1f5]",
    mobileExtra: "pb-[1.39px]",
  },
  {
    title: ["Sealed ambient food", "Sealed ambient food", ""],
    desc: [
      "Independent category gate — product-safety, shelf-life and jurisdiction authorization required.",
      "Independent category gate — product-safety,",
      "shelf-life and jurisdiction authorization required.",
    ],
    badge: "Separate approval",
    badgeBg: "bg-[#f4e7d6]",
    mobileExtra: "pb-[1.39px]",
  },
];

export default function MarketStatus() {
  return (
    <section className="bg-white font-[family-name:var(--font-hanken)] max-md:py-14 md:p-24">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-4 max-md:px-4 md:gap-14">
        {/* Heading block */}
        <div className="flex w-full flex-col gap-4 pt-[6px] md:w-[780px] md:max-w-full">
          {/* Eyebrow: desktop */}
          <div className="hidden items-center py-2 md:flex">
            <div className="relative h-[21px] w-[75px] shrink-0">
              <span className="absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 font-[family-name:var(--font-sora)] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                09
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-[2px] w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <span className="font-[family-name:var(--font-sora)] text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-pre text-[#926016] uppercase">
              {"  "}Market &amp; category status
            </span>
          </div>
          {/* Eyebrow: mobile */}
          <div className="flex h-[20.14px] items-center text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:hidden">
            <span className="w-[18.2px] shrink-0 text-[#0c2140] opacity-50">10</span>
            <span className="mx-[10px] h-px w-[28px] shrink-0 bg-[#0f7a60] opacity-50" />
            <span className="whitespace-nowrap text-[#0f7a60]">Market &amp; category status</span>
          </div>

          <h2 className="text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] max-md:pt-[30.8px] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]">
            Possible pilot is not
            <br className="md:hidden" /> verified activation.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]">
            Availability is published by activated market
            <br className="md:hidden" /> and category. One architecture can
            <br className="md:hidden" /> support many; that design does not mean
            <br className="md:hidden" /> trading is live everywhere.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-4">
          <ul className="flex flex-col gap-3 max-md:pt-8">
            {statuses.map((s) => (
              <li
                key={s.badge}
                className="flex flex-col items-start justify-center gap-[10px] rounded-xl border border-[#e6e8ec] bg-white px-[18px] py-4 md:flex-row md:flex-wrap md:items-center md:justify-between"
              >
                <p className={`flex flex-col gap-[3.9px] whitespace-nowrap max-md:pr-[13px] md:pb-[1.39px] ${s.mobileExtra} md:pb-[1.39px]`}>
                  <span className="text-[18px] leading-[27.9px] font-bold text-[#0c2140]">
                    <span className="md:hidden">
                      {s.title[1]}
                      {s.title[2] && (
                        <>
                          <br />
                          {s.title[2]}
                        </>
                      )}
                    </span>
                    <span className="hidden md:inline">{s.title[0]}</span>
                  </span>
                  <span className="text-[14.4px] leading-[22.32px] text-[#5a6b7b]">
                    <span className="md:hidden">
                      {s.desc[1]}
                      <br />
                      {s.desc[2]}
                    </span>
                    <span className="hidden md:inline">{s.desc[0]}</span>
                  </span>
                </p>
                <span
                  className={`flex items-center gap-[7px] rounded-full pt-[4.5px] pr-[11px] pb-[4.91px] pl-[11px] text-[14.4px] leading-[14.4px] font-semibold tracking-[0.432px] whitespace-nowrap text-[#5a6b7b] ${s.badgeBg}`}
                >
                  <span className="size-[7px] rounded-full bg-[#5a6b7b]" />
                  {s.badge}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative rounded-xl border border-dashed border-[#d4d8de] bg-[#fbf6ef]">
            <Image
              src={`${BASE}/icon-info.svg`}
              alt=""
              width={16}
              height={16}
              className="absolute top-[14px] left-4"
            />
            <p className="flex min-h-[113.31px] items-center pr-4 pl-[41px] text-[13.8px] leading-[21.33px] text-[#5a6b7b] md:min-h-[49.33px] md:py-3">
              <span>
                The market and language selector is
                <br className="md:hidden" /> informational — it sets content and locale only.
                <br className="md:hidden" /> It does not grant legal rights, enable a category
                <br className="md:hidden" /> or change any permission.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
