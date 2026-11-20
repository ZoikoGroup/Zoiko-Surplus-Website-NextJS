import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Is this for emergencies?",
    a: "No. If anyone is in immediate danger, contact local emergency services. This page and its form are not monitored for emergencies.",
  },
  {
    q: "Is this a whistleblowing scheme?",
    a: "No. This page is not a whistleblowing scheme. It promises no anonymity and implies no legal protection; it only guides you to the approved route for your concern.",
  },
  {
    q: "Where do safety or brand concerns go?",
    a: "Product safety, counterfeit, suspicious activity and access misuse go to the specialist trust and safety route, Report an Issue. Do not post details publicly.",
  },
  {
    q: "Where do privacy concerns go?",
    a: "Privacy and personal information concerns follow the route set out in the Privacy Notice, once it is published.",
  },
  {
    q: "Does receipt mean you will act?",
    a: "No. Receipt only confirms that a concern arrived. It is not an investigation, a finding of liability, corrective action or a resolution.",
  },
  {
    q: "Can I upload evidence?",
    a: "No. This page accepts no attachments. If further details are needed, they may be requested through an approved secure channel.",
  },
];

export default function ConcernFAQ() {
  return <CategoryFAQ num="08" items={faqs} />;
}
