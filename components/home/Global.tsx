import Image from "next/image";
import { Fragment, type ReactNode } from "react";

const chips = ["Global by architecture", "Regional by configuration", "Market-by-market by activation"];

type Row = {
  icon: string;
  title: ReactNode;
  detail: ReactNode;
  badge: string;
  // badge palette: desktop and mobile only differ in the dark dot/text colour of the last badge
  badgeClass: string;
  dotClass: string;
  textClass: string;
};

const rows: Row[] = [
  {
    icon: "icon-map",
    title: (
      <>
        United
        <br className="md:hidden" /> Kingdom
      </>
    ),
    detail: (
      <>
        Apparel &amp; Footwear —<br className="md:hidden" /> seller-private B2B
      </>
    ),
    badge: "Proposed pilot",
    badgeClass: "border-[#f0c4ba] bg-[#f5e7c9]",
    dotClass: "bg-[#926016]",
    textClass: "text-[#845212]",
  },
  {
    icon: "icon-globe",
    title: (
      <>
        Other
        <br className="md:hidden" /> regions
      </>
    ),
    detail: (
      <>
        Informational
        <br className="md:hidden" /> content available
      </>
    ),
    badge: "Not yet available",
    badgeClass: "border-[#d3dde8] bg-[#e7edf4]",
    dotClass: "bg-[#4f647a]",
    textClass: "text-[#4f647a]",
  },
  {
    icon: "icon-hand",
    title: (
      <>
        Food &amp;
        <br className="md:hidden" /> Grocery
      </>
    ),
    detail: (
      <>
        Everywhere it is
        <br className="md:hidden" /> considered
      </>
    ),
    badge: "Separate approval",
    badgeClass: "border-[#d3dde8] bg-[#e6edf4]",
    dotClass: "bg-[#0c2140] md:bg-[#1e2126]",
    textClass: "text-[#0c2140] md:text-[#1e2126]",
  },
];

export default function Global() {
  return (
    <section className="bg-[#f2f5f9] font-[family-name:var(--font-sora)] md:bg-[#fcfcff]">
      <div className="mx-auto flex max-w-[1444px] flex-col gap-8 px-[22px] pt-[72px] md:flex-row md:items-center md:justify-center md:gap-12 md:p-10 lg:p-24">
        {/* Copy */}
        <div className="flex flex-col gap-3 pt-[3.5px] md:flex-1 md:gap-[11.2px] md:pt-[5.5px]">
          <div className="flex flex-col gap-3 md:gap-[11.2px]">
            <div className="hidden items-center md:flex">
              <span className="w-[21.78px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">10</span>
              <span aria-hidden className="mr-[10px] ml-[10px] h-[2px] w-[46px] bg-[#d3dde8]" />
              <span className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
                Global readiness
              </span>
            </div>
            <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase md:hidden">
              Global readiness
            </p>
            <h2 className="pt-[1.01px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-[1.385px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px] md:text-[#1e2126]">
              Designed for global
              <br /> commerce. Activated
              <br /> responsibly, market by
              <br /> market.
            </h2>
            <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:hidden">
              One architecture can support many
              <br /> markets, categories, currencies and
              <br /> legal models. That design does not
              <br /> mean trading is live everywhere —
              <br /> availability is shown honestly, from an
              <br /> approved source.
            </p>
            <p className="hidden pb-[0.785px] text-[20px] leading-[33.6px] text-[#4f647a] md:block">
              One architecture can support many markets,
              <br /> categories, currencies and legal models. That
              <br /> design does not mean trading is live everywhere —
              <br /> availability is shown honestly, from an approved
              <br /> source.
            </p>
          </div>

          <ul className="flex flex-col items-start gap-2 pt-3 md:flex-row md:flex-wrap md:gap-x-3">
            {chips.map((chip, i) => (
              <Fragment key={chip}>
                {i === 2 && <li aria-hidden className="hidden h-0 basis-full md:block" />}
              <li
                className="rounded-full border border-transparent bg-[#f5e7c9] px-2.5 pt-0.5 pb-[3.8px] text-[13px] leading-[20.8px] font-semibold whitespace-nowrap text-[#845212] md:border-[rgba(23,161,133,0.36)] md:bg-[rgba(23,161,133,0.08)] md:text-[#17a185]"
              >
                {chip}
              </li>
              </Fragment>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-[12.795px] md:flex-1 md:gap-[12.9px]">
          <ul className="flex flex-col rounded-2xl border border-[#d3dde8] bg-white p-2">
            {rows.map((row, i) => (
              <li
                key={row.icon}
                className={`flex items-center justify-between gap-[14px] p-4 md:px-6 ${i > 0 ? "border-t border-[#d3dde8]" : ""}`}
              >
                <div className="flex flex-col gap-[2.8px] pb-[1.69px] md:gap-[4.69px] md:pb-[2.72px]">
                  <div className="flex items-center gap-2 pr-[34px] md:pr-0">
                    <Image src={`/images/home/global/${row.icon}.svg`} alt="" width={13} height={13} className="size-[13px]" />
                    <p className="text-[17px] leading-[27.2px] font-bold whitespace-nowrap text-[#0c2140] md:text-[#1e2126]">
                      {row.title}
                    </p>
                  </div>
                  <p className="text-[13px] leading-[20.8px] whitespace-nowrap text-[#4f647a]">{row.detail}</p>
                </div>
                <span
                  className={`flex shrink-0 items-center gap-[7px] rounded-full border px-[11px] pt-[4.5px] pb-[4.69px] ${row.badgeClass}`}
                >
                  <span aria-hidden className={`size-2 rounded-[4px] ${row.dotClass}`} />
                  <span
                    className={`text-xs leading-[19.2px] font-semibold tracking-[0.24px] whitespace-nowrap ${row.textClass}`}
                  >
                    {row.badge}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="pb-[0.595px] text-[13px] leading-[20.8px] text-[#4f647a]">
            Selecting a region in the market menu sets content
            <br className="md:hidden" /> and language only. It does not
            <br className="hidden md:block" /> activate a market or
            <br className="md:hidden" /> change any permission.
          </p>
        </div>
      </div>
    </section>
  );
}
