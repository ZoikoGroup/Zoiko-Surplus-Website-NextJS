import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Does an enquiry make us a partner?",
    a: "No. An enquiry only starts a conversation. Partnership needs a review and a signed agreement, and even then work needs a seller-authorized mandate.",
  },
  {
    q: "Will we be given work?",
    a: "No work is guaranteed. Each task needs a seller mandate, and roles depend on local availability, relevant goods and approved agreements.",
  },
  {
    q: "Who owns and insures the goods?",
    a: "Ownership, custody and insurance are set out in the relevant agreements and mandate. Nothing on this page changes who owns or insures goods.",
  },
  {
    q: "Can we handle food or hazardous goods?",
    a: "Only with separate category and local-law approval. Food, batteries, chemicals and other restricted products sit behind their own gates.",
  },
  {
    q: "Is the network live in my market?",
    a: "Availability is activated market by market. This page shows no live provider status, whatever language or region you choose.",
  },
  {
    q: "What evidence is kept?",
    a: "Work is recorded in secure workflows under the relevant agreement. Evidence records what happened; it is never shown on public pages.",
  },
  {
    q: "How long does review take?",
    a: "No review time is promised. Each step in the partner lifecycle is its own decision.",
  },
];

export default function PartnerFAQ() {
  return <CategoryFAQ num="09" items={faqs} />;
}
