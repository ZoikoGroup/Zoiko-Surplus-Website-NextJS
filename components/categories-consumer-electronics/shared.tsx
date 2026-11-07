import type { ReactNode } from "react";

export { hanken, sora, Eyebrow, SectionHeading, CheckItem, Note } from "@/components/categories/shared";

export const img = (name: string) => `/images/categories-consumer-electronics/${name}`;

// Full-width section with the page's standard gutters. "dark" renders the navy band variant.
export function Band({
  id,
  labelledBy,
  tone = "light",
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  tone?: "light" | "dark";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-28 ${tone === "dark" ? "bg-[#0c1f3f] py-16 md:py-24" : "bg-[#fafbfd] py-12 md:py-20"}`}
    >
      <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-24 ${className}`}>{children}</div>
    </section>
  );
}

// Photo used beside text in split sections.
export function SplitPhoto({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#1c2a40] md:flex-1 ${className}`}>
      {children}
    </div>
  );
}
