import Link from "next/link";
import type { LucideIcon } from "lucide-react";

// Layout and heading blocks are shared with the Corporate Information page.
export {
  hanken,
  sora,
  Eyebrow,
  SectionHeading,
  Note,
  Container,
  Section,
} from "@/components/company-corporate-information/shared";

export const img = (name: string) => `/images/knowledge-center/${name}`;

// Sand-coloured rounded square holding an icon — the tile used throughout this page.
export function SandTile({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-9 rounded-lg" : "size-11 rounded-xl";
  return (
    <span className={`flex shrink-0 items-center justify-center bg-[#f5e3c3] text-[#8a5a14] ${box}`}>
      <Icon aria-hidden="true" className={size === "sm" ? "size-4" : "size-5"} strokeWidth={1.75} />
    </span>
  );
}

// Small white "• Label" pill laid over photos.
export function PhotoBadge({ children, dot = "bg-[#926016]" }: { children: string; dot?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-[#0f1f3a] shadow-sm">
      <span aria-hidden="true" className={`size-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

// Cream pill links ("Sources: How It Works", "Related: …").
export function PillLinks({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-[#556987]">
      <span>{label}</span>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="rounded-full bg-[#fbf0e0] px-3 py-1.5 text-sm text-[#0f1f3a] transition-colors hover:bg-[#f5e3c3]"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
