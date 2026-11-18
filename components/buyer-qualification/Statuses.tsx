import { CircleCheck, ClipboardList, Clock, FileText, KeyRound, Lock, Search } from "lucide-react";
import { GuideSection, PhotoCardGrid, img, type PhotoCardItem } from "./shared";

// Stage labels are illustrative — production wording must match the real service.
const statuses: PhotoCardItem[] = [
  {
    icon: FileText,
    title: "Submitted",
    body: "We received your application.",
    image: img("card-shelving.webp"),
    alt: "Colleagues organizing boxes on stockroom shelves",
  },
  {
    icon: ClipboardList,
    title: "More information requested",
    body: "A reviewer needs something further.",
    image: img("card-laptop.webp"),
    alt: "Hands typing on a laptop",
  },
  {
    icon: Search,
    title: "Under review",
    body: "Checks are in progress.",
    image: img("card-aisle-tablet.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
  {
    icon: CircleCheck,
    title: "Verified organization",
    body: "Your organization passed verification.",
    image: img("card-business-pair.webp"),
    alt: "Two professionals reviewing a laptop and folder",
  },
  {
    icon: Clock,
    title: "Market access pending",
    body: "Market and seller steps are still open.",
    image: img("card-warehouse-team.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: KeyRound,
    title: "Authorized",
    body: "Scoped access, within current permissions.",
    image: img("card-delivery.webp"),
    alt: "Courier checking a delivery against a clipboard",
  },
  {
    icon: Lock,
    title: "Restricted",
    body: "Access is limited or withdrawn.",
    image: img("card-labelling.webp"),
    alt: "Hands labelling a parcel",
  },
];

export default function Statuses() {
  return (
    <GuideSection
      id="statuses"
      num="04"
      label="Qualification process overview"
      title="Seven illustrative statuses, in order."
      lead="These stage labels are illustrative. Production wording must match the real service. No review time is promised."
    >
      <PhotoCardGrid eyebrow="Status" items={statuses} />
    </GuideSection>
  );
}
