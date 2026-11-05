import type { ReactNode } from "react";
import { Check, Info } from "lucide-react";

// Building blocks shared by the category pages (Apparel & Footwear, Consumer Electronics, ...).

export const hanken = "font-[family-name:var(--font-hanken)]";
export const sora = "font-[family-name:var(--font-sora)]";

type Tone = "light" | "dark";

// "01 ——— CATEGORY DEFINITION" label above each section title. `num` is optional for unnumbered sections.
export function Eyebrow({ num, label, tone = "light" }: { num?: string; label: string; tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <div className={`${sora} flex items-center gap-2.5`}>
      {num && <span className="text-xs font-black tracking-[0.18em] text-[#0f172a]">{num}</span>}
      <span aria-hidden="true" className={`h-0.5 w-11 ${dark ? "bg-[#5fd0ad]/70" : "bg-[#d6dee9]"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-[#5fd0ad]" : "text-[#8a5a14]"}`}
      >
        {label}
      </span>
    </div>
  );
}

export function SectionHeading({
  num,
  label,
  title,
  lead,
  id,
  tone = "light",
  titleClassName = "max-w-[560px]",
}: {
  num?: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  id: string;
  tone?: Tone;
  titleClassName?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow num={num} label={label} tone={tone} />
      <h2
        id={id}
        className={`${sora} ${titleClassName} text-[32px] font-semibold leading-[1.17] tracking-[-0.02em] md:text-5xl ${
          dark ? "text-white" : "text-[#1a1d24]"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`${sora} max-w-[700px] text-base leading-7 md:text-xl md:leading-8 ${
            dark ? "text-[#d5dceb]" : "text-[#4b5b75]"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function CheckItem({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <li className={`flex items-start gap-2.5 text-sm leading-5 ${dark ? "text-[#d5dceb]" : "text-[#556987]"} ${className}`}>
      <Check
        aria-hidden="true"
        className={`mt-0.5 size-4 shrink-0 ${dark ? "text-[#5fd0ad]" : "text-[#16a37a]"}`}
        strokeWidth={2}
      />
      <span>{children}</span>
    </li>
  );
}

// Small "(i) disclaimer" line under a section.
export function Note({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`${hanken} flex items-start gap-2 text-xs leading-5 ${
        tone === "dark" ? "text-[#8d9ab3]" : "text-[#556987]"
      }`}
    >
      <Info aria-hidden="true" className="mt-[3px] size-3.5 shrink-0" strokeWidth={1.75} />
      <span>{children}</span>
    </p>
  );
}
