import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// The design repeats "Does Zoiko own or ship the goods?"; the fifth question replaces that duplicate.
const faqs: FAQItem[] = [
  {
    q: "Is applying as a buyer the same as getting approved?",
    a: "No. Applying begins a review, not an account. Identity, role and eligibility are checked for the categories and markets you ask about, and sellers then approve profiles for specific private markets.",
  },
  {
    q: "Can I trade food through the platform?",
    a: "Not by default. Food & Grocery stays informational until separate safety, shelf-life and local-law approval is in place for a market, independently of every other category.",
  },
  {
    q: "Is a category shown here live in my market?",
    a: "Not automatically. Category guidance is editorial. Availability is confirmed against a separate market registry, market by market, and selecting a language or region grants nothing.",
  },
  {
    q: "Does Zoiko own or ship the goods?",
    a: "No. The seller owns the goods. The platform governs, matches and records; logistics and disposition partners handle movement where a permitted route is used.",
  },
  {
    q: "Are these resources legal advice?",
    a: "No. They are general, public guidance about how the platform is designed to work. Seek your own professional advice for your circumstances.",
  },
];

export default function KnowledgeFAQ() {
  return <CategoryFAQ num="10" items={faqs} />;
}
