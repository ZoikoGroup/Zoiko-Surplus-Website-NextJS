import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Is this category live?",
    a: "No. Consumer Electronics is a conditional public educational category. It explains the model; it does not confirm active stock, pricing or trading. Availability is activated by market, product and legal arrangement.",
  },
  {
    q: "Who is responsible for wiping data?",
    a: "The owner. Sanitization of data-bearing devices is owner-led and evidenced where required — it is never assumed by a buyer or by Zoiko.",
  },
  {
    q: "Are serial numbers or IMEIs shown?",
    a: "No. Serials, IMEIs and user information never appear publicly. The evidence matrix describes what can be recorded, not live identifiers.",
  },
  {
    q: "How are batteries handled?",
    a: "Lithium and other cells are hazard-classified. Packing and transport rules apply, damaged units go to specialist processing, and damaged battery-containing units are blocked from sale routes.",
  },
  {
    q: "What happens with recalled or counterfeit devices?",
    a: "They are hard-stopped and escalated before any exposure, then handled through specialist, licensed processing — never routed to resale.",
  },
  {
    q: "Are untested devices treated as working?",
    a: "No. “Untested” is always marked explicitly and is never assumed to be working. Functional status must be described in evidence.",
  },
  {
    q: "Can anyone buy from this page?",
    a: "No. Nothing here is available, priced or executable. Only verified business buyers able to handle data-bearing and hazard-class items may be considered, where a market is active and a seller approves them.",
  },
  {
    q: "Are warranties included?",
    a: "Warranties are not transferred by default, and Zoiko is not a warranty provider. Any warranty would be a separate arrangement between the parties.",
  },
  {
    q: "What about export rules?",
    a: "Export-control and category compliance are recorded as evidence where applicable. Components and accessories may carry counterfeit, IP and export restrictions.",
  },
  {
    q: "How do I get started?",
    a: "Sellers can request an enterprise demo to discuss qualifying stock. Buyers can apply to become a verified buyer where intake is open.",
  },
];

export default function ElectronicsFAQ() {
  return <CategoryFAQ num="11" items={faqs} />;
}
