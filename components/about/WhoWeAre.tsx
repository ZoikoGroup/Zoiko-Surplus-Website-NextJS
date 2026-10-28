import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

const hanken = hankenGrotesk;

const A = "/images/about/who-we-are";
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

export default function WhoWeAre() {
  return (
    <section
      aria-labelledby="who-we-are-heading"
      className={`${hanken.variable} w-full bg-white pt-[56.01px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:px-8 md:py-24 min-[1400px]:p-24`}
    >
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-12 px-4 md:gap-4 md:px-0">
        <div className="flex flex-col gap-[47px] pt-1.5 md:gap-0 md:pt-0">
          {/* Mobile eyebrow */}
          <div className="flex items-center md:hidden">
            <span
              className={`${HK} w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase opacity-50`}
            >
              02
            </span>
            <span className="mx-[10px] h-px w-[28px] shrink-0 bg-[#0f7a60] opacity-50" />
            <span
              className={`${HK} text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase`}
            >
              Who we are
            </span>
          </div>
          {/* Desktop eyebrow */}
          <div className="hidden items-center py-2 md:flex">
            <span className="w-[19.13px] shrink-0 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
              03
            </span>
            <span className="mx-[10px] h-0.5 w-[46px] shrink-0 bg-[#d3dde8]" />
            <span className="flex items-baseline gap-1">
              <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Who</span>
              <span className="text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
                we are
              </span>
            </span>
          </div>
          <h2
            id="who-we-are-heading"
            className={`${HK} pb-[0.61px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:hidden`}
          >
            What is Zoiko Surplus?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-[27.99px] md:flex-row md:justify-center md:gap-8 lg:gap-14">
          <div className="flex w-full min-w-0 flex-col md:flex-1 md:gap-14">
            <p
              aria-hidden
              className={`${HK} hidden text-[44px] leading-[48.4px] font-bold tracking-[-0.88px] whitespace-nowrap text-[#0c2140] md:block`}
            >
              What is Zoiko Surplus?
            </p>
            <div className="flex flex-col gap-[15.2px] md:gap-[15.3px]">
              <p className={`${HK} text-[17.9px] leading-[23.24px] text-[#0c2140] md:text-[20px] md:leading-[26px]`}>
                <Copy
                  m={[
                    "Zoiko Surplus is a global-by-design, asset-",
                    "light surplus commerce and disposition",
                    "platform within Zoiko Supply Group Inc., a",
                    "Zoiko Group company.",
                  ]}
                  d={[
                    "Zoiko Surplus is a global-by-design, asset-light surplus",
                    "commerce and disposition platform within Zoiko Supply",
                    "Group Inc., a Zoiko Group company.",
                  ]}
                />
              </p>
              <p className={`${HK} text-[18px] leading-[27.9px] text-[#5a6b7b]`}>
                <Copy
                  m={[
                    "It is designed to help enterprises qualify",
                    "surplus goods, reach appropriately verified",
                    "business demand and choose governed",
                    "recovery pathways — with market",
                    "availability and transaction permissions",
                    "activated separately by jurisdiction and",
                    "category.",
                  ]}
                  d={[
                    "It is designed to help enterprises qualify surplus goods, reach",
                    "appropriately verified business demand and choose governed",
                    "recovery pathways — with market availability and transaction",
                    "permissions activated separately by jurisdiction and category.",
                  ]}
                />
              </p>
              <p className={`${HK} text-[18px] leading-[27.9px] text-[#5a6b7b]`}>
                <Copy
                  m={[
                    "Instead of treating all stock as a public",
                    "classified listing, the platform brings",
                    "together inventory qualification, seller-",
                    "authorized access, policy checks, qualified",
                    "demand, commercial recovery decisions,",
                    "transaction records and exception",
                    "resolution.",
                  ]}
                  d={[
                    "Instead of treating all stock as a public classified listing, the platform",
                    "brings together inventory qualification, seller-authorized access,",
                    "policy checks, qualified demand, commercial recovery decisions,",
                    "transaction records and exception resolution.",
                  ]}
                />
              </p>
            </div>
          </div>
          <div className="relative aspect-[358/268.5] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:aspect-[552/414] md:w-auto md:min-w-0 md:flex-1">
            <Image
              src={`${A}/warehouse-aisle-mobile.webp`}
              alt="Long warehouse aisle lined with tall shelving full of stock"
              fill
              sizes="358px"
              className="object-cover md:hidden"
            />
            <Image
              src={`${A}/warehouse-racks-desktop.webp`}
              alt="Warehouse racking stacked with cardboard boxes beside a loaded pallet"
              fill
              sizes="(min-width: 1440px) 598px, 50vw"
              className="hidden object-cover md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
