import { Check, CircleAlert, X } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

const considered = [
  "Overstock from cancelled or over-forecast orders",
  "Customer returns with documented condition",
  "End-of-line and previous-season ranges",
  "Imperfect / B-grade goods, clearly declared",
];

const excluded = [
  "Suspected counterfeit or unauthenticated goods",
  "Items where legal resale rights are unclear",
  "Recalled or safety-affected products",
  "Incomplete records or undisclosed condition",
];

function Column({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "ok" | "no";
}) {
  const ok = tone === "ok";
  const HeadIcon = ok ? Check : CircleAlert;
  const ItemIcon = ok ? Check : X;
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white">
      <h3
        className={`flex h-14 items-center gap-2.5 px-5 text-base font-bold ${
          ok ? "bg-[#ddf3ec] text-[#0b7a5c]" : "bg-[#f5e7d6] text-[#7a4d0f]"
        }`}
      >
        <HeadIcon aria-hidden="true" className="size-4" strokeWidth={ok ? 2 : 1.75} />
        {title}
      </h3>
      <ul className="flex flex-col px-5 pt-2.5 pb-5">
        {items.map((item, i) => (
          <li
            key={item}
            className={`flex items-center gap-2.5 py-2.5 text-sm leading-5 text-[#556987] ${
              i > 0 ? "border-t border-[#eef1f5]" : ""
            }`}
          >
            <ItemIcon
              aria-hidden="true"
              className={`size-4 shrink-0 ${ok ? "text-[#16a37a]" : "text-[#a0661c]"}`}
              strokeWidth={1.5}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Scope() {
  return (
    <Section id="scope" labelledBy="scope-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="scope-heading"
        num="04"
        label="In & out of scope"
        title="What may qualify — and what won’t."
        lead="Scope is defined by evidence and rights, not by the item alone. The right-hand column is excluded or requires specialist handling."
      />
      <div className={`${hanken} grid gap-4 sm:grid-cols-2`}>
        <Column title="May be considered" items={considered} tone="ok" />
        <Column title="Excluded / gated" items={excluded} tone="no" />
      </div>
    </Section>
  );
}
