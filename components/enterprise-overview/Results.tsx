import Image from "next/image";

const base = "/images/enterprise-overview/results";

type Card = {
  icon: string;
  title: string;
  desktop: string[];
  mobile: string[];
  pb: string;
};

const columns: Card[][] = [
  [
    {
      icon: "recovery",
      title: "Gross & expected net recovery",
      desktop: ["Defined with clear boundaries", "— shown only when", "methodology and data lineage", "are approved."],
      mobile: ["Defined with clear boundaries — shown only", "when methodology and data lineage are", "approved."],
      pb: "",
    },
    {
      icon: "sell-through",
      title: "Authorized sell-through",
      desktop: ["By qualified buyer cohort, not", "open public demand."],
      mobile: ["By qualified buyer cohort, not open public", "demand."],
      pb: "md:pb-[49.59px]",
    },
  ],
  [
    {
      icon: "disposition",
      title: "Documented disposition",
      desktop: ["The route a lot actually took,", "end to end."],
      mobile: ["The route a lot actually took, end to end."],
      pb: "md:pb-[49.59px]",
    },
    {
      icon: "evidence",
      title: "Evidence completeness",
      desktop: ["Whether the records needed", "to defend a decision are", "present."],
      mobile: ["Whether the records needed to defend a", "decision are present."],
      pb: "md:pb-[24.8px]",
    },
  ],
];

function Lines({ lines, className }: { lines: string[]; className: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </span>
  );
}

export default function Results() {
  return (
    <section className="bg-[#fbf6ef] py-14 font-[family-name:var(--font-hanken)] md:bg-[#fcfcff] md:p-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 md:gap-14 md:px-0">
        <header className="flex flex-col gap-4 pt-1.5">
          <div className="flex h-[20.14px] items-center gap-2.5 md:h-auto md:py-2">
            <span className="w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 uppercase md:w-[19.13px] md:font-[family-name:var(--font-sora)] md:leading-[20.8px] md:font-black md:text-[#0c2140]">
              <span className="md:hidden">13</span>
              <span className="hidden md:inline">15</span>
            </span>
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-[#0f7a60]/50 md:h-0.5 md:w-[46px] md:bg-[#d3dde8]" />
            <p className="text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase md:ml-[-1px] md:font-[family-name:var(--font-sora)] md:text-xs md:leading-[19.2px] md:tracking-[1.68px] md:text-[#926016]">
              What results can be measured
            </p>
          </div>
          <h2 className="pt-[31px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:w-[780px] md:max-w-full md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:whitespace-normal">
            Definitions and data
            <br className="md:hidden" /> lineage — not invented
            <br className="md:hidden" /> metrics.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-xl md:leading-[26px]">
            We describe what could be measured and
            <br className="md:hidden" /> how it would be defined.
            <br className="hidden md:block" /> No figures appear
            <br className="md:hidden" /> on this page.
          </p>
        </header>

        <div className="hidden h-[355.667px] overflow-hidden rounded-2xl md:block">
          <Image
            src={`${base}/reporting-evidence-dashboard-concept.webp`}
            alt="Hand with a stylus pointing at charts and tables on a tablet, illustrating a reporting and evidence dashboard concept"
            width={1240}
            height={356}
            className="size-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center">
          {columns.map((column) => (
            <ul key={column[0].icon} className="contents md:flex md:min-w-px md:flex-1 md:items-center md:gap-6">
              {column.map((card) => (
                <li
                  key={card.icon}
                  className={`flex flex-col gap-[6.9px] rounded-2xl border border-[#e6e8ec] bg-white p-[18px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:min-w-px md:flex-1 md:p-[26px] ${card.pb}`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#f4e7d6]">
                    <Image src={`${base}/icon-${card.icon}.svg`} alt="" width={20} height={20} />
                  </span>
                  <h3 className="pt-[5.2px] text-base leading-[17.6px] font-semibold tracking-[-0.32px] text-[#0c2140]">
                    {card.title}
                  </h3>
                  <p className="text-base leading-[24.8px] text-[#5a6b7b]">
                    <Lines lines={card.mobile} className="md:hidden" />
                    <Lines lines={card.desktop} className="hidden md:inline" />
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
