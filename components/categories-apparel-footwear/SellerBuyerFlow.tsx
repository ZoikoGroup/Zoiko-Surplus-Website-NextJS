"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck, SlidersHorizontal } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

const flows = {
  sellers: {
    label: "For sellers",
    icon: SlidersHorizontal,
    steps: [
      { title: "Qualify", body: "Document condition, quantities, brand rights." },
      { title: "Govern", body: "Set approved audiences, channels and category rules." },
      { title: "Plan", body: "Compare permitted disposition routes for the lot." },
      { title: "Prove", body: "Keep evidence of the decision and outcome." },
    ],
    link: { label: "Explore Surplus Enterprise", href: "/enterprise-overview" },
  },
  buyers: {
    label: "For buyers",
    icon: CircleCheck,
    steps: [
      { title: "Apply", body: "Submit business details where intake is open." },
      { title: "Verify", body: "Identity, entity and category eligibility are reviewed." },
      { title: "Get invited", body: "Sellers decide whether to add you to an audience." },
      { title: "Be considered", body: "See only lots a seller has approved for you." },
    ],
    link: { label: "Become a Verified Buyer", href: "/become-a-verified-buyer" },
  },
} as const;

type FlowKey = keyof typeof flows;

export default function SellerBuyerFlow() {
  const [tab, setTab] = useState<FlowKey>("sellers");
  const flow = flows[tab];

  return (
    <Section id="seller-buyer" labelledBy="flow-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="flow-heading"
        num="07"
        label="Seller & buyer flow"
        title="Two paths into the category."
        lead="How sellers qualify stock, and how buyers become eligible to be considered. Switch between the two."
      />

      <div className={`${hanken} overflow-hidden rounded-2xl border border-[#ece6da] bg-white`}>
        <div role="tablist" aria-label="Choose a path" className="grid grid-cols-2 gap-2 bg-[#faf6ef] p-5">
          {(Object.keys(flows) as FlowKey[]).map((key) => {
            const { label, icon: Icon } = flows[key];
            const selected = tab === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                id={`flow-tab-${key}`}
                aria-selected={selected}
                aria-controls="flow-panel"
                onClick={() => setTab(key)}
                className={`flex h-10 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-[#0f1f3a] text-white"
                    : "border border-[#ece6da] text-[#556987] hover:border-[#d3c7b0] hover:text-[#0f1f3a]"
                }`}
              >
                <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
                {label}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id="flow-panel" aria-labelledby={`flow-tab-${tab}`} className="flex flex-col gap-7 px-5 pt-8 pb-10">
          <ol className="grid gap-3 sm:grid-cols-2">
            {flow.steps.map((s, i) => (
              <li key={s.title} className="flex items-start gap-3.5 rounded-xl bg-[#f4f6f9] px-4 py-4">
                <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#0f1f3a] text-[13px] font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-bold text-[#0f1f3a]">{s.title}</h3>
                  <p className="text-[13px] leading-5 text-[#556987]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href={flow.link.href}
            className="inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-[#7a4d0f] hover:underline"
          >
            {flow.link.label}
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
