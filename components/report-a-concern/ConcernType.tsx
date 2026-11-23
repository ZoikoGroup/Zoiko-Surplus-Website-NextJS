"use client";

import { useId, useState } from "react";
import { FileText, LockKeyhole, Search, TriangleAlert, Users, type LucideIcon } from "lucide-react";
import { GuideSection, sora } from "./shared";

type Concern = {
  key: string;
  icon: LucideIcon;
  title: string;
  body: string;
  /** Recommended next step shown when this concern is chosen. */
  next: { title: string; body: string };
};

const PENDING = "Links go live only when each destination is approved.";

// Recommendations other than "Safety, brand or misuse" are drafted from this page's content —
// confirm wording with the content owner.
const concerns: Concern[] = [
  {
    key: "safety",
    icon: TriangleAlert,
    title: "Safety, brand or misuse",
    body: "Product safety, counterfeit, suspicious activity or access misuse.",
    next: {
      title: "Report an Issue",
      body: `This is the specialist trust and safety route. Use the Report an Issue guidance. Do not post details publicly. ${PENDING}`,
    },
  },
  {
    key: "accessibility",
    icon: Users,
    title: "Accessibility",
    body: "An accessibility barrier or difficulty using the service.",
    next: {
      title: "Accessibility",
      body: `Barriers or difficulty using the service go to the accessibility route. Use the Accessibility statement guidance. ${PENDING}`,
    },
  },
  {
    key: "other",
    icon: Search,
    title: "Something else",
    body: "Not sure which fits.",
    next: {
      title: "Help Center",
      body: `If no type fits, start with the Help Center's public guidance and routes. Do not post details publicly. ${PENDING}`,
    },
  },
  {
    key: "privacy",
    icon: LockKeyhole,
    title: "Privacy",
    body: "A privacy or personal information concern.",
    next: {
      title: "Privacy Notice",
      body: `Privacy and personal information concerns follow the route set out in the Privacy Notice. ${PENDING}`,
    },
  },
  {
    key: "account",
    icon: FileText,
    title: "Account or routine help",
    body: "Login, account, offers or orders; ordinary help.",
    next: {
      title: "Help Center",
      body: `Login, account, offers and orders are routine help rather than a concern. Use the Help Center guidance. ${PENDING}`,
    },
  },
];

// Grid placement matching the design: "Something else" fills the third column across both rows.
const placement: Record<string, string> = {
  safety: "lg:col-start-1 lg:row-start-1",
  accessibility: "lg:col-start-2 lg:row-start-1",
  other: "lg:col-start-3 lg:row-span-2 lg:row-start-1",
  privacy: "lg:col-start-1 lg:row-start-2",
  account: "lg:col-start-2 lg:row-start-2",
};

export default function ConcernType() {
  const name = useId();
  const [selected, setSelected] = useState(concerns[0].key);
  const current = concerns.find((c) => c.key === selected) ?? concerns[0];

  return (
    <GuideSection
      id="concern-type"
      num="01"
      label="Concern type"
      title={
        <>
          Choose the concern that best describes
          <br className="hidden lg:block" /> your situation.
        </>
      }
      lead="The result is guidance only. Nothing you choose is sent or stored."
    >
      <div className="flex flex-col gap-6">
        <fieldset>
          <legend className="sr-only">Concern type</legend>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,236px)]">
            {concerns.map(({ key, icon: Icon, title, body }) => {
              const on = key === selected;
              return (
                <label
                  key={key}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border-2 p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#1f9a7f] has-[:focus-visible]:ring-offset-2 md:p-5 ${
                    on ? "border-[#1f9a7f] bg-[#effaf6]" : "border-[#e6e9ef] bg-white hover:border-[#c7d0dc]"
                  } ${placement[key]}`}
                >
                  <input
                    type="radio"
                    name={name}
                    value={key}
                    checked={on}
                    onChange={() => setSelected(key)}
                    className="sr-only"
                  />
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e3f4ee] text-[#3d4a60]">
                    <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className={`${sora} text-lg font-semibold text-[#0f1f3a]`}>{title}</span>
                    <span className="text-sm leading-6 text-[#556987]">{body}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div
          aria-live="polite"
          className="flex flex-col gap-3 rounded-2xl border border-l-4 border-[#e6e9ef] border-l-[#926016] bg-white px-6 py-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5a14]">Recommended next step</p>
          <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{current.next.title}</h3>
          <p className="max-w-[1090px] text-base leading-7 text-[#0f1f3a]">{current.next.body}</p>
        </div>
      </div>
    </GuideSection>
  );
}
