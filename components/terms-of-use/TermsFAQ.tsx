import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Are these the Terms of Use?",
    a: "Not yet. This page sets out where the Terms of Use will appear and what they will cover. No terms text exists yet; each topic shows \"Pending approved copy\" until Legal approves it.",
  },
  {
    q: "Does visiting accept the terms?",
    a: "No. A page visit, scroll, download or locale choice is not acceptance. Real acceptance happens only through an approved flow, not on this page.",
  },
  {
    q: "Do these terms let me trade?",
    a: "No. This page is information only. It is not individual eligibility or permission to trade.",
  },
  {
    q: "Do other agreements apply?",
    a: "They may. Seller agreements, buyer terms and partner agreements are separate. These terms do not replace them, and they are not summarized here.",
  },
  {
    q: "Is this legal advice?",
    a: "No. This page gives no legal advice. For questions about the terms, use the approved routes once Legal publishes them.",
  },
];

export default function TermsFAQ() {
  return <CategoryFAQ num="09" items={faqs} />;
}
