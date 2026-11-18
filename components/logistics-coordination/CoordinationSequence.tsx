"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { GuideSection, Note, lcImg, sora, steps } from "./shared";

// Arrow-key tabs, following the About page's seven-stage tabs.
export default function CoordinationSequence() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = steps[active];
  const StepIcon = step.icon;

  function select(i: number) {
    setActive(i);
    tabRefs.current[i]?.focus();
  }

  function onKeyDown(e: KeyboardEvent) {
    const last = steps.length - 1;
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
      id="sequence"
      num="06"
      label="Coordination sequence"
      title={
        <>
          How authorized handoffs may
          <br className="hidden md:block" /> work.
        </>
      }
      lead="Select a step. On a keyboard, use the arrow keys."
    >
      <div className="flex flex-col gap-4">
        <div
          role="tablist"
          aria-label="Coordination steps"
          onKeyDown={onKeyDown}
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
        >
          {steps.map(({ icon: Icon, name }, i) => {
            const isActive = i === active;
            return (
              <button
                key={name}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`lc-step-tab-${i}`}
                aria-selected={isActive}
                aria-controls="lc-step-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer flex-col items-start gap-2 rounded-xl border p-3 text-left transition-colors ${
                  isActive ? "border-[#0c1f3f] bg-[#0c1f3f]" : "border-[#e6e9ef] bg-white hover:border-[#c9d2de]"
                }`}
              >
                <span
                  className={`flex size-9 items-center justify-center rounded-lg ${
                    isActive ? "bg-[#16a37a] text-white" : "bg-[#f5e3c3] text-[#8a5a14]"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
                </span>
                <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-[#0f1f3a]"}`}>{name}</span>
                <span className={`text-xs ${isActive ? "text-[#c3cde0]" : "text-[#556987]"}`}>Step {i + 1}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="lc-step-panel"
          aria-labelledby={`lc-step-tab-${active}`}
          className="grid overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-4 p-6 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5a14]">
              Step {active + 1} of {steps.length}
            </p>
            <h3 className={`${sora} flex items-center gap-3 text-[28px] font-semibold text-[#0f1f3a]`}>
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#f5e3c3] text-[#8a5a14]">
                <StepIcon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              {step.name}
            </h3>
            <p className="max-w-[520px] text-base leading-7 text-[#556987]">{step.description}</p>
          </div>
          <div className="relative aspect-[594/363] w-full bg-[#16263f]">
            <Image
              src={lcImg("sequence-prepare.webp")}
              alt="Person labelling a parcel at a packing table"
              fill
              sizes="(min-width: 1024px) 594px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <Note>Steps are illustrative. They are not proof of a deployed booking system.</Note>
      </div>
    </GuideSection>
  );
}
