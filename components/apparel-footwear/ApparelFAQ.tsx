import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Is this category live?",
    a: "No. Apparel & Footwear is a proposed seller-private domestic B2B pilot. It is defined and under review, not launched, and this page does not confirm an active market or available stock.",
  },
  {
    q: "What apparel can be considered?",
    a: "Overstock from cancelled or over-forecast orders, customer returns with documented condition, end-of-line and previous-season ranges, and clearly declared imperfect or B-grade goods — each lot qualified individually on its evidence.",
  },
  {
    q: "Does Zoiko guarantee authenticity?",
    a: "No. Authenticity and resale rights are separate assertions with their own evidence and reviewer status. Verification of identity or documents is not a guarantee of authenticity, legality or safety.",
  },
  {
    q: "Are the condition grades universal?",
    a: "No. Grades are a proposed, seller-declared taxonomy configured for this category and assessed by reviewers. They are not an independent Zoiko inspection and don’t carry the same meaning across categories.",
  },
  {
    q: "Can anyone buy from this page?",
    a: "No. Nothing on this page is available, priced or executable. Only verified business buyers that a seller approves for a private audience may be considered, where a market is active.",
  },
  {
    q: "What’s excluded?",
    a: "Suspected counterfeit or unauthenticated goods, items with unclear legal resale rights, recalled or safety-affected products, and lots with incomplete records or undisclosed condition.",
  },
  {
    q: "Who chooses the resale channel?",
    a: "The seller. Brand-protection rules define permitted channels per audience, restricted channels are excluded automatically, and presentation rules are enforced before any route is offered.",
  },
  {
    q: "Does applying as a buyer grant access?",
    a: "No. A buyer application starts a review. Market and category access depend on eligibility, approvals and local availability, and sellers decide who joins their audiences.",
  },
  {
    q: "What happens to recalled goods?",
    a: "A recall, authenticity or restricted-goods concern stops the lot. It is held, rejected or escalated to a named accountable role before anything proceeds — it never reaches market exposure.",
  },
  {
    q: "How do I get started?",
    a: "Sellers can request an enterprise demo to discuss qualifying stock. Buyers can apply to become a verified buyer where intake is open.",
  },
];

export default function ApparelFAQ() {
  return <CategoryFAQ num="12" items={faqs} />;
}
