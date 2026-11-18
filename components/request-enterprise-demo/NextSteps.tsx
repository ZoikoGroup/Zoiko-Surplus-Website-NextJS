import { CircleCheck, CircleDollarSign, FileText, Scale, Search } from "lucide-react";
import { GuideSection, PhotoCardGrid, redImg, type PhotoCardItem } from "./shared";

const steps: PhotoCardItem[] = [
  {
    icon: Search,
    title: "Receipt",
    body: "You see a generic confirmation, only if the inquiry is really received.",
    image: redImg("step-receipt.webp"),
    alt: "Hand signing a delivery note on a clipboard",
  },
  {
    icon: FileText,
    title: "Review",
    body: "The team reviews it with limited, need-to-know access.",
    image: redImg("step-review.webp"),
    alt: "Warehouse worker checking shelves with a clipboard",
  },
  {
    icon: CircleCheck,
    title: "Clarification",
    body: "They may ask for more broad information.",
    image: redImg("step-clarification.webp"),
    alt: "Two warehouse workers talking over a clipboard",
  },
  {
    icon: Scale,
    title: "Human response",
    body: "A person decides the next step. No response time is promised.",
    image: redImg("step-human-response.webp"),
    alt: "Staff member standing with arms crossed in a sorting room",
  },
  {
    icon: CircleDollarSign,
    title: "No automatic onboarding",
    body: "Nothing is approved, listed or created by submitting.",
    image: redImg("step-no-onboarding.webp"),
    alt: "Hand writing on a clipboard in a warehouse aisle",
  },
];

export default function NextSteps() {
  return (
    <GuideSection
      id="what-happens-next"
      num="07"
      label="What happens next"
      title="Five steps. None is automatic approval."
      lead="No calendar booking or response-time promise is made on this page."
    >
      <PhotoCardGrid eyebrow="Step" items={steps} />
    </GuideSection>
  );
}
