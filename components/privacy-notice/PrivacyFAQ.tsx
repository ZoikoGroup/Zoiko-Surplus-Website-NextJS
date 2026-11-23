import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Is this the Privacy Notice?",
    a: "Not yet. This page sets out where the Privacy Notice will appear and what it will cover. No notice text exists yet; each topic shows \"Pending approved copy\" until it is approved.",
  },
  {
    q: "Do I need to sign in to read it?",
    a: "No. No sign-in or consent is needed to read the notice.",
  },
  {
    q: "Can I make a privacy request here?",
    a: "No. This page has no form, upload or case lookup. Privacy requests go to the approved handler, which will be linked here once Legal and Privacy approve it.",
  },
  {
    q: "Where do I manage cookies?",
    a: "In Cookie Preferences, a separate control. The notice explains how information is handled but never records consent itself.",
  },
  {
    q: "Should I send identity documents?",
    a: "No. Never send identity documents through this page or its routes.",
  },
];

export default function PrivacyFAQ() {
  return <CategoryFAQ num="09" items={faqs} />;
}
