import type { ReactNode } from "react";

// Common category-page building blocks live in components/categories/shared.tsx.
export { hanken, sora, Eyebrow, SectionHeading, CheckItem, Note } from "@/components/categories/shared";

export const img = (name: string) => `/images/apparel-footwear/${name}`;

// Anchor ids used by both the sections and the "On this page" sidebar.
export const tocItems = [
  { id: "definition", label: "Definition" },
  { id: "market-status", label: "Market status" },
  { id: "scope", label: "In / out of scope" },
  { id: "evidence", label: "Evidence" },
  { id: "brand-rights", label: "Brand rights" },
  { id: "condition-grades", label: "Condition grades" },
  { id: "seller-buyer", label: "Seller & buyer" },
  { id: "channels", label: "Channels" },
  { id: "routes", label: "Routes" },
  { id: "safety", label: "Safety" },
  { id: "categories", label: "Categories" },
  { id: "faq", label: "FAQ" },
] as const;

// Wraps each main-column section with consistent vertical spacing and an anchor offset for the sticky header.
export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-28 py-10 md:py-16 ${className}`}>
      {children}
    </section>
  );
}
