import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "What is Zoiko Surplus?",
    a: "A governed, asset-light B2B surplus commerce and disposition platform. It provides the governance, matching and evidence layer — it doesn’t own or move the goods.",
  },
  {
    q: "How do the entities relate?",
    a: "Zoiko Surplus is the platform. It is operated by Zoiko Supply Group Inc., the parent legal entity, which is part of the wider Zoiko Group of companies.",
  },
  {
    q: "Does Zoiko Surplus own inventory?",
    a: "No. Goods stay with the accountable parties. The platform has no owned inventory, warehouses or fleets; logistics run through separately contracted partners.",
  },
  {
    q: "Does the platform take title to goods?",
    a: "No. Zoiko Surplus is not a principal. It doesn’t buy, own or sell the goods, or take title or custody of them.",
  },
  {
    q: "Why are some details shown as placeholders?",
    a: "Registrations, legal names and registered offices are published only once verified. Until then they are clearly marked ‹…› and should not be relied on.",
  },
  {
    q: "Is the platform available worldwide?",
    a: "The architecture is global, but category, market and participant access are activated market-by-market, subject to local law, approval and eligibility.",
  },
  {
    q: "Where are the legal terms?",
    a: "Terms, privacy, cookies and legal notices are collected in the legal library. Links resolve once the destinations are published.",
  },
  {
    q: "How do I verify official channels?",
    a: "Official social channels appear on this page as live links only once the account, URL and brand ownership are verified. Treat unverified profiles with caution.",
  },
  {
    q: "How does Company differ from About?",
    a: "About explains the vision, mission and principles behind the platform. This page covers corporate structure, identity facts, governance and where to find authoritative information.",
  },
  {
    q: "How do I contact the company?",
    a: "Use the routes in the contacts and legal library: request an enterprise demo, reach press and media, or consult legal and Trust & Safety resources.",
  },
];

export default function CorporateFAQ() {
  return <CategoryFAQ num="19" items={faqs} />;
}
