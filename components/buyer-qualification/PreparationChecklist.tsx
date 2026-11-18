"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import { GuideSection, ImageTag, img } from "./shared";

const groups = [
  {
    title: "Organization identity",
    body: "Registered entity name, registration region and operating details may be requested.",
    note: "Do not send documents through this public guide.",
  },
  {
    title: "Authorized representative",
    body: "Prepare proof you are authorized to act for the organization.",
    note: "Names and checks are never published.",
  },
  {
    title: "Business activity",
    body: "Describe your buying categories, purpose and resale or distribution routes.",
    note: "No turnover or minimum purchase claims are made.",
  },
  {
    title: "Jurisdiction and corridor",
    body: "Know where you are located and where goods would go.",
    note: "A country picker is not approval.",
  },
  {
    title: "Compliance review",
    body: "Sanctions, restricted products and local law may need checks.",
    note: "Internal risk scores are never revealed.",
  },
  {
    title: "Category readiness",
    body: "Understand safety, resale, traceability or handling evidence for your category.",
    note: "Food and regulated goods are not implied to be active.",
  },
  {
    title: "Data protection",
    body: "Read the current privacy notice before you submit any form.",
    note: "No uploads or ID numbers on this page.",
  },
];

// Ticks live only in component state — nothing is stored or sent.
export default function PreparationChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => groups.map(() => false));
  const done = checked.filter(Boolean).length;
  const toggle = (i: number) => setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <GuideSection
      id="checklist"
      num="05"
      label="Preparation checklist"
      title={
        <>
          What to have ready
          <br className="hidden md:block" /> before you apply.
        </>
      }
      lead="Seven evidence groups. Ticks stay on this page and are not saved or sent."
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span aria-live="polite" className="shrink-0 text-sm font-medium text-[#0f1f3a]">
            {done} of {groups.length} reviewed
          </span>
          <div
            role="progressbar"
            aria-label="Checklist progress"
            aria-valuemin={0}
            aria-valuemax={groups.length}
            aria-valuenow={done}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e4e4ee]"
          >
            <div
              className="h-full rounded-full bg-[#16a37a] transition-[width] duration-300"
              style={{ width: `${(done / groups.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,665px)_minmax(0,555px)] lg:justify-between">
          <ul className="flex flex-col gap-3">
            {groups.map((g, i) => (
              <li key={g.title}>
                <label
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border bg-white p-5 transition-colors ${
                    checked[i] ? "border-[#16a37a]" : "border-[#e6e9ef] hover:border-[#c9d2de]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-[5px] border-[1.5px] peer-focus-visible:ring-2 peer-focus-visible:ring-[#926016] peer-focus-visible:ring-offset-2 ${
                      checked[i] ? "border-[#16a37a] bg-[#16a37a] text-white" : "border-[#556987] bg-white"
                    }`}
                  >
                    {checked[i] && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-[#0f1f3a]">{g.title}</span>
                    <span className="text-sm leading-6 text-[#556987]">{g.body}</span>
                    <span className="mt-1.5 w-fit rounded-md bg-[#fdf0d8] px-2 py-1 text-xs text-[#5a3d0c]">{g.note}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <div className="relative hidden overflow-hidden rounded-[20px] bg-[#16263f] lg:block">
            <Image
              src={img("checklist.webp")}
              alt="Hands labelling a parcel at a desk"
              fill
              sizes="555px"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Illustrative imagery</ImageTag>
            </span>
          </div>
        </div>
      </div>
    </GuideSection>
  );
}
