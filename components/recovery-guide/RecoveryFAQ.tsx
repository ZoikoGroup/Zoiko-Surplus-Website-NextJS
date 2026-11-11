import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this guide's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "What is surplus recovery?",
    a: "Assessing excess or otherwise non-core goods and selecting an authorized route that balances commercial value, safety, brand obligations, operational costs and defensible records.",
  },
  {
    q: "Does the guide promise a price or return?",
    a: "No. A gross estimate is an early view that can move. The net result depends on fees, handling, logistics, time and market conditions, and no buyer or price is assured.",
  },
  {
    q: "Does donation mean a tax deduction?",
    a: "Not automatically. Donation is evaluated under approved programs; charitable status, tax treatment and partner availability are separate questions for your own advisers.",
  },
  {
    q: "Can buyers see lots on this page?",
    a: "No. This is a public guide with no inventory. Seller-private details stay behind server-side authorization and are shown only to permitted, verified buyers.",
  },
  {
    q: "Is this tax, legal or environmental advice?",
    a: "No. It is general, educational guidance about how the platform is designed to work. Seek professional advice for your circumstances.",
  },
];

export default function RecoveryFAQ() {
  return <CategoryFAQ num="13" items={faqs} />;
}
