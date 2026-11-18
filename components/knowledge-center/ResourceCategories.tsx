"use client";

import { ArrowRight, BookOpen, CircleHelp, ClipboardCheck, Route, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, SandTile, hanken } from "./shared";
import { CATALOG_ID, filterCatalog, formats, resources, type Format } from "./catalog";

const copy: Record<Format, { icon: LucideIcon; body: string }> = {
  guide: { icon: BookOpen, body: "Answer-first walk-throughs of surplus recovery and private markets." },
  checklist: { icon: ClipboardCheck, body: "Readiness steps to complete before a lot or an application." },
  explainer: { icon: Route, body: "How stages, controls and evidence fit together." },
  faq: { icon: CircleHelp, body: "Concise approved answers with links to the controlled source." },
};

export default function ResourceCategories() {
  return (
    <Section labelledBy="kc-formats-heading">
      <SectionHeading
        id="kc-formats-heading"
        num="04"
        label="Resource categories"
        title="Choose the path that fits your role."
        lead="Every format starts with a short factual answer, then links to its source."
        titleClassName="max-w-none"
      />
      <ul className={`${hanken} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        {formats.map((f) => {
          const { icon, body } = copy[f.id];
          const count = resources.filter((r) => r.format === f.id).length;
          return (
            <li key={f.id}>
              <a
                href={`#${CATALOG_ID}`}
                onClick={(e) => {
                  e.preventDefault();
                  filterCatalog({ format: f.id, topic: "all", query: "" });
                }}
                className="group flex h-full flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6 transition-shadow hover:shadow-[0_10px_30px_-18px_rgba(12,33,64,0.3)]"
              >
                <SandTile icon={icon} />
                <h3 className="pt-1.5 text-lg font-semibold leading-6 text-[#0f1f3a]">{f.plural}</h3>
                <p className="text-sm leading-6 text-[#556987]">{body}</p>
                <span className="mt-auto flex items-center justify-between pt-4 text-xs text-[#556987]">
                  {count} {count === 1 ? "resource" : "resources"}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-[#8a5a14] transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
