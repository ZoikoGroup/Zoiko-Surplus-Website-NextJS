import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Does this page approve our goods?",
    a: "No. This page is educational. It inspects nothing, certifies no grade and grants no eligibility. Each check is decided separately.",
  },
  {
    q: "Is food available?",
    a: "Food sits behind a separate safety gate and needs its own market approval. Nothing on this page means food is available.",
  },
  {
    q: "Is the Great Britain apparel concept live?",
    a: "No. It is a controlled concept, not a verified launch. Markets and categories are activated one at a time.",
  },
  {
    q: "What next?",
    a: "Read the relevant category article. If your goods and market look like a fit, request an enterprise demo for a human-led discussion.",
  },
  {
    q: "Which categories are covered?",
    a: "Five educational families: apparel and footwear, consumer goods, food and grocery, and further industrial and business categories. Coverage is not activation.",
  },
  {
    q: "What if there is an open recall?",
    a: "Goods with an unresolved recall, hazard or restriction do not pass the safety check, and passing other checks does not change that.",
  },
  {
    q: "Should we upload stock details?",
    a: "No. Never submit real manifests, serials, buyer IDs, prices or brand contracts through this page or public forms.",
  },
];

// The Seller Readiness Guide shows the same questions under its own number.
export default function EligibilityFAQ({ num = "07", bg }: { num?: string; bg?: string }) {
  return <CategoryFAQ num={num} items={faqs} bg={bg} />;
}
