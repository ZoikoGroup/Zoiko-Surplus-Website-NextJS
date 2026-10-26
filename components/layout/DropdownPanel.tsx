import type { ReactNode } from "react";

// Shared shell for the header dropdowns: a full-width card under the header on desktop, and a
// 354px-wide card under the mobile bar. `desktopTop` / `desktopOffset` are the per-menu Figma values.
export default function DropdownPanel({
  id,
  label,
  desktopTop,
  desktopOffset,
  padding = "px-7 pt-8 pb-7",
  gap = "gap-3.5 md:gap-8",
  children,
}: {
  id: string;
  label: string;
  desktopTop: string;
  desktopOffset: string;
  // Padding and gap classes; Company and Resources use a tighter mobile bottom, Solutions pads evenly.
  padding?: string;
  gap?: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      role="region"
      aria-label={label}
      className={`absolute inset-x-0 top-[84px] mx-auto flex max-h-[688px] w-[calc(100%-36px)] max-w-[354px] flex-col overflow-auto rounded-2xl border border-[#e8e1da] bg-white ${padding} ${gap} shadow-[0_24px_60px_-12px_rgba(30,18,36,0.28)] md:inset-x-auto md:left-1/2 md:mx-0 md:max-h-[792px] md:w-[1200px] md:max-w-[calc(100vw-32px)] md:-translate-x-1/2 ${desktopTop} ${desktopOffset}`}
    >
      {children}
    </div>
  );
}
