import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Does Zoiko guarantee safety?",
    a: "No. Zoiko does not certify safety, authenticity, quality or legal title. Controls reduce risk; they don’t remove it, and safety obligations remain with the accountable parties.",
  },
  {
    q: "What does verification mean?",
    a: "Verification confirms business identity and role eligibility in context — nothing more. It is not a safety, title or quality guarantee.",
  },
  {
    q: "Who is responsible for the goods?",
    a: "The seller owns the goods and the obligation to disclose, qualify and approve routes. The platform governs, matches and records; it doesn’t own, inspect or certify goods.",
  },
  {
    q: "Where does safety screening happen?",
    a: "Safety and policy checks run in the Govern stage, before any matching. Recalled, hazardous or restricted goods are blocked or routed to specialist, licensed handling.",
  },
  {
    q: "How is food handled?",
    a: "Food & Grocery and other regulated categories require separate safety, traceability, shelf-life and local-law approval before any activity, gated independently of every other category.",
  },
  {
    q: "Is anything shown publicly?",
    a: "Public pages explain how controls, roles and stages work. Actual lots, prices, identities, offers and records sit behind authenticated, role-scoped access and are never indexed.",
  },
  {
    q: "How do I report a problem?",
    a: "Raise an issue or claim through a defined channel. It is acknowledged, routed to the right role, reviewed against the records and resolved with a documented outcome.",
  },
  {
    q: "Does Zoiko hold my money?",
    a: "No escrow or custody of funds by default. Authorized payment providers are used where transactions are enabled.",
  },
  {
    q: "Can misuse be acted on?",
    a: "Yes. Suspicious activity is screened, and where misuse is found access can be restricted or removed. Screening reduces risk; no detection is perfect.",
  },
  {
    q: "Is Trust & Safety the same everywhere?",
    a: "It is explained globally, but controls apply only where a market and category are activated. The locale selector sets content only and grants no permission.",
  },
];

export default function TrustFAQ() {
  return <CategoryFAQ num="12" items={faqs} />;
}
