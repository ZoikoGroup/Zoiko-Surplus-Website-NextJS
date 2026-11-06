import { Info } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

const badges = {
  live: { pill: "bg-[#ddf3ec] text-[#0b7a5c]", dot: "bg-[#16a37a]" },
  muted: { pill: "bg-[#eef1f5] text-[#3a475c]", dot: "bg-[#3a475c]" },
  gated: { pill: "bg-[#f5e7d6] text-[#7a4d0f]", dot: "bg-[#a0661c]" },
};

const rows = [
  {
    title: "United Kingdom — Apparel & Footwear",
    body: "A proposed seller-private B2B pilot — proposed is not evidence of launch.",
    badge: "Proposed pilot",
    tone: "live",
  },
  {
    title: "Other regions",
    body: "Informational content is available; no control implies live trading.",
    badge: "Informational",
    tone: "muted",
  },
  {
    title: "Food & regulated goods",
    body: "Independent safety, traceability and local-law gate before any activity.",
    badge: "Separate approval",
    tone: "gated",
  },
] as const;

export default function Coverage() {
  return (
    <Section labelledBy="coverage-heading">
      <SectionHeading
        id="coverage-heading"
        num="10"
        label="Coverage & exclusions"
        title="Global information. Activated locally."
        lead="Trust & Safety is explained globally, but controls apply only where a market and category are activated."
        titleClassName="max-w-[780px]"
      />
      <div className={`${hanken} flex flex-col gap-4`}>
        <ul className="flex flex-col gap-4">
          {rows.map((r) => {
            const b = badges[r.tone];
            return (
              <li
                key={r.title}
                className="flex flex-col gap-3 rounded-xl border border-[#e6e9ef] bg-white px-5 py-[18px] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[#0f1f3a]">{r.title}</h3>
                  <p className="text-sm leading-5 text-[#556987]">{r.body}</p>
                </div>
                <span
                  className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${b.pill}`}
                >
                  <span aria-hidden="true" className={`size-1.5 rounded-full ${b.dot}`} />
                  {r.badge}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="flex items-start gap-2.5 rounded-xl border border-dashed border-[#e8dcc6] bg-[#faf6ef] px-4 py-3.5 text-sm leading-5 text-[#556987]">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#926016]" strokeWidth={1.75} />
          The country/locale selector is informational only — it sets content and language, and does not activate trading,
          grant eligibility or change any permission.
        </p>
      </div>
    </Section>
  );
}
