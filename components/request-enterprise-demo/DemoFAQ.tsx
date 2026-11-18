import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Who should request a demo?",
    a: "Organizations with excess, returned or other surplus inventory that want to discuss seller-governed disposition pathways for their market and category.",
  },
  {
    q: "Does submitting create an account or approve us?",
    a: "No. Submitting is not an offer, approval or account creation. Nothing is approved, listed or created by sending an inquiry.",
  },
  {
    q: "What data should we avoid sending?",
    a: "Prices, SKU lists, quantities, customer lists, contracts, IDs, tax or payment details. Share only broad business information.",
  },
  {
    q: "Can we book a meeting on this page?",
    a: "No. There is no calendar booking here. A person reviews each inquiry and decides the next step.",
  },
  {
    q: "Will you keep our information confidential?",
    a: "Inquiries are seen only by a triage team with need-to-know access, and are kept and deleted under the approved privacy notice, once published.",
  },
  {
    q: "Is my market available?",
    a: "Availability is activated market by market. UK domestic apparel and footwear is a proposed initial configuration, not active trading.",
  },
  {
    q: "How fast will you reply?",
    a: "No response time is promised. A person decides the next step after review.",
  },
];

export default function DemoFAQ() {
  return <CategoryFAQ num="09" items={faqs} />;
}
