"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow, hanken, sora } from "./shared";

export type FAQItem = { q: string; a: string };

// Full-width two-column FAQ accordion used at the foot of each category page.
export default function CategoryFAQ({ num, items }: { num: string; items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const baseId = useId();
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <section id="faq" aria-labelledby={`${baseId}-heading`} className={`${hanken} scroll-mt-28 bg-[#fafbfd]`}>
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10 md:py-24 lg:px-24">
        <Eyebrow num={num} label="FAQ" />
        <h2
          id={`${baseId}-heading`}
          className={`${sora} mt-4 text-[32px] font-semibold tracking-[-0.02em] text-[#0f1f3a] md:text-5xl`}
        >
          Questions, answered plainly.
        </h2>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-6">
              {col.map((f, i) => {
                const idx = c * half + i;
                const open = openIdx === idx;
                const panelId = `${baseId}-${idx}`;
                return (
                  <div key={f.q} className="overflow-hidden rounded-xl border border-[#dfe5ed] bg-white">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIdx(open ? null : idx)}
                        aria-expanded={open}
                        aria-controls={panelId}
                        className="flex w-full items-center justify-between gap-4 px-5 py-[22px] text-left"
                      >
                        <span className="text-base font-semibold text-[#0f1f3a]">{f.q}</span>
                        <Plus
                          aria-hidden="true"
                          className={`size-[18px] shrink-0 text-[#926016] transition-transform duration-200 ${
                            open ? "rotate-45" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      </button>
                    </h3>
                    {open && (
                      <div id={panelId} className="border-t border-[#eef1f5] px-5 pt-3 pb-5">
                        <p className="text-sm leading-6 text-[#556987]">{f.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
