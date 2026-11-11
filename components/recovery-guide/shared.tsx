import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CircleAlert,
  CircleHelp,
  ClipboardCheck,
  Coins,
  FileCheck,
  Globe,
  Link2,
  Package,
  Route,
  Scale,
  SlidersHorizontal,
  Store,
  TriangleAlert,
  EyeOff,
} from "lucide-react";
import { Container, SectionHeading, hanken } from "@/components/knowledge-center/shared";

// Building blocks shared with the Knowledge Center page.
export {
  hanken,
  sora,
  Container,
  SectionHeading,
  Note,
  SandTile,
  PhotoBadge,
  PillLinks,
} from "@/components/knowledge-center/shared";

export const img = (name: string) => `/images/recovery-guide/${name}`;

// Section anchors, in page order — drives the "jump to" pill bar under the hero.
export const navItems: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "distinctions", label: "Key distinctions", icon: Scale },
  { id: "what-counts", label: "What counts", icon: Package },
  { id: "pathways", label: "Pathways", icon: Route },
  { id: "decision-factors", label: "Decision factors", icon: SlidersHorizontal },
  { id: "preparation", label: "Preparation", icon: ClipboardCheck },
  { id: "seven-stages", label: "Seven stages", icon: Link2 },
  { id: "availability", label: "Availability", icon: Globe },
  { id: "trade-offs", label: "Trade-offs", icon: Coins },
  { id: "restricted", label: "Restricted", icon: TriangleAlert },
  { id: "privacy", label: "Privacy", icon: EyeOff },
  { id: "evidence", label: "Evidence", icon: FileCheck },
  { id: "scenario", label: "Scenario", icon: Store },
  { id: "mistakes", label: "Mistakes", icon: CircleAlert },
  { id: "faq", label: "FAQ", icon: CircleHelp },
  { id: "related", label: "Related", icon: BookOpen },
];

// Mint variant of the icon tile, used for the "positive" item in a set.
export function MintTile({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-9 rounded-lg" : "size-11 rounded-xl";
  return (
    <span className={`flex shrink-0 items-center justify-center bg-[#e3f4ee] text-[#16a37a] ${box}`}>
      <Icon aria-hidden="true" className={size === "sm" ? "size-4" : "size-5"} strokeWidth={1.75} />
    </span>
  );
}

// Full-width numbered section with an anchor id. Headings run on one line at desktop width.
export function GuideSection({
  id,
  num,
  label,
  title,
  lead,
  children,
  className = "",
}: {
  id: string;
  num?: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`${hanken} scroll-mt-28 py-8 md:py-12 ${className}`}>
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading id={`${id}-heading`} num={num} label={label} title={title} lead={lead} titleClassName="max-w-none" />
        {children}
      </Container>
    </section>
  );
}

export const cardShadow = "shadow-[0_10px_30px_-18px_rgba(12,33,64,0.25)]";
