import type { ReactNode } from "react";
import { ShieldAlert } from "lucide-react";
import { hanken } from "./shared";

// Amber left-accent panel used for "hard stop" style notices.
export default function AlertPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className={`${hanken} flex items-start gap-4 rounded-2xl border border-l-4 border-[#b98a4a] border-l-[#a0661c] bg-white px-6 py-6`}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e7d6]">
        <ShieldAlert aria-hidden="true" className="size-5 text-[#7a4d0f]" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-[#0f1f3a]">{title}</h3>
        <p className="text-sm leading-6 text-[#556987]">{children}</p>
      </div>
    </div>
  );
}
