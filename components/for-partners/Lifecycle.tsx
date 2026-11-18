import { CircleCheck, CircleDollarSign, FileText, Scale, Search } from "lucide-react";
import { GuideSection, PhotoCardGrid, fpImg, type PhotoCardItem } from "./shared";

const steps: PhotoCardItem[] = [
  {
    icon: Search,
    title: "Understand",
    body: "Read how the network works.",
    image: fpImg("lifecycle-understand.webp"),
    alt: "Hands holding a pen over a laptop keyboard",
  },
  {
    icon: FileText,
    title: "Enquire",
    body: "Tell us about your organization.",
    image: fpImg("lifecycle-enquire.webp"),
    alt: "Three business people talking in a warehouse full of boxes",
  },
  {
    icon: CircleCheck,
    title: "Review",
    body: "Capability and fit are reviewed.",
    image: fpImg("lifecycle-review.webp"),
    alt: "Team checking stock on warehouse shelving",
  },
  {
    icon: Scale,
    title: "Contract",
    body: "Terms and duties are agreed.",
    image: fpImg("lifecycle-contract.webp"),
    alt: "Three colleagues discussing a clipboard in a warehouse aisle",
  },
  {
    icon: CircleDollarSign,
    title: "Mandate",
    body: "A seller authorizes a task.",
    image: fpImg("lifecycle-mandate.webp"),
    alt: "Worker writing on a parcel at a desk",
  },
  {
    icon: CircleDollarSign,
    title: "Execute and record",
    body: "The work is done and evidenced.",
    image: fpImg("lifecycle-execute.webp"),
    alt: "Two workers reviewing goods together",
  },
];

export default function Lifecycle() {
  return (
    <GuideSection
      id="lifecycle"
      num="04"
      label="Six-step partner lifecycle"
      title="From understanding to execution."
      lead="Each step is its own decision. No review time is promised."
    >
      <PhotoCardGrid eyebrow="Step" items={steps} />
    </GuideSection>
  );
}
