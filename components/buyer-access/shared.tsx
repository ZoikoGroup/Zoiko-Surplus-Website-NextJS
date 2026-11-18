import { Building2, Globe, Lock, User, type LucideIcon } from "lucide-react";

// Section, card and tile blocks are shared with the Buyer Qualification Guide.
export * from "@/components/buyer-qualification/shared";

export const baImg = (name: string) => `/images/buyer-access/${name}`;

export type Gate = {
  code: string;
  icon: LucideIcon;
  title: string;
  /** Short line in the hero summary card. */
  short: string;
  question: string;
  note: string;
  image: string;
  alt: string;
};

// The four access checks. Shown in the hero summary card and in section 01.
export const gates: Gate[] = [
  {
    code: "G1",
    icon: Building2,
    title: "Organization",
    short: "Business verification",
    question: "Has the business and its representatives completed the relevant checks?",
    note: "Handled by a verification workflow outside this page. Status can be pending, failed or expired.",
    image: baImg("gate-organization.webp"),
    alt: "Two colleagues reviewing a laptop in a warehouse aisle",
  },
  {
    code: "G2",
    icon: Globe,
    title: "Market and category",
    short: "What is permitted",
    question: "Are the region, corridor, category and buyer activity currently permitted?",
    note: "Reviewed for each action against market activation and product safety policy.",
    image: baImg("gate-market-category.webp"),
    alt: "Wide warehouse with tall racking",
  },
  {
    code: "G3",
    icon: Lock,
    title: "Seller audience",
    short: "Seller-approved invitation",
    question: "Did a seller include this buyer in an audience or invitation?",
    note: "Scoped to a seller's market, revocable and time-bound.",
    image: baImg("gate-seller-audience.webp"),
    alt: "Two colleagues planning at a desk with parcels and a laptop",
  },
  {
    code: "G4",
    icon: User,
    title: "Individual user",
    short: "Role and action right",
    question: "Does this signed-in person hold the right role and action right?",
    note: "Viewing, offering and purchasing are governed separately on the server.",
    image: baImg("gate-individual-user.webp"),
    alt: "Professional working at a laptop in a warehouse aisle",
  },
];
