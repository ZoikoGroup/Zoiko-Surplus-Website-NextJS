import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Is this page a legal agreement?",
    a: "No. This page is an index that points to published legal documents. It is not itself an agreement, and no document text is published here.",
  },
  {
    q: "Does choosing a market change my rights?",
    a: "No. Applicability depends on each document's stated scope and terms. A market, jurisdiction or language filter never sets rights, governing law or permission to trade.",
  },
  {
    q: "Where is the Privacy Notice?",
    a: "It has a slot in the document index above. Its link goes live only once the approved version is published.",
  },
  {
    q: "What do Current and Superseded mean?",
    a: "Current is the version in force, once approved. Superseded is a version replaced by a newer one and kept as a record. Previous versions appear only when approved.",
  },
  {
    q: "Can I rely on this page as legal advice?",
    a: "No. This page only points the way and gives no legal advice. If you are unsure which document applies, use the help routes.",
  },
];

export default function LegalFAQ() {
  return <CategoryFAQ num="07" items={faqs} />;
}
