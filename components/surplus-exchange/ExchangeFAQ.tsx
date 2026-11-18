import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Can anyone browse Surplus Exchange?",
    a: "No. It is a controlled exchange, not an open storefront. Opportunity details sit behind sign-in and are shown only to buyers a seller has authorized.",
  },
  {
    q: "Does submitting an application make me a verified buyer?",
    a: "No. Applying starts a review. Receipt is not verification or an invitation, and the review may be declined.",
  },
  {
    q: "Can I place a bid immediately?",
    a: "No. Offers and orders exist only where an authorized marketplace and transaction workflow are active and you have permission. It is not an instant bid by default.",
  },
  {
    q: "Are the same opportunities visible to every buyer?",
    a: "No. Visibility depends on seller authorization, buyer attributes, market and category, so different buyers may see different things.",
  },
  {
    q: "Can sellers choose who sees their opportunities?",
    a: "Yes. The seller sets the audience, can invite specific qualified buyers and can withdraw an entitlement. The platform enforces those settings.",
  },
  {
    q: "Is Surplus Exchange operating globally?",
    a: "It is global by architecture but activated market by market. Planned markets carry no availability promise, and access exists only in active markets.",
  },
  {
    q: "Are goods inspected or guaranteed by Zoiko Surplus?",
    a: "Not by default. Verification establishes participation eligibility; it is not a guarantee of product safety, title, quality or transaction outcome.",
  },
];

export default function ExchangeFAQ() {
  return <CategoryFAQ num="20" items={faqs} />;
}
