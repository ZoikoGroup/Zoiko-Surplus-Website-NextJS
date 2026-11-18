import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Are these pathways available to me?",
    a: "Not automatically. A pathway is available only where the seller has authorized it and the market, category and partners all qualify. Nothing on this page confirms a live route.",
  },
  {
    q: "Who performs the work?",
    a: "Separately contracted partners — carriers, recovery providers and licensed redistribution partners. Zoiko coordinates and records; it doesn't operate a fleet.",
  },
  {
    q: "Who approves a route?",
    a: "The seller, through a named authority. Approval is explicit, can be withdrawn at any time, and the decision and reasons are recorded.",
  },
  {
    q: "How is donation handled?",
    a: "Eligible goods go to an approved recipient through a licensed partner, within legal and category rules. No tax, impact or acceptance is implied.",
  },
  {
    q: "How is food handled?",
    a: "Food is gated independently, with its own safety approval. Only donation and recovery are considered, and only where separately approved.",
  },
  {
    q: "What stops a pathway?",
    a: "A recall, safety, title, sanctions or restricted-goods signal holds or stops the route and escalates it to a named accountable role before any movement.",
  },
  {
    q: "Does Zoiko take title or custody?",
    a: "No. Title and custody stay with accountable parties — the seller owns the goods, and contracted partners perform the work.",
  },
];

export default function PathwaysFAQ() {
  return <CategoryFAQ num="11" items={faqs} />;
}
