import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order matters: the first three fill the left column, the last two the right.
const faqs: FAQItem[] = [
  {
    q: "Is every stage automated?",
    a: "No. The platform applies rules and keeps records, but approvals, reviews and escalations are decided by named, accountable people — starting with the seller.",
  },
  {
    q: "Is Match an open auction?",
    a: "No. Match reaches only verified, eligible audiences the seller has approved, and disclosure is limited to them. Nothing is listed publicly.",
  },
  {
    q: "Does Optimize promise a higher recovery?",
    a: "No. It compares compliant options side by side so the seller can choose. No recovery rate, uplift or performance figure is promised.",
  },
  {
    q: "Does Zoiko hold the money in Transact?",
    a: "No. Payments run through verified providers on permitted rails, under agreements between permitted parties. Zoiko does not hold payments or act as seller or carrier.",
  },
  {
    q: "Does Resolve guarantee a remedy?",
    a: "No. Disputes, recalls and exceptions follow a governed escalation path and remediation is documented, but no particular remedy is guaranteed.",
  },
];

export default function ModelFAQ() {
  return <CategoryFAQ num="07" items={faqs} />;
}
