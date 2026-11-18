import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Does verification let me see every market?",
    a: "No. Verification covers the organization only. Market and category permissions, seller invitations and your own role are checked separately for every protected action.",
  },
  {
    q: "Why can a colleague see something I cannot?",
    a: "Rights belong to the person, not the company. A colleague may hold a different role, or be included in a seller audience you are not part of.",
  },
  {
    q: "Can sellers see who applied?",
    a: "This page does not publish applicants or invited organizations. What a seller can see is governed by the platform's privacy controls and the applicable agreement.",
  },
  {
    q: "Is applying the same as being approved?",
    a: "No. An application starts a review by people. Applying does not guarantee approval, and an application receipt never grants access.",
  },
  {
    q: "Does choosing my region unlock a market?",
    a: "No. A locale or region choice never grants access. Market and category status comes only from approved data.",
  },
];

export default function AccessFAQ() {
  return <CategoryFAQ num="09" items={faqs} />;
}
