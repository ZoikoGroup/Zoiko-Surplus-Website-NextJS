import { CircleCheck, Clock, Lock, RefreshCw, TriangleAlert } from "lucide-react";
import { GuideSection, PhotoCardGrid, img, type PhotoCardItem } from "./shared";

const outcomes: PhotoCardItem[] = [
  {
    icon: CircleCheck,
    title: "Approved and scoped",
    body: "Access is limited to specific markets and sellers.",
    image: img("card-delivery.webp"),
    alt: "Courier checking a delivery against a clipboard",
  },
  {
    icon: Clock,
    title: "Pending",
    body: "Waiting on a market, category or seller step.",
    image: img("card-warehouse-team.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: Lock,
    title: "Restricted",
    body: "Access is limited, for example by category or market.",
    image: img("card-labelling.webp"),
    alt: "Hands labelling a parcel",
  },
  {
    icon: TriangleAlert,
    title: "Suspended",
    body: "Access is paused while an issue is resolved.",
    image: img("card-review-desk.webp"),
    alt: "Professional working at a laptop in a stockroom",
  },
  {
    icon: RefreshCw,
    title: "Expired or re-reviewed",
    body: "Access may lapse or be checked again as things change.",
    image: img("card-laptop.webp"),
    alt: "Hands typing on a laptop",
  },
];

export default function AccessOutcomes() {
  return (
    <GuideSection
      id="outcomes"
      num="08"
      label="Access after review"
      title="Approval is not permanent or universal."
      lead="Different outcomes and later changes are possible. No review time or outcome is promised."
    >
      <PhotoCardGrid eyebrow="Outcome" items={outcomes} />
    </GuideSection>
  );
}
