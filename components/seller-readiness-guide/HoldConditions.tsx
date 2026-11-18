import { CircleCheck, CircleDollarSign, FileText, Scale, Search } from "lucide-react";
import { GuideSection, PhotoCardGrid, srImg, type PhotoCardItem } from "./shared";

const holds: PhotoCardItem[] = [
  {
    icon: Search,
    title: "Unknown title",
    body: "Do not proceed until ownership is clear.",
    image: srImg("hold-unknown-title.webp"),
    alt: "Hands holding a pen over a laptop keyboard",
  },
  {
    icon: FileText,
    title: "Recall or hazard",
    body: "Pause. Seek specialist review.",
    image: srImg("hold-recall.webp"),
    alt: "Two shop workers checking boxes on stockroom shelves",
  },
  {
    icon: CircleCheck,
    title: "Unsafe condition",
    body: "Do not treat the goods as ready.",
    image: srImg("hold-unsafe-condition.webp"),
    alt: "Hands holding a box with a fragile label",
  },
  {
    icon: Scale,
    title: "Prohibited route",
    body: "Do not assume any route is allowed.",
    image: srImg("hold-prohibited-route.webp"),
    alt: "Tanker lorries parked at a truck stop",
  },
  {
    icon: CircleDollarSign,
    title: "Absent rights",
    body: "No brand or contract permission, no route.",
    image: srImg("hold-absent-rights.webp"),
    alt: "Hand opening a folder of confidential documents",
  },
];

export default function HoldConditions() {
  return (
    <GuideSection
      id="hold-conditions"
      num="04"
      label="Stop and hold conditions"
      title="When not to proceed."
      lead='If ownership is disputed, products are recalled or unsafe, rights are unclear, or approvals are missing, pause and seek internal specialist review. Unknown is never "ready".'
    >
      <PhotoCardGrid eyebrow="Hold" items={holds} />
    </GuideSection>
  );
}
