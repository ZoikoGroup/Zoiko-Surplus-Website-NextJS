"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

const IMG = "/images/enterprise-overview/seven-stages";

// Only the "Qualify" panel is designed in Figma; copy for the other six stages is placeholder text.
const stages: {
  name: string;
  description: string;
  mobileLines?: string[];
  input: string;
  output: string;
}[] = [
  {
    name: "Qualify",
    description:
      "Confirm condition, quantity, provenance and the category requirements a lot must meet before it can move.",
    mobileLines: ["Confirm product condition, provenance", "and the seller’s authority to dispose."],
    input: "Lot record",
    output: "Qualified lot",
  },
  {
    name: "Govern",
    description:
      "Apply market rules, permitted audiences and policy and safety checks before a lot is shown to anyone.",
    input: "Qualified lot",
    output: "Governed lot",
  },
  {
    name: "Match",
    description:
      "Route the lot only to verified buyers and approved recovery pathways that fit its category and corridor.",
    input: "Governed lot",
    output: "Eligible audience",
  },
  {
    name: "Optimize",
    description:
      "Compare the permitted routes and outcomes to find the best fit for value, timing and recovery.",
    input: "Eligible audience",
    output: "Recommended route",
  },
  {
    name: "Transact",
    description:
      "Agree terms and complete the transaction between the participating parties under the applicable agreement.",
    input: "Recommended route",
    output: "Agreed transaction",
  },
  {
    name: "Prove",
    description:
      "Record evidence of what happened at each step so the outcome can be reviewed and verified.",
    input: "Agreed transaction",
    output: "Evidence record",
  },
  {
    name: "Resolve",
    description:
      "Close the lot with a documented outcome, whether sold, redeployed, recovered or otherwise disposed of.",
    input: "Evidence record",
    output: "Resolved outcome",
  },
];

