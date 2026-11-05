import type { ReactNode } from "react";
import { Note, hanken } from "./shared";

export type Grade = { name: string; desc: string; fill: number; tag: string };

// Rows of "grade — bar + description — tag", followed by a disclaimer note.
export default function GradeScale({ grades, note }: { grades: Grade[]; note: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <ul className={`${hanken} flex flex-col gap-3`}>
        {grades.map((g) => (
          <li
            key={g.name}
            className="grid gap-3 rounded-xl border border-[#e6e9ef] bg-white px-4 py-4 sm:grid-cols-[200px_1fr_auto] sm:items-center sm:gap-5"
          >
            <span className="text-[15px] font-bold text-[#0f1f3a]">{g.name}</span>
            <div className="flex flex-col gap-2">
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-[#eef1f5]"
                role="img"
                aria-label={`Relative condition: ${g.fill}%`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#16a37a] to-[#0f8a66]"
                  style={{ width: `${g.fill}%` }}
                />
              </div>
              <p className="text-[13px] leading-5 text-[#556987]">{g.desc}</p>
            </div>
            <span className="w-fit rounded-full bg-[#ddf3ec] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#0b7a5c]">
              {g.tag}
            </span>
          </li>
        ))}
      </ul>
      <Note>{note}</Note>
    </div>
  );
}
