"use client";

import { useId, useState } from "react";
import { Plus, type LucideIcon } from "lucide-react";
import { hanken } from "@/components/categories/shared";

export type AccordionItem = { icon: LucideIcon; title: string; body: string };

const tiles = {
  mint: "bg-[#e3f4ee] text-[#0b7a5c]",
  sand: "bg-[#f5e7d6] text-[#7a4d0f]",
};

// Single-open accordion with an icon tile per row. Callers must be client components,
// since icon components can't be passed across the server/client boundary.
export default function IconAccordion({ items, tone = "mint" }: { items: AccordionItem[]; tone?: keyof typeof tiles }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <ul className={`${hanken} flex flex-col gap-2.5`}>
      {items.map(({ icon: Icon, title, body }, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${i}`;
        return (
          <li key={title} className="overflow-hidden rounded-xl border border-[#e6e9ef] bg-white">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-3.5 px-5 py-4 text-left"
              >
                <span className={`flex size-[38px] shrink-0 items-center justify-center rounded-lg ${tiles[tone]}`}>
                  <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
                </span>
                <span className="flex-1 text-base font-semibold text-[#0f1f3a]">{title}</span>
                <Plus
                  aria-hidden="true"
                  className={`size-[18px] shrink-0 text-[#926016] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  strokeWidth={1.5}
                />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} className="border-t border-[#eef1f5] px-5 pt-3 pb-5 sm:pl-[72px]">
                <p className="text-sm leading-6 text-[#556987]">{body}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
