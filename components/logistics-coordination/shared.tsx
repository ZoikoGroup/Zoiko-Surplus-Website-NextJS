import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  Check,
  FileCheck,
  Link as LinkIcon,
  Package,
  UserCheck,
} from "lucide-react";
import { sora } from "@/components/buyer-qualification/shared";

// Section and card blocks are shared with the Buyer Qualification Guide.
export * from "@/components/buyer-qualification/shared";

export const lcImg = (name: string) => `/images/logistics-coordination/${name}`;

// The six illustrative handoff steps — used by the hero card and the sequence tabs (06).
// Only "Prepare" has designed copy; the other descriptions are drafted from this page's content.
export const steps: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Package,
    name: "Prepare",
    description:
      "The seller readies eligible goods, with safe packaging, clear labels and records of provenance and condition.",
  },
  {
    icon: UserCheck,
    name: "Authorize",
    description:
      "The seller gives release authority and confirms the destination before any collection is arranged.",
  },
  {
    icon: LinkIcon,
    name: "Assign",
    description: "A screened, contracted provider suited to the goods and handling conditions is assigned to the movement.",
  },
  {
    icon: ArrowLeftRight,
    name: "Hand off",
    description: "Custody passes between approved parties, with condition and transfer recorded at each handoff.",
  },
  {
    icon: FileCheck,
    name: "Verify",
    description: "Delivery to the approved destination is confirmed, and any discrepancy is noted and referred for review.",
  },
  {
    icon: Check,
    name: "Close",
    description: "The movement is closed with its evidence kept in protected, role-scoped systems.",
  },
];

export type InlineItem = { icon: LucideIcon; title: string; body: string; tone?: "mint" | "sand" };

// Bordered card with the icon tile beside the title and body.
export function InlineCard({ item, size = "md" }: { item: InlineItem; size?: "md" | "lg" }) {
  const { icon: Icon, title, body, tone = "sand" } = item;
  const tile = tone === "mint" ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]";
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-[#e6e9ef] bg-white p-5">
      <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tile}`}>
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className={`${sora} font-semibold text-[#0f1f3a] ${size === "lg" ? "text-xl md:text-2xl" : "text-lg"}`}>
          {title}
        </h3>
        <p className="text-sm leading-6 text-[#556987]">{body}</p>
      </div>
    </li>
  );
}
