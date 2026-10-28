import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

const hanken = hankenGrotesk;

const A = "/images/about/principles";
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

const principles = [
  {
    title: "Value with discipline",
    icon: "value-shield",
    lines: ["Recovery outcomes must respect product", "safety, ownership, contractual rights and", "lawful trade."],
  },
  {
    title: "Trust before access",
    icon: "trust-lock",
    lines: ["Verified identity alone is insufficient; role,", "market and buyer eligibility are evaluated in", "context."],
  },
  {
    title: "Seller control",
    icon: "seller-sliders",
    lines: ["Enterprises retain approved control over", "audiences, inventory disclosures and", "disposition routes."],
  },
  {
    title: "Evidence before claims",
    icon: "evidence-file",
    lines: ["Track outcomes with clear calculation", "boundaries rather than asserting", "unsupported value."],
  },
  {
    title: "Worldwide design, local accountability",
    icon: "worldwide-globe",
    lines: ["One foundation accommodates different", "categories, markets, currencies and legal", "models."],
  },
];

export default function Principles() {
  return (
    <section
      aria-labelledby="principles-heading"
      className={`${hanken.variable} w-full bg-[#0c2140] py-14 font-[family-name:var(--font-sora)] md:px-8 md:py-24 min-[1400px]:p-24`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-4 md:px-0">
        <div className="flex max-w-[625px] flex-col gap-4 pt-1.5 md:max-w-none">
          {/* Eyebrow: Hanken Grotesk on mobile, Sora on desktop */}
          <div className="flex items-center font-[family-name:var(--font-hanken)] md:font-[family-name:var(--font-sora)]">
            <span className="w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-white uppercase opacity-60">
              04
            </span>
            <span className="mx-[10px] h-px w-[28px] shrink-0 bg-[#45bca0] opacity-50" />
            <span className="text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#45bca0] uppercase">
              Our principles
            </span>
          </div>
          <h2
            id="principles-heading"
            className={`${HK} pt-[30.805px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-white md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]`}
          >
            <span className="md:hidden">
              Five principles behind
              <br />
              every decision.
            </span>
            <span className="hidden md:inline">Five principles behind every decision.</span>
          </h2>
          <p className={`${HK} text-[17.9px] leading-[23.24px] text-[#c7d2e0] md:text-[20px] md:leading-[26px]`}>
            <Copy
              m={[
                "These describe how the platform is designed",
                "to operate — not certifications or third-",
                "party endorsements.",
              ]}
              d={["These describe how the platform is designed to operate — not certifications or third-party endorsements."]}
            />
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li
              key={p.title}
              className="flex min-w-0 flex-col gap-[6.8px] rounded-2xl border border-white/[0.14] bg-[#1c3356] p-[18px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:min-h-[233.5px] md:p-[26px]"
            >
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-white/[0.08] md:h-16 md:w-16 md:rounded-[11px] md:bg-[rgba(23,161,133,0.16)]">
                <Image
                  src={`${A}/icon-${p.icon}-mobile.svg`}
                  alt=""
                  width={22}
                  height={22}
                  className="md:hidden"
                />
                <Image
                  src={`${A}/icon-${p.icon}-desktop.svg`}
                  alt=""
                  width={32}
                  height={32}
                  className="hidden md:block"
                />
              </span>
              <h3
                className={`${HK} pt-[7.2px] text-[16.8px] leading-[18.48px] font-semibold tracking-[-0.336px] text-white`}
              >
                {p.title}
              </h3>
              <p className={`${HK} pb-[0.595px] text-[16px] leading-[24.8px] text-[#c7d2e0]`}>
                <Copy m={p.lines} d={p.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
