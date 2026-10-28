"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

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
    mobileLines: [
      "Confirm condition, quantity,",
      "provenance and the category",
      "requirements a lot must meet before it",
      "can move.",
    ],
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];

  function select(i: number) {
    setActive(i);
    tabRefs.current[i]?.focus();
  }

  function onKeyDown(e: KeyboardEvent) {
    const last = stages.length - 1;
    const keys: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowDown: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      ArrowUp: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key]);
    }
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="The seven governed stages"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2 pt-5 md:flex-nowrap md:pt-0"
      >
        {stages.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.name}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`about-stage-tab-${i}`}
              aria-selected={isActive}
              aria-controls="about-stage-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-[9px] rounded-full border px-3.5 py-2.5 text-left md:min-h-28 md:min-w-px md:flex-1 md:flex-col md:items-start md:gap-2.5 md:rounded-xl md:px-4 md:pt-3.5 md:pb-[31px] ${
                isActive
                  ? "border-[#0c2140] bg-[#0c2140] md:border-[#1e2126] md:bg-[#1e2126]"
                  : "border-[#e6e8ec] bg-white md:border-[#d3dde8]"
              }`}
            >
              <span
                className={`flex size-[22px] shrink-0 items-center justify-center rounded-[11px] text-[12.5px] leading-normal font-semibold md:size-[34px] md:rounded-[9px] md:text-[15.2px] md:font-bold ${
                  isActive
                    ? "bg-[#18a884] text-white md:bg-[#17a185]"
                    : "bg-[#f5f7fa] text-[#5a6b7b] md:bg-[#0c2140]/5 md:text-[#1e2126]"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-[14.4px] leading-normal font-semibold md:text-[17px] ${
                  isActive ? "text-white" : "text-[#5a6b7b] md:text-[#1e2126]"
                }`}
              >
                {s.name}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="about-stage-panel"
        aria-labelledby={`about-stage-tab-${active}`}
        className="flex flex-col gap-6 rounded-2xl border border-[#e6e8ec] bg-white px-5 pt-[19px] pb-5 md:flex-row md:items-center md:justify-between md:gap-8 md:border-[#d3dde8] md:px-[35.2px] md:pt-[37.2px] md:pb-[35.2px]"
      >
        <div className="flex min-w-0 flex-col gap-[9.3px] md:max-w-[819px] md:gap-[13px]">
          <div className="flex flex-col gap-[9.3px] md:gap-4">
            <h3 className="flex items-center gap-3 pb-[0.64px] text-[22.4px] leading-[24.64px] font-semibold tracking-[-0.448px] text-[#0c2140] md:pb-0 md:text-[28px] md:leading-[34.16px] md:tracking-[-0.28px] md:text-[#1e2126]">
              <span className="hidden size-10 shrink-0 items-center justify-center rounded-[9px] bg-[#17a185] text-[16.8px] leading-[20.5px] font-bold tracking-[-0.28px] text-white md:flex">
                {active + 1}
              </span>
              {stage.name}
            </h3>
            <p className="text-[18px] leading-[27.9px] text-[#5a6b7b] md:text-[21px] md:leading-[33.6px] md:text-[#4f647a]">
              {stage.mobileLines ? (
                <>
                  <span className="md:hidden">
                    {stage.mobileLines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < stage.mobileLines!.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                  <span className="hidden md:inline">{stage.description}</span>
                </>
              ) : (
                stage.description
              )}
            </p>
          </div>

          {/* Mobile pills */}
          <ul className="flex flex-wrap items-start gap-2 pt-[6.7px] md:hidden">
            {[
              { label: "Input", value: stage.input, icon: "input-icon" },
              { label: "Output", value: stage.output, icon: "output-icon" },
            ].map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-1.5 rounded-full bg-[#f5f7fa] px-[11px] pt-[5.5px] pb-[6.33px] text-[12.8px] leading-[19.84px] font-semibold whitespace-nowrap text-[#13294b]"
              >
                <Image
                  src={`/images/about/seven-stages/${p.icon}.svg`}
                  alt=""
                  width={15}
                  height={15}
                />
                {p.label}: {p.value}
              </li>
            ))}
          </ul>

          {/* Desktop pills */}
          <ul className="hidden flex-wrap items-start gap-2.5 pt-[5.2px] md:flex">
            {[
              { label: "Input:", value: stage.input, dot: "bg-[#4f647a]" },
              { label: "Output:", value: stage.output, dot: "bg-[#926016]" },
            ].map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-[7px] rounded-full border border-[#d3dde8] bg-white px-[11px] py-[5px] text-xs leading-[19.2px] font-semibold tracking-[0.24px] whitespace-nowrap text-[#4f647a]"
              >
                <span aria-hidden="true" className={`size-2 rounded-full ${p.dot}`} />
                {p.label}
                <span>{p.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[316/237] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a,#0c2140)] md:h-[223px] md:w-[288px] md:shrink-0 md:rounded-lg">
          <Image
            src="/images/about/seven-stages/stage-qualify-mobile.webp"
            alt=""
            fill
            sizes="316px"
            className="object-cover md:hidden"
          />
          <Image
            src="/images/about/seven-stages/stage-qualify-desktop.webp"
            alt=""
            fill
            sizes="288px"
            className="hidden object-cover md:block"
          />
        </div>
      </div>
    </>
  );
}