export default function SevenStagesTabs() {
  const [active, setActive] = useState(0);
  const desktopTabs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileTabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];

  function onKeyDown(e: KeyboardEvent, refs: typeof desktopTabs) {
    const last = stages.length - 1;
    const next: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowDown: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      ArrowUp: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (e.key in next) {
      e.preventDefault();
      setActive(next[e.key]);
      refs.current[next[e.key]]?.focus();
    }
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden flex-col gap-5 font-[family-name:var(--font-sora)] md:flex">
        <div className="flex flex-col gap-5">
          <div
            role="tablist"
            aria-label="The seven governed stages"
            className="flex items-start justify-center gap-2"
            onKeyDown={(e) => onKeyDown(e, desktopTabs)}
          >
            {stages.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.name}
                  ref={(el) => {
                    desktopTabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`seven-stages-d-tab-${i}`}
                  aria-selected={on}
                  aria-controls="seven-stages-d-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex min-h-[112px] min-w-px flex-1 cursor-pointer flex-col items-start gap-2.5 rounded-xl border px-4 pt-3.5 pb-[31px] text-left ${
                    on ? "border-[#1e2126] bg-[#1e2126]" : "border-[#d3dde8] bg-white"
                  }`}
                >
                  <span
                    className={`flex size-[34px] shrink-0 items-center justify-center rounded-[9px] text-[15.2px] leading-none font-bold ${
                      on ? "bg-[#17a185] text-white" : "bg-[rgba(12,33,64,0.05)] text-[#1e2126]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-[17px] leading-none font-semibold whitespace-nowrap ${on ? "text-white" : "text-[#1e2126]"}`}
                  >
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="seven-stages-d-panel"
            aria-labelledby={`seven-stages-d-tab-${active}`}
            className="flex items-center justify-between gap-8 rounded-2xl border border-[#d3dde8] bg-white px-[35.2px] pt-[37.2px] pb-[35.2px]"
          >
            <div className="flex w-[819px] max-w-full flex-col gap-[13px]">
              <div className="flex w-[816px] max-w-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[9px] bg-[#17a185] text-[16.8px] leading-[20.5px] font-bold tracking-[-0.28px] text-white">
                    {active + 1}
                  </span>
                  <h3 className="text-[28px] leading-[34.16px] font-semibold tracking-[-0.28px] text-[#1e2126]">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-[21px] leading-[33.6px] text-[#4f647a]">{stage.description}</p>
              </div>
              <div className="flex flex-wrap items-stretch gap-2.5 pt-[5.2px]">
                {[
                  { label: "Input:", value: stage.input, dot: "bg-[#4f647a]" },
                  { label: "Output:", value: stage.output, dot: "bg-[#926016]" },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-[7px] rounded-full border border-[#d3dde8] bg-white px-[11px] py-[5px] text-[12px] leading-[19.2px] font-semibold tracking-[0.24px] whitespace-nowrap text-[#4f647a]"
                  >
                    <span className={`size-2 rounded bg-clip-padding ${p.dot}`} />
                    {p.label}
                    <span>{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src={`${IMG}/stage-qualify-photo-desktop.webp`}
              alt="Warehouse team qualifying a surplus lot"
              width={288}
              height={223}
              className="h-[223px] w-[288px] shrink-0 rounded-lg object-cover max-lg:hidden"
            />
          </div>
        </div>

        <p className="flex items-center gap-[9px] text-[13px] leading-[20.8px] text-[#4f647a]">
          <Image src={`${IMG}/info-icon.svg`} alt="" width={13} height={13} className="shrink-0" />
          Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.
        </p>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-6 font-[family-name:var(--font-hanken)] md:hidden">
        <div
          role="tablist"
          aria-label="The seven stages"
          className="flex flex-wrap gap-2 pt-6"
          onKeyDown={(e) => onKeyDown(e, mobileTabs)}
        >
          {stages.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.name}
                ref={(el) => {
                  mobileTabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`seven-stages-m-tab-${i}`}
                aria-selected={on}
                aria-controls="seven-stages-m-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer items-center gap-[9px] rounded-full border px-3.5 py-2.5 ${
                  on ? "border-[#0c2140] bg-[#0c2140]" : "border-[#e6e8ec] bg-white"
                }`}
              >
                <span
                  className={`flex size-[22px] items-center justify-center rounded-[11px] text-[12.5px] leading-none font-semibold ${
                    on ? "bg-[#18a884] text-white" : "bg-[#f5f7fa] text-[#5a6b7b]"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-[14.4px] leading-none font-semibold whitespace-nowrap ${on ? "text-white" : "text-[#5a6b7b]"}`}
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="seven-stages-m-panel"
          aria-labelledby={`seven-stages-m-tab-${active}`}
          className="flex flex-col gap-6 rounded-2xl border border-[#e6e8ec] bg-white px-5 pt-[23px] pb-5"
        >
          <div className="flex flex-col gap-[9.4px]">
            <h3 className="pb-[0.64px] text-[22.4px] leading-[24.64px] font-semibold tracking-[-0.448px] text-[#0c2140]">
              {stage.name}
            </h3>
            <p className="text-[18px] leading-[27.9px] text-[#5a6b7b]">
              {stage.mobileLines ? (
                <>
                  {stage.mobileLines[0]}
                  <br />
                  {stage.mobileLines[1]}
                </>
              ) : (
                stage.description
              )}
            </p>
            <div className="flex flex-wrap items-stretch gap-2 pt-[6.61px]">
              {[
                { label: "Input", value: stage.input, icon: "pill-input-icon.svg" },
                { label: "Output", value: stage.output, icon: "pill-output-icon.svg" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-1.5 rounded-full bg-[#f5f7fa] px-[11px] pt-[5.5px] pb-[6.33px] text-[12.8px] leading-[19.84px] font-semibold whitespace-nowrap text-[#13294b]"
                >
                  <Image src={`${IMG}/${p.icon}`} alt="" width={15} height={15} className="shrink-0" />
                  {p.label}: {p.value}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[316/237] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]">
            <Image
              src={`${IMG}/stage-qualify-photo-mobile.webp`}
              alt="Warehouse team qualifying a surplus lot"
              width={316}
              height={421}
              sizes="316px"
              className="absolute top-[-38.89%] left-0 h-[177.78%] w-full max-w-none"
            />
          </div>
        </div>

        <Link
          href="/surplus-enterprise/how-it-works"
          className="flex h-[24.8px] items-center gap-[9px] text-[16px] leading-[24.8px] font-semibold text-[#0f7a60]"
        >
          See How It Works in full
          <Image src={`${IMG}/arrow-right-icon.svg`} alt="" width={18} height={18} />
        </Link>
      </div>
    </>
  );
}
