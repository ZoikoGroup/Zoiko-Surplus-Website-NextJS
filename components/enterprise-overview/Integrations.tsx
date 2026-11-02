import Image from "next/image";

const base = "/images/enterprise-overview/integrations";

type Item = {
  title: string;
  status: "concept" | "scoped";
  image: string;
  alt: string;
  desktop: string[];
  mobile: string[];
};

const items: Item[] = [
  {
    title: "Import & export",
    status: "concept",
    image: "import-export",
    alt: "Hand using a stylus on a tablet showing charts and tables",
    desktop: ["Conceptual import of qualified lot data and export of", "evidence — subject to architecture review."],
    mobile: ["Conceptual import of qualified lot data and export", "of evidence — subject to architecture review."],
  },
  {
    title: "Payment providers",
    status: "scoped",
    image: "payment-providers",
    alt: "Customer paying with a card at a handheld payment terminal",
    desktop: ["Any payments would run through authorized PSPs —", "Zoiko does not claim escrow or custody by default."],
    mobile: ["Any payments would run through authorized PSPs", "— Zoiko does not claim escrow or custody by", "default."],
  },
  {
    title: "Carriers & recovery",
    status: "scoped",
    image: "carriers-recovery",
    alt: "Two workers loading cardboard boxes into a delivery van",
    desktop: ["Transport, recycling and donation via separately", "contracted partners, where activated."],
    mobile: ["Transport, recycling and donation via separately", "contracted partners, where activated."],
  },
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

function Badge({ status }: { status: Item["status"] }) {
  const concept = status === "concept";
  return (
    <span
      className={`flex h-[25.36px] shrink-0 items-center gap-[7px] rounded-full pl-2.5 text-[11.2px] leading-[17.36px] font-bold tracking-[0.672px] uppercase ${
        concept ? "w-[94.92px] bg-[#eef1f5] text-[#3e4b59]" : "w-[86.06px] text-[#7e4e1c]"
      }`}
    >
      <Image src={`${base}/icon-badge-${status}.svg`} alt="" width={12} height={12} />
      {concept ? "Concept" : "Scoped"}
    </span>
  );
}

export default function Integrations() {
  return (
    <section className="bg-white font-[family-name:var(--font-hanken)] md:p-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 md:gap-14 md:px-0">
        <header className="flex flex-col gap-4 pt-1.5">
          <div className="flex h-[20.14px] items-center gap-2.5 md:h-auto md:py-2">
            <span className="w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 uppercase md:w-[19.13px] md:font-[family-name:var(--font-sora)] md:leading-[20.8px] md:font-black md:text-[#0c2140]">
              <span className="md:hidden">12</span>
              <span className="hidden md:inline">14</span>
            </span>
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-[#0f7a60]/50 md:h-0.5 md:w-[46px] md:bg-[#d3dde8]" />
            <p className="text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase md:ml-[-1px] md:font-[family-name:var(--font-sora)] md:text-xs md:leading-[19.2px] md:tracking-[1.68px] md:text-[#926016]">
              Integrations &amp; handoffs
            </p>
          </div>
          <h2 className="pt-[31px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]">
            Clear boundaries with
            <br className="md:hidden" /> third parties.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:w-[780px] md:max-w-full md:text-xl md:leading-[26px]">
            Capabilities are labeled by maturity —
            <br className="md:hidden" /> concept or scoped — so nothing reads as a
            <br className="md:hidden" /> tested, live promise before it is.
          </p>
        </header>

        <ul className="flex flex-col gap-3 md:flex-row md:justify-center">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-[5.3px] rounded-xl border border-[#e6e8ec] bg-white px-[18px] pt-[19.33px] pb-[18px] md:min-w-px md:flex-1 md:gap-4"
            >
              <div className="hidden h-[200px] overflow-hidden rounded-2xl md:block">
                <Image
                  src={`${base}/${item.image}.webp`}
                  alt={item.alt}
                  width={750}
                  height={400}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[5.3px] md:gap-[5px]">
                <div className="flex flex-col gap-[5.3px] md:flex-row md:items-start md:gap-[5px]">
                  <div className="order-last pt-[4.7px] md:order-none md:min-w-px md:flex-1">
                    <h3 className="text-[15.7px] leading-[17.25px] font-semibold tracking-[-0.314px] text-[#0c2140]">
                      {item.title}
                    </h3>
                  </div>
                  <Badge status={item.status} />
                </div>
                <p className="text-[13.8px] leading-[20.64px] text-[#5a6b7b]">
                  <Lines lines={item.mobile} className="md:hidden" />
                  <Lines lines={item.desktop} className="hidden md:inline" />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
