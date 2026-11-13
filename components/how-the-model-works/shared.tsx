import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  ArrowRight,
  ClipboardCheck,
  FileCheck,
  Link as LinkIcon,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { SandTile, cardShadow, sora } from "@/components/buyer-qualification/shared";

// Section and card blocks are shared with the Buyer Qualification Guide.
export * from "@/components/buyer-qualification/shared";

export const hmwImg = (name: string) => `/images/how-the-model-works/${name}`;

export type Stage = {
  id: string;
  icon: LucideIcon;
  name: string;
  /** Plain-English summary shown in the stage tabs (01). */
  summary: string;
  input: string;
  output: string;
  /** Detail card copy (02). */
  tagline: string;
  body: string;
  points: string[];
  gate: string;
  notPromised: string;
  image: string;
  alt: string;
};

// The seven governed stages. Only Qualify has designed tab copy (summary / input / output);
// the other six are drafted from each stage's detail card — confirm with the content owner.
export const stages: Stage[] = [
  {
    id: "qualify",
    icon: FileCheck,
    name: "Qualify",
    summary:
      "Confirm condition, quantity, provenance and the category requirements a lot must meet before it can move.",
    input: "Lot record",
    output: "Qualified lot",
    tagline: "Condition, source, ownership and category gate.",
    body: "Confirm what the stock is, where it came from and that the seller can deal in it.",
    points: [
      "Category and description checked against a controlled list",
      "Condition and defects recorded with supporting evidence",
      "Ownership and provenance confirmed",
    ],
    gate: "Eligibility review",
    notPromised: "Guaranteed acceptance. Qualifying is a review, not a promise.",
    image: hmwImg("stage-qualify.webp"),
    alt: "Gloved hand holding a sealed food tray beside a shopping trolley",
  },
  {
    id: "govern",
    icon: Scale,
    name: "Govern",
    summary: "Apply the seller's policies and the market and category rules, and limit each role to what it may do.",
    input: "Qualified lot",
    output: "Governed lot",
    tagline: "Seller policies, jurisdictions and role permissions.",
    body: "Apply the seller's rules and the market and category rules before any route exists.",
    points: [
      "Seller authorization set as an explicit control",
      "Jurisdiction and category rules applied",
      "Roles limited to what each party may do",
    ],
    gate: "Seller authorization",
    notPromised: "Every category being live in every market.",
    image: hmwImg("stage-govern.webp"),
    alt: "Three colleagues reviewing stock between shelves of glassware",
  },
  {
    id: "match",
    icon: LinkIcon,
    name: "Match",
    summary: "Reach only the verified, eligible audiences the seller has approved, with controlled disclosure.",
    input: "Governed lot",
    output: "Authorized audience",
    tagline: "Qualified, eligible demand with controlled disclosure.",
    body: "Reach only the verified audiences a seller has approved.",
    points: [
      "Eligible, verified buyers considered",
      "Disclosure limited to authorized audiences",
      "Matching follows the seller's instructions",
    ],
    gate: "Authorized audience",
    notPromised: "An open auction or public listing.",
    image: hmwImg("stage-match.webp"),
    alt: "Two colleagues planning at a desk with parcels and a laptop",
  },
  {
    id: "optimize",
    icon: SlidersHorizontal,
    name: "Optimize",
    summary: "Compare compliant options side by side so the seller can choose. The seller decides.",
    input: "Compliant options",
    output: "Seller selection",
    tagline: "Seller-selected alternatives, no guaranteed value.",
    body: "Compare compliant options so the seller can choose. The seller decides.",
    points: ["Compliant routes compared side by side", "Costs and uncertainty stay visible", "The seller selects the option"],
    gate: "Seller selection",
    notPromised: "Any recovery rate, uplift or performance figure.",
    image: hmwImg("stage-optimize.webp"),
    alt: "Professional working on a laptop in a warehouse aisle",
  },
  {
    id: "transact",
    icon: ArrowLeftRight,
    name: "Transact",
    summary: "Complete only seller-approved offers, under agreed terms, on permitted payment and legal rails.",
    input: "Approved offer",
    output: "Agreed transaction",
    tagline: "Seller approval and permitted payment and legal rails.",
    body: "Complete only approved offers, under agreed terms, on permitted rails.",
    points: ["Only offers the seller approved", "Agreements between permitted parties", "Payments through verified providers"],
    gate: "Verified payment and legal roles",
    notPromised: "Zoiko holding payments or acting as seller or carrier.",
    image: hmwImg("stage-transact.webp"),
    alt: "Person writing on a parcel at a packing table",
  },
  {
    id: "prove",
    icon: ClipboardCheck,
    name: "Prove",
    summary: "Keep records of what happened, and explain how they were gathered.",
    input: "Transaction events",
    output: "Evidence record",
    tagline: "Evidence types and outcomes, no invented proof.",
    body: "Keep records of what happened, and explain how they were gathered.",
    points: ["Evidence and event records kept", "Outcome reporting from measured sources", "Method explained, not asserted"],
    gate: "Evidence method",
    notPromised: "Certified impact or compliance.",
    image: hmwImg("stage-prove.webp"),
    alt: "Worker checking boxes against a clipboard",
  },
  {
    id: "resolve",
    icon: ShieldCheck,
    name: "Resolve",
    summary: "Handle disputes, recalls and exceptions through a defined, governed escalation path.",
    input: "Exception or dispute",
    output: "Documented resolution",
    tagline: "Exception and dispute resolution policy.",
    body: "Handle disputes, recalls, exceptions and remediation through defined escalation.",
    points: ["Disputes follow a governed path", "Recalls and exceptions escalate", "Remediation is documented"],
    gate: "Governed escalation",
    notPromised: "A guaranteed remedy.",
    image: hmwImg("stage-resolve.webp"),
    alt: "Colleagues checking goods together on a workshop floor",
  },
];

export type PathCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
  primary?: boolean;
  image: string;
  alt: string;
};

// Photo card with a sand icon tile and a full-width pill button (Next step and Related guidance).
export function PathCards({ items }: { items: PathCard[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {items.map((p) => (
        <li key={p.title} className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
          <div className="relative aspect-[401/150] w-full bg-[#16263f]">
            <Image src={p.image} alt={p.alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <SandTile icon={p.icon} />
            <h3 className={`${sora} pt-2 text-xl font-semibold text-[#0f1f3a]`}>{p.title}</h3>
            <p className="pb-3 text-sm leading-6 text-[#556987]">{p.body}</p>
            <Link
              href={p.href}
              className={`mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors ${
                p.primary
                  ? "bg-[#926016] text-white hover:bg-[#a66e1b]"
                  : "border border-[#dfe5ed] bg-white text-[#0f1f3a] hover:border-[#0f1f3a]"
              }`}
            >
              {p.cta}
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
