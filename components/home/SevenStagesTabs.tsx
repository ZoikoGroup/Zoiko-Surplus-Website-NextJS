"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

// Only the "Qualify" panel is designed in Figma; the other stage copy follows the same pattern.
const stages = [
  {
    name: "Qualify",
    description:
      "Confirm condition, quantity, provenance and the category requirements a lot must meet before it can move.",
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
        className="flex flex-col gap-2.5 pt-7 md:flex-row md:gap-2 md:pt-0"
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
              id={`stage-tab-${i}`}
              aria-selected={isActive}
              aria-controls="stage-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left md:min-h-28 md:min-w-px md:flex-1 md:flex-col md:items-start md:gap-2.5 md:pt-3.5 md:pb-[31px] ${
                isActive
                  ? "border-[#0c2140] bg-[#0c2140] md:border-[#1e2126] md:bg-[#1e2126]"
                  : "border-[#d3dde8] bg-white"
              }`}
            >
              <span
                className={`flex size-[34px] shrink-0 items-center justify-center rounded-[9px] text-[15.2px] font-bold ${
                  isActive
                    ? "bg-[#17a185] text-[#0c2140] md:text-white"
                    : "bg-[#0c2140]/5 text-[#0c2140] md:text-[#1e2126]"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-[17px] font-semibold ${
                  isActive ? "text-white" : "text-[#0c2140] md:text-[#1e2126]"
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
        id="stage-panel"
        aria-labelledby={`stage-tab-${active}`}
        className="mt-5 flex flex-col gap-3.5 rounded-2xl border border-[#d3dde8] bg-white px-[22.4px] pt-[24.4px] pb-[22.4px] md:mt-0 md:flex-row md:items-center md:justify-between md:gap-8 md:px-[35.2px] md:pt-[37.2px] md:pb-[35.2px]"
      >
        <div className="flex min-w-0 flex-col gap-3.5 md:max-w-[819px] md:gap-[13px]">
          <div className="flex flex-col gap-3.5 md:gap-4">
            <h3 className="flex items-center gap-3 text-[20.1px] leading-[24.54px] font-semibold tracking-[-0.201px] text-[#0c2140] md:text-[28px] md:leading-[34.16px] md:tracking-[-0.28px] md:text-[#1e2126]">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[9px] bg-[#17a185] text-[16.8px] leading-[20.5px] font-bold tracking-[-0.201px] text-[#0c2140] md:tracking-[-0.28px] md:text-white">
                {active + 1}
              </span>
              {stage.name}
            </h3>
            <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:text-[21px] md:leading-[33.6px]">
              {stage.description}
            </p>
          </div>
          <ul className="flex flex-col items-start gap-2.5 pt-[3.99px] md:flex-row md:flex-wrap md:pt-[5.2px]">
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
        <Image
          src="/images/home/seven-stages/stage-qualify.webp"
          alt=""
          width={288}
          height={223}
          className="hidden h-[223px] w-[288px] shrink-0 rounded-lg object-cover md:block"
        />
      </div>
    </>
  );
}
