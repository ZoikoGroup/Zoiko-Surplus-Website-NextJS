import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

// Figma sets this section in Hanken Grotesk (variable weights).
const hanken = hankenGrotesk;

const A = "/images/about/friction";

/** Each response line is [bold part, regular part]; lines are joined with <br /> exactly as in the mobile frame. */
type Line = [string, string];

type Problem = {
  code: string;
  icon: string;
  title: string[];
  body: string[];
  response: Line[];
};

const problems: Problem[] = [
  {
    code: "P01",
    icon: "icon-idle-capital.svg",
    title: ["Idle capital &", "value decay"],
    body: ["Slow disposition", "erodes recovery", "and ties up space", "and working", "capital."],
    response: [
      ["Designed", ""],
      ["response:", ""],
      ["", "Recovery-route"],
      ["", "visibility and"],
      ["", "timing-aware"],
      ["", "planning."],
    ],
  },
  {
    code: "P02",
    icon: "icon-fragmented-demand.svg",
    title: ["Fragmented", "qualified demand"],
    body: ["Contact lists and", "unqualified", "buyers don’t", "prove genuine", "buying capacity."],
    response: [
      ["Designed", ""],
      ["response:", "Seller-"],
      ["", "matched"],
      ["", "approved"],
      ["", "business cohorts"],
      ["", "and demand"],
      ["", "evidence."],
    ],
  },
  {
    code: "P03",
    icon: "icon-brand-channel-risk.svg",
    title: ["Brand & channel", "risk"],
    body: ["Uncontrolled", "public exposure", "can compromise", "commercial", "controls."],
    response: [
      ["Designed", ""],
      ["response:", "Seller-"],
      ["", "private markets"],
      ["", "and access"],
      ["", "entitlements"],
      ["", "within legal limits."],
    ],
  },
  {
    code: "P04",
    icon: "icon-stock-truth.svg",
    title: ["Weak origin &", "stock truth"],
    body: ["Descriptions,", "condition and", "authority can", "drift across", "systems."],
    response: [
      ["Designed", ""],
      ["response:", "Source"],
      ["", "evidence,"],
      ["", "category"],
      ["", "qualification and"],
      ["", "stock-authority"],
      ["", "checks."],
    ],
  },
  {
    code: "P05",
    icon: "icon-safety-jurisdiction.svg",
    title: ["Safety &", "jurisdiction", "complexity"],
    body: ["Permitted", "handling and", "disposal differ", "across categories", "and countries."],
    response: [
      ["Designed", ""],
      ["response:", ""],
      ["", "Rulepacks and"],
      ["", "policy gates"],
      ["", "before route"],
      ["", "recommendations."],
    ],
  },
  {
    code: "P06",
    icon: "icon-hidden-economics.svg",
    title: ["Hidden recovery", "economics"],
    body: ["Gross bid values", "can misrepresent", "fees, transport,", "risk and time."],
    response: [
      ["Designed", ""],
      ["response:", "Seller-"],
      ["", "perspective"],
      ["", "expected net"],
      ["", "recovery with"],
      ["", "transparent"],
      ["", "assumptions."],
    ],
  },
  {
    code: "P07",
    icon: "icon-transaction-evidence.svg",
    title: ["Broken", "transaction", "evidence"],
    body: ["A listing or", "accepted offer", "alone doesn’t", "guarantee", "fulfillment."],
    response: [
      ["Designed", ""],
      ["response:", ""],
      ["", "Governed order"],
      ["", "handoff, third-"],
      ["", "party rails and an"],
      ["", "evidence trail."],
    ],
  },
  {
    code: "P08",
    icon: "icon-urgent-food.svg",
    title: ["Urgent food &", "grocery surplus"],
    body: ["Shelf life and", "handling can", "make delayed", "routes", "unsuitable."],
    response: [
      ["Designed", ""],
      ["response:", ""],
      ["", "Separate food"],
      ["", "category pack,"],
      ["", "safety checks"],
      ["", "and gated"],
      ["", "activation."],
    ],
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

// Mobile-only section (the desktop design has no equivalent).
export default function Friction() {
  return (
    <section
      aria-labelledby="friction-heading"
      className={`${hanken.className} w-full bg-white md:hidden`}
    >
      <div className="flex flex-col gap-12 px-4 pt-14 pb-14">
        <div className="flex flex-col gap-4 pt-1.5">
          <div className="flex h-[20.14px] items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase">
            <span className="text-[#0c2140] opacity-50">05</span>
            <span aria-hidden className="h-px w-7 bg-[#0f7a60] opacity-50" />
            <span className="text-[#0f7a60]">The friction</span>
          </div>
          <h2
            id="friction-heading"
            className="pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140]"
          >
            Problems we are
            <br />
            designed to solve.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b]">
            Specific commercial friction points — and
            <br />
            the governed response each one is designed
            <br />
            to receive.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-6">
          {problems.map((p) => (
            <li
              key={p.code}
              className="flex flex-col rounded-2xl border border-[#e6e8ec] bg-white px-[18px] pt-[18px] pb-[24.8px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)]"
            >
              <div className="relative h-10">
                <span className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#f4e7d6]">
                  <Image src={`${A}/${p.icon}`} alt="" width={20} height={20} />
                </span>
                <span className="absolute top-4 left-10 text-[13px] leading-[20.14px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase opacity-50">
                  {p.code}
                </span>
              </div>
              <h3 className="mt-[11.47px] text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] text-[#0c2140]">
                <Lines lines={p.title} />
              </h3>
              <p className="mt-[7.5px] pb-[0.89px] text-[16px] leading-[24.8px] text-[#5a6b7b]">
                <Lines lines={p.body} />
              </p>
              <p className="mt-3 border-t border-[#e6e8ec] pt-3 text-[16px] leading-[24.8px] text-[#13294b]">
                {p.response.map(([bold, regular], i) => (
                  <span key={i}>
                    {bold && <b className="font-bold text-[#0f7a60]">{bold}</b>}
                    {bold && regular && " "}
                    {regular}
                    {i < p.response.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
