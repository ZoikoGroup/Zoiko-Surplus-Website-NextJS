import { ClipboardList, FileText, Globe, ListChecks } from "lucide-react";
import { GuideSection, PhotoCardGrid, redImg, type PhotoCardItem } from "./shared";

const topics: PhotoCardItem[] = [
  {
    icon: ClipboardList,
    title: "Inventory challenge",
    body: "Excess stock, returns or other surplus, in general terms.",
    image: redImg("topic-inventory.webp"),
    alt: "Hands holding a pen over a laptop keyboard",
  },
  {
    icon: ListChecks,
    title: "Permitted categories",
    body: "Which categories could be in scope for a discussion.",
    image: redImg("topic-categories.webp"),
    alt: "Warehouse worker in a safety vest handling a parcel",
  },
  {
    icon: FileText,
    title: "Commercial model",
    body: "How terms and roles could work under contract.",
    image: redImg("topic-commercial.webp"),
    alt: "Team checking paperwork among stacked boxes in a warehouse",
  },
  {
    icon: Globe,
    title: "Market eligibility",
    body: "Whether your market is open or configured later.",
    image: redImg("topic-market.webp"),
    alt: "Labelled cartons stacked on warehouse racking",
  },
];

export default function Topics() {
  return (
    <GuideSection id="topics" num="02" label="What we can discuss" title="Four topics for a first conversation.">
      <PhotoCardGrid eyebrow="Topic" items={topics} />
    </GuideSection>
  );
}
