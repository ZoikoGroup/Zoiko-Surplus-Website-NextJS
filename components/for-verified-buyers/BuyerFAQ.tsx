import CategoryFAQ, { type FAQItem } from "@/components/categories/CategoryFAQ";

// Answers are drafted from this page's own content — confirm wording with the content owner.
// Order fills the left column first, then the right, to match the design.
const faqs: FAQItem[] = [
  {
    q: "Does applying make us a verified buyer?",
    a: "No. Applying only starts a review. Verification is a separate decision, and an application receipt never grants access.",
  },
  {
    q: "Does a seller invitation let us buy anything?",
    a: "No. An invitation is scoped to what the seller chose and can expire or be withdrawn. Each offer or order still needs current legal, contractual and policy permission.",
  },
  {
    q: "Is there a list of approved buyers or sellers?",
    a: "No. Verified, invited or approved organizations are never published on this page.",
  },
  {
    q: "Can we buy food through this?",
    a: "Food sits behind a separate food-safety gate and needs extra market approval. Nothing on this page means food is available.",
  },
  {
    q: "We are verified. Why can we not see a market?",
    a: "Verification covers your organization only. Market, category, seller invitation and your own role are checked separately, and the market may not be active.",
  },
  {
    q: "My application is pending. What now?",
    a: "Wait for the review to finish. Your status is shown only after secure sign-in, and no review time is promised. Never send documents through public forms.",
  },
  {
    q: "My invitation has expired or I lost access.",
    a: "Invitations can end at a set time or be withdrawn by the seller. Sign in through the official route to see your current status, or contact support.",
  },
  {
    q: "Is any pricing or inventory shown?",
    a: "No. This page is educational. It shows no prices, lots, inventory or live status.",
  },
];

export default function BuyerFAQ() {
  return <CategoryFAQ num="10" items={faqs} />;
}
