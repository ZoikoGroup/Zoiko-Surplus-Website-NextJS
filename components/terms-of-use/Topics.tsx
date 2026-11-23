import { Building2, FileText, Globe, Shield, Truck, Users } from "lucide-react";
import { GuideSection, PhotoCardGrid, TopicPills, touImg, type PhotoCardItem } from "./shared";

// All twelve topics, in the stable order the terms will follow.
const topicNames = [
  "Eligibility and authority",
  "Account and access",
  "Permitted use",
  "Platform and marketplace roles",
  "Commercial arrangements",
  "Brand and intellectual property",
  "Suspension and termination",
  "Governing law and disputes",
  "Third-party services",
  "Disclaimers and liability",
  "Changes to terms",
  "Contact and reporting",
];

const PENDING = "Pending approved copy.";

// The design shows photo cards for the first eight topics.
const cards: PhotoCardItem[] = [
  {
    icon: Globe,
    title: "Eligibility and authority",
    body: PENDING,
    image: touImg("topic-eligibility.webp"),
    alt: "Hand on a laptop keyboard with colleagues talking in the background",
  },
  {
    icon: Building2,
    title: "Account and access",
    body: PENDING,
    image: touImg("topic-account.webp"),
    alt: "Smiling businessman in a suit standing in a warehouse aisle",
  },
  {
    icon: Users,
    title: "Permitted use",
    body: PENDING,
    image: touImg("topic-permitted-use.webp"),
    alt: "Shop assistant showing a yellow shirt to two customers",
  },
  {
    icon: Globe,
    title: "Platform & marketplace roles",
    body: PENDING,
    image: touImg("topic-platform-roles.webp"),
    alt: "Market stall stacked with fresh fruit and vegetables",
  },
  {
    icon: Truck,
    title: "Commercial arrangements",
    body: PENDING,
    image: touImg("topic-commercial.webp"),
    alt: "Shop assistant handing a purchase to customers at a counter",
  },
  {
    icon: Shield,
    title: "Brand & intellectual property",
    body: PENDING,
    image: touImg("topic-brand-ip.webp"),
    alt: "Colleagues stacking their hands together in agreement",
  },
  {
    icon: Users,
    title: "Suspension & termination",
    body: PENDING,
    image: touImg("topic-suspension.webp"),
    alt: "Two smiling businessmen shaking hands",
  },
  {
    icon: FileText,
    title: "Governing law & disputes",
    body: PENDING,
    image: touImg("topic-governing-law.webp"),
    alt: "Support staff wearing headsets working at computers",
  },
];

export default function Topics() {
  return (
    <GuideSection
      id="topics"
      num="03"
      label="On-page contents"
      title="What the terms will cover."
      leadClassName="max-w-[800px]"
      lead='Twelve topics, in a stable order. Each shows "Pending approved copy". No term or obligation is described here.'
    >
      <div className="flex flex-col gap-6">
        <TopicPills topics={topicNames} />
        <PhotoCardGrid eyebrow="Topic" items={cards} aspect="aspect-[302/301]" />
      </div>
    </GuideSection>
  );
}
