"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { GuideSection, Note, sora, stages } from "./shared";

// Arrow-key tabs over the seven stages, following the Logistics Coordination sequence tabs.
export default function GovernedModel() {
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
    <GuideSection
      id="model"
      num="01"
      label="The governed model"
      title={stages.map((s) => s.name).join(" → ") + "."}
      lead="Select a stage to see what it does in plain English. On a keyboard, use the arrow keys."
    >
      <div className="flex flex-col gap-5">
        <div
          role="tablist"
          aria-label="The seven stages"
          onKeyDown={onKeyDown}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7"
        >
          {stages.map(({ name }, i) => {
            const isActive = i === active;
            return (
              <button
                key={name}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`hmw-tab-${i}`}
                aria-selected={isActive}
                aria-controls="hmw-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer flex-col items-start gap-3 rounded-xl border px-4 py-4 text-left transition-colors ${
                  isActive ? "border-[#1a1d24] bg-[#1a1d24]" : "border-[#e6e9ef] bg-white hover:border-[#c9d2de]"
                }`}
              >
                <span
                  className={`flex size-7 items-center justify-center rounded-md text-xs font-semibold ${
                    isActive ? "bg-[#16a37a] text-white" : "bg-[#eef1f6] text-[#0f1f3a]"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`text-base font-semibold ${isActive ? "text-white" : "text-[#0f1f3a]"}`}>{name}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="hmw-panel"
          aria-labelledby={`hmw-tab-${active}`}
          className="grid items-center gap-8 rounded-2xl border border-[#e6e9ef] bg-white p-6 md:p-9 lg:grid-cols-[minmax(0,1fr)_288px]"
        >
          <div className="flex flex-col gap-5">
            <h3 className={`${sora} flex items-center gap-3 text-[28px] font-semibold text-[#0f1f3a]`}>
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#16a37a] text-lg text-white">
                {active + 1}
              </span>
              {stage.name}
            </h3>
            <p className={`${sora} max-w-[820px] text-lg leading-8 text-[#4b5b75] md:text-xl md:leading-9`}>{stage.summary}</p>
            <ul className="flex flex-wrap gap-2.5">
              {[
                { label: "Input", value: stage.input, dot: "bg-[#556987]" },
                { label: "Output", value: stage.output, dot: "bg-[#926016]" },
              ].map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#dfe5ed] px-3 py-1.5 text-xs font-semibold text-[#3d4a60]"
                >
                  <span aria-hidden="true" className={`size-1.5 rounded-full ${p.dot}`} />
                  {p.label}: <span className="text-[#0f1f3a]">{p.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[288/223] w-full overflow-hidden rounded-2xl bg-[#16263f]">
            <Image src={stage.image} alt={stage.alt} fill sizes="(min-width: 1024px) 288px, 100vw" className="object-cover" />
          </div>
        </div>
        <Note>Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.</Note>
      </div>
    </GuideSection>
  );
}
