import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
const faqs: FAQItem[] = [
  {
    q: "Does Zoiko Surplus ship the goods?",
    a: "No. Zoiko coordinates rules, approvals and records. Contracted external providers do the physical collection, transport and delivery, and Zoiko does not own a fleet or run warehouses.",
  },
  {
    q: "Can I book or track a shipment here?",
    a: "No. This page explains how coordination may work. It does not show live tracking, routes, prices or partners, and it is not a booking system.",
  },
  {
    q: "Is this available in my country?",
    a: "Only where a logistics pathway is enabled. Movement uses approved lanes, per market, and no universal shipping is offered.",
  },
  {
    q: "Is delivery guaranteed?",
    a: "No. Delivery terms depend on the approved transaction. Holds, delays, loss or refusal each follow a defined path, but no particular remedy is promised.",
  },
  {
    q: "Can food be moved?",
    a: "Food has a separate safety gate, and no food route is assumed active.",
  },
];

export default function LogisticsFAQ() {
  return <CategoryFAQ num="14" items={faqs} />;
}
