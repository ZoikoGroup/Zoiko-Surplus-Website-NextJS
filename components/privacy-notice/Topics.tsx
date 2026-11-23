import { Clock, FileText, Globe, Lock, Scale, Shield, SlidersHorizontal, Users } from "lucide-react";
import { GuideSection, PhotoCardGrid, TopicPills, pnImg, type PhotoCardItem } from "./shared";

const PENDING = "Pending approved copy.";

// The eight topics, in the stable order the notice will follow.
const topics: PhotoCardItem[] = [
  {
    icon: FileText,
    title: "Data categories and sources",
    body: PENDING,
    image: pnImg("topic-data-categories.webp"),
    alt: "Hand on a laptop keyboard with colleagues talking in the background",
  },
  {
    icon: Scale,
    title: "Purposes and grounds",
    body: PENDING,
    image: pnImg("topic-purposes.webp"),
    alt: "Smiling businessman in a suit standing in a warehouse aisle",
  },
  {
    icon: Users,
    title: "Disclosures and recipients",
    body: PENDING,
    image: pnImg("topic-disclosures.webp"),
    alt: "Shop assistant showing a yellow shirt to a customer",
  },
  {
    icon: Globe,
    title: "International processing",
    body: PENDING,
    image: pnImg("topic-international.webp"),
    alt: "Market stall stacked with fresh fruit and vegetables",
  },
  {
    icon: Clock,
    title: "Retention",
    body: PENDING,
    image: pnImg("topic-retention.webp"),
    alt: "Shop assistant handing a purchase to customers at a counter",
  },
  {
    icon: Shield,
    title: "Security",
    body: PENDING,
    image: pnImg("topic-security.webp"),
    alt: "Colleagues stacking their hands together in agreement",
  },
  {
    icon: SlidersHorizontal,
    title: "Cookies and preferences",
    body: PENDING,
    image: pnImg("topic-cookies.webp"),
    alt: "Person typing on a laptop beside a window",
  },
  {
    icon: Lock,
    title: "Rights and choices",
    body: PENDING,
    image: pnImg("topic-rights.webp"),
    alt: "Support staff wearing headsets working at computers",
  },
];

export default function Topics() {
  return (
    <GuideSection
      id="topics"
      num="03"
      label="On-page contents"
      title="What the notice will cover."
      leadClassName="max-w-[760px]"
      lead='Eight topics, in a stable order. Each shows "Pending approved copy". No disclosure is described here.'
    >
      <div className="flex flex-col gap-6">
        <TopicPills topics={topics.map((t) => t.title)} />
        <PhotoCardGrid eyebrow="Topic" items={topics} aspect="aspect-[302/301]" />
      </div>
    </GuideSection>
  );
}
