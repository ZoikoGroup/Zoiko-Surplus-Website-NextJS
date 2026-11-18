import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this guide's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Does applying make me a verified buyer?",
    a: "No. An application starts a review. Verification is a separate decision made by an approved reviewer applying configured KYB controls.",
  },
  {
    q: "Is approval guaranteed?",
    a: "No. Different outcomes are possible, and no review time or outcome is promised.",
  },
  {
    q: "If I am verified, can I see every seller's stock?",
    a: "No. Sellers decide who sees their opportunities. Access can depend on seller rules, an invitation, your role and the corridor, and can be withdrawn.",
  },
  {
    q: "Can my access change later?",
    a: "Yes. Access can be restricted, suspended, expire or be re-reviewed as circumstances change.",
  },
  {
    q: "What if the application page is not available?",
    a: "You are told plainly and shown another published channel. Contact support or ask for an accessible alternative.",
  },
  {
    q: "Can I upload documents on this page?",
    a: "No. This public page collects nothing. Do not send IDs, documents or sensitive data through any public form.",
  },
  {
    q: "Is food available to buy?",
    a: "Not through this guide. Food and regulated goods sit behind separate safety gates, and no live food access is implied.",
  },
  {
    q: "Is there a minimum purchase or turnover?",
    a: "This guide makes no turnover or minimum purchase claims. You may be asked to describe your buying categories and purpose.",
  },
  {
    q: "Does choosing my country or language change my eligibility?",
    a: "No. Language or region choice does not activate eligibility. Market and category status comes only from approved data.",
  },
];

export default function QualificationFAQ() {
  return <CategoryFAQ num="14" items={faqs} />;
}
