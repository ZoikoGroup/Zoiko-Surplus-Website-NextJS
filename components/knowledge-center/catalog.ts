import {
  BookOpen,
  ClipboardCheck,
  FileCheck,
  HelpCircle,
  Lock,
  Route,
  Scale,
  Shirt,
  ShieldCheck,
  Truck,
  UserCheck,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { img } from "./shared";

// Catalog data and the small event bus that lets the hero search, the role paths and the
// format cards drive the "Search public guidance" catalog further down the page.

export type Topic = "sellers" | "buyers" | "partners" | "categories" | "trust";
export type Format = "guide" | "checklist" | "explainer" | "faq";

export const topics: { id: Topic; label: string }[] = [
  { id: "sellers", label: "Sellers" },
  { id: "buyers", label: "Buyers" },
  { id: "partners", label: "Partners" },
  { id: "categories", label: "Categories" },
  { id: "trust", label: "Trust & evidence" },
];

export const formats: { id: Format; label: string; plural: string }[] = [
  { id: "guide", label: "Guide", plural: "Guides" },
  { id: "checklist", label: "Checklist", plural: "Checklists" },
  { id: "explainer", label: "Explainer", plural: "Process explanations" },
  { id: "faq", label: "FAQ", plural: "FAQs" },
];

export type Resource = {
  title: string;
  body: string;
  format: Format;
  topics: Topic[];
  icon: LucideIcon;
  image: string;
  alt: string;
};

// None of these are published yet — every card carries "Pending approval" until sign-off.
export const resources: Resource[] = [
  {
    title: "Surplus Recovery Guide",
    body: "What surplus recovery involves and the routes a seller can choose between.",
    format: "guide",
    topics: ["sellers"],
    icon: BookOpen,
    image: img("catalog-surplus-recovery.webp"),
    alt: "Workers moving boxes at a loading bay",
  },
  {
    title: "Seller Readiness Checklist",
    body: "Qualify inventory and understand brand and channel controls before you start.",
    format: "checklist",
    topics: ["sellers"],
    icon: ClipboardCheck,
    image: img("catalog-seller-checklist.webp"),
    alt: "Gloved hand inspecting packaged goods",
  },
  {
    title: "Buyer Qualification Guide",
    body: "How applying, KYB and eligibility lead to seller-approved invitations.",
    format: "guide",
    topics: ["buyers"],
    icon: UserCheck,
    image: img("catalog-buyer-qualification.webp"),
    alt: "Professional working at a laptop in a stockroom",
  },
  {
    title: "Private Markets Explained",
    body: "Why opportunities are shown only to permitted buyers, and what that means for access.",
    format: "explainer",
    topics: ["sellers", "buyers"],
    icon: Lock,
    image: img("catalog-private-markets.webp"),
    alt: "Professional with a tablet in a warehouse aisle",
  },
  {
    title: "Disposition Routes Overview",
    body: "The permitted ways surplus can move, and how routes are compared.",
    format: "explainer",
    topics: ["sellers", "partners"],
    icon: Route,
    image: img("catalog-disposition-routes.webp"),
    alt: "Wide warehouse interior with tall racking",
  },
  {
    title: "Partner Network Roles",
    body: "Possible roles in collection, logistics, redistribution and donation.",
    format: "explainer",
    topics: ["partners"],
    icon: Truck,
    image: img("catalog-partner-roles.webp"),
    alt: "Worker at the back of a delivery van",
  },
  {
    title: "Partner Evidence Duties",
    body: "The records a partner is expected to keep and share.",
    format: "checklist",
    topics: ["partners", "trust"],
    icon: FileCheck,
    image: img("catalog-partner-evidence.webp"),
    alt: "Person labelling a box",
  },
  {
    title: "Apparel & Footwear Guidance",
    body: "Editorial guidance for apparel and footwear. Not an availability statement.",
    format: "guide",
    topics: ["categories"],
    icon: Shirt,
    image: img("catalog-apparel.webp"),
    alt: "Shelves of trainers beside a mannequin",
  },
  {
    title: "Food-specific Participation Notes",
    body: "Why food needs separate safety, shelf-life and market approval.",
    format: "guide",
    topics: ["categories"],
    icon: Utensils,
    image: img("catalog-food.webp"),
    alt: "Shopper reading a food label",
  },
  {
    title: "Trust & Safety Controls",
    body: "The controls the platform applies. Controls are not certification.",
    format: "explainer",
    topics: ["trust"],
    icon: ShieldCheck,
    image: img("catalog-trust-safety.webp"),
    alt: "Team checking goods together at a workbench",
  },
  {
    title: "Evidence and Dispute Resolution",
    body: "How records are kept and how holds and disputes are handled.",
    format: "explainer",
    topics: ["trust", "buyers"],
    icon: Scale,
    image: img("catalog-disputes.webp"),
    alt: "Retail staff and a customer among clothing racks",
  },
  {
    title: "Frequently Asked Questions",
    body: "Concise approved answers with links to the controlled source.",
    format: "faq",
    topics: ["categories"],
    icon: HelpCircle,
    image: img("catalog-faq.webp"),
    alt: "Two colleagues at a desk",
  },
];

export const CATALOG_ID = "catalog";
const EVENT = "kc:catalog-filter";

export type CatalogFilter = { topic?: Topic | "all"; format?: Format | "all"; query?: string };

// Ask the catalog to apply a filter, then bring it into view.
export function filterCatalog(filter: CatalogFilter) {
  window.dispatchEvent(new CustomEvent<CatalogFilter>(EVENT, { detail: filter }));
  document.getElementById(CATALOG_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function onCatalogFilter(handler: (f: CatalogFilter) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<CatalogFilter>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
