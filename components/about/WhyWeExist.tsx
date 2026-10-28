import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

const hanken = hankenGrotesk;

const A = "/images/about/why-we-exist";
const HK = "font-[family-name:var(--font-hanken)]";
const DBR = <br className="hidden min-[1400px]:block" />;

/** Renders copy with per-viewport line breaks (mobile lines / desktop lines). */
function Copy({ m, d }: { m: string[]; d: string[] }) {
  const join = (lines: string[], br: React.ReactNode) =>
    lines.map((l, i) => (
      <span key={i}>
        {i > 0 && " "}
        {i > 0 && br}
        {l}
      </span>
    ));
  return (
    <>
      <span className="md:hidden">{join(m, <br />)}</span>
      <span className="hidden md:inline">{join(d, DBR)}</span>
    </>
  );
}

const cards = [
  {
    title: "Our vision",
    icon: "icon-vision-eye.svg",
    iconBg: "bg-[#dcf3ed]",
    m: [
      "A world where usable products and",
      "productive resources retain their value for",
      "longer, supported by trusted, efficient and",
      "responsible markets.",
    ],
    d: [
      "A world where usable products and productive resources retain their",
      "value for longer, supported by trusted, efficient and responsible",
      "markets.",
    ],
  },
  {
    title: "Our mission",
    icon: "icon-mission-target.svg",
    iconBg: "bg-[#f4e7d6]",
    m: [
      "To provide the digital infrastructure that",
      "helps businesses qualify surplus inventory,",
      "reach appropriately verified demand,",
      "evaluate commercially sound disposition",
      "pathways and execute accountable",
      "transactions — market by market, category",
      "by category.",
    ],
    d: [
      "To provide the digital infrastructure that helps businesses qualify",
      "surplus inventory, reach appropriately verified demand, evaluate",
      "commercially sound disposition pathways and execute accountable",
      "transactions — market by market, category by category.",
    ],
  },
];

export default function WhyWeExist() {
  return (
    <section
      aria-labelledby="why-we-exist-heading"
      className={`${hanken.variable} w-full bg-[#fbf6ef] pt-[111.99px] pb-14 font-[family-name:var(--font-sora)] md:bg-white md:px-8 md:pt-14 min-[1400px]:px-24`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-4 md:px-0">
        <div className="flex flex-col gap-[47px] pt-1.5 md:gap-4">
          {/* Mobile eyebrow */}
          <div className="flex items-center md:hidden">
            <span
              className={`${HK} w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase opacity-50`}
            >
              03
            </span>
            <span className="mx-[10px] h-px w-[28px] shrink-0 bg-[#0f7a60] opacity-50" />
            <span
              className={`${HK} text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase`}
            >
              Why we exist
            </span>
          </div>
          {/* Desktop eyebrow */}
          <div className="hidden items-center py-2 md:flex">
            <span className="w-[19.13px] shrink-0 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
              02
            </span>
            <span className="mx-[10px] h-0.5 w-[46px] shrink-0 bg-[#d3dde8]" />
            <span className="flex items-baseline gap-1">
              <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Why</span>
              <span className="text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
                we exist
              </span>
            </span>
          </div>
          <h2
            id="why-we-exist-heading"
            className={`${HK} pb-[0.61px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]`}
          >
            Our vision and mission
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-center">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex min-w-0 flex-col gap-[6.7px] rounded-2xl border border-[#e6e8ec] bg-white p-[18px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:flex-1 md:bg-[#fcfcff] md:p-[26px]"
            >
              <span className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] ${c.iconBg}`}>
                <Image src={`${A}/${c.icon}`} alt="" width={22} height={22} />
              </span>
              <h3
                className={`${HK} pt-[6.3px] pb-[0.64px] text-[22.4px] leading-[24.64px] font-semibold tracking-[-0.448px] text-[#0c2140] md:pt-[7.2px] md:pb-0 md:text-[28px] md:leading-[30.8px] md:tracking-[-0.56px]`}
              >
                {c.title}
              </h3>
              <p className={`${HK} text-[16px] leading-[24.8px] text-[#5a6b7b]`}>
                <Copy m={c.m} d={c.d} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
