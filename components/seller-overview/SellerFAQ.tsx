import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Who is Seller Overview for?",
    a: "Organizations with eligible excess, returned, imperfect or second-chance goods that want to understand permitted disposition options before talking to us.",
  },
  {
    q: "Do you take ownership of our stock?",
    a: "No. The platform does not hold your goods or funds by default. Ownership and custody follow the signed contracts with named counterparties.",
  },
  {
    q: "Can we list items publicly?",
    a: "No. Goods are shown only to verified, qualified buyers in private, seller-approved audiences. You decide what is shared and with whom.",
  },
  {
    q: "Can you guarantee a recovery rate?",
    a: "No. Routes are compared on variables such as net recovery, time, fees and transport. No margin, return rate or recovery figure is promised.",
  },
  {
    q: "Is the UK pilot live?",
    a: "Not yet. UK domestic apparel and footwear is a proposed first configuration, not a verified launch. Other markets are opened market by market.",
  },
  {
    q: "Who decides who sees our goods?",
    a: "You do. You approve the permitted buyers, and each buyer must also pass KYB review, hold category rights and have transaction authorization.",
  },
  {
    q: "Where do we start?",
    a: "Read Seller Readiness to see what to prepare, then request an enterprise demo for a human-led discussion.",
  },
];

export default function SellerFAQ() {
  return <CategoryFAQ num="11" items={faqs} />;
}
